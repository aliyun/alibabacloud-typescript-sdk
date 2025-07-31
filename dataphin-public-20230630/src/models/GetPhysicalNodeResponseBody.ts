// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPhysicalNodeResponseBodyNodeInfoCreator extends $dara.Model {
  /**
   * @example
   * 101312
   */
  id?: string;
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
   * @example
   * 101312
   */
  id?: string;
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
   * @example
   * 101312
   */
  id?: string;
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
   * @example
   * 102132
   */
  id?: string;
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
   * @example
   * 1717343597000
   */
  createTime?: number;
  creator?: GetPhysicalNodeResponseBodyNodeInfoCreator;
  /**
   * @example
   * 0 0 10 * * *
   */
  cronExpression?: string;
  /**
   * @example
   * 123456789
   */
  dataSourceId?: number;
  /**
   * @example
   * null
   */
  dataSourceSchema?: string;
  description?: string;
  /**
   * @example
   * DATA_PROCESS
   */
  from?: string;
  /**
   * @example
   * n_232132
   */
  id?: string;
  /**
   * @example
   * 1717343597000
   */
  lastModifiedTime?: number;
  modifier?: GetPhysicalNodeResponseBodyNodeInfoModifier;
  name?: string;
  /**
   * @example
   * SHELL
   */
  operatorType?: string;
  outputNameList?: string[];
  owner?: GetPhysicalNodeResponseBodyNodeInfoOwner;
  /**
   * @example
   * MIDDLE
   */
  priority?: string;
  projectInfo?: GetPhysicalNodeResponseBodyNodeInfoProjectInfo;
  /**
   * @example
   * DAILY
   */
  scheduleType?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
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
  nodeInfo?: GetPhysicalNodeResponseBodyNodeInfo;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
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

