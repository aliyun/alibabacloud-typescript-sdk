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
   * The number of days to automatically archive data after the storage period expires. A value of 0 indicates that data is not archived. Valid values for the archive duration:
   * * V1: 60 to 365 days.
   * * V2: 60 to 3650 days. A value of 3650 indicates permanent retention.
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
   * Specifies whether to perform a dry run only. Valid values:
   * * true: performs a dry run without creating the instance. The system checks whether required parameters are specified, the request format is valid, and service limits are met. If the request fails the check, an error is returned. If the request passes the check, the DryRunOperation error code is returned.
   * * false: sends a normal request and creates the instance directly after the request passes the check. This is the default value.
   */
  dryrun?: boolean;
  /**
   * @remarks
   * Specifies whether to enable authentication-free read access. This feature is supported only in V2.
   * 
   * @example
   * true
   */
  enableAuthFreeRead?: boolean;
  /**
   * @remarks
   * Specifies whether to enable authentication-free write access. This feature is supported only in V2.
   * 
   * @example
   * true
   */
  enableAuthFreeWrite?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the authorization token. This feature is supported only in V1.
   * 
   * @example
   * true
   */
  enableAuthToken?: boolean;
  /**
   * @remarks
   * Billable methods. Valid values:
   * * POSTPAY: pay-as-you-go based on the volume of reported metrics.
   * * POSTPAY_GB: pay-as-you-go based on the volume of written metrics.
   * Note: If this parameter is left empty, the default billing method configured for the user is used. If no default billing method is configured, the system uses the pay-as-you-go billing method based on the volume of reported metrics by default.
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
   * The ID of the resource group.
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
   * The storage duration in days.
   * * By written data volume: 90 and 180.
   * * By reported metric volume: 15, 30, 60, 90, and 180.
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
      dryrun: 'dryrun',
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
      dryrun: 'boolean',
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

