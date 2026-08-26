// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PrometheusInstanceStoreConfig } from "./PrometheusInstanceStoreConfig";


export class UpdatePrometheusInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The number of days for automatic archiving after storage expires. A value of 0 indicates no archiving. Valid values for archive days:
   * V1: 1 to 365 days. Only supported for billing by metric write volume.
   * V2: 1 to 3650 days (3650 indicates permanent retention).
   * 
   * @example
   * 365
   * 
   * **if can be null:**
   * true
   */
  archiveDuration?: number;
  /**
   * @remarks
   * The authentication-free read policy. IP CIDR blocks and VPC IDs are supported.
   * 
   * @example
   * {
   *   "SourceIp": [
   *     "192.168.1.0/24",
   *     "172.168.2.22"
   *   ],
   *   "SourceVpc": [
   *     "vpc-xx1",
   *     "vpc-xx2"
   *   ]
   * }
   */
  authFreeReadPolicy?: string;
  /**
   * @remarks
   * The authentication-free read policy. IP CIDR blocks and VPC IDs are supported.
   * 
   * @example
   * {
   *   "SourceIp": [
   *     "192.168.1.0/24",
   *     "172.168.2.22"
   *   ],
   *   "SourceVpc": [
   *     "vpc-xx1",
   *     "vpc-xx2"
   *   ]
   * }
   */
  authFreeWritePolicy?: string;
  /**
   * @remarks
   * Specifies whether to enable authentication-free read.
   * 
   * @example
   * true
   */
  enableAuthFreeRead?: boolean;
  /**
   * @remarks
   * Specifies whether to enable authentication-free write.
   * 
   * @example
   * true
   */
  enableAuthFreeWrite?: boolean;
  /**
   * @remarks
   * Specifies whether to enable access token authentication.
   * 
   * @example
   * true
   */
  enableAuthToken?: boolean;
  /**
   * @remarks
   * The billing method. This can be modified only once during the instance lifetime:
   * POSTPAY: pay-as-you-go by metric reporting volume.
   * POSTPAY_GB: pay-as-you-go by metric write volume.
   * 
   * @example
   * POSTPAY_GB
   */
  paymentType?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * test-prom-name
   */
  prometheusInstanceName?: string;
  /**
   * @remarks
   * Instance storage database status of the instance. Only RUNNING is supported. If left empty, instance storage database status is not changed.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The storage duration (days):
   * By write volume: 90, 180.
   * By metric reporting volume: 15, 30, 60, 90, 180.
   * 
   * @example
   * 90
   */
  storageDuration?: number;
  /**
   * @remarks
   * The Prometheus storage configuration.
   */
  storeConfig?: PrometheusInstanceStoreConfig;
  /**
   * @remarks
   * The workspace to which the instance belongs.
   * 
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
      storeConfig: 'storeConfig',
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
      storeConfig: PrometheusInstanceStoreConfig,
      workspace: 'string',
    };
  }

  validate() {
    if(this.storeConfig && typeof (this.storeConfig as any).validate === 'function') {
      (this.storeConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

