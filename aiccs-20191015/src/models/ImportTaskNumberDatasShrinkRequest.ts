// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportTaskNumberDatasShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The data type. Valid values:
   * - EXCEL
   * - JSON
   * >Notice: API calls currently support only the JSON data type.</notice>
   * 
   * This parameter is required.
   * 
   * @example
   * JSON
   */
  dataType?: string;
  /**
   * @remarks
   * The encryption method. Valid values: 0: no encryption. 1: MD5. 2: SHA256. 3: SM3.
   * 
   * @example
   * 1
   */
  encryptionType?: number;
  /**
   * @remarks
   * The Object Storage Service (OSS) file path. This parameter is optional.
   * > API calls do not currently support the Excel data type. Therefore, you cannot specify an OSS file path.
   * 
   * @example
   * 123dsdfsdfsdf.xlsx
   */
  ossFileName?: string;
  ownerId?: number;
  /**
   * @remarks
   * If DataType is set to JSON, you must use this field to upload data. You can upload a maximum of 1,000 entries at a time.
   */
  phoneNumberListShrink?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The task ID.
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

