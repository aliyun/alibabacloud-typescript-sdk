// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GatewayOptionLogConfigDetails extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  logEnabled?: boolean;
  logStoreName?: string;
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
  sample?: number;
  serviceId?: number;
  servicePort?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  traceEnabled?: boolean;
  /**
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
  disableHttp2Alpn?: boolean;
  enableHardwareAcceleration?: boolean;
  enableWaf?: boolean;
  logConfigDetails?: GatewayOptionLogConfigDetails;
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

