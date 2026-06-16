// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlertRecordAnalysisResultResponseBodyDataUniqueTagList extends $dara.Model {
  alarmUniqueInfo?: string;
  aliUid?: string;
  analysisCode?: string;
  analysisResult?: string;
  chooseLike?: boolean;
  ip?: string;
  machineInstanceId?: string;
  type?: string;
  uniqueInfo?: string;
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
  code?: string;
  data?: GetAlertRecordAnalysisResultResponseBodyData;
  message?: string;
  requestId?: string;
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

