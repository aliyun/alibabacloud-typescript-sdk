// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableResponseBodyDataInstructions extends $dara.Model {
  /**
   * @remarks
   * The content in rich text format.
   * 
   * @example
   * <p>Sample content</p>
   */
  content?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * 30011211
   */
  ownerId?: string;
  /**
   * @remarks
   * The nickname of the creator.
   * 
   * @example
   * John Doe
   */
  ownerNickName?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * User guide
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
   * @remarks
   * The Chinese name of the business unit.
   * 
   * @example
   * 测试板块
   */
  bizUnitDisplayName?: string;
  /**
   * @remarks
   * The ID of the business unit.
   * 
   * @example
   * 2011
   */
  bizUnitId?: string;
  /**
   * @remarks
   * The name of the business unit.
   * 
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
   * @remarks
   * The display name of the user.
   * 
   * @example
   * John Doe
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
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
   * @remarks
   * The Chinese name of the project.
   * 
   * @example
   * 测试项目
   */
  projectDisplayName?: string;
  /**
   * @remarks
   * The ID of the project.
   * 
   * @example
   * 1011
   */
  projectId?: string;
  /**
   * @remarks
   * The name of the project.
   * 
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
  /**
   * @remarks
   * The business unit to which the node belongs.
   */
  bizUnit?: GetTableResponseBodyDataSimpleNodeInfosBizUnit;
  /**
   * @remarks
   * The environment. Valid values: DEV and PROD.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * The ID of the physical node.
   * 
   * @example
   * n_7443xxxx
   */
  nodeId?: string;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * 2345
   */
  nodeName?: string;
  /**
   * @remarks
   * The scheduling type. Valid values: NORMAL (periodic scheduling) and MANUAL (manual scheduling).
   * 
   * @example
   * NORMAL
   */
  nodeScheduleType?: string;
  /**
   * @remarks
   * The O&M owners.
   */
  owners?: GetTableResponseBodyDataSimpleNodeInfosOwners[];
  /**
   * @remarks
   * The project to which the node belongs.
   */
  project?: GetTableResponseBodyDataSimpleNodeInfosProject;
  /**
   * @remarks
   * The node type. Valid values: DLINK (offline integration) and PYTHON37 (Python compute node).
   * 
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
   * @remarks
   * The configuration item.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The value of the configuration item.
   * 
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
  /**
   * @remarks
   * The asset inventory tags.
   */
  assetTags?: string[];
  /**
   * @remarks
   * The ID of the business unit.
   * 
   * @example
   * 2011
   */
  bizUnitId?: number;
  /**
   * @remarks
   * The name of the business unit.
   * 
   * @example
   * LD_test01
   */
  bizUnitName?: string;
  /**
   * @remarks
   * The comment of the table.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * 30011211
   */
  creator?: string;
  /**
   * @remarks
   * The ID of the data domain.
   * 
   * @example
   * 211
   */
  dataDomainId?: number;
  /**
   * @remarks
   * The name of the subject domain.
   * 
   * @example
   * Course domain
   */
  dataDomainName?: string;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * @example
   * 3301
   */
  dataSourceId?: number;
  /**
   * @remarks
   * The display name of the table.
   * 
   * @example
   * Student
   */
  displayName?: string;
  /**
   * @remarks
   * The environment to which the table belongs. Valid values: dev and prod.
   * 
   * @example
   * dev
   */
  env?: string;
  /**
   * @remarks
   * The ID of the file, which is used to navigate to the ODM model.
   * 
   * @example
   * 2
   */
  fileId?: string;
  /**
   * @remarks
   * The GUID of the table.
   * 
   * @example
   * dp_ds_table.300023201.7311626611751680256.load_test.abc
   */
  guid?: string;
  /**
   * @remarks
   * The list of usage instructions.
   */
  instructions?: GetTableResponseBodyDataInstructions[];
  /**
   * @remarks
   * Indicates whether the project or business unit to which the table belongs is in Basic mode.
   */
  isBasicMode?: boolean;
  /**
   * @remarks
   * Indicates whether the table is a partitioned table.
   */
  isPartitionTable?: boolean;
  /**
   * @remarks
   * The time when the DDL of the table was last modified.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  lastDdlTime?: string;
  /**
   * @remarks
   * The time when the table data was last updated.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  lastDmlTime?: string;
  /**
   * @remarks
   * The time when the data was last queried.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  lastQueryTime?: string;
  /**
   * @remarks
   * The lifecycle of the table, in days.
   * 
   * @example
   * 30
   */
  lifeCycle?: number;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * t_test01
   */
  name?: string;
  /**
   * @remarks
   * The list of associated node IDs.
   */
  nodeIds?: string[];
  /**
   * @remarks
   * The user ID of the table owner in Dataphin. This parameter may be empty if the owner is not bound.
   * 
   * @example
   * 30011211
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the parent model, which is used to navigate to the ODM model.
   * 
   * @example
   * 1
   */
  parentModelId?: string;
  /**
   * @remarks
   * The ID of the logical project.
   * 
   * @example
   * 1011
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the logical project.
   * 
   * @example
   * testPrj
   */
  projectName?: string;
  /**
   * @remarks
   * The security classification.
   * 
   * @example
   * 1
   */
  securityLevel?: number;
  /**
   * @remarks
   * The abbreviation of the security classification name.
   * 
   * @example
   * H
   */
  securityLevelAbbreviation?: string;
  /**
   * @remarks
   * The security classification name.
   * 
   * @example
   * High
   */
  securityLevelName?: string;
  /**
   * @remarks
   * The list of output node information.
   */
  simpleNodeInfos?: GetTableResponseBodyDataSimpleNodeInfos[];
  /**
   * @remarks
   * The storage type. Valid values: HIVE and MAX_COMPUTE.
   * 
   * @example
   * HIVE
   */
  storageType?: string;
  /**
   * @remarks
   * The dynamic properties of the real-time metatable class.
   */
  streamTableConfig?: GetTableResponseBodyDataStreamTableConfig[];
  /**
   * @remarks
   * The total storage size of the table, in bytes.
   * 
   * @example
   * 10241024
   */
  tableSizeInBytes?: number;
  /**
   * @remarks
   * The number of visits in the last 30 days.
   * 
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
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetTableResponseBodyData;
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
   * The backend exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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

