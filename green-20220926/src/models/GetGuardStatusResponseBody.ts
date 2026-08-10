// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGuardStatusResponseBodyLogScanStatus extends $dara.Model {
  /**
   * @remarks
   * The status. Valid values:
   * - enabled: Running.
   * - disabled: Not accessed.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * ai_app_scan_bailian
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGuardStatusResponseBodyProtectionStatus extends $dara.Model {
  /**
   * @remarks
   * The status. Valid values:
   * - enabled: Running.
   * - disabled: Not accessed.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * api
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGuardStatusResponseBodyRealTimeStatus extends $dara.Model {
  /**
   * @remarks
   * The status. Valid values:
   * - enabled: Running.
   * - disabled: Not accessed.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * api
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGuardStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of log scan statistics.
   */
  logScanStatus?: GetGuardStatusResponseBodyLogScanStatus[];
  /**
   * @remarks
   * The list of protection status statistics.
   */
  protectionStatus?: GetGuardStatusResponseBodyProtectionStatus[];
  /**
   * @remarks
   * The list of real-time protection statistics.
   */
  realTimeStatus?: GetGuardStatusResponseBodyRealTimeStatus[];
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify a request. This ID can be used to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logScanStatus: 'LogScanStatus',
      protectionStatus: 'ProtectionStatus',
      realTimeStatus: 'RealTimeStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logScanStatus: { 'type': 'array', 'itemType': GetGuardStatusResponseBodyLogScanStatus },
      protectionStatus: { 'type': 'array', 'itemType': GetGuardStatusResponseBodyProtectionStatus },
      realTimeStatus: { 'type': 'array', 'itemType': GetGuardStatusResponseBodyRealTimeStatus },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logScanStatus)) {
      $dara.Model.validateArray(this.logScanStatus);
    }
    if(Array.isArray(this.protectionStatus)) {
      $dara.Model.validateArray(this.protectionStatus);
    }
    if(Array.isArray(this.realTimeStatus)) {
      $dara.Model.validateArray(this.realTimeStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

