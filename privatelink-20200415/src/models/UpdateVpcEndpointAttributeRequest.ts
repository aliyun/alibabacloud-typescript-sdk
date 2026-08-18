// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVpcEndpointAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The protocol version. Valid values:
   * 
   * - **IPv4**: IPv4.
   * - **DualStack**: dual-stack.
   * > To enable dual-stack for the endpoint, the endpoint service connected to the endpoint and the VPC in which the endpoint resides must both support dual-stack.
   * 
   * @example
   * IPv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  clientToken?: string;
  /**
   * @remarks
   * The cross-region bandwidth. This parameter is required only when the endpoint and the endpoint service are in different regions. Unit: Mbit/s. Valid values:
   * 
   * - **Minimum value**: 100.
   * - **Maximum value**: limited by the quota of the current account. For more information, see [Quotas and limits](https://www.alibabacloud.com/help/en/privatelink/quotas-and-limits).
   * > Before you specify this parameter, make sure that the endpoint is a cross-region endpoint.
   * 
   * @example
   * 1000
   */
  crossRegionBandwidth?: number;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * - **true**: sends a check request without performing the update gateway endpoint attribute operation. The system checks the request for potential issues, including missing parameter values, incorrect request format, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): sends a normal request. If the request passes the dry run, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The description of the endpoint.
   * 
   * The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is my Endpoint.
   */
  endpointDescription?: string;
  /**
   * @remarks
   * The ID of the endpoint that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-hp33b2e43fays7s8****
   */
  endpointId?: string;
  /**
   * @remarks
   * The name of the endpoint.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). The name must start with a letter or a Chinese character.
   * 
   * @example
   * test
   */
  endpointName?: string;
  /**
   * @remarks
   * The RAM access policy. For more information about the policy definition, see [Policy elements](https://help.aliyun.com/document_detail/93738.html).
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
   * The region ID of the endpoint that you want to modify. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * eu-west-1
   */
  regionId?: string;
  /**
   * @remarks
   * Resets the policy to the default policy.
   * 
   * @example
   * true
   */
  resetPolicy?: boolean;
  /**
   * @remarks
   * Specifies whether to enable nearest access for the endpoint domain name of the connected service. Valid values:
   * 
   * - **true**: enabled.
   * - **false**: disabled.
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

