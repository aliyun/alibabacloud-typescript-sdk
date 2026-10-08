// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableResponseBodyDataInstructions extends $dara.Model {
  /**
   * @example
   * <p>示例内容</p>
   */
  content?: string;
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * 30011211
   */
  ownerId?: string;
  /**
   * @example
   * 张三
   */
  ownerNickName?: string;
  /**
   * @example
   * 使用指南
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      ownerId: 'OwnerId',
      ownerNickName: 'OwnerNickName',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      ownerId: 'string',
      ownerNickName: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponseBodyDataSimpleNodeInfosBizUnit extends $dara.Model {
  /**
   * @example
   * 测试板块
   */
  bizUnitDisplayName?: string;
  /**
   * @example
   * 2011
   */
  bizUnitId?: string;
  /**
   * @example
   * LD_test01
   */
  bizUnitName?: string;
  static names(): { [key: string]: string } {
    return {
      bizUnitDisplayName: 'BizUnitDisplayName',
      bizUnitId: 'BizUnitId',
      bizUnitName: 'BizUnitName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitDisplayName: 'string',
      bizUnitId: 'string',
      bizUnitName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponseBodyDataSimpleNodeInfosOwners extends $dara.Model {
  /**
   * @example
   * 张三
   */
  displayName?: string;
  /**
   * @example
   * 12345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponseBodyDataSimpleNodeInfosProject extends $dara.Model {
  /**
   * @example
   * 测试项目
   */
  projectDisplayName?: string;
  /**
   * @example
   * 1011
   */
  projectId?: string;
  /**
   * @example
   * testPrj
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      projectDisplayName: 'ProjectDisplayName',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectDisplayName: 'string',
      projectId: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponseBodyDataSimpleNodeInfos extends $dara.Model {
  bizUnit?: GetTableResponseBodyDataSimpleNodeInfosBizUnit;
  /**
   * @example
   * DEV
   */
  env?: string;
  /**
   * @example
   * n_7443xxxx
   */
  nodeId?: string;
  /**
   * @example
   * 2345
   */
  nodeName?: string;
  /**
   * @example
   * NORMAL
   */
  nodeScheduleType?: string;
  owners?: GetTableResponseBodyDataSimpleNodeInfosOwners[];
  project?: GetTableResponseBodyDataSimpleNodeInfosProject;
  /**
   * @example
   * DLINK
   */
  subBizType?: string;
  static names(): { [key: string]: string } {
    return {
      bizUnit: 'BizUnit',
      env: 'Env',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeScheduleType: 'NodeScheduleType',
      owners: 'Owners',
      project: 'Project',
      subBizType: 'SubBizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnit: GetTableResponseBodyDataSimpleNodeInfosBizUnit,
      env: 'string',
      nodeId: 'string',
      nodeName: 'string',
      nodeScheduleType: 'string',
      owners: { 'type': 'array', 'itemType': GetTableResponseBodyDataSimpleNodeInfosOwners },
      project: GetTableResponseBodyDataSimpleNodeInfosProject,
      subBizType: 'string',
    };
  }

  validate() {
    if(this.bizUnit && typeof (this.bizUnit as any).validate === 'function') {
      (this.bizUnit as any).validate();
    }
    if(Array.isArray(this.owners)) {
      $dara.Model.validateArray(this.owners);
    }
    if(this.project && typeof (this.project as any).validate === 'function') {
      (this.project as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponseBodyDataStreamTableConfig extends $dara.Model {
  /**
   * @example
   * k1
   */
  key?: string;
  /**
   * @example
   * v1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponseBodyData extends $dara.Model {
  assetTags?: string[];
  /**
   * @example
   * 2011
   */
  bizUnitId?: number;
  /**
   * @example
   * LD_test01
   */
  bizUnitName?: string;
  /**
   * @example
   * test
   */
  comment?: string;
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * 30011211
   */
  creator?: string;
  /**
   * @example
   * 211
   */
  dataDomainId?: number;
  /**
   * @example
   * 课程域
   */
  dataDomainName?: string;
  /**
   * @example
   * 3301
   */
  dataSourceId?: number;
  /**
   * @example
   * 学生
   */
  displayName?: string;
  /**
   * @example
   * dev
   */
  env?: string;
  /**
   * @example
   * 2
   */
  fileId?: string;
  /**
   * @example
   * dp_ds_table.300023201.7311626611751680256.load_test.abc
   */
  guid?: string;
  instructions?: GetTableResponseBodyDataInstructions[];
  isBasicMode?: boolean;
  isPartitionTable?: boolean;
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  lastDdlTime?: string;
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  lastDmlTime?: string;
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  lastQueryTime?: string;
  /**
   * @example
   * 30
   */
  lifeCycle?: number;
  /**
   * @example
   * t_test01
   */
  name?: string;
  nodeIds?: string[];
  /**
   * @example
   * 30011211
   */
  owner?: string;
  /**
   * @example
   * 1
   */
  parentModelId?: string;
  /**
   * @example
   * 1011
   */
  projectId?: number;
  /**
   * @example
   * testPrj
   */
  projectName?: string;
  /**
   * @example
   * 1
   */
  securityLevel?: number;
  /**
   * @example
   * 高
   */
  securityLevelAbbreviation?: string;
  /**
   * @example
   * 高级
   */
  securityLevelName?: string;
  simpleNodeInfos?: GetTableResponseBodyDataSimpleNodeInfos[];
  /**
   * @example
   * HIVE
   */
  storageType?: string;
  streamTableConfig?: GetTableResponseBodyDataStreamTableConfig[];
  /**
   * @example
   * 10241024
   */
  tableSizeInBytes?: number;
  /**
   * @example
   * 22
   */
  visitCount30d?: number;
  static names(): { [key: string]: string } {
    return {
      assetTags: 'AssetTags',
      bizUnitId: 'BizUnitId',
      bizUnitName: 'BizUnitName',
      comment: 'Comment',
      createTime: 'CreateTime',
      creator: 'Creator',
      dataDomainId: 'DataDomainId',
      dataDomainName: 'DataDomainName',
      dataSourceId: 'DataSourceId',
      displayName: 'DisplayName',
      env: 'Env',
      fileId: 'FileId',
      guid: 'Guid',
      instructions: 'Instructions',
      isBasicMode: 'IsBasicMode',
      isPartitionTable: 'IsPartitionTable',
      lastDdlTime: 'LastDdlTime',
      lastDmlTime: 'LastDmlTime',
      lastQueryTime: 'LastQueryTime',
      lifeCycle: 'LifeCycle',
      name: 'Name',
      nodeIds: 'NodeIds',
      owner: 'Owner',
      parentModelId: 'ParentModelId',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      securityLevel: 'SecurityLevel',
      securityLevelAbbreviation: 'SecurityLevelAbbreviation',
      securityLevelName: 'SecurityLevelName',
      simpleNodeInfos: 'SimpleNodeInfos',
      storageType: 'StorageType',
      streamTableConfig: 'StreamTableConfig',
      tableSizeInBytes: 'TableSizeInBytes',
      visitCount30d: 'VisitCount30d',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetTags: { 'type': 'array', 'itemType': 'string' },
      bizUnitId: 'number',
      bizUnitName: 'string',
      comment: 'string',
      createTime: 'string',
      creator: 'string',
      dataDomainId: 'number',
      dataDomainName: 'string',
      dataSourceId: 'number',
      displayName: 'string',
      env: 'string',
      fileId: 'string',
      guid: 'string',
      instructions: { 'type': 'array', 'itemType': GetTableResponseBodyDataInstructions },
      isBasicMode: 'boolean',
      isPartitionTable: 'boolean',
      lastDdlTime: 'string',
      lastDmlTime: 'string',
      lastQueryTime: 'string',
      lifeCycle: 'number',
      name: 'string',
      nodeIds: { 'type': 'array', 'itemType': 'string' },
      owner: 'string',
      parentModelId: 'string',
      projectId: 'number',
      projectName: 'string',
      securityLevel: 'number',
      securityLevelAbbreviation: 'string',
      securityLevelName: 'string',
      simpleNodeInfos: { 'type': 'array', 'itemType': GetTableResponseBodyDataSimpleNodeInfos },
      storageType: 'string',
      streamTableConfig: { 'type': 'array', 'itemType': GetTableResponseBodyDataStreamTableConfig },
      tableSizeInBytes: 'number',
      visitCount30d: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.assetTags)) {
      $dara.Model.validateArray(this.assetTags);
    }
    if(Array.isArray(this.instructions)) {
      $dara.Model.validateArray(this.instructions);
    }
    if(Array.isArray(this.nodeIds)) {
      $dara.Model.validateArray(this.nodeIds);
    }
    if(Array.isArray(this.simpleNodeInfos)) {
      $dara.Model.validateArray(this.simpleNodeInfos);
    }
    if(Array.isArray(this.streamTableConfig)) {
      $dara.Model.validateArray(this.streamTableConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetTableResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * internal error
   */
  message?: string;
  /**
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
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
      data: GetTableResponseBodyData,
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

