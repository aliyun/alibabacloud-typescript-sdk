// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSubTaskResultResponseBodyResultObjectConfig extends $dara.Model {
  /**
   * @remarks
   * Backing field for service support.
   * 
   * @example
   * repl_lag
   */
  item?: string;
  /**
   * @remarks
   * Product description information.
   * 
   * @example
   * des
   */
  itemDesc?: string;
  /**
   * @remarks
   * Sample.
   * 
   * @example
   * sample
   */
  sampleItem?: string;
  /**
   * @remarks
   * List of fields corresponding to the sample.
   */
  sampleItems?: string[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      itemDesc: 'ItemDesc',
      sampleItem: 'SampleItem',
      sampleItems: 'SampleItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: 'string',
      itemDesc: 'string',
      sampleItem: 'string',
      sampleItems: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.sampleItems)) {
      $dara.Model.validateArray(this.sampleItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubTaskResultResponseBodyResultObjectFileCol extends $dara.Model {
  /**
   * @remarks
   * A0.
   * 
   * @example
   * A0
   */
  a0?: string;
  /**
   * @remarks
   * A1.
   * 
   * @example
   * A1
   */
  a1?: string;
  /**
   * @remarks
   * A10.
   * 
   * @example
   * A10
   */
  a10?: string;
  /**
   * @remarks
   * A11.
   * 
   * @example
   * A11
   */
  a11?: string;
  /**
   * @remarks
   * A2.
   * 
   * @example
   * A2
   */
  a2?: string;
  /**
   * @remarks
   * A3.
   * 
   * @example
   * A3
   */
  a3?: string;
  /**
   * @remarks
   * A4.
   * 
   * @example
   * A4
   */
  a4?: string;
  /**
   * @remarks
   * A5.
   * 
   * @example
   * A5
   */
  a5?: string;
  /**
   * @remarks
   * A6.
   * 
   * @example
   * A6
   */
  a6?: string;
  /**
   * @remarks
   * A7.
   * 
   * @example
   * A7
   */
  a7?: string;
  /**
   * @remarks
   * A8.
   * 
   * @example
   * A8
   */
  a8?: string;
  /**
   * @remarks
   * A9.
   * 
   * @example
   * A9
   */
  a9?: string;
  static names(): { [key: string]: string } {
    return {
      a0: 'A0',
      a1: 'A1',
      a10: 'A10',
      a11: 'A11',
      a2: 'A2',
      a3: 'A3',
      a4: 'A4',
      a5: 'A5',
      a6: 'A6',
      a7: 'A7',
      a8: 'A8',
      a9: 'A9',
    };
  }

  static types(): { [key: string]: any } {
    return {
      a0: 'string',
      a1: 'string',
      a10: 'string',
      a11: 'string',
      a2: 'string',
      a3: 'string',
      a4: 'string',
      a5: 'string',
      a6: 'string',
      a7: 'string',
      a8: 'string',
      a9: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubTaskResultResponseBodyResultObjectFile extends $dara.Model {
  /**
   * @remarks
   * Column names.
   */
  col?: GetSubTaskResultResponseBodyResultObjectFileCol[];
  /**
   * @remarks
   * Variable title.
   */
  title?: string[];
  static names(): { [key: string]: string } {
    return {
      col: 'Col',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      col: { 'type': 'array', 'itemType': GetSubTaskResultResponseBodyResultObjectFileCol },
      title: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.col)) {
      $dara.Model.validateArray(this.col);
    }
    if(Array.isArray(this.title)) {
      $dara.Model.validateArray(this.title);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubTaskResultResponseBodyResultObjectLog extends $dara.Model {
  /**
   * @remarks
   * Processing type.
   * 
   * @example
   * RELEASE
   */
  operateType?: string;
  /**
   * @remarks
   * Reason for the service status.
   * 
   * @example
   * PasswordExpired
   */
  reason?: string;
  /**
   * @remarks
   * Time. Unit: ms.
   * 
   * @example
   * 1760408725312
   */
  time?: number;
  static names(): { [key: string]: string } {
    return {
      operateType: 'OperateType',
      reason: 'Reason',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateType: 'string',
      reason: 'string',
      time: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubTaskResultResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Outputs List Settings.
   */
  config?: GetSubTaskResultResponseBodyResultObjectConfig[];
  /**
   * @remarks
   * Additional extension information.
   * 
   * @example
   * {\\"approveNodeInfo\\":[{\\"approver\\":[\\"325337\\",\\"270729\\",\\"290278\\",\\"371000\\",\\"175234\\",\\"237109\\"],\\"nodeName\\":\\"团队审批人\\",\\"nodeCode\\":1,\\"approveRule\\":\\"ONE\\"}]}
   */
  extraInfo?: string;
  /**
   * @remarks
   * File.
   */
  file?: GetSubTaskResultResponseBodyResultObjectFile;
  /**
   * @remarks
   * File name.
   * 
   * @example
   * enorl-20w-0926.csv
   */
  fileName?: string;
  /**
   * @remarks
   * File type.
   * 
   * @example
   * CSV
   */
  fileType?: string;
  /**
   * @remarks
   * File URL.
   * 
   * @example
   * saf/cpoc/34cd7959590ef568086035b956210495/1760580976089_XN_test_1016_100000.csv
   */
  fileUrl?: string;
  /**
   * @remarks
   * Is charged.
   * 
   * @example
   * 是否收费
   */
  isCharge?: boolean;
  /**
   * @remarks
   * Log content.
   */
  log?: GetSubTaskResultResponseBodyResultObjectLog[];
  /**
   * @remarks
   * Reason.
   * 
   * @example
   * managed.by.apig
   */
  reason?: string;
  /**
   * @remarks
   * Result URL.
   * 
   * @example
   * http://shuanglu-prod.oss-cn-shanghai-finance-1-pub.aliyuncs.com/idrs/24/local/remoteresult?Expires=1756436489&OSSAccessKeyId=****&Signature=****
   */
  resultUrl?: string;
  /**
   * @remarks
   * Schedule type.
   * 
   * @example
   * rate
   */
  scheduleType?: string;
  /**
   * @remarks
   * Service code.
   * 
   * @example
   * anti_fraud_customed_v3
   */
  serviceCode?: string;
  /**
   * @remarks
   * Service name.
   * 
   * @example
   * 申请反欺诈（定制增强版）
   */
  serviceName?: string;
  /**
   * @remarks
   * Status.
   * 
   * @example
   * CLASS_CHANGING
   */
  status?: string;
  /**
   * @remarks
   * Job ID.
   * 
   * @example
   * 19150
   */
  taskId?: string;
  /**
   * @remarks
   * Task Name.
   * 
   * @example
   * icekredit_model_A_2025a_508185
   */
  taskName?: string;
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * 5129547232
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      extraInfo: 'ExtraInfo',
      file: 'File',
      fileName: 'FileName',
      fileType: 'FileType',
      fileUrl: 'FileUrl',
      isCharge: 'IsCharge',
      log: 'Log',
      reason: 'Reason',
      resultUrl: 'ResultUrl',
      scheduleType: 'ScheduleType',
      serviceCode: 'ServiceCode',
      serviceName: 'ServiceName',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'array', 'itemType': GetSubTaskResultResponseBodyResultObjectConfig },
      extraInfo: 'string',
      file: GetSubTaskResultResponseBodyResultObjectFile,
      fileName: 'string',
      fileType: 'string',
      fileUrl: 'string',
      isCharge: 'boolean',
      log: { 'type': 'array', 'itemType': GetSubTaskResultResponseBodyResultObjectLog },
      reason: 'string',
      resultUrl: 'string',
      scheduleType: 'string',
      serviceCode: 'string',
      serviceName: 'string',
      status: 'string',
      taskId: 'string',
      taskName: 'string',
      userId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.config)) {
      $dara.Model.validateArray(this.config);
    }
    if(this.file && typeof (this.file as any).validate === 'function') {
      (this.file as any).validate();
    }
    if(Array.isArray(this.log)) {
      $dara.Model.validateArray(this.log);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubTaskResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 0A519CFA-0EEC-580A-A5C1-F9C653FB2354
   */
  requestId?: string;
  /**
   * @remarks
   * Return Result.
   */
  resultObject?: GetSubTaskResultResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: GetSubTaskResultResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

