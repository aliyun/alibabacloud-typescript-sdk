// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateListenerLogConfigRequestAccessLogTracingConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the Xtrace feature. Valid values:
   * 
   * - **true**: yes.
   * - **false** (default): no.
   * 
   * > You can set this parameter to **true** only when the **AccessLogEnabled** switch for the instance is turned on.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  tracingEnabled?: boolean;
  /**
   * @remarks
   * The Xtrace sampling rate.
   * 
   * Valid values: **1** to **10000**.
   * 
   * > This parameter takes effect only when **TracingEnabled** is set to **true**.
   * 
   * @example
   * 100
   */
  tracingSample?: number;
  /**
   * @remarks
   * The Xtrace type. Valid values: **Zipkin** and **OpenTelemetry**.
   * 
   * > This parameter takes effect only when **TracingEnabled** is set to **true**.
   * 
   * @example
   * Zipkin
   */
  tracingType?: string;
  static names(): { [key: string]: string } {
    return {
      tracingEnabled: 'TracingEnabled',
      tracingSample: 'TracingSample',
      tracingType: 'TracingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tracingEnabled: 'boolean',
      tracingSample: 'number',
      tracingType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerLogConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to record custom header fields in access logs. Valid values:
   * 
   * - **true**: yes.
   * - **false** (default): no.
   * 
   * > You can set this parameter to **true** only when the **AccessLogEnabled** switch for the instance is turned on.
   * 
   * @example
   * true
   */
  accessLogRecordCustomizedHeadersEnabled?: boolean;
  /**
   * @remarks
   * The Xtrace configuration.
   */
  accessLogTracingConfig?: UpdateListenerLogConfigRequestAccessLogTracingConfig;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the value from your client and make sure that the value is unique across different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B******
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run and does not update the log configuration of the listener. The system checks whether required parameters are specified, the request format is valid, and the service limits are met. If the request fails the dry run, an error is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): performs a dry run and sends the request. If the request passes the dry run, an **HTTP_2xx** status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the listener for the application load balancing instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lsn-o4u54y73wq7b******
   */
  listenerId?: string;
  static names(): { [key: string]: string } {
    return {
      accessLogRecordCustomizedHeadersEnabled: 'AccessLogRecordCustomizedHeadersEnabled',
      accessLogTracingConfig: 'AccessLogTracingConfig',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLogRecordCustomizedHeadersEnabled: 'boolean',
      accessLogTracingConfig: UpdateListenerLogConfigRequestAccessLogTracingConfig,
      clientToken: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
    };
  }

  validate() {
    if(this.accessLogTracingConfig && typeof (this.accessLogTracingConfig as any).validate === 'function') {
      (this.accessLogTracingConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

