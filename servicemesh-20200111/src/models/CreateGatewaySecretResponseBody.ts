// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SecretCreateRecordValue } from "./SecretCreateRecordValue";


export class CreateGatewaySecretResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 31d3a0f0-07ed-4f6e-9004-1804498c****
   */
  requestId?: string;
  /**
   * @remarks
   * The record of creating the secret.
   */
  secretCreateRecord?: { [key: string]: SecretCreateRecordValue };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      secretCreateRecord: 'SecretCreateRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      secretCreateRecord: { 'type': 'map', 'keyType': 'string', 'valueType': SecretCreateRecordValue },
    };
  }

  validate() {
    if(this.secretCreateRecord) {
      $dara.Model.validateMap(this.secretCreateRecord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

