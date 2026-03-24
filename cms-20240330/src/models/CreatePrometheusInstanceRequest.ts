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
   * The number of days that data is automatically archived after the storage duration expires. A value of 0 indicates that data is not archived. Valid values:
   * 
   * - V1 instances: 60 to 365.
   * 
   * - V2 instances: 60 to 3650. A value of 3650 indicates that the data is permanently stored.
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
   * The policy for password-free read access. IP address ranges and VPC IDs are supported.
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
   * The policy for password-free write access.
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
   * Specifies whether to enable password-free read access. This feature is supported only for V2 instances.
   * 
   * @example
   * true
   */
  enableAuthFreeRead?: boolean;
  /**
   * @remarks
   * Specifies whether to enable password-free write access. This feature is supported only for V2 instances.
   * 
   * @example
   * true
   */
  enableAuthFreeWrite?: boolean;
  /**
   * @remarks
   * Specifies whether to enable an authorization token. This feature is supported only for V1 instances.
   * 
   * @example
   * true
   */
  enableAuthToken?: boolean;
  /**
   * @remarks
   * The billing method.
   * 
   * - POSTPAY: pay-as-you-go based on the volume of reported metrics.
   * 
   * - Note: If you leave this parameter empty, the default billing method is used. If a default billing method is not configured, POSTPAY is used.
   * 
   * @example
   * POSTPAY
   */
  paymentType?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * name1
   */
  prometheusInstanceName?: string;
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
   * The storage duration of the instance in days. The valid values depend on the billing method:
   * 
   * - For instances billed based on data written: 90 and 180.
   * 
   * - For instances billed based on reported metrics: 15, 30, 60, 90, and 180.
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
   * The workspace to which the instance belongs. The default value is default-cms-{userId}-{regionId}.
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

