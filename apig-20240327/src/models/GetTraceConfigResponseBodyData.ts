// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTraceConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Whether to Enable Tracing:
   * true: Enabled
   * false: Disabled
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Sampling Rate
   * 
   * @example
   * 50
   */
  sampleRatio?: number;
  /**
   * @remarks
   * Service ID, present when the tracing type is SKYWALKING
   * 
   * @example
   * ss-co370icmjeu****
   */
  serviceId?: string;
  /**
   * @remarks
   * 服务端口，链路追踪类型为SKYWALKING时存在该参数
   * 
   * @example
   * 8090
   */
  servicePort?: string;
  /**
   * @remarks
   * Tracing Type:
   * - XTRACE
   * - SKYWALKING
   * - OPENTELEMETRY
   * - OTSKYWALKING
   * 
   * @example
   * SKYWALKING
   */
  traceType?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      sampleRatio: 'sampleRatio',
      serviceId: 'serviceId',
      servicePort: 'servicePort',
      traceType: 'traceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      sampleRatio: 'number',
      serviceId: 'string',
      servicePort: 'string',
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

