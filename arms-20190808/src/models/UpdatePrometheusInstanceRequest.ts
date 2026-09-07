// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePrometheusInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The number of days for automatic archiving after storage expires. Valid values: 60, 90, 180, and 365. A value of 0 indicates no archiving.
   * 
   * @example
   * 90
   */
  archiveDuration?: number;
  /**
   * @remarks
   * The list of IP addresses for authentication-free read. CIDR notation is supported. Separate multiple IP addresses with line feeds.
   * 
   * @example
   * 0.0.0.0/0
   * 
   * **if can be null:**
   * true
   */
  authFreeReadPolicy?: string;
  /**
   * @remarks
   * The list of IP addresses for authentication-free write. CIDR notation is supported. Separate multiple IP addresses with line feeds.
   * 
   * @example
   * 0.0.0.0/0
   * 
   * **if can be null:**
   * true
   */
  authFreeWritePolicy?: string;
  /**
   * @remarks
   * The Prometheus instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-xxx
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable authentication-free read.
   * 
   * **if can be null:**
   * true
   */
  enableAuthFreeRead?: boolean;
  /**
   * @remarks
   * Specifies whether to enable authentication-free write.
   * 
   * **if can be null:**
   * true
   */
  enableAuthFreeWrite?: boolean;
  /**
   * @remarks
   * Specifies whether to enable access token authentication.
   * 
   * **if can be null:**
   * true
   */
  enableAuthToken?: boolean;
  /**
   * @remarks
   * The billing method. Valid values:
   * - POSTPAY: Pay-as-you-go based on metric reporting volume.
   * - POSTPAY_GB: Pay-as-you-go based on metric write volume.
   * 
   * @example
   * POSTPAY
   */
  paymentType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID of the Prometheus instance.
   * 
   * @example
   * rg-acfmxyexli2****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The data retention period, in days.
   * 
   * @example
   * 90
   */
  storageDuration?: number;
  static names(): { [key: string]: string } {
    return {
      archiveDuration: 'ArchiveDuration',
      authFreeReadPolicy: 'AuthFreeReadPolicy',
      authFreeWritePolicy: 'AuthFreeWritePolicy',
      clusterId: 'ClusterId',
      enableAuthFreeRead: 'EnableAuthFreeRead',
      enableAuthFreeWrite: 'EnableAuthFreeWrite',
      enableAuthToken: 'EnableAuthToken',
      paymentType: 'PaymentType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      storageDuration: 'StorageDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveDuration: 'number',
      authFreeReadPolicy: 'string',
      authFreeWritePolicy: 'string',
      clusterId: 'string',
      enableAuthFreeRead: 'boolean',
      enableAuthFreeWrite: 'boolean',
      enableAuthToken: 'boolean',
      paymentType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      storageDuration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

