// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodeDownStreamRequestListQueryFilterList extends $dara.Model {
  /**
   * @example
   * false
   */
  exclude?: boolean;
  /**
   * @example
   * PROJECT
   */
  key?: string;
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
   * @example
   * 112
   */
  fieldIdList?: string[];
  /**
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
   * @example
   * 1
   */
  downStreamDepth?: number;
  filterList?: ListNodeDownStreamRequestListQueryFilterList[];
  /**
   * @remarks
   * This parameter is required.
   */
  nodeIdList?: ListNodeDownStreamRequestListQueryNodeIdList[];
  /**
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
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  listQuery?: ListNodeDownStreamRequestListQuery;
  /**
   * @remarks
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

