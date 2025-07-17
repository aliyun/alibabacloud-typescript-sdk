// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePrometheusInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The number of days for which data is automatically archived after the storage expires. Valid values: 60, 90, 180, and 365. 0 indicates that the data is not archived.
   * 
   * @example
   * 90
   */
  archiveDuration?: number;
  /**
   * @remarks
   * The IP addresses or CIDR blocks for which password-free read is enabled. Separate multiple IP addresses with line breaks.
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
   * The IP addresses or CIDR blocks for which password-free write is enabled. Separate multiple IP addresses with line breaks.
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
   * The ID of the Prometheus instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-xxx
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable password-free read.
   * 
   * **if can be null:**
   * true
   */
  enableAuthFreeRead?: boolean;
  /**
   * @remarks
   * Specifies whether to enable password-free write.
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
   * The billing mode. Valid values: POSTPAY: charges fees based on the amount of reported metric data. POSTPAY_GB: charges fees based on the amount of written metric data.
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
   * The ID of the Prometheus resource group.
   * 
   * @example
   * rg-acfmxyexli2****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The data storage duration. Unit: days.
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

