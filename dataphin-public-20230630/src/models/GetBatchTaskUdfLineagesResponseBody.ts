// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBatchTaskUdfLineagesResponseBodyDataLineageGroupListInputLineageListColumnList extends $dara.Model {
  /**
   * @example
   * varchar
   */
  dataType?: string;
  /**
   * @example
   * xx
   */
  description?: string;
  /**
   * @example
   * c011
   */
  id?: string;
  /**
   * @example
   * c011
   */
  name?: string;
  partitionKey?: boolean;
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
   * @example
   * 103111231
   */
  bizUnitId?: string;
  /**
   * @example
   * xx测试
   */
  bizUnitName?: string;
  columnList?: GetBatchTaskUdfLineagesResponseBodyDataLineageGroupListInputLineageListColumnList[];
  /**
   * @example
   * test xx
   */
  description?: string;
  /**
   * @example
   * t_input
   */
  displayName?: string;
  /**
   * @example
   * dev
   */
  env?: string;
  fullTable?: boolean;
  /**
   * @example
   * Guid_101121
   */
  guid?: string;
  /**
   * @example
   * t_input
   */
  name?: string;
  /**
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @example
   * 20112101
   */
  ownerUserId?: string;
  /**
   * @example
   * 131211211
   */
  projectId?: string;
  /**
   * @example
   * prj_test
   */
  projectName?: string;
  /**
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
   * @example
   * varchar
   */
  dataType?: string;
  /**
   * @example
   * xx
   */
  description?: string;
  /**
   * @example
   * c011
   */
  id?: string;
  /**
   * @example
   * c011
   */
  name?: string;
  partitionKey?: boolean;
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
   * @example
   * 103111231
   */
  bizUnitId?: string;
  /**
   * @example
   * xx测试
   */
  bizUnitName?: string;
  columnList?: GetBatchTaskUdfLineagesResponseBodyDataLineageGroupListOutputLineageListColumnList[];
  /**
   * @example
   * test xx
   */
  description?: string;
  /**
   * @example
   * t_input
   */
  displayName?: string;
  /**
   * @example
   * dev
   */
  env?: string;
  fullTable?: boolean;
  /**
   * @example
   * Guid_101121
   */
  guid?: string;
  /**
   * @example
   * t_input
   */
  name?: string;
  /**
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @example
   * 20112101
   */
  ownerUserId?: string;
  /**
   * @example
   * 131211211
   */
  projectId?: string;
  /**
   * @example
   * prj_test
   */
  projectName?: string;
  /**
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
  inputLineageList?: GetBatchTaskUdfLineagesResponseBodyDataLineageGroupListInputLineageList[];
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
   * @example
   * OK
   */
  code?: string;
  data?: GetBatchTaskUdfLineagesResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
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

