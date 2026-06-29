// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBatchTaskUdfLineagesResponseBodyDataLineageGroupListInputLineageListColumnList extends $dara.Model {
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * varchar
   */
  dataType?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * xx
   */
  description?: string;
  /**
   * @remarks
   * The column ID.
   * 
   * @example
   * c011
   */
  id?: string;
  /**
   * @remarks
   * The column name.
   * 
   * @example
   * c011
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the column is a partition key.
   */
  partitionKey?: boolean;
  /**
   * @remarks
   * Indicates whether the column is a primary key.
   */
  primaryKey?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      partitionKey: 'PartitionKey',
      primaryKey: 'PrimaryKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      partitionKey: 'boolean',
      primaryKey: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskUdfLineagesResponseBodyDataLineageGroupListInputLineageList extends $dara.Model {
  /**
   * @remarks
   * The business unit ID.
   * 
   * @example
   * 103111231
   */
  bizUnitId?: string;
  /**
   * @remarks
   * The business unit name.
   * 
   * @example
   * xx测试
   */
  bizUnitName?: string;
  /**
   * @remarks
   * The list of lineage columns.
   */
  columnList?: GetBatchTaskUdfLineagesResponseBodyDataLineageGroupListInputLineageListColumnList[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test xx
   */
  description?: string;
  /**
   * @remarks
   * The display name of the table.
   * 
   * @example
   * t_input
   */
  displayName?: string;
  /**
   * @remarks
   * The environment. Valid values: prod and dev.
   * 
   * @example
   * dev
   */
  env?: string;
  /**
   * @remarks
   * Indicates whether the full table is selected.
   */
  fullTable?: boolean;
  /**
   * @remarks
   * The globally unique ID.
   * 
   * @example
   * Guid_101121
   */
  guid?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * t_input
   */
  name?: string;
  /**
   * @remarks
   * The owner of the table.
   * 
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @remarks
   * The owner of the table.
   * 
   * @example
   * 20112101
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The project to which the table belongs.
   * 
   * @example
   * 131211211
   */
  projectId?: string;
  /**
   * @remarks
   * The project to which the table belongs.
   * 
   * @example
   * prj_test
   */
  projectName?: string;
  /**
   * @remarks
   * The table subtype. For example, dim indicates a dimension logical table.
   * 
   * @example
   * dim
   */
  subType?: string;
  static names(): { [key: string]: string } {
    return {
      bizUnitId: 'BizUnitId',
      bizUnitName: 'BizUnitName',
      columnList: 'ColumnList',
      description: 'Description',
      displayName: 'DisplayName',
      env: 'Env',
      fullTable: 'FullTable',
      guid: 'Guid',
      name: 'Name',
      ownerName: 'OwnerName',
      ownerUserId: 'OwnerUserId',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitId: 'string',
      bizUnitName: 'string',
      columnList: { 'type': 'array', 'itemType': GetBatchTaskUdfLineagesResponseBodyDataLineageGroupListInputLineageListColumnList },
      description: 'string',
      displayName: 'string',
      env: 'string',
      fullTable: 'boolean',
      guid: 'string',
      name: 'string',
      ownerName: 'string',
      ownerUserId: 'string',
      projectId: 'string',
      projectName: 'string',
      subType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.columnList)) {
      $dara.Model.validateArray(this.columnList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskUdfLineagesResponseBodyDataLineageGroupListOutputLineageListColumnList extends $dara.Model {
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * varchar
   */
  dataType?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * xx
   */
  description?: string;
  /**
   * @remarks
   * The column ID.
   * 
   * @example
   * c011
   */
  id?: string;
  /**
   * @remarks
   * The column name.
   * 
   * @example
   * c011
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the column is a partition key.
   */
  partitionKey?: boolean;
  /**
   * @remarks
   * Indicates whether the column is a primary key.
   */
  primaryKey?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      partitionKey: 'PartitionKey',
      primaryKey: 'PrimaryKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      partitionKey: 'boolean',
      primaryKey: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskUdfLineagesResponseBodyDataLineageGroupListOutputLineageList extends $dara.Model {
  /**
   * @remarks
   * The business unit ID.
   * 
   * @example
   * 103111231
   */
  bizUnitId?: string;
  /**
   * @remarks
   * The business unit name.
   * 
   * @example
   * xx测试
   */
  bizUnitName?: string;
  /**
   * @remarks
   * The list of lineage columns.
   */
  columnList?: GetBatchTaskUdfLineagesResponseBodyDataLineageGroupListOutputLineageListColumnList[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test xx
   */
  description?: string;
  /**
   * @remarks
   * The display name of the table.
   * 
   * @example
   * t_input
   */
  displayName?: string;
  /**
   * @remarks
   * The environment. Valid values: prod and dev.
   * 
   * @example
   * dev
   */
  env?: string;
  /**
   * @remarks
   * Indicates whether the full table is selected.
   */
  fullTable?: boolean;
  /**
   * @remarks
   * The globally unique ID.
   * 
   * @example
   * Guid_101121
   */
  guid?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * t_input
   */
  name?: string;
  /**
   * @remarks
   * The owner of the table.
   * 
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @remarks
   * The owner of the table.
   * 
   * @example
   * 20112101
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The project to which the table belongs.
   * 
   * @example
   * 131211211
   */
  projectId?: string;
  /**
   * @remarks
   * The project to which the table belongs.
   * 
   * @example
   * prj_test
   */
  projectName?: string;
  /**
   * @remarks
   * The table subtype. For example, dim indicates a dimension logical table.
   * 
   * @example
   * dim
   */
  subType?: string;
  static names(): { [key: string]: string } {
    return {
      bizUnitId: 'BizUnitId',
      bizUnitName: 'BizUnitName',
      columnList: 'ColumnList',
      description: 'Description',
      displayName: 'DisplayName',
      env: 'Env',
      fullTable: 'FullTable',
      guid: 'Guid',
      name: 'Name',
      ownerName: 'OwnerName',
      ownerUserId: 'OwnerUserId',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitId: 'string',
      bizUnitName: 'string',
      columnList: { 'type': 'array', 'itemType': GetBatchTaskUdfLineagesResponseBodyDataLineageGroupListOutputLineageListColumnList },
      description: 'string',
      displayName: 'string',
      env: 'string',
      fullTable: 'boolean',
      guid: 'string',
      name: 'string',
      ownerName: 'string',
      ownerUserId: 'string',
      projectId: 'string',
      projectName: 'string',
      subType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.columnList)) {
      $dara.Model.validateArray(this.columnList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskUdfLineagesResponseBodyDataLineageGroupList extends $dara.Model {
  /**
   * @remarks
   * The collection of input lineage tables.
   */
  inputLineageList?: GetBatchTaskUdfLineagesResponseBodyDataLineageGroupListInputLineageList[];
  /**
   * @remarks
   * The collection of output lineage tables.
   */
  outputLineageList?: GetBatchTaskUdfLineagesResponseBodyDataLineageGroupListOutputLineageList[];
  static names(): { [key: string]: string } {
    return {
      inputLineageList: 'InputLineageList',
      outputLineageList: 'OutputLineageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputLineageList: { 'type': 'array', 'itemType': GetBatchTaskUdfLineagesResponseBodyDataLineageGroupListInputLineageList },
      outputLineageList: { 'type': 'array', 'itemType': GetBatchTaskUdfLineagesResponseBodyDataLineageGroupListOutputLineageList },
    };
  }

  validate() {
    if(Array.isArray(this.inputLineageList)) {
      $dara.Model.validateArray(this.inputLineageList);
    }
    if(Array.isArray(this.outputLineageList)) {
      $dara.Model.validateArray(this.outputLineageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskUdfLineagesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of lineage groups.
   */
  lineageGroupList?: GetBatchTaskUdfLineagesResponseBodyDataLineageGroupList[];
  static names(): { [key: string]: string } {
    return {
      lineageGroupList: 'LineageGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineageGroupList: { 'type': 'array', 'itemType': GetBatchTaskUdfLineagesResponseBodyDataLineageGroupList },
    };
  }

  validate() {
    if(Array.isArray(this.lineageGroupList)) {
      $dara.Model.validateArray(this.lineageGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskUdfLineagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. The value OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetBatchTaskUdfLineagesResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetBatchTaskUdfLineagesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

