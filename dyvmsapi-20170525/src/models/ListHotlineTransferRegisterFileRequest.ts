// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotlineTransferRegisterFileRequest extends $dara.Model {
  /**
   * @remarks
   * The China 400 number.
   * 
   * This parameter is required.
   * 
   * @example
   * 400****
   */
  hotlineNumber?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The qualification ID. You can call the [GetHotlineQualificationByOrder](https://help.aliyun.com/document_detail/393548.html) operation to obtain the qualification ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000****
   */
  qualificationId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      hotlineNumber: 'HotlineNumber',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      qualificationId: 'QualificationId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotlineNumber: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      qualificationId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

