// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GatewayOptionLogConfigDetails extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to activate Simple Log Service.
   * 
   * Valid value:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  logEnabled?: boolean;
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * @example
   * name
   */
  logStoreName?: string;
  /**
   * @remarks
   * The name of the destination Simple Log Service project.
   * 
   * @example
   * project
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      logEnabled: 'LogEnabled',
      logStoreName: 'LogStoreName',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logEnabled: 'boolean',
      logStoreName: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatewayOptionTraceDetails extends $dara.Model {
  /**
   * @remarks
   * The sampling rate of Tracing Analysis.
   * 
   * @example
   * 10
   */
  sample?: number;
  /**
   * @remarks
   * The ID of the SkyWalking service. This parameter is required if TraceType is set to SKYWALKING.
   * 
   * @example
   * 10458
   */
  serviceId?: number;
  /**
   * @remarks
   * The port of the SkyWalking service. This parameter is required if TraceType is set to SKYWALKING.
   * 
   * @example
   * 80
   */
  servicePort?: string;
  /**
   * @remarks
   * Specifies whether to activate Tracing Analysis.
   * 
   * Valid value:
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  traceEnabled?: boolean;
  /**
   * @remarks
   * The type of Tracing Analysis. Valid values: XTRACE and SKYWALKING.
   * 
   * @example
   * XTRACE
   */
  traceType?: string;
  static names(): { [key: string]: string } {
    return {
      sample: 'Sample',
      serviceId: 'ServiceId',
      servicePort: 'ServicePort',
      traceEnabled: 'TraceEnabled',
      traceType: 'TraceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sample: 'number',
      serviceId: 'number',
      servicePort: 'string',
      traceEnabled: 'boolean',
      traceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatewayOption extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to disable the HTTP/2 protocol.
   * 
   * @example
   * true
   */
  disableHttp2Alpn?: boolean;
  /**
   * @remarks
   * Specifies whether to enable hardware acceleration.
   * 
   * @example
   * true
   */
  enableHardwareAcceleration?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Web Application Firewall (WAF).
   * 
   * @example
   * true
   */
  enableWaf?: boolean;
  /**
   * @remarks
   * The description of Simple Log Service.
   */
  logConfigDetails?: GatewayOptionLogConfigDetails;
  /**
   * @remarks
   * The data structure.
   */
  traceDetails?: GatewayOptionTraceDetails;
  static names(): { [key: string]: string } {
    return {
      disableHttp2Alpn: 'DisableHttp2Alpn',
      enableHardwareAcceleration: 'EnableHardwareAcceleration',
      enableWaf: 'EnableWaf',
      logConfigDetails: 'LogConfigDetails',
      traceDetails: 'TraceDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableHttp2Alpn: 'boolean',
      enableHardwareAcceleration: 'boolean',
      enableWaf: 'boolean',
      logConfigDetails: GatewayOptionLogConfigDetails,
      traceDetails: GatewayOptionTraceDetails,
    };
  }

  validate() {
    if(this.logConfigDetails && typeof (this.logConfigDetails as any).validate === 'function') {
      (this.logConfigDetails as any).validate();
    }
    if(this.traceDetails && typeof (this.traceDetails as any).validate === 'function') {
      (this.traceDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

