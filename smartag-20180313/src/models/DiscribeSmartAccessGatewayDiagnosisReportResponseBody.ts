// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsItemsCN extends $dara.Model {
  /**
   * @remarks
   * The suggestion for the diagnosis.
   */
  advice?: string[];
  /**
   * @remarks
   * The diagnosis.
   */
  details?: string[];
  /**
   * @remarks
   * The diagnosis level of the item. Valid values:
   * 
   * *   **ERROR**: indicates that the item has an issue that may affect your services. We recommend that you handle the issue at the earliest opportunity.
   * *   **WARNING**: indicates that the item has an issue. You can handle the issue based on your business requirements.
   * *   **INFO**: indicates that the item is working as expected. No additional operation is required.
   */
  itemLevel?: string;
  /**
   * @remarks
   * The name of the item.
   */
  itemName?: string;
  /**
   * @remarks
   * The type of the item. Valid values:
   * 
   * *   **Config**: **SAG configuration**
   * *   **Service**: **service quality**
   * *   **Internet**: **quality of connections to the Internet**
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
   * The suggestion for the diagnosis.
   */
  advice?: string[];
  /**
   * @remarks
   * The diagnosis.
   */
  details?: string[];
  /**
   * @remarks
   * The diagnosis level of the item. Valid values:
   * 
   * *   **ERROR**: indicates that the item has an issue that may affect your services. We recommend that you handle the issue at the earliest opportunity.
   * *   **WARNING**: indicates that the item has an issue. You can handle the issue based on your business requirements.
   * *   **INFO**: indicates that the item is working as expected. No additional operation is required.
   * 
   * @example
   * ERROR
   */
  itemLevel?: string;
  /**
   * @remarks
   * The name of the item.
   * 
   * @example
   * Express Connect Port Configuration
   */
  itemName?: string;
  /**
   * @remarks
   * The type of the item. Valid values:
   * 
   * *   **Config**: **SAG configuration**
   * *   **Service**: **service quality**
   * *   **Internet**: **quality of connections to the Internet**
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
   * The diagnosis report in Chinese.
   */
  CN?: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsItemsCN;
  /**
   * @remarks
   * The diagnosis report in English.
   */
  EN?: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsItemsEN;
  /**
   * @remarks
   * The timestamp when the system finishes diagnosing the item.
   * 
   * @example
   * 1602741570596
   */
  endTime?: number;
  /**
   * @remarks
   * The name of the item, which is the unique identifier of the item.
   * 
   * @example
   * eccConfigCheck
   */
  itemName?: string;
  /**
   * @remarks
   * The diagnosis level of the item. Valid values:
   * 
   * *   **error**: severe
   * *   **warning**: warning
   * *   **info**: normal
   * 
   * @example
   * error
   */
  level?: string;
  /**
   * @remarks
   * The timestamp when the system starts to diagnose the item.
   * 
   * @example
   * 1602741570567
   */
  startTime?: number;
  /**
   * @remarks
   * The type of the item. Valid values:
   * 
   * *   **config**: SAG configuration
   * *   **internet**: quality of connections to the Internet
   * *   **biz**: service quality
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
   * The number of items of the **ERROR** level.
   * 
   * @example
   * 5
   */
  error?: number;
  /**
   * @remarks
   * The number of items of the **INFO** level.
   * 
   * @example
   * 3
   */
  info?: number;
  /**
   * @remarks
   * The total number of items for the current diagnosis type.
   * 
   * @example
   * 10
   */
  total?: number;
  /**
   * @remarks
   * The number of items of the **WARNING** level.
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
   * The list of items diagnosed.
   */
  items?: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsItems[];
  /**
   * @remarks
   * The information about items of each diagnosis level for the current diagnosis type.
   */
  statistics?: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsStatistics;
  /**
   * @remarks
   * The type of the diagnosis. Valid values:
   * 
   * *   **config**: SAG configuration
   * *   **internet**: quality of connections to the Internet
   * *   **biz**: service quality
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
   * The diagnosis level of the service quality.
   * 
   * @example
   * warning
   */
  biz?: string;
  /**
   * @remarks
   * The diagnosis level of the SAG configuration.
   * 
   * @example
   * info
   */
  configuration?: string;
  /**
   * @remarks
   * The overall diagnosis level.
   * 
   * *   **error**: severe
   * *   **warning**: warning
   * *   **info**: normal
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
   * The number of items of the **ERROR** level.
   * 
   * @example
   * 2
   */
  error?: number;
  /**
   * @remarks
   * The number of items of the **INFO** level.
   * 
   * @example
   * 5
   */
  info?: number;
  /**
   * @remarks
   * The total number of items.
   * 
   * @example
   * 10
   */
  total?: number;
  /**
   * @remarks
   * The number of items of the **WARNING** level.
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
   * The model of the SAG device.
   * 
   * *   **sag-1000**
   * *   **sag-100WM**
   * 
   * @example
   * sag-1000
   */
  boxType?: string;
  /**
   * @remarks
   * The version of the SAG device.
   * 
   * @example
   * 2.1.0
   */
  boxVersion?: string;
  /**
   * @remarks
   * The list of diagnoses that are returned.
   */
  details?: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetails[];
  /**
   * @remarks
   * The ID of the diagnosis.
   * 
   * @example
   * dia-sag42c3t703trh02olv5rf****
   */
  diagnoseId?: string;
  /**
   * @remarks
   * The timestamp when the system finishes diagnosing the item.
   * 
   * @example
   * 160274157
   */
  endTime?: number;
  /**
   * @remarks
   * The number of items that are diagnosed.
   * 
   * @example
   * 15
   */
  finishedNumber?: number;
  /**
   * @remarks
   * The ID of the SAG instance.
   * 
   * @example
   * sag-0nnteglltw6z4b***
   */
  instanceId?: string;
  /**
   * @remarks
   * The diagnosis level.
   */
  level?: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultLevel;
  /**
   * @remarks
   * The version of the monitoring feature that is used by the SAG device.
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
   * The status of the diagnosis report to be uploaded to Log Service.
   * 
   * *   **0**: The system failed to upload the report.
   * *   **1**: The system has uploaded the report to Log Service.
   * 
   * @example
   * 0
   */
  reportSLSSuccess?: number;
  /**
   * @remarks
   * The serial number of the SAG device.
   * 
   * @example
   * sag42c3****
   */
  SN?: string;
  /**
   * @remarks
   * The timestamp when the system starts to diagnose the item.
   * 
   * @example
   * 160274157
   */
  startTime?: number;
  /**
   * @remarks
   * The diagnosis status. Valid values:
   * 
   * *   **processing**: The SAG device is being diagnosed.
   * *   **finished**: The SAG device is diagnosed.
   * *   **failed**: The system failed to diagnose the SAG device.
   * *   **error**: A diagnostic error occurred.
   * *   **upload_to_sls_fail**: The system failed to upload the diagnosis report.
   * 
   * @example
   * finished
   */
  state?: string;
  /**
   * @remarks
   * The overall diagnosis level.
   */
  statistics?: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultStatistics;
  /**
   * @remarks
   * The storage type.
   * 
   * The value is set to **both**, which indicates that the data is stored in the SAG device and Log Service.
   * 
   * @example
   * both
   */
  storeType?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 15
   */
  totalNumber?: number;
  /**
   * @remarks
   * The user ID (UID) of the Alibaba Cloud account to which the SAG instance belongs.
   * 
   * @example
   * 1688000000000000
   */
  UId?: string;
  /**
   * @remarks
   * The type of user that initiated the diagnostics. The value is set to **user**.
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
   * The diagnosis report of the SAG device.
   */
  diagnoseResult?: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResult;
  /**
   * @remarks
   * The ID of the request.
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

