// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPhysicalNodeByOutputNameResponseBodyNodeInfoCreator extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1311131
   */
  id?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * xx test
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

export class GetPhysicalNodeByOutputNameResponseBodyNodeInfoModifier extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1311131
   */
  id?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * xx test
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

export class GetPhysicalNodeByOutputNameResponseBodyNodeInfoOwner extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1311131
   */
  id?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * xx test
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

export class GetPhysicalNodeByOutputNameResponseBodyNodeInfoProjectInfo extends $dara.Model {
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 1324211
   */
  id?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * xx test
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

export class GetPhysicalNodeByOutputNameResponseBodyNodeInfo extends $dara.Model {
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1717343597000
   */
  createTime?: number;
  /**
   * @remarks
   * The creator of the node.
   */
  creator?: GetPhysicalNodeByOutputNameResponseBodyNodeInfoCreator;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * xx test
   */
  description?: string;
  /**
   * @remarks
   * The node source. Valid values:
   * - DATA_PROCESS: code development
   * - BLACK_BOX: black box
   * - ONE_ID: extraction
   * - PIPELINE: pipeline
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
   * n_2321
   */
  id?: string;
  /**
   * @remarks
   * The update time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1717343597000
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * The modifier of the node.
   */
  modifier?: GetPhysicalNodeByOutputNameResponseBodyNodeInfoModifier;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * xx test
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
   * - DATABASE_SQL
   * 
   * @example
   * SHELL
   */
  operatorType?: string;
  /**
   * @remarks
   * The owner of the node.
   */
  owner?: GetPhysicalNodeByOutputNameResponseBodyNodeInfoOwner;
  /**
   * @remarks
   * The priority. Valid values:
   * - HIGHEST
   * - HIGH
   * - MIDDLE
   * - LOW
   * - LOWEST
   * 
   * @example
   * MIDDLE
   */
  priority?: string;
  /**
   * @remarks
   * The project to which the node belongs.
   */
  projectInfo?: GetPhysicalNodeByOutputNameResponseBodyNodeInfoProjectInfo;
  /**
   * @remarks
   * The scheduling cycle type. Valid values:
   * - MINUTELY
   * - HOURLY
   * - DAILY
   * - WEEKLY
   * - MONTHLY
   * - YEARLY
   * 
   * @example
   * DAILY
   */
  scheduleType?: string;
  /**
   * @remarks
   * The scheduling status of the node.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The trigger configuration, which is used to implement field dependencies for logical tables.
   * 
   * @example
   * {"expression":"any_success"}
   */
  triggerConfig?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      description: 'Description',
      from: 'From',
      id: 'Id',
      lastModifiedTime: 'LastModifiedTime',
      modifier: 'Modifier',
      name: 'Name',
      operatorType: 'OperatorType',
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
      creator: GetPhysicalNodeByOutputNameResponseBodyNodeInfoCreator,
      description: 'string',
      from: 'string',
      id: 'string',
      lastModifiedTime: 'number',
      modifier: GetPhysicalNodeByOutputNameResponseBodyNodeInfoModifier,
      name: 'string',
      operatorType: 'string',
      owner: GetPhysicalNodeByOutputNameResponseBodyNodeInfoOwner,
      priority: 'string',
      projectInfo: GetPhysicalNodeByOutputNameResponseBodyNodeInfoProjectInfo,
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

export class GetPhysicalNodeByOutputNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of OK indicates that the request is normal.
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
  nodeInfo?: GetPhysicalNodeByOutputNameResponseBodyNodeInfo;
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
   * Indicates whether the request is successful.
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
      nodeInfo: GetPhysicalNodeByOutputNameResponseBodyNodeInfo,
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

