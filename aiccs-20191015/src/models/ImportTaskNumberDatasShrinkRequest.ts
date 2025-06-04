// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportTaskNumberDatasShrinkRequest extends $dara.Model {
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
   * 123dsdfsdfsdf.xlsx
   */
  ossFileName?: string;
  ownerId?: number;
  phoneNumberListShrink?: string;
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

