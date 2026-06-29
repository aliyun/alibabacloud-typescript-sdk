// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableColumnLineagesRequestFilterQuery extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query downstream lineage. Default value: true.
   */
  needDownstream?: boolean;
  /**
   * @remarks
   * Specifies whether to return tables that do not exist in the asset inventory. Default value: false.
   */
  needNotExistObject?: boolean;
  /**
   * @remarks
   * Specifies whether to query upstream lineage. Default value: true.
   */
  needUpstream?: boolean;
  /**
   * @remarks
   * The environment of the nodes to query. Valid values: dev and prod.
   * 
   * @example
   * dev
   */
  nodeEnv?: string;
  /**
   * @remarks
   * The list of node IDs to filter.
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

export class GetTableColumnLineagesRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions.
   */
  filterQuery?: GetTableColumnLineagesRequestFilterQuery;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The GUID of the table, which is the unique identifier of the asset.
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

