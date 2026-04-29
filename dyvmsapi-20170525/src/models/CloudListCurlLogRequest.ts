// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudListCurlLogRequest extends $dara.Model {
  /**
   * @remarks
   * 查询结束时间；格式:"yyyy-MM-dd HH:mm:ss",精确到s。startTime与endTime不允许跨月，默认值取当前月份最后一天
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-04-23 10:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * 呼叫中心 id
   * 
   * This parameter is required.
   * 
   * @example
   * 7000002
   */
  enterpriseId?: number;
  /**
   * @remarks
   * 需要取出的数据条数；大于0，最大不能超过500，默认10
   * 
   * @example
   * 10
   */
  limit?: string;
  /**
   * @remarks
   * 推送结果；取值：1、成功，0、失败
   * 
   * @example
   * 1
   */
  result?: number;
  /**
   * @remarks
   * 重试次数；默认-2
   * 
   * @example
   * 3
   */
  retry?: number;
  /**
   * @remarks
   * 从第几条开始取；大于等于0，默认0
   * 
   * @example
   * 0
   */
  start?: string;
  /**
   * @remarks
   * 查询开始时间；格式:"yyyy-MM-dd HH:mm:ss",精确到s。startTime与endTime不允许跨月，默认值取当前月份第一天
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-04-20 10:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * 推送类型；1:来电推送、2:来电响铃推送、3:外呼响铃推送、4:webcall转座席响铃推送、5:来电接通推送、6:外呼接通推送、7:来电挂机推送、8:外呼挂机推送、9:座席状态推送、10:按键推送、11:号码状态识别推送、12:录音状态推送、13:HTTP交互推送、15:ASR语音转换结果推送、14:预测式外呼任务推送、16:webcall客户侧响铃推送、17:满意度调查推送、18:预测外呼客户接听状态推送、19:NLU推送、20:预测外呼双方接听推送、21:IVR交互结束推送、22:外呼客户响铃推送、23:webcall客户接听推送、24:webcall转接响铃推送、25:webcall转接接通推送、26:主叫外呼分机响铃推送、27:主叫外呼分机接听推送、28:主叫外呼客户响铃推送、29:主叫外呼双方接通推送
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * 推送的url；说明：目的URL
   * 
   * @example
   * ""
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      enterpriseId: 'EnterpriseId',
      limit: 'Limit',
      result: 'Result',
      retry: 'Retry',
      start: 'Start',
      startTime: 'StartTime',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      enterpriseId: 'number',
      limit: 'string',
      result: 'number',
      retry: 'number',
      start: 'string',
      startTime: 'string',
      type: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

