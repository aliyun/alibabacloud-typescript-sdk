// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GatewayOptionLogConfigDetails } from "./GatewayOptionLogConfigDetails";
import { GatewayOptionTraceDetails } from "./GatewayOptionTraceDetails";


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

