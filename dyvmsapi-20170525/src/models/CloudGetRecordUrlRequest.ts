// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudGetRecordUrlRequest extends $dara.Model {
  /**
   * @remarks
   * 呼叫类型；说明：开启分线录音时，获取客户侧或座席侧录音需要，recordFormat=1时有效，recordFormat=0时忽略。取值范围：1,2,4,5（数字含义：呼入,webcall,预览外呼,预测外呼）
   * 
   * @example
   * 4
   */
  callType?: number;
  /**
   * @remarks
   * 是否下载；１为下载，空或０表示试听
   * 
   * @example
   * 1
   */
  download?: number;
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
   * 录音文件名；如7000101-20160815140025-01087120766-01087120766--record-sip-1-1471240825.87
   * 
   * This parameter is required.
   * 
   * @example
   * 7000101-20160815140025-01087120766-01087120766--record-sip-1-1471240825.87
   */
  recordFile?: string;
  /**
   * @remarks
   * 录音文件类型；取值说明：0为mp3，1为wav，默认为mp3类型
   * 
   * @example
   * 1
   */
  recordFormat?: number;
  /**
   * @remarks
   * 分线录音录音侧；说明：开启分线录音时，获取客户侧或座席侧录音需要，recordFormat=1时有效，recordFormat=0时忽略。取值范围：1,2 (数字含义：客户侧，座席侧)recordSide不为空时，callType必选
   * 
   * @example
   * 2
   */
  recordSide?: number;
  /**
   * @remarks
   * 录音类型，不填可根据 recordFile 解析；record:录音voicemail:留言tsi:彩铃、当开启号码录音状态识别，发起预览外呼，客户号码是手机且客户未接听时返回该地址 rasr:语音机器人客户侧录音 transfer:转接consult:咨询threeway:三方
   * 
   * @example
   * record
   */
  recordType?: string;
  static names(): { [key: string]: string } {
    return {
      callType: 'CallType',
      download: 'Download',
      enterpriseId: 'EnterpriseId',
      recordFile: 'RecordFile',
      recordFormat: 'RecordFormat',
      recordSide: 'RecordSide',
      recordType: 'RecordType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callType: 'number',
      download: 'number',
      enterpriseId: 'number',
      recordFile: 'string',
      recordFormat: 'number',
      recordSide: 'number',
      recordType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

