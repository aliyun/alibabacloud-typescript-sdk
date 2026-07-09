// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePrometheusInstanceRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 110109200001214284
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrometheusInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The number of days that data is automatically archived after the storage period expires. A value of 0 indicates that data is not archived. Valid values for the archive duration:
   * * V1: 60 to 365 days.
   * * V2: 60 to 3650 days (3650 indicates permanent retention).
   * 
   * @example
   * 60
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
   * The authentication-free write policy.
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
   * Specifies whether to enable authentication-free read. This parameter is supported only for V2 instances.
   * 
   * @example
   * true
   */
  enableAuthFreeRead?: boolean;
  /**
   * @remarks
   * Specifies whether to enable authentication-free write. This parameter is supported only for V2 instances.
   * 
   * @example
   * true
   */
  enableAuthFreeWrite?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the authorization token. This parameter is supported only for V1 instances.
   * 
   * @example
   * true
   */
  enableAuthToken?: boolean;
  /**
   * @remarks
   * The billable methods. Valid values:
   * * POSTPAY: pay-as-you-go by metric reporting volume.
   * * POSTPAY_GB: pay-as-you-go by metric write volume.
   * If this parameter is left empty, the default billing method configured by the user is used. If the user has not configured a default billing method, the system uses pay-as-you-go by metric reporting volume.
   * 
   * @example
   * POSTPAY
   */
  paymentType?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * This parameter is required.
   * 
   * @example
   * name1
   */
  prometheusInstanceName?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekz5qqvjyatgoy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The storage duration (in days):
   * * By write volume: 90 or 180.
   * * By metric reporting volume: 15, 30, 60, 90, or 180.
   * 
   * @example
   * 90
   */
  storageDuration?: number;
  /**
   * @remarks
   * The tags.
   */
  tags?: CreatePrometheusInstanceRequestTags[];
  /**
   * @remarks
   * The workspace to which the instance belongs. Default value: default-cms-{userId}-{regionId}.
   * 
   * @example
   * wokspace1
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
      resourceGroupId: 'resourceGroupId',
      status: 'status',
      storageDuration: 'storageDuration',
      tags: 'tags',
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
      resourceGroupId: 'string',
      status: 'string',
      storageDuration: 'number',
      tags: { 'type': 'array', 'itemType': CreatePrometheusInstanceRequestTags },
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

