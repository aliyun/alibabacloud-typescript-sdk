// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

