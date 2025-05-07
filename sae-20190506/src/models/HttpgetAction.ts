// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HTTPHeader } from "./Httpheader";


export class HTTPGetAction extends $dara.Model {
  host?: string;
  httpHeaders?: HTTPHeader[];
  path?: string;
  port?: number;
  scheme?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      httpHeaders: 'HttpHeaders',
      path: 'Path',
      port: 'Port',
      scheme: 'Scheme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      httpHeaders: { 'type': 'array', 'itemType': HTTPHeader },
      path: 'string',
      port: 'number',
      scheme: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.httpHeaders)) {
      $dara.Model.validateArray(this.httpHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

