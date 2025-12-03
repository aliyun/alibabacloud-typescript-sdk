// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHostGroupResponseBodyHostGroupHostInfos extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  aliyunRegionId?: string;
  /**
   * @example
   * 1586863220000
   */
  createTime?: number;
  /**
   * @example
   * 11111
   */
  creatorAccountId?: string;
  /**
   * @example
   * ceshi
   */
  instanceName?: string;
  /**
   * @example
   * 127.0.0.1
   */
  ip?: string;
  /**
   * @example
   * 1ssasa
   */
  machineSn?: string;
  /**
   * @example
   * 11111111111
   */
  modifierAccountId?: string;
  /**
   * @example
   * MachineInfo
   */
  objectType?: string;
  /**
   * @example
   * 1586863220000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      aliyunRegionId: 'aliyunRegionId',
      createTime: 'createTime',
      creatorAccountId: 'creatorAccountId',
      instanceName: 'instanceName',
      ip: 'ip',
      machineSn: 'machineSn',
      modifierAccountId: 'modifierAccountId',
      objectType: 'objectType',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunRegionId: 'string',
      createTime: 'number',
      creatorAccountId: 'string',
      instanceName: 'string',
      ip: 'string',
      machineSn: 'string',
      modifierAccountId: 'string',
      objectType: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostGroupResponseBodyHostGroup extends $dara.Model {
  /**
   * @example
   * cn-bejing
   */
  aliyunRegion?: string;
  /**
   * @example
   * 1586863220000
   */
  createTime?: number;
  /**
   * @example
   * 111111
   */
  creatorAccountId?: string;
  description?: string;
  /**
   * @example
   * ecs
   */
  ecsLabelKey?: string;
  /**
   * @example
   * ecs
   */
  ecsLabelValue?: string;
  /**
   * @example
   * ECS_ALIYUN
   */
  ecsType?: string;
  hostInfos?: GetHostGroupResponseBodyHostGroupHostInfos[];
  /**
   * @example
   * 1
   */
  hostNum?: number;
  /**
   * @example
   * 1234
   */
  id?: number;
  /**
   * @example
   * 11111
   */
  modifierAccountId?: string;
  name?: string;
  /**
   * @example
   * 1234
   */
  serviceConnectionId?: number;
  /**
   * @example
   * ECS
   */
  type?: string;
  /**
   * @example
   * 1586863220000
   */
  upateTIme?: number;
  static names(): { [key: string]: string } {
    return {
      aliyunRegion: 'aliyunRegion',
      createTime: 'createTime',
      creatorAccountId: 'creatorAccountId',
      description: 'description',
      ecsLabelKey: 'ecsLabelKey',
      ecsLabelValue: 'ecsLabelValue',
      ecsType: 'ecsType',
      hostInfos: 'hostInfos',
      hostNum: 'hostNum',
      id: 'id',
      modifierAccountId: 'modifierAccountId',
      name: 'name',
      serviceConnectionId: 'serviceConnectionId',
      type: 'type',
      upateTIme: 'upateTIme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunRegion: 'string',
      createTime: 'number',
      creatorAccountId: 'string',
      description: 'string',
      ecsLabelKey: 'string',
      ecsLabelValue: 'string',
      ecsType: 'string',
      hostInfos: { 'type': 'array', 'itemType': GetHostGroupResponseBodyHostGroupHostInfos },
      hostNum: 'number',
      id: 'number',
      modifierAccountId: 'string',
      name: 'string',
      serviceConnectionId: 'number',
      type: 'string',
      upateTIme: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.hostInfos)) {
      $dara.Model.validateArray(this.hostInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostGroupResponseBody extends $dara.Model {
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  hostGroup?: GetHostGroupResponseBodyHostGroup;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      hostGroup: 'hostGroup',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      hostGroup: GetHostGroupResponseBodyHostGroup,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.hostGroup && typeof (this.hostGroup as any).validate === 'function') {
      (this.hostGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

