// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOperationRecordsResponseBodyResult extends $dara.Model {
  /**
   * @example
   * return
   */
  action?: string;
  /**
   * @example
   * 同意
   */
  actionExit?: string;
  /**
   * @example
   * 2021-02-01
   */
  activeTimeGMT?: string;
  /**
   * @example
   * act-xxaanfaf
   */
  activityId?: string;
  /**
   * @example
   * 12345
   */
  dataId?: number;
  /**
   * @example
   * https://oss.com/Signature.pdf
   */
  digitalSign?: string;
  /**
   * @example
   * https://oss.com/a.pdf
   */
  files?: string;
  /**
   * @example
   * 2021-01-01
   */
  operateTimeGMT?: string;
  /**
   * @example
   * remove
   */
  operateType?: string;
  /**
   * @example
   * 张三
   */
  operatorDisplayName?: string;
  /**
   * @example
   * 李四
   */
  operatorName?: string;
  /**
   * @example
   * 无冬
   */
  operatorNickName?: string;
  /**
   * @example
   * https://oss.com/a.jpeg
   */
  operatorPhotoUrl?: string;
  /**
   * @example
   * 良好
   */
  operatorStatus?: string;
  /**
   * @example
   * manager123
   */
  operatorUserId?: string;
  /**
   * @example
   * f30233fb-72e1-4af4-8cb8-c7e0ea9ee530
   */
  processInstanceId?: string;
  /**
   * @example
   * 确认同意
   */
  remark?: string;
  /**
   * @example
   * 请购类型
   */
  showName?: string;
  /**
   * @example
   * 12
   */
  size?: number;
  /**
   * @example
   * 同步
   */
  taskExecuteType?: string;
  /**
   * @example
   * 2021-01-01
   */
  taskHoldTimeGMT?: number;
  /**
   * @example
   * task-123
   */
  taskId?: string;
  /**
   * @example
   * append task
   */
  taskType?: string;
  /**
   * @example
   * i18n
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionExit: 'ActionExit',
      activeTimeGMT: 'ActiveTimeGMT',
      activityId: 'ActivityId',
      dataId: 'DataId',
      digitalSign: 'DigitalSign',
      files: 'Files',
      operateTimeGMT: 'OperateTimeGMT',
      operateType: 'OperateType',
      operatorDisplayName: 'OperatorDisplayName',
      operatorName: 'OperatorName',
      operatorNickName: 'OperatorNickName',
      operatorPhotoUrl: 'OperatorPhotoUrl',
      operatorStatus: 'OperatorStatus',
      operatorUserId: 'OperatorUserId',
      processInstanceId: 'ProcessInstanceId',
      remark: 'Remark',
      showName: 'ShowName',
      size: 'Size',
      taskExecuteType: 'TaskExecuteType',
      taskHoldTimeGMT: 'TaskHoldTimeGMT',
      taskId: 'TaskId',
      taskType: 'TaskType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionExit: 'string',
      activeTimeGMT: 'string',
      activityId: 'string',
      dataId: 'number',
      digitalSign: 'string',
      files: 'string',
      operateTimeGMT: 'string',
      operateType: 'string',
      operatorDisplayName: 'string',
      operatorName: 'string',
      operatorNickName: 'string',
      operatorPhotoUrl: 'string',
      operatorStatus: 'string',
      operatorUserId: 'string',
      processInstanceId: 'string',
      remark: 'string',
      showName: 'string',
      size: 'number',
      taskExecuteType: 'string',
      taskHoldTimeGMT: 'number',
      taskId: 'string',
      taskType: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

