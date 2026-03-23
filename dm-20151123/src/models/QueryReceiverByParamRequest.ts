// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryReceiverByParamRequest extends $dara.Model {
  /**
   * @remarks
   * Search keyword. Default value: all information.
   * 
   * @example
   * mesh-notification
   */
  keyWord?: string;
  ownerId?: number;
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * List status. Valid values:
   * 
   * - 0: uploading
   * 
   * - 1: upload complete
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      keyWord: 'KeyWord',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWord: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

