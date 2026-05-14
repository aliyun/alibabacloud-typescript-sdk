// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkDescribeRecordFileUrlRequest extends $dara.Model {
  /**
   * @remarks
   * ０表示试听，１为下载，默认为1
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
   * 8004970
   */
  enterpriseId?: number;
  /**
   * @remarks
   * 通话记录唯一标识
   * 
   * This parameter is required.
   * 
   * @example
   * uniq_1-162046xxxx.12
   */
  mainUniqueId?: string;
  ownerId?: number;
  /**
   * @remarks
   * 不传递获取mp3格式录音，传递时获取wav格式录音。1：双轨录音客户侧，2：双轨录音座席侧，3：两侧合成录音
   * 
   * @example
   * 1
   */
  recordSide?: number;
  /**
   * @remarks
   * 录音类型。 "record": 通话录音，"voicemail": 留言。默认值为 "record"
   * 
   * @example
   * record
   */
  recordType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 获取录音地址超时时长，单位为秒，默认为一小时，范围在一到二十四小时。
   * 
   * @example
   * 67
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      download: 'Download',
      enterpriseId: 'EnterpriseId',
      mainUniqueId: 'MainUniqueId',
      ownerId: 'OwnerId',
      recordSide: 'RecordSide',
      recordType: 'RecordType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      download: 'number',
      enterpriseId: 'number',
      mainUniqueId: 'string',
      ownerId: 'number',
      recordSide: 'number',
      recordType: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

