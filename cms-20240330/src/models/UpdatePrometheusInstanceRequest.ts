// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PrometheusInstanceStoreConfig } from "./PrometheusInstanceStoreConfig";


export class UpdatePrometheusInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The number of days to automatically archive and retain data after the storage period expires. A value of 0 indicates that data is not archived. Valid values for the archive retention period:
   * V1: 1 to 365 days. Supported only for the pay-by-ingested-data billing method.
   * V2: 1 to 3650 days. A value of 3650 indicates permanent retention.
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
   * The authentication-free read policy. IP address ranges and VPC IDs are supported.
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
   * The authentication-free read policy. IP address ranges and VPC IDs are supported.
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
   * Specifies whether to only precheck the request. Valid values:
   * 
   * true: sends a precheck request without updating the instance. The system checks whether required parameters are specified, the request format is valid, and service limits are met. If the request fails the precheck, the corresponding error is returned. If the request passes the precheck, the DryRunOperation error code is returned.
   * false: sends a regular request. If the request passes the precheck, the instance is updated. This is the default value.
   */
  dryrun?: boolean;
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
   * The billing method. You can change the billing method only once during the lifecycle of the instance. Valid values:
   * POSTPAY: pay-as-you-go based on the number of reported metrics.
   * POSTPAY_GB: pay-as-you-go based on the volume of ingested data.
   * 
   * @example
   * POSTPAY_GB
   */
  paymentType?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * test-prom-name
   */
  prometheusInstanceName?: string;
  /**
   * @remarks
   * The status of the instance storage database. Only RUNNING is supported. If this parameter is left empty, the status of the storage database is not changed.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The storage duration in days. Valid values:
   * For the pay-by-ingested-data billing method: 90 and 180.
   * For the pay-by-reported-metrics billing method: 15, 30, 60, 90, and 180.
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
      dryrun: 'dryrun',
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
      dryrun: 'boolean',
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

