// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRelationListRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The states of the relationships between the management account and its members. The valid values of this parameter are the enumeration members of the RelationshipStatusEnum data type. If you do not specify this parameter, valid relationship states are queried by default.
   * 
   * @example
   * RELATED
   */
  statusList?: string[];
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * 1990699401005016
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      statusList: 'StatusList',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      statusList: { 'type': 'array', 'itemType': 'string' },
      userId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

