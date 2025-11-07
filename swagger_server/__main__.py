#!/usr/bin/env python3

import connexion
from swagger_ui_bundle import swagger_ui_path

from swagger_server import encoder


def main():
<<<<<<< ours
    app = connexion.App(__name__, specification_dir='./swagger/', swagger_ui=True)
=======
    app = connexion.App(
        __name__,
        specification_dir="./swagger/",
        options={
            "swagger_ui": True,
            "swagger_path": str(swagger_ui_path),
        },
    )
>>>>>>> theirs
    app.app.json_encoder = encoder.JSONEncoder
    app.add_api(
        'swagger.yaml',
        arguments={'title': 'UnderSound Content API'},
        pythonic_params=True,
        base_path="/v1",
    )
    app.run(port=8080)


if __name__ == '__main__':
    main()
