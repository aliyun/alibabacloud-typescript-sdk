// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableColumnLineagesRequestFilterQuery extends $dara.Model {
  needDownstream?: boolean;
  needNotExistObject?: boolean;
  needUpstream?: boolean;
  /**
   * @example
   * dev
   */
  nodeEnv?: string;
  nodeIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      needDownstream: 'NeedDownstream',
      needNotExistObject: 'NeedNotExistObject',
      needUpstream: 'NeedUpstream',
      nodeEnv: 'NodeEnv',
      nodeIdList: 'NodeIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needDownstream: 'boolean',
      needNotExistObject: 'boolean',
      needUpstream: 'boolean',
      nodeEnv: 'string',
      nodeIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.nodeIdList)) {
      $dara.Model.validateArray(this.nodeIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableColumnLineagesRequest extends $dara.Model {
  filterQuery?: GetTableColumnLineagesRequestFilterQuery;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1121
   */
  tableGuid?: string;
  static names(): { [key: string]: string } {
    return {
      filterQuery: 'FilterQuery',
      opTenantId: 'OpTenantId',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterQuery: GetTableColumnLineagesRequestFilterQuery,
      opTenantId: 'number',
      tableGuid: 'string',
    };
  }

  validate() {
    if(this.filterQuery && typeof (this.filterQuery as any).validate === 'function') {
      (this.filterQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

