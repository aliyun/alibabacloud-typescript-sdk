// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVpcEndpointAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The protocol version. Valid values:
   * 
   * - **IPv4**: IPv4.
   * 
   * - **DualStack**: dual-stack.
   * 
   * > To enable dual-stack for an endpoint, the associated endpoint service and the endpoint\\"s VPC must also support dual-stack.
   * 
   * @example
   * IPv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You must generate a unique value for this parameter. The token can contain only ASCII characters.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  clientToken?: string;
  /**
   * @remarks
   * The cross-region bandwidth in Mbps. This parameter applies only when the endpoint and its associated endpoint service are in different regions. Valid values:
   * 
   * - **Minimum value**: 100.
   * 
   * - **Maximum value**: The value is limited by your account quota. For more information, see [Quotas and limits](https://help.aliyun.com/zh/privatelink/quotas-and-limits?spm=a2c4g.11174283.help-menu-search-120462.d_0).
   * 
   * > You can specify this parameter only for cross-region endpoints.
   * 
   * @example
   * 1000
   */
  crossRegionBandwidth?: number;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: Performs a dry run. The system checks the required parameters, request format, and service limits. If the request fails the check, the system returns an error message. If the request passes the check, the system returns the `DryRunOperation` error code.
   * 
   * - **false** (Default): Sends a normal request. If the request passes the check, the system performs the operation and returns a 2xx HTTP status code.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The new description for the endpoint.
   * 
   * The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is my Endpoint.
   */
  endpointDescription?: string;
  /**
   * @remarks
   * The ID of the endpoint to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-hp33b2e43fays7s8****
   */
  endpointId?: string;
  /**
   * @remarks
   * The new name for the endpoint.
   * 
   * The name must be 2 to 128 characters in length, start with a letter or a Chinese character, and can contain digits, hyphens (-), and underscores (_).
   * 
   * @example
   * test
   */
  endpointName?: string;
  /**
   * @remarks
   * The RAM access policy. For more information, see [Basic elements of a RAM policy](https://help.aliyun.com/document_detail/93738.html).
   * 
   * @example
   * {
   *   "Version": "1",
   *   "Statement": [
   *     {
   *       "Effect": "Allow",
   *       "Action": [
   *         "oss:List*",
   *         "oss:PutObject",
   *         "oss:GetObject"
   *       ],
   *       "Resource": [
   *         "acs:oss:oss-*:*:pvl-policy-test/policy-test.txt"
   *       ],
   *       "Principal": {
   *         "RAM": [
   *           "acs:ram::14199xxxxxx:*"
   *         ]
   *       }
   *     }
   *   ]
   * }
   */
  policyDocument?: string;
  /**
   * @remarks
   * The region ID of the endpoint. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to obtain the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * eu-west-1
   */
  regionId?: string;
  resetPolicy?: boolean;
  /**
   * @remarks
   * Specifies whether to enable zone affinity for domain name resolution of the endpoint service. Valid values:
   * 
   * - **true**: Enables zone affinity.
   * 
   * - **false**: Disables zone affinity.
   * 
   * @example
   * false
   */
  zoneAffinityEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      clientToken: 'ClientToken',
      crossRegionBandwidth: 'CrossRegionBandwidth',
      dryRun: 'DryRun',
      endpointDescription: 'EndpointDescription',
      endpointId: 'EndpointId',
      endpointName: 'EndpointName',
      policyDocument: 'PolicyDocument',
      regionId: 'RegionId',
      resetPolicy: 'ResetPolicy',
      zoneAffinityEnabled: 'ZoneAffinityEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      clientToken: 'string',
      crossRegionBandwidth: 'number',
      dryRun: 'boolean',
      endpointDescription: 'string',
      endpointId: 'string',
      endpointName: 'string',
      policyDocument: 'string',
      regionId: 'string',
      resetPolicy: 'boolean',
      zoneAffinityEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

