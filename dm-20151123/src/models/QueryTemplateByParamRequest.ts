// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTemplateByParamRequest extends $dara.Model {
  /**
   * @remarks
   * Deprecated. Retained for backward compatibility.
   * 
   * @example
   * Abandoned, historical reasons for compatibility
   */
  fromType?: number;
  /**
   * @remarks
   * The keyword of the template name. By default, a paging query is performed on all templates.
   * 
   * @example
   * test
   */
  keyWord?: string;
  ownerId?: number;
  /**
   * @remarks
   * The current page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Deprecated. Retained for backward compatibility.
   * 
   * @example
   * Abandoned, historical reasons for compatibility
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      fromType: 'FromType',
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
      fromType: 'number',
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

