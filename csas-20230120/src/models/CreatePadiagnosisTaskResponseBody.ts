// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePADiagnosisTaskResponseBodyDiagnosisTaskUdpExtraConfigs extends $dara.Model {
  /**
   * @example
   * hello
   */
  expectedResponse?: string;
  /**
   * @example
   * hello
   */
  requestContent?: string;
  static names(): { [key: string]: string } {
    return {
      expectedResponse: 'ExpectedResponse',
      requestContent: 'RequestContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expectedResponse: 'string',
      requestContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePADiagnosisTaskResponseBodyDiagnosisTaskUserGroup extends $dara.Model {
  /**
   * @example
   * ug-xxxxxxxx
   */
  userGroupId?: string;
  /**
   * @example
   * IT
   */
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupId: 'UserGroupId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupId: 'string',
      userGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePADiagnosisTaskResponseBodyDiagnosisTask extends $dara.Model {
  /**
   * @example
   * E9EE1CE7-4AA0-521D-B8E1-E13E47F05E94
   */
  devTag?: string;
  /**
   * @example
   * diag-3e0d36d6c15a0502
   */
  diagnoseId?: string;
  /**
   * @example
   * FullLink
   */
  diagnoseType?: string;
  /**
   * @example
   * 172.16.6.1
   */
  host?: string;
  /**
   * @example
   * pop-8ded63ce9d3d317e
   */
  popId?: string;
  /**
   * @example
   * AutoSelect
   */
  popMode?: string;
  /**
   * @example
   * 443
   */
  port?: string;
  /**
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @example
   * Disabled
   */
  status?: string;
  udpExtraConfigs?: CreatePADiagnosisTaskResponseBodyDiagnosisTaskUdpExtraConfigs;
  userGroup?: CreatePADiagnosisTaskResponseBodyDiagnosisTaskUserGroup;
  /**
   * @example
   * zhangsan
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      devTag: 'DevTag',
      diagnoseId: 'DiagnoseId',
      diagnoseType: 'DiagnoseType',
      host: 'Host',
      popId: 'PopId',
      popMode: 'PopMode',
      port: 'Port',
      protocol: 'Protocol',
      status: 'Status',
      udpExtraConfigs: 'UdpExtraConfigs',
      userGroup: 'UserGroup',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devTag: 'string',
      diagnoseId: 'string',
      diagnoseType: 'string',
      host: 'string',
      popId: 'string',
      popMode: 'string',
      port: 'string',
      protocol: 'string',
      status: 'string',
      udpExtraConfigs: CreatePADiagnosisTaskResponseBodyDiagnosisTaskUdpExtraConfigs,
      userGroup: CreatePADiagnosisTaskResponseBodyDiagnosisTaskUserGroup,
      username: 'string',
    };
  }

  validate() {
    if(this.udpExtraConfigs && typeof (this.udpExtraConfigs as any).validate === 'function') {
      (this.udpExtraConfigs as any).validate();
    }
    if(this.userGroup && typeof (this.userGroup as any).validate === 'function') {
      (this.userGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePADiagnosisTaskResponseBody extends $dara.Model {
  diagnosisTask?: CreatePADiagnosisTaskResponseBodyDiagnosisTask;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5F79AE39-6622-5292-87EF-DE45631DE4D7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      diagnosisTask: 'DiagnosisTask',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnosisTask: CreatePADiagnosisTaskResponseBodyDiagnosisTask,
      requestId: 'string',
    };
  }

  validate() {
    if(this.diagnosisTask && typeof (this.diagnosisTask as any).validate === 'function') {
      (this.diagnosisTask as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

