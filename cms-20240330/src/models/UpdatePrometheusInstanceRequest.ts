// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePrometheusInstanceRequest extends $dara.Model {
  /**
   * @example
   * 365
   * 
   * **if can be null:**
   * true
   */
  archiveDuration?: number;
  /**
   * @example
   * 0.0.0.0/0
   */
  authFreeReadPolicy?: string;
  /**
   * @example
   * true
   */
  authFreeWritePolicy?: string;
  /**
   * @example
   * true
   */
  enableAuthFreeRead?: boolean;
  /**
   * @example
   * true
   */
  enableAuthFreeWrite?: boolean;
  /**
   * @example
   * true
   */
  enableAuthToken?: boolean;
  /**
   * @example
   * POSTPAY_GB
   */
  paymentType?: string;
  /**
   * @example
   * test-prom-name
   */
  prometheusInstanceName?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @example
   * 90
   */
  storageDuration?: number;
  /**
   * @example
   * default-cms-1500199863951574-cn-shanghai
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      archiveDuration: 'archiveDuration',
      authFreeReadPolicy: 'authFreeReadPolicy',
      authFreeWritePolicy: 'authFreeWritePolicy',
      enableAuthFreeRead: 'enableAuthFreeRead',
      enableAuthFreeWrite: 'enableAuthFreeWrite',
      enableAuthToken: 'enableAuthToken',
      paymentType: 'paymentType',
      prometheusInstanceName: 'prometheusInstanceName',
      status: 'status',
      storageDuration: 'storageDuration',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveDuration: 'number',
      authFreeReadPolicy: 'string',
      authFreeWritePolicy: 'string',
      enableAuthFreeRead: 'boolean',
      enableAuthFreeWrite: 'boolean',
      enableAuthToken: 'boolean',
      paymentType: 'string',
      prometheusInstanceName: 'string',
      status: 'string',
      storageDuration: 'number',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

