// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ServiceConfig extends $dara.Model {
  codeServerAuth?: string;
  codeServerPassword?: string;
  jupyterServerAuth?: string;
  jupyterServerPassword?: string;
  static names(): { [key: string]: string } {
    return {
      codeServerAuth: 'CodeServerAuth',
      codeServerPassword: 'CodeServerPassword',
      jupyterServerAuth: 'JupyterServerAuth',
      jupyterServerPassword: 'JupyterServerPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeServerAuth: 'string',
      codeServerPassword: 'string',
      jupyterServerAuth: 'string',
      jupyterServerPassword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

