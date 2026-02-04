// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportTaskNumberDatasRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * JSON
   */
  dataType?: string;
  /**
   * @example
   * 1
   */
  encryptionType?: number;
  /**
   * @example
   * 123dsdfsdfsdf.xlsx
   */
  ossFileName?: string;
  ownerId?: number;
  phoneNumberList?: { [key: string]: any }[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12131213132123*****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      encryptionType: 'EncryptionType',
      ossFileName: 'OssFileName',
      ownerId: 'OwnerId',
      phoneNumberList: 'PhoneNumberList',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      encryptionType: 'number',
      ossFileName: 'string',
      ownerId: 'number',
      phoneNumberList: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.phoneNumberList)) {
      $dara.Model.validateArray(this.phoneNumberList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

