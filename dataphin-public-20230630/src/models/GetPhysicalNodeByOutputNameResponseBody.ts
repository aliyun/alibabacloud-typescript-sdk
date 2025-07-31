// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPhysicalNodeByOutputNameResponseBodyNodeInfoCreator extends $dara.Model {
  /**
   * @example
   * 1311131
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

export class GetPhysicalNodeByOutputNameResponseBodyNodeInfoModifier extends $dara.Model {
  /**
   * @example
   * 1311131
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

export class GetPhysicalNodeByOutputNameResponseBodyNodeInfoOwner extends $dara.Model {
  /**
   * @example
   * 1311131
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

export class GetPhysicalNodeByOutputNameResponseBodyNodeInfoProjectInfo extends $dara.Model {
  /**
   * @example
   * 1324211
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

export class GetPhysicalNodeByOutputNameResponseBodyNodeInfo extends $dara.Model {
  /**
   * @example
   * 1717343597000
   */
  createTime?: number;
  creator?: GetPhysicalNodeByOutputNameResponseBodyNodeInfoCreator;
  description?: string;
  /**
   * @example
   * DATA_PROCESS
   */
  from?: string;
  /**
   * @example
   * n_2321
   */
  id?: string;
  /**
   * @example
   * 1717343597000
   */
  lastModifiedTime?: number;
  modifier?: GetPhysicalNodeByOutputNameResponseBodyNodeInfoModifier;
  name?: string;
  /**
   * @example
   * SHELL
   */
  operatorType?: string;
  owner?: GetPhysicalNodeByOutputNameResponseBodyNodeInfoOwner;
  /**
   * @example
   * MIDDLE
   */
  priority?: string;
  projectInfo?: GetPhysicalNodeByOutputNameResponseBodyNodeInfoProjectInfo;
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
  nodeInfo?: GetPhysicalNodeByOutputNameResponseBodyNodeInfo;
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

