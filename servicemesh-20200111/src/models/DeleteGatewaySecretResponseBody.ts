// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SecretDeleteRecordValue } from "./SecretDeleteRecordValue";


export class DeleteGatewaySecretResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BD65C0AD-D3C6-48D3-8D93-38D2015C****
   */
  requestId?: string;
  /**
   * @remarks
   * The records of deleting the secret in all clusters.
   */
  secretDeleteRecord?: { [key: string]: SecretDeleteRecordValue };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      secretDeleteRecord: 'SecretDeleteRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      secretDeleteRecord: { 'type': 'map', 'keyType': 'string', 'valueType': SecretDeleteRecordValue },
    };
  }

  validate() {
    if(this.secretDeleteRecord) {
      $dara.Model.validateMap(this.secretDeleteRecord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

