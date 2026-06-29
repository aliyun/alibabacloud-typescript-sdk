// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodeDownStreamRequestListQueryFilterList extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to exclude the matched results. Default value: false.
   * 
   * @example
   * false
   */
  exclude?: boolean;
  /**
   * @remarks
   * The filter key. Valid values:
   * - PROJECT: project
   * - PHYSICAL_NODE_ID: physical node ID
   * - LOGICAL_TABLE_NODE_ID: logical table ID.
   * 
   * @example
   * PROJECT
   */
  key?: string;
  /**
   * @remarks
   * The list of filter values.
   */
  valueList?: string[];
  static names(): { [key: string]: string } {
    return {
      exclude: 'Exclude',
      key: 'Key',
      valueList: 'ValueList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exclude: 'boolean',
      key: 'string',
      valueList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.valueList)) {
      $dara.Model.validateArray(this.valueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDownStreamRequestListQueryNodeIdList extends $dara.Model {
  /**
   * @remarks
   * The list of field IDs. This parameter can be specified when the node ID is a logical table node ID. If this parameter is not specified, all fields in the table are used by default.
   * 
   * @example
   * 112
   */
  fieldIdList?: string[];
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * n_23431
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      fieldIdList: 'FieldIdList',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldIdList: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldIdList)) {
      $dara.Model.validateArray(this.fieldIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDownStreamRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The depth. Default value: 3.
   * 
   * @example
   * 1
   */
  downStreamDepth?: number;
  /**
   * @remarks
   * The filters. You can include or exclude results based on projects or nodes. Default value: empty.
   */
  filterList?: ListNodeDownStreamRequestListQueryFilterList[];
  /**
   * @remarks
   * The list of nodes.
   * 
   * This parameter is required.
   */
  nodeIdList?: ListNodeDownStreamRequestListQueryNodeIdList[];
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 123011
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      downStreamDepth: 'DownStreamDepth',
      filterList: 'FilterList',
      nodeIdList: 'NodeIdList',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downStreamDepth: 'number',
      filterList: { 'type': 'array', 'itemType': ListNodeDownStreamRequestListQueryFilterList },
      nodeIdList: { 'type': 'array', 'itemType': ListNodeDownStreamRequestListQueryNodeIdList },
      projectId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.filterList)) {
      $dara.Model.validateArray(this.filterList);
    }
    if(Array.isArray(this.nodeIdList)) {
      $dara.Model.validateArray(this.nodeIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDownStreamRequest extends $dara.Model {
  /**
   * @remarks
   * The environment identifier. Valid values:
   * - DEV: development environment. 
   * - PROD (default): production environment.
   * 
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * The request for querying node downstream.
   * 
   * This parameter is required.
   */
  listQuery?: ListNodeDownStreamRequestListQuery;
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
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      listQuery: ListNodeDownStreamRequestListQuery,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.listQuery && typeof (this.listQuery as any).validate === 'function') {
      (this.listQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

