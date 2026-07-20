// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlertRecordAnalysisResultResponseBodyDataUniqueTagList extends $dara.Model {
  /**
   * @example
   * 179deb12f25baac9b1e2909c419bcb1f
   */
  alarmUniqueInfo?: string;
  /**
   * @example
   * 1248751055158884
   */
  aliUid?: string;
  /**
   * @example
   * test_code
   */
  analysisCode?: string;
  /**
   * @example
   * exception_alert
   */
  analysisResult?: string;
  /**
   * @example
   * true
   */
  chooseLike?: boolean;
  /**
   * @example
   * 110.22.*8.111
   */
  ip?: string;
  /**
   * @example
   * i-adadasd-a**
   */
  machineInstanceId?: string;
  /**
   * @example
   * auto_breaking
   */
  type?: string;
  /**
   * @example
   * 390317ce81d28bbbd83c05a90b39cd6c
   */
  uniqueInfo?: string;
  /**
   * @example
   * bb3051ca-c0dd-4da2-91be-ea5c80926132
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alarmUniqueInfo: 'AlarmUniqueInfo',
      aliUid: 'AliUid',
      analysisCode: 'AnalysisCode',
      analysisResult: 'AnalysisResult',
      chooseLike: 'ChooseLike',
      ip: 'Ip',
      machineInstanceId: 'MachineInstanceId',
      type: 'Type',
      uniqueInfo: 'UniqueInfo',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmUniqueInfo: 'string',
      aliUid: 'string',
      analysisCode: 'string',
      analysisResult: 'string',
      chooseLike: 'boolean',
      ip: 'string',
      machineInstanceId: 'string',
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

export class GetAlertRecordAnalysisResultResponseBodyData extends $dara.Model {
  /**
   * @example
   * -
   */
  analysisCode?: string;
  uniqueTagList?: GetAlertRecordAnalysisResultResponseBodyDataUniqueTagList[];
  static names(): { [key: string]: string } {
    return {
      analysisCode: 'AnalysisCode',
      uniqueTagList: 'UniqueTagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisCode: 'string',
      uniqueTagList: { 'type': 'array', 'itemType': GetAlertRecordAnalysisResultResponseBodyDataUniqueTagList },
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

export class GetAlertRecordAnalysisResultResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetAlertRecordAnalysisResultResponseBodyData;
  /**
   * @example
   * successful‌
   */
  message?: string;
  /**
   * @example
   * 99D93ED4-D462-5FC5-8518-9BC1C49C7B6C
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAlertRecordAnalysisResultResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

