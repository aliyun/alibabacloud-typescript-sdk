// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlertRecordAnalysisResultRequestUniqueTagList extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the alert event.
   * 
   * @example
   * 10a19b654e73ff079ede61ce3f4465e0
   */
  alarmUniqueInfo?: string;
  /**
   * @remarks
   * Indicates whether the result is liked. Valid values:
   * 
   * - **true**: Liked.
   * - **false**: Not liked.
   * 
   * @example
   * false
   */
  chooseLike?: boolean;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * pc-bp19up785757dz800
   */
  ip?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-rj9c7d4bli38***tuym
   */
  machineInstanceId?: string;
  /**
   * @remarks
   * The query tracing time.
   * 
   * @example
   * 2025-06-27 00:00:00
   */
  queryTime?: string;
  /**
   * @remarks
   * The vulnerability type.
   * 
   * @example
   * BusinessLicense
   */
  type?: string;
  /**
   * @remarks
   * The unique identifier of the alert event.
   * 
   * @example
   * fc312aa0c32ba8a6147db6221fb1c1ee
   */
  uniqueInfo?: string;
  /**
   * @remarks
   * The unique identifier of the asset.
   * 
   * @example
   * 3309e55fcb1ed8d4bc6af098e62e0353RNabnQSO1bx
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alarmUniqueInfo: 'AlarmUniqueInfo',
      chooseLike: 'ChooseLike',
      ip: 'Ip',
      machineInstanceId: 'MachineInstanceId',
      queryTime: 'QueryTime',
      type: 'Type',
      uniqueInfo: 'UniqueInfo',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmUniqueInfo: 'string',
      chooseLike: 'boolean',
      ip: 'string',
      machineInstanceId: 'string',
      queryTime: 'string',
      type: 'string',
      uniqueInfo: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertRecordAnalysisResultRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the alert event. (Deprecated)
   * 
   * @example
   * 9b57f0fcf98181df8d8487d1cc91cb8d
   */
  alarmUniqueInfo?: string;
  /**
   * @remarks
   * The language of the content. Valid values:
   * 
   * - **zh** (default): Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @remarks
   * The unique ID of the alert event. (Deprecated)
   * 
   * @example
   * fc312aa0c32ba8a6147db6221fb1c1ee
   */
  uniqueInfo?: string;
  /**
   * @remarks
   * The array of tracing requests.
   */
  uniqueTagList?: GetAlertRecordAnalysisResultRequestUniqueTagList[];
  /**
   * @remarks
   * The unique identifier of the asset. (Deprecated)
   * 
   * @example
   * ebde6d4e3e4aba728962eec43a69196e9J7tt7H47Pc
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alarmUniqueInfo: 'AlarmUniqueInfo',
      aliyunLang: 'AliyunLang',
      uniqueInfo: 'UniqueInfo',
      uniqueTagList: 'UniqueTagList',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmUniqueInfo: 'string',
      aliyunLang: 'string',
      uniqueInfo: 'string',
      uniqueTagList: { 'type': 'array', 'itemType': GetAlertRecordAnalysisResultRequestUniqueTagList },
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.uniqueTagList)) {
      $dara.Model.validateArray(this.uniqueTagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

