// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableLineagesRequestFilterQuery extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query downstream lineage. Default value: false.
   */
  needDownstream?: boolean;
  /**
   * @remarks
   * Specifies whether to return tables that do not exist in the asset list. Default value: false.
   */
  needNotExistObject?: boolean;
  /**
   * @remarks
   * Specifies whether to query upstream lineage. Default value: false.
   */
  needUpstream?: boolean;
  /**
   * @remarks
   * The environment to which the task belongs. This parameter is used for filtering. Valid values: dev and prod.
   * 
   * @example
   * dev
   */
  nodeEnv?: string;
  /**
   * @remarks
   * The list of task IDs used for filtering.
   */
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

export class GetTableLineagesRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions.
   */
  filterQuery?: GetTableLineagesRequestFilterQuery;
  /**
   * @remarks
   * Tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The GUID of the table, which is the unique identifier of each asset.
   * 
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
      filterQuery: GetTableLineagesRequestFilterQuery,
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

