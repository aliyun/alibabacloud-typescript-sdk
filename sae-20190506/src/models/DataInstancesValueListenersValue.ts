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
   * The listener port of the NLB instance.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The status of the NLB listener.
   * 
   * *   **Creating**: The listener is being created.
   * *   **Configuring**: The listener is being configured.
   * *   **Bounded**: The listener runs as expected.
   * *   **Unbinding**: The listener is being deleted.
   * *   **Failed**: The listener is unavailable.
   * 
   * @example
   * Bounded
   */
  status?: string;
  /**
   * @remarks
   * The open ports of the NLB instance.
   * 
   * @example
   * 8080
   */
  targetPort?: number;
  /**
   * @remarks
   * The server certificates.
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

