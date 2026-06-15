// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The AppKey value.
   * 
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * The device, account, or alias. Query one ClientKey at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * e2ba19de97604f55b165576****
   */
  clientKey?: string;
  /**
   * @remarks
   * The type of the ClientKey.
   * 
   * This parameter is required.
   * 
   * @example
   * DEVICE
   */
  keyType?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      clientKey: 'ClientKey',
      keyType: 'KeyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      clientKey: 'string',
      keyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

