// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTemplateByParamRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated. It is retained for historical compatibility.
   * 
   * @example
   * Abandoned, historical reasons for compatibility
   */
  fromType?: number;
  /**
   * @remarks
   * The keyword of the template name. By default, a paged query is performed for all templates.
   * 
   * @example
   * test
   */
  keyWord?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. The default value is 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is deprecated. It is retained for historical compatibility.
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

