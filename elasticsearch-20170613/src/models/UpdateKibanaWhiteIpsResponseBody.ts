// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateKibanaWhiteIpsResponseBodyResult } from "./UpdateKibanaWhiteIpsResponseBodyResult";


export class UpdateKibanaWhiteIpsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the Elasticsearch cluster.
   * 
   * @example
   * E5EF11F1-DBAE-4020-AC24-DFA6C4345CAE
   */
  requestId?: string;
  /**
   * @remarks
   * The private IP address whitelists for access to the Kibana console of the cluster.
   */
  result?: UpdateKibanaWhiteIpsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateKibanaWhiteIpsResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

