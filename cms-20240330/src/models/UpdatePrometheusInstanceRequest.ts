// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePrometheusInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The number of days to store archived data after the storage duration expires. A value of 0 disables archiving. For V1 instances, the valid values are 1 to 365. This is supported only for the pay-by-data-write billing method. For V2 instances, the valid values are 1 to 3650. A value of 3650 indicates permanent storage.
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
   * The policy for password-free read access. The policy supports IP address segments and VPC IDs.
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
   * The policy for password-free write access. The policy supports IP address segments and VPC IDs.
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
   * Specifies whether to enable password-free read access.
   * 
   * @example
   * true
   */
  enableAuthFreeRead?: boolean;
  /**
   * @remarks
   * Specifies whether to enable password-free write access.
   * 
   * @example
   * true
   */
  enableAuthFreeWrite?: boolean;
  /**
   * @remarks
   * Specifies whether to enable authentication with an access token.
   * 
   * @example
   * true
   */
  enableAuthToken?: boolean;
  /**
   * @remarks
   * The billing method. You can change the billing method only once during the instance lifecycle. Valid values: \\`POSTPAY\\` (pay-as-you-go based on reported metrics) and \\`POSTPAY_GB\\` (pay-as-you-go based on data writes).
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
   * The storage duration in days. If the instance is billed by data writes, valid values are 90 and 180. If the instance is billed by reported metrics, valid values are 15, 30, 60, 90, and 180.
   * 
   * @example
   * 90
   */
  storageDuration?: number;
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

