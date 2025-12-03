// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHostGroupsResponseBodyHostGroups extends $dara.Model {
  /**
   * @example
   * cn-beijing
   */
  aliyunRegion?: string;
  /**
   * @example
   * 1586863220000
   */
  createTime?: number;
  /**
   * @example
   * 2222222222222
   */
  creatorAccountId?: string;
  /**
   * @example
   * 主机组
   */
  description?: string;
  /**
   * @example
   * ecs
   */
  ecsLabelKey?: string;
  /**
   * @example
   * value
   */
  ecsLabelValue?: string;
  /**
   * @example
   * ECS_ALIYUN
   */
  ecsType?: string;
  /**
   * @example
   * 3
   */
  hostNum?: number;
  /**
   * @remarks
   * 323232
   * 
   * @example
   * 部署组Id
   */
  id?: number;
  /**
   * @example
   * 211111111
   */
  modifierAccountId?: string;
  /**
   * @example
   * 部署组
   */
  name?: string;
  /**
   * @example
   * 1212122
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
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      aliyunRegion: 'aliyunRegion',
      createTime: 'createTime',
      creatorAccountId: 'creatorAccountId',
      description: 'description',
      ecsLabelKey: 'ecsLabelKey',
      ecsLabelValue: 'ecsLabelValue',
      ecsType: 'ecsType',
      hostNum: 'hostNum',
      id: 'id',
      modifierAccountId: 'modifierAccountId',
      name: 'name',
      serviceConnectionId: 'serviceConnectionId',
      type: 'type',
      updateTime: 'updateTime',
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
      hostNum: 'number',
      id: 'number',
      modifierAccountId: 'string',
      name: 'string',
      serviceConnectionId: 'number',
      type: 'string',
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

export class ListHostGroupsResponseBody extends $dara.Model {
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
  hostGroups?: ListHostGroupsResponseBodyHostGroups[];
  /**
   * @example
   * asassasassa
   */
  nextToken?: string;
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
  /**
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      hostGroups: 'hostGroups',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      hostGroups: { 'type': 'array', 'itemType': ListHostGroupsResponseBodyHostGroups },
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.hostGroups)) {
      $dara.Model.validateArray(this.hostGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

