// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPushAllTaskResponseBodyPushTaskRspPushTaskResultList extends $dara.Model {
  /**
   * @remarks
   * The ID of the server group to which the server belongs.
   * 
   * @example
   * 226
   */
  groupId?: number;
  /**
   * @remarks
   * The ID of the server.
   * 
   * @example
   * i-wz9f7wlklxqnvdk****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the server.
   * 
   * @example
   * TestInstance
   */
  instanceName?: string;
  /**
   * @remarks
   * The IP address of the server.
   * 
   * @example
   * 127.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The message that describes the security check failure.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the Security Center agent is online. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * >  If the Security Center agent of the server is offline, Security Center does not protect the server.
   * 
   * @example
   * false
   */
  online?: boolean;
  /**
   * @remarks
   * The operating system version of the server.
   * 
   * @example
   * linux
   */
  osVersion?: string;
  /**
   * @remarks
   * The region in which the server resides.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * Indicates whether the security check task is successful. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * false
   */
  success?: boolean;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * 5493fe42-61f5-4627-9aa2-8c449bbe****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      ip: 'Ip',
      message: 'Message',
      online: 'Online',
      osVersion: 'OsVersion',
      region: 'Region',
      success: 'Success',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      instanceId: 'string',
      instanceName: 'string',
      ip: 'string',
      message: 'string',
      online: 'boolean',
      osVersion: 'string',
      region: 'string',
      success: 'boolean',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPushAllTaskResponseBodyPushTaskRsp extends $dara.Model {
  /**
   * @remarks
   * The information about the server on which security check tasks failed.
   */
  pushTaskResultList?: ModifyPushAllTaskResponseBodyPushTaskRspPushTaskResultList[];
  static names(): { [key: string]: string } {
    return {
      pushTaskResultList: 'PushTaskResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushTaskResultList: { 'type': 'array', 'itemType': ModifyPushAllTaskResponseBodyPushTaskRspPushTaskResultList },
    };
  }

  validate() {
    if(Array.isArray(this.pushTaskResultList)) {
      $dara.Model.validateArray(this.pushTaskResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPushAllTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The results of security check tasks.
   */
  pushTaskRsp?: ModifyPushAllTaskResponseBodyPushTaskRsp;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 91EB4AC7-7FEF-4C72-BE49-4414E459AEC2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pushTaskRsp: 'PushTaskRsp',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushTaskRsp: ModifyPushAllTaskResponseBodyPushTaskRsp,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pushTaskRsp && typeof (this.pushTaskRsp as any).validate === 'function') {
      (this.pushTaskRsp as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

