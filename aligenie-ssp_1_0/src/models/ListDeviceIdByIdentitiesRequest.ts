// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeviceIdByIdentitiesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 125****0946
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  identityIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MAC
   */
  identityType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Mm*****XnZ8
   */
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      identityIds: 'IdentityIds',
      identityType: 'IdentityType',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      identityIds: { 'type': 'array', 'itemType': 'string' },
      identityType: 'string',
      productKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.identityIds)) {
      $dara.Model.validateArray(this.identityIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

