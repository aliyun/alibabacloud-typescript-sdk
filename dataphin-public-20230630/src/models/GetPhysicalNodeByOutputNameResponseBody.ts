// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPhysicalNodeByOutputNameResponseBodyNodeInfoCreator extends $dara.Model {
  /**
   * @remarks
   * User ID
   * 
   * @example
   * 1311131
   */
  id?: string;
  /**
   * @remarks
   * Username
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

export class GetPhysicalNodeByOutputNameResponseBodyNodeInfoModifier extends $dara.Model {
  /**
   * @remarks
   * User ID
   * 
   * @example
   * 1311131
   */
  id?: string;
  /**
   * @remarks
   * Username
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

export class GetPhysicalNodeByOutputNameResponseBodyNodeInfoOwner extends $dara.Model {
  /**
   * @remarks
   * User ID
   * 
   * @example
   * 1311131
   */
  id?: string;
  /**
   * @remarks
   * Username
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

export class GetPhysicalNodeByOutputNameResponseBodyNodeInfoProjectInfo extends $dara.Model {
  /**
   * @remarks
   * Project ID
   * 
   * @example
   * 1324211
   */
  id?: string;
  /**
   * @remarks
   * Project name
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

export class GetPhysicalNodeByOutputNameResponseBodyNodeInfo extends $dara.Model {
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 1717343597000
   */
  createTime?: number;
  /**
   * @remarks
   * Node creator
   */
  creator?: GetPhysicalNodeByOutputNameResponseBodyNodeInfoCreator;
  /**
   * @remarks
   * Description
   * 
   * @example
   * xx测试
   */
  description?: string;
  /**
   * @remarks
   * Node source
   * - DATA_PROCESS: Code development
   * - BLACK_BOX: Black box
   * - ONE_ID: Extraction
   * - PIPELINE: Pipeline
   * 
   * @example
   * DATA_PROCESS
   */
  from?: string;
  /**
   * @remarks
   * Node ID
   * 
   * @example
   * n_2321
   */
  id?: string;
  /**
   * @remarks
   * Last modified time
   * 
   * @example
   * 1717343597000
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * Node modifier
   */
  modifier?: GetPhysicalNodeByOutputNameResponseBodyNodeInfoModifier;
  /**
   * @remarks
   * Name
   * 
   * @example
   * xx测试
   */
  name?: string;
  /**
   * @remarks
   * Node subtype
   * - MAX_COMPUTE_SQL
   * - HIVE_SQL
   * - SHELL
   * - PYTHON
   * - ONE_SERVICE_SQL
   * - DATABASE_SQL, etc.
   * 
   * @example
   * SHELL
   */
  operatorType?: string;
  /**
   * @remarks
   * Node owner
   */
  owner?: GetPhysicalNodeByOutputNameResponseBodyNodeInfoOwner;
  /**
   * @remarks
   * Priority
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
   * Project to which the node belongs
   */
  projectInfo?: GetPhysicalNodeByOutputNameResponseBodyNodeInfoProjectInfo;
  /**
   * @remarks
   * Scheduling period type
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
   * Node scheduling status
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * Trigger configuration, used to implement field dependencies on logical tables
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
   * Error code. OK indicates a successful request.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code returned by the backend
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Node details
   */
  nodeInfo?: GetPhysicalNodeByOutputNameResponseBodyNodeInfo;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful
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

