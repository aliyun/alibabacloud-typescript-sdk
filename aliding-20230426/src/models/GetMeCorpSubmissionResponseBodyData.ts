// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMeCorpSubmissionResponseBodyDataActioner } from "./GetMeCorpSubmissionResponseBodyDataActioner";
import { GetMeCorpSubmissionResponseBodyDataCurrentActivityInstances } from "./GetMeCorpSubmissionResponseBodyDataCurrentActivityInstances";


export class GetMeCorpSubmissionResponseBodyData extends $dara.Model {
  actioner?: GetMeCorpSubmissionResponseBodyDataActioner[];
  actionerId?: string[];
  actionerName?: string[];
  /**
   * @example
   * APP_PBKT0xxx
   */
  appType?: string;
  /**
   * @example
   * 2021-01-01
   */
  createTimeGMT?: string;
  currentActivityInstances?: GetMeCorpSubmissionResponseBodyDataCurrentActivityInstances[];
  dataMap?: { [key: string]: any };
  /**
   * @example
   * edit
   */
  dataType?: string;
  /**
   * @example
   * 2021-01-01
   */
  finishTimeGMT?: string;
  /**
   * @example
   * FINST-NJYJxxx
   */
  formInstanceId?: string;
  /**
   * @example
   * FORM-EF6xxx
   */
  formUuid?: string;
  /**
   * @example
   * 符合宜搭表单实例格式的json数据
   */
  instanceValue?: string;
  /**
   * @example
   * 2021-01-01
   */
  modifiedTimeGMT?: string;
  /**
   * @example
   * zhangsan@mediaId
   */
  originatorAvatar?: string;
  /**
   * @example
   * 张三
   */
  originatorDisplayName?: string;
  /**
   * @example
   * manager123
   */
  originatorId?: string;
  /**
   * @example
   * 同意
   */
  processApprovedResult?: string;
  /**
   * @example
   * 通过
   */
  processApprovedResultText?: string;
  /**
   * @example
   * TPROC--X1Gxxx
   */
  processCode?: string;
  /**
   * @example
   * 52330
   */
  processId?: number;
  /**
   * @example
   * f30233fb-72e1-xxx
   */
  processInstanceId?: string;
  /**
   * @example
   * finished
   */
  processInstanceStatus?: string;
  /**
   * @example
   * 已同意
   */
  processInstanceStatusText?: string;
  /**
   * @example
   * 小红的单子
   */
  processName?: string;
  /**
   * @example
   * 小红发起的请购单
   */
  title?: string;
  /**
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      actioner: 'Actioner',
      actionerId: 'ActionerId',
      actionerName: 'ActionerName',
      appType: 'AppType',
      createTimeGMT: 'CreateTimeGMT',
      currentActivityInstances: 'CurrentActivityInstances',
      dataMap: 'DataMap',
      dataType: 'DataType',
      finishTimeGMT: 'FinishTimeGMT',
      formInstanceId: 'FormInstanceId',
      formUuid: 'FormUuid',
      instanceValue: 'InstanceValue',
      modifiedTimeGMT: 'ModifiedTimeGMT',
      originatorAvatar: 'OriginatorAvatar',
      originatorDisplayName: 'OriginatorDisplayName',
      originatorId: 'OriginatorId',
      processApprovedResult: 'ProcessApprovedResult',
      processApprovedResultText: 'ProcessApprovedResultText',
      processCode: 'ProcessCode',
      processId: 'ProcessId',
      processInstanceId: 'ProcessInstanceId',
      processInstanceStatus: 'ProcessInstanceStatus',
      processInstanceStatusText: 'ProcessInstanceStatusText',
      processName: 'ProcessName',
      title: 'Title',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actioner: { 'type': 'array', 'itemType': GetMeCorpSubmissionResponseBodyDataActioner },
      actionerId: { 'type': 'array', 'itemType': 'string' },
      actionerName: { 'type': 'array', 'itemType': 'string' },
      appType: 'string',
      createTimeGMT: 'string',
      currentActivityInstances: { 'type': 'array', 'itemType': GetMeCorpSubmissionResponseBodyDataCurrentActivityInstances },
      dataMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dataType: 'string',
      finishTimeGMT: 'string',
      formInstanceId: 'string',
      formUuid: 'string',
      instanceValue: 'string',
      modifiedTimeGMT: 'string',
      originatorAvatar: 'string',
      originatorDisplayName: 'string',
      originatorId: 'string',
      processApprovedResult: 'string',
      processApprovedResultText: 'string',
      processCode: 'string',
      processId: 'number',
      processInstanceId: 'string',
      processInstanceStatus: 'string',
      processInstanceStatusText: 'string',
      processName: 'string',
      title: 'string',
      version: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.actioner)) {
      $dara.Model.validateArray(this.actioner);
    }
    if(Array.isArray(this.actionerId)) {
      $dara.Model.validateArray(this.actionerId);
    }
    if(Array.isArray(this.actionerName)) {
      $dara.Model.validateArray(this.actionerName);
    }
    if(Array.isArray(this.currentActivityInstances)) {
      $dara.Model.validateArray(this.currentActivityInstances);
    }
    if(this.dataMap) {
      $dara.Model.validateMap(this.dataMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

