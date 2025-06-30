// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeResolverRulesResponseBodyRulesBindEdgeDnsClusters } from "./DescribeResolverRulesResponseBodyRulesBindEdgeDnsClusters";
import { DescribeResolverRulesResponseBodyRulesBindVpcs } from "./DescribeResolverRulesResponseBodyRulesBindVpcs";
import { DescribeResolverRulesResponseBodyRulesForwardIps } from "./DescribeResolverRulesResponseBodyRulesForwardIps";


export class DescribeResolverRulesResponseBodyRules extends $dara.Model {
  bindEdgeDnsClusters?: DescribeResolverRulesResponseBodyRulesBindEdgeDnsClusters[];
  /**
   * @remarks
   * The VPCs associated with the forwarding rule.
   */
  bindVpcs?: DescribeResolverRulesResponseBodyRulesBindVpcs[];
  /**
   * @remarks
   * The time when the forwarding was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2020-07-13 10:51:44
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the forwarding rule was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1594608704000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The endpoint ID.
   * 
   * @example
   * hr****
   */
  endpointId?: string;
  /**
   * @remarks
   * The endpoint name.
   * 
   * @example
   * endpoint-test
   */
  endpointName?: string;
  /**
   * @remarks
   * The IP addresses and ports of the external DNS servers. Enter the IP addresses and ports of the destination servers to which the DNS requests are forwarded.
   */
  forwardIps?: DescribeResolverRulesResponseBodyRulesForwardIps[];
  /**
   * @remarks
   * The ID of the forwarding rule.
   * 
   * @example
   * hr****
   */
  id?: string;
  /**
   * @remarks
   * The name of the forwarding rule.
   * 
   * @example
   * forward rule-test
   */
  name?: string;
  /**
   * @remarks
   * The type of the forwarding rule.
   * 
   * The parameter value can only be OUTBOUND, which indicates that Domain Name System (DNS) requests are forwarded to one or more external IP addresses.
   * 
   * @example
   * OUTBOUND
   */
  type?: string;
  /**
   * @remarks
   * The time when the forwarding rule was last modified. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2020-07-13 10:51:44
   */
  updateTime?: string;
  /**
   * @remarks
   * The time when the forwarding rule was updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1594608704000
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The zone for which you want to forward DNS requests.
   * 
   * @example
   * example.com
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      bindEdgeDnsClusters: 'BindEdgeDnsClusters',
      bindVpcs: 'BindVpcs',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      endpointId: 'EndpointId',
      endpointName: 'EndpointName',
      forwardIps: 'ForwardIps',
      id: 'Id',
      name: 'Name',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindEdgeDnsClusters: { 'type': 'array', 'itemType': DescribeResolverRulesResponseBodyRulesBindEdgeDnsClusters },
      bindVpcs: { 'type': 'array', 'itemType': DescribeResolverRulesResponseBodyRulesBindVpcs },
      createTime: 'string',
      createTimestamp: 'number',
      endpointId: 'string',
      endpointName: 'string',
      forwardIps: { 'type': 'array', 'itemType': DescribeResolverRulesResponseBodyRulesForwardIps },
      id: 'string',
      name: 'string',
      type: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
      zoneName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bindEdgeDnsClusters)) {
      $dara.Model.validateArray(this.bindEdgeDnsClusters);
    }
    if(Array.isArray(this.bindVpcs)) {
      $dara.Model.validateArray(this.bindVpcs);
    }
    if(Array.isArray(this.forwardIps)) {
      $dara.Model.validateArray(this.forwardIps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

