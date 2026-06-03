// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSessionListRequest extends $dara.Model {
  /**
   * @example
   * 0
   */
  actionList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2019-06-06 00:00:00
   */
  beginDate?: string;
  /**
   * @example
   * 192.168.XX.XX
   */
  clientIpList?: string[];
  /**
   * @example
   * navicat
   */
  clientProgramList?: string[];
  /**
   * @example
   * 192.168.XX.XX
   */
  dbHostList?: string[];
  /**
   * @example
   * 1
   */
  dbId?: number;
  /**
   * @example
   * root
   */
  dbUserList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2019-06-06 23:59:59
   */
  endDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dbaudit-cn-78v1gc****
   */
  instanceId?: string;
  lang?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 3011610850021000000
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      actionList: 'ActionList',
      beginDate: 'BeginDate',
      clientIpList: 'ClientIpList',
      clientProgramList: 'ClientProgramList',
      dbHostList: 'DbHostList',
      dbId: 'DbId',
      dbUserList: 'DbUserList',
      endDate: 'EndDate',
      instanceId: 'InstanceId',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionList: { 'type': 'array', 'itemType': 'string' },
      beginDate: 'string',
      clientIpList: { 'type': 'array', 'itemType': 'string' },
      clientProgramList: { 'type': 'array', 'itemType': 'string' },
      dbHostList: { 'type': 'array', 'itemType': 'string' },
      dbId: 'number',
      dbUserList: { 'type': 'array', 'itemType': 'string' },
      endDate: 'string',
      instanceId: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actionList)) {
      $dara.Model.validateArray(this.actionList);
    }
    if(Array.isArray(this.clientIpList)) {
      $dara.Model.validateArray(this.clientIpList);
    }
    if(Array.isArray(this.clientProgramList)) {
      $dara.Model.validateArray(this.clientProgramList);
    }
    if(Array.isArray(this.dbHostList)) {
      $dara.Model.validateArray(this.dbHostList);
    }
    if(Array.isArray(this.dbUserList)) {
      $dara.Model.validateArray(this.dbUserList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

