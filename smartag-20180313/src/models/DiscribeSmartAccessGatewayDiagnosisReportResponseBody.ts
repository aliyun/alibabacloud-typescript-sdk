// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsItemsCN extends $dara.Model {
  /**
   * @remarks
   * The diagnosis suggestion.
   * 
   * @example
   * Check the leased-line port link wiring first, and then go to the local Leased Line Management page for configuration.
   */
  advice?: string[];
  /**
   * @remarks
   * The diagnosis result.
   * 
   * @example
   * All leased-line ports have link anomalies or missing port IPs: Port 4.
   */
  details?: string[];
  /**
   * @remarks
   * The severity level of the diagnosis result for the diagnosis item.
   * 
   * - **严重** (Critical): indicates that the issue of the diagnosis item may affect service running. We recommend that you handle the issue at the earliest opportunity.
   * - **警告** (Warning): indicates that the diagnosis item has an issue. Handle the issue based on the suggestion.
   * - **正常** (Normal): indicates that the diagnosis item is running as expected. No action is required.
   * 
   * @example
   * Normal
   */
  itemLevel?: string;
  /**
   * @remarks
   * The name of the diagnosis item.
   * 
   * @example
   * Leased line port configuration check
   */
  itemName?: string;
  /**
   * @remarks
   * The diagnosis type to which the diagnosis item belongs.
   * 
   * - **配置** (Configuration): indicates the **SAG configuration** type.
   * - **业务** (Service): indicates the **service quality** type.
   * - **公网** (Internet): indicates the **Internet quality** type.
   * 
   * @example
   * Configuration
   */
  itemType?: string;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      details: 'Details',
      itemLevel: 'ItemLevel',
      itemName: 'ItemName',
      itemType: 'ItemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: { 'type': 'array', 'itemType': 'string' },
      details: { 'type': 'array', 'itemType': 'string' },
      itemLevel: 'string',
      itemName: 'string',
      itemType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.advice)) {
      $dara.Model.validateArray(this.advice);
    }
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsItemsEN extends $dara.Model {
  /**
   * @remarks
   * The diagnosis suggestion.
   */
  advice?: string[];
  /**
   * @remarks
   * The diagnosis result.
   */
  details?: string[];
  /**
   * @remarks
   * The severity level of the diagnosis result for the diagnosis item.
   * 
   * - **ERROR**: indicates that the issue of the diagnosis item may affect service running. We recommend that you handle the issue at the earliest opportunity.
   * - **WARNING**: indicates that the diagnosis item has an issue. Handle the issue based on the suggestion.
   * - **INFO**: indicates that the diagnosis item is running as expected. No action is required.
   * 
   * @example
   * ERROR
   */
  itemLevel?: string;
  /**
   * @remarks
   * The name of the diagnosis item.
   * 
   * @example
   * Express Connect Port Configuration
   */
  itemName?: string;
  /**
   * @remarks
   * The diagnosis type to which the diagnosis item belongs.
   * 
   * - **Config**: indicates the **SAG configuration** type.
   * - **Service**: indicates the **service quality** type.
   * - **Internet**: indicates the **Internet quality** type.
   * 
   * @example
   * Config
   */
  itemType?: string;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      details: 'Details',
      itemLevel: 'ItemLevel',
      itemName: 'ItemName',
      itemType: 'ItemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: { 'type': 'array', 'itemType': 'string' },
      details: { 'type': 'array', 'itemType': 'string' },
      itemLevel: 'string',
      itemName: 'string',
      itemType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.advice)) {
      $dara.Model.validateArray(this.advice);
    }
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsItems extends $dara.Model {
  /**
   * @remarks
   * The diagnosis result in Chinese.
   */
  CN?: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsItemsCN;
  /**
   * @remarks
   * The diagnosis result in English.
   */
  EN?: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsItemsEN;
  /**
   * @remarks
   * The timestamp when the diagnosis of the diagnosis item ended.
   * 
   * @example
   * 1602741570596
   */
  endTime?: number;
  /**
   * @remarks
   * The name of the diagnosis item, which is the unique identifier of the diagnosis item.
   * 
   * @example
   * eccConfigCheck
   */
  itemName?: string;
  /**
   * @remarks
   * The severity level of the diagnosis result for the diagnosis item.
   * 
   * - **error**: Critical.
   * - **warning**: Warning.
   * - **info**: Normal.
   * 
   * @example
   * error
   */
  level?: string;
  /**
   * @remarks
   * The timestamp when the diagnosis of the diagnosis item started.
   * 
   * @example
   * 1602741570567
   */
  startTime?: number;
  /**
   * @remarks
   * The diagnosis type to which the diagnosis item belongs.
   * 
   * - **config**: SAG configuration.
   * - **internet**: Internet quality.
   * - **biz**: Service quality.
   * 
   * @example
   * config
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      CN: 'CN',
      EN: 'EN',
      endTime: 'EndTime',
      itemName: 'ItemName',
      level: 'Level',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CN: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsItemsCN,
      EN: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsItemsEN,
      endTime: 'number',
      itemName: 'string',
      level: 'string',
      startTime: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.CN && typeof (this.CN as any).validate === 'function') {
      (this.CN as any).validate();
    }
    if(this.EN && typeof (this.EN as any).validate === 'function') {
      (this.EN as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsStatistics extends $dara.Model {
  /**
   * @remarks
   * The number of diagnosis items with the **Error** severity level.
   * 
   * @example
   * 5
   */
  error?: number;
  /**
   * @remarks
   * The number of diagnosis items with the **Info** severity level.
   * 
   * @example
   * 3
   */
  info?: number;
  /**
   * @remarks
   * The total number of diagnosis items under the current diagnosis type.
   * 
   * @example
   * 10
   */
  total?: number;
  /**
   * @remarks
   * The number of diagnosis items with the **Warning** severity level.
   * 
   * @example
   * 2
   */
  warning?: number;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      info: 'Info',
      total: 'Total',
      warning: 'Warning',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'number',
      info: 'number',
      total: 'number',
      warning: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetails extends $dara.Model {
  /**
   * @remarks
   * The list of detailed information about diagnosis items.
   */
  items?: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsItems[];
  /**
   * @remarks
   * The statistics on the severity levels of diagnosis items under the current diagnosis type.
   */
  statistics?: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsStatistics;
  /**
   * @remarks
   * The diagnosis type.
   * 
   * - **config**: SAG configuration.
   * - **internet**: Internet quality.
   * - **biz**: Service quality.
   * 
   * @example
   * config
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      statistics: 'Statistics',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsItems },
      statistics: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsStatistics,
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    if(this.statistics && typeof (this.statistics as any).validate === 'function') {
      (this.statistics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultLevel extends $dara.Model {
  /**
   * @remarks
   * The diagnosis result level for service quality.
   * 
   * @example
   * warning
   */
  biz?: string;
  /**
   * @remarks
   * The diagnosis result level for SAG configuration.
   * 
   * @example
   * info
   */
  configuration?: string;
  /**
   * @remarks
   * The overall diagnosis result level.
   * 
   * - **error**: Critical.
   * - **warning**: Warning.
   * - **info**: Normal.
   * 
   * @example
   * error
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      biz: 'Biz',
      configuration: 'Configuration',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      biz: 'string',
      configuration: 'string',
      total: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultStatistics extends $dara.Model {
  /**
   * @remarks
   * The total number of diagnosis items with the **Error** severity level.
   * 
   * @example
   * 2
   */
  error?: number;
  /**
   * @remarks
   * The total number of diagnosis items with the **Info** severity level.
   * 
   * @example
   * 5
   */
  info?: number;
  /**
   * @remarks
   * The total number of all diagnosis items.
   * 
   * @example
   * 10
   */
  total?: number;
  /**
   * @remarks
   * The total number of diagnosis items with the **Warning** severity level.
   * 
   * @example
   * 3
   */
  warning?: number;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      info: 'Info',
      total: 'Total',
      warning: 'Warning',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'number',
      info: 'number',
      total: 'number',
      warning: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResult extends $dara.Model {
  /**
   * @remarks
   * The type of the Smart Access Gateway device.
   * 
   * - **sag-1000**
   * - **sag-100WM**
   * 
   * @example
   * sag-1000
   */
  boxType?: string;
  /**
   * @remarks
   * The software version that runs on the Smart Access Gateway device.
   * 
   * @example
   * 2.1.0
   */
  boxVersion?: string;
  /**
   * @remarks
   * The list of diagnosis results.
   */
  details?: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetails[];
  /**
   * @remarks
   * The diagnosis ID.
   * 
   * @example
   * dia-sag42c3t703trh02olv5rf****
   */
  diagnoseId?: string;
  /**
   * @remarks
   * The timestamp when the diagnosis ended.
   * 
   * @example
   * 160274157
   */
  endTime?: number;
  /**
   * @remarks
   * The number of completed diagnosis items.
   * 
   * @example
   * 15
   */
  finishedNumber?: number;
  /**
   * @remarks
   * The ID of the Smart Access Gateway instance.
   * 
   * @example
   * sag-0nnteglltw6z4b***
   */
  instanceId?: string;
  /**
   * @remarks
   * The diagnosis result level.
   */
  level?: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultLevel;
  /**
   * @remarks
   * The monitoring version used by the Smart Access Gateway device.
   * 
   * @example
   * 2.0.2.9
   */
  monitorVersion?: string;
  /**
   * @remarks
   * The completion percentage of the diagnosis report.
   * 
   * @example
   * 100
   */
  percent?: number;
  /**
   * @remarks
   * The status of uploading the diagnosis report to SLS.
   * 
   * - **0**: The upload failed.
   * - **1**: The upload was successful.
   * 
   * @example
   * 0
   */
  reportSLSSuccess?: number;
  /**
   * @remarks
   * The serial number of the Smart Access Gateway device.
   * 
   * @example
   * sag42c3****
   */
  SN?: string;
  /**
   * @remarks
   * The timestamp when the diagnosis started.
   * 
   * @example
   * 160274157
   */
  startTime?: number;
  /**
   * @remarks
   * The diagnosis state.
   * 
   * - **processing**: The diagnosis is in progress.
   * - **finished**: The diagnosis is successful.
   * - **failed**: The diagnosis failed.
   * - **error**: An error occurred during the diagnosis.
   * - **upload_to_sls_fail**: The diagnosis report failed to be uploaded.
   * 
   * @example
   * finished
   */
  state?: string;
  /**
   * @remarks
   * The overall statistics of diagnosis item results.
   */
  statistics?: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultStatistics;
  /**
   * @remarks
   * The storage type.
   * 
   * Value: **both**, which indicates that the diagnosis report is stored on both the Smart Access Gateway device and in Log Service (SLS).
   * 
   * @example
   * both
   */
  storeType?: string;
  /**
   * @remarks
   * The total number of diagnosis result entries.
   * 
   * @example
   * 15
   */
  totalNumber?: number;
  /**
   * @remarks
   * The ID of the account to which the Smart Access Gateway instance belongs.
   * 
   * @example
   * 1688000000000000
   */
  UId?: string;
  /**
   * @remarks
   * The type of user who initiated the diagnosis. Value: **user**.
   * 
   * @example
   * user
   */
  userLevel?: string;
  static names(): { [key: string]: string } {
    return {
      boxType: 'BoxType',
      boxVersion: 'BoxVersion',
      details: 'Details',
      diagnoseId: 'DiagnoseId',
      endTime: 'EndTime',
      finishedNumber: 'FinishedNumber',
      instanceId: 'InstanceId',
      level: 'Level',
      monitorVersion: 'MonitorVersion',
      percent: 'Percent',
      reportSLSSuccess: 'ReportSLSSuccess',
      SN: 'SN',
      startTime: 'StartTime',
      state: 'State',
      statistics: 'Statistics',
      storeType: 'StoreType',
      totalNumber: 'TotalNumber',
      UId: 'UId',
      userLevel: 'UserLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxType: 'string',
      boxVersion: 'string',
      details: { 'type': 'array', 'itemType': DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetails },
      diagnoseId: 'string',
      endTime: 'number',
      finishedNumber: 'number',
      instanceId: 'string',
      level: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultLevel,
      monitorVersion: 'string',
      percent: 'number',
      reportSLSSuccess: 'number',
      SN: 'string',
      startTime: 'number',
      state: 'string',
      statistics: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultStatistics,
      storeType: 'string',
      totalNumber: 'number',
      UId: 'string',
      userLevel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    if(this.level && typeof (this.level as any).validate === 'function') {
      (this.level as any).validate();
    }
    if(this.statistics && typeof (this.statistics as any).validate === 'function') {
      (this.statistics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscribeSmartAccessGatewayDiagnosisReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The diagnosis report of the Smart Access Gateway device.
   */
  diagnoseResult?: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7D6E3AB-D41A-42E3-8D4E-97B145F4B7C3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      diagnoseResult: 'DiagnoseResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnoseResult: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.diagnoseResult && typeof (this.diagnoseResult as any).validate === 'function') {
      (this.diagnoseResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

