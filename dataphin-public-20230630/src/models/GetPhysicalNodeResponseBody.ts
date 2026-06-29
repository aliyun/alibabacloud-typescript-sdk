// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPhysicalNodeResponseBodyNodeInfoCreator extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 101312
   */
  id?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * xx测试
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalNodeResponseBodyNodeInfoModifier extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 101312
   */
  id?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * xx测试
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalNodeResponseBodyNodeInfoOwner extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 101312
   */
  id?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * xx测试
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalNodeResponseBodyNodeInfoProjectInfo extends $dara.Model {
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 102132
   */
  id?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * xx测试
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalNodeResponseBodyNodeInfo extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1717343597000
   */
  createTime?: number;
  /**
   * @remarks
   * The node creator.
   */
  creator?: GetPhysicalNodeResponseBodyNodeInfoCreator;
  /**
   * @remarks
   * The cron expression used to calculate the scheduling time.
   * 
   * @example
   * 0 0 10 * * *
   */
  cronExpression?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * 123456789
   */
  dataSourceId?: number;
  /**
   * @remarks
   * The data source schema. This parameter takes effect only for data source types that require a schema, such as Oracle. If set to "default", the value is null.
   * 
   * @example
   * null
   */
  dataSourceSchema?: string;
  /**
   * @remarks
   * The node description.
   * 
   * @example
   * xx测试
   */
  description?: string;
  /**
   * @remarks
   * The node source. Valid values:
   * - DATA_PROCESS: code development.
   * - BLACK_BOX: modeling development.
   * - PIPELINE: pipeline.
   * 
   * @example
   * DATA_PROCESS
   */
  from?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * n_232132
   */
  id?: string;
  /**
   * @remarks
   * The time of the last modification.
   * 
   * @example
   * 1717343597000
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * The user who last modified the node.
   */
  modifier?: GetPhysicalNodeResponseBodyNodeInfoModifier;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * 节点名称
   */
  name?: string;
  /**
   * @remarks
   * The node subtype. Valid values:
   * - MAX_COMPUTE_SQL
   * - HIVE_SQL
   * - SHELL
   * - PYTHON
   * - ONE_SERVICE_SQL
   * - DATABASE_SQL and others.
   * 
   * @example
   * SHELL
   */
  operatorType?: string;
  /**
   * @remarks
   * The list of output names.
   */
  outputNameList?: string[];
  /**
   * @remarks
   * The node owner.
   */
  owner?: GetPhysicalNodeResponseBodyNodeInfoOwner;
  /**
   * @remarks
   * The scheduling priority. Valid values:
   * 
   * - HIGHEST
   * - HIGH
   * - MIDDLE
   * - LOW
   * - LOWEST.
   * 
   * @example
   * MIDDLE
   */
  priority?: string;
  /**
   * @remarks
   * The project to which the node belongs.
   */
  projectInfo?: GetPhysicalNodeResponseBodyNodeInfoProjectInfo;
  /**
   * @remarks
   * The scheduling cycle type. Valid values:
   * - MINUTELY
   * - HOURLY
   * - DAILY
   * - WEEKLY
   * - MONTHLY
   * - QUARTERLY.
   * 
   * @example
   * DAILY
   */
  scheduleType?: string;
  /**
   * @remarks
   * The scheduling status.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The trigger configuration, which is used to implement field-level dependencies on logical tables.
   * 
   * @example
   * {"expression":"any_success"}
   */
  triggerConfig?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      cronExpression: 'CronExpression',
      dataSourceId: 'DataSourceId',
      dataSourceSchema: 'DataSourceSchema',
      description: 'Description',
      from: 'From',
      id: 'Id',
      lastModifiedTime: 'LastModifiedTime',
      modifier: 'Modifier',
      name: 'Name',
      operatorType: 'OperatorType',
      outputNameList: 'OutputNameList',
      owner: 'Owner',
      priority: 'Priority',
      projectInfo: 'ProjectInfo',
      scheduleType: 'ScheduleType',
      status: 'Status',
      triggerConfig: 'TriggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      creator: GetPhysicalNodeResponseBodyNodeInfoCreator,
      cronExpression: 'string',
      dataSourceId: 'number',
      dataSourceSchema: 'string',
      description: 'string',
      from: 'string',
      id: 'string',
      lastModifiedTime: 'number',
      modifier: GetPhysicalNodeResponseBodyNodeInfoModifier,
      name: 'string',
      operatorType: 'string',
      outputNameList: { 'type': 'array', 'itemType': 'string' },
      owner: GetPhysicalNodeResponseBodyNodeInfoOwner,
      priority: 'string',
      projectInfo: GetPhysicalNodeResponseBodyNodeInfoProjectInfo,
      scheduleType: 'string',
      status: 'string',
      triggerConfig: 'string',
    };
  }

  validate() {
    if(this.creator && typeof (this.creator as any).validate === 'function') {
      (this.creator as any).validate();
    }
    if(this.modifier && typeof (this.modifier as any).validate === 'function') {
      (this.modifier as any).validate();
    }
    if(Array.isArray(this.outputNameList)) {
      $dara.Model.validateArray(this.outputNameList);
    }
    if(this.owner && typeof (this.owner as any).validate === 'function') {
      (this.owner as any).validate();
    }
    if(this.projectInfo && typeof (this.projectInfo as any).validate === 'function') {
      (this.projectInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
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
   * The node details.
   */
  nodeInfo?: GetPhysicalNodeResponseBodyNodeInfo;
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
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      nodeInfo: 'NodeInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      nodeInfo: GetPhysicalNodeResponseBodyNodeInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.nodeInfo && typeof (this.nodeInfo as any).validate === 'function') {
      (this.nodeInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

