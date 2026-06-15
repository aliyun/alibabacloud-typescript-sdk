// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryReceiverByParamRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword to search for recipient lists. If omitted, all recipient lists are returned.
   * 
   * @example
   * mesh-notification
   */
  keyWord?: string;
  ownerId?: number;
  /**
   * @remarks
   * This deprecated field is kept for backward compatibility. You can omit this parameter.
   * 
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The page size. Default value: 100.
   * 
   * Omitting this parameter returns all results. However, because the PageNo parameter is deprecated, the effect of PageSize on pagination is limited.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This deprecated field is kept for backward compatibility. You can omit this parameter.
   * 
   * The list status. Valid values:
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

