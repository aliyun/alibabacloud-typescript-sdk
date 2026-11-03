// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataInstancesValueListenersValue extends $dara.Model {
  /**
   * @remarks
   * The listener protocol.
   * 
   * @example
   * TCPSSL
   */
  protocol?: string;
  /**
   * @remarks
   * The load balancing listener port.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The NLB listener status. Valid values:
   * 
   * - **Creating**: The listener is being created.
   * - **Configuring**: The listener is being configured.
   * - **Bounded**: The listener is running normally.
   * - **Unbinding**: The listener is being deleted.
   * - **Failed**: The listener is unavailable.
   * 
   * @example
   * Bounded
   */
  status?: string;
  /**
   * @remarks
   * The Open Ports of the instance.
   * 
   * @example
   * 8080
   */
  targetPort?: number;
  /**
   * @remarks
   * The server certificate.
   * 
   * @example
   * 123157******
   */
  certIds?: string;
  static names(): { [key: string]: string } {
    return {
      protocol: 'Protocol',
      port: 'Port',
      status: 'Status',
      targetPort: 'TargetPort',
      certIds: 'CertIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocol: 'string',
      port: 'number',
      status: 'string',
      targetPort: 'number',
      certIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

