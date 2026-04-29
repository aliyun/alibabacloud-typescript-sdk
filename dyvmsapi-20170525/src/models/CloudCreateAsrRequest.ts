// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudCreateAsrRequest extends $dara.Model {
  /**
   * @remarks
   * 通话类型；1:呼入,2:webcall,4:预览外呼,5:预测外呼,6:主叫外呼,9:内部呼叫
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  callType?: number;
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
   * 主通道的唯一标识
   * 
   * This parameter is required.
   * 
   * @example
   * sip-2-1489989807.36601
   */
  mainUniqueId?: string;
  /**
   * @remarks
   * 录音文件名；例: 7000002-20170320140327-1581-1500-record-sip-2-148998.366
   * 
   * This parameter is required.
   * 
   * @example
   * 7000002-20170320140327-1581-1500-record-sip-2-148998.366
   */
  recordFile?: string;
  /**
   * @remarks
   * 录音通道类型；取值范围：0：混音 1：分线录音时客户侧,2：分线录音时座席侧,3:分线录音时客户侧和座席侧
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  recordSide?: number;
  /**
   * @remarks
   * 语音文件类型,取值：record,voicemail 说明：record是录音， voicemail是留言
   * 
   * This parameter is required.
   * 
   * @example
   * record
   */
  recordType?: string;
  /**
   * @remarks
   * 当wav过期时，是否支持使用mp3进行转写；0-不支持（默认）；1-代表支持，如果通话wav过期，则自动使用mp3转写，转写结果中通道类型会被设置为混音类型；混音mp3无法区分两侧，双声道mp3可以区分两侧内容
   * 
   * @example
   * 0
   */
  supportMp3?: string;
  /**
   * @remarks
   * 从通道的唯一标识
   * 
   * This parameter is required.
   * 
   * @example
   * sip-2-1489989807.36601
   */
  uniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      enterpriseId: 'EnterpriseId',
      mainUniqueId: 'MainUniqueId',
      recordFile: 'RecordFile',
      recordSide: 'RecordSide',
      recordType: 'RecordType',
      supportMp3: 'SupportMp3',
      uniqueId: 'UniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'number',
      enterpriseId: 'number',
      mainUniqueId: 'string',
      recordFile: 'string',
      recordSide: 'number',
      recordType: 'string',
      supportMp3: 'string',
      uniqueId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

