// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartK8sAppPrecheckResponseBody } from "./StartK8sAppPrecheckResponseBody";


export class StartK8sAppPrecheckResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartK8sAppPrecheckResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartK8sAppPrecheckResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

