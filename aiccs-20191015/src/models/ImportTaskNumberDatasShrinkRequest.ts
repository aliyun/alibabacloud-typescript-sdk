// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportTaskNumberDatasShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The data type. Valid values:
   * 
   * - EXCEL
   * 
   * - JSON
   * 
   * 
   *   >Notice: 
   * 
   *   API calls currently support only the JSON data type.
   * 
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
   * @remarks
   * The OSS file path. This parameter is optional.
   * 
   * > Importing data by specifying an OSS file path is not available because API calls currently support only the JSON data type.
   * 
   * @example
   * 123dsdfsdfsdf.xlsx
   */
  ossFileName?: string;
  ownerId?: number;
  /**
   * @remarks
   * If `DataType` is set to `JSON`, you must use this parameter to upload the data. You can import up to 1,000 records per request.
   */
  phoneNumberListShrink?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the call task.
   * 
   * This parameter is required.
   * 
   * @example
   * 119181071278******
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      encryptionType: 'EncryptionType',
      ossFileName: 'OssFileName',
      ownerId: 'OwnerId',
      phoneNumberListShrink: 'PhoneNumberList',
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
      phoneNumberListShrink: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

