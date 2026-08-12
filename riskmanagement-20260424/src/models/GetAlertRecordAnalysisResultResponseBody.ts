// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlertRecordAnalysisResultResponseBodyDataUniqueTagList extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the alert event.
   * 
   * @example
   * 179deb12f25baac9b1e2909c419bcb1f
   */
  alarmUniqueInfo?: string;
  /**
   * @remarks
   * The 16-digit AliUid of the user.
   * 
   * @example
   * 1248751055158884
   */
  aliUid?: string;
  /**
   * @remarks
   * The code of the tracing result.
   * 
   * @example
   * test_code
   */
  analysisCode?: string;
  /**
   * @remarks
   * The text of the tracing result.
   * 
   * @example
   * exception_alert
   */
  analysisResult?: string;
  /**
   * @remarks
   * Indicates whether the result is liked. Valid values:
   * 
   * - **true**: Liked.
   * - **false**: Not liked.
   * 
   * @example
   * true
   */
  chooseLike?: boolean;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 110.22.*8.111
   */
  ip?: string;
  /**
   * @remarks
   * The instance ID of the server.
   * 
   * @example
   * i-adadasd-a**
   */
  machineInstanceId?: string;
  /**
   * @remarks
   * The display mode of the exception event details. Valid values:
   * 
   * - **text**: plain text
   * - **html**: rich text
   * 
   * @example
   * auto_breaking
   */
  type?: string;
  /**
   * @remarks
   * The unique ID of the alert event.
   * 
   * @example
   * 390317ce81d28bbbd83c05a90b39cd6c
   */
  uniqueInfo?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
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
   * @remarks
   * The code of the tracing result. (Deprecated)
   * 
   * @example
   * -
   */
  analysisCode?: string;
  /**
   * @remarks
   * The list of tracing results.
   */
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
   * @remarks
   * The error code returned if the call fails. For more information, see error codes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetAlertRecordAnalysisResultResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful‌
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 99D93ED4-D462-5FC5-8518-9BC1C49C7B6C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * - **true**: The call is successful.                               
   * - **false**: The call fails.
   * 
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

