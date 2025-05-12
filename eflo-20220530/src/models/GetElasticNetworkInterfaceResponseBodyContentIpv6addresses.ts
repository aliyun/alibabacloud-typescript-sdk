// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetElasticNetworkInterfaceResponseBodyContentIpv6Addresses extends $dara.Model {
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface ID
   * 
   * @example
   * leni-1234****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1585816811000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the cluster was updated.
   * 
   * @example
   * 1549012834000
   */
  gmtModified?: string;
  /**
   * @remarks
   * IPV6 unique identifier
   * 
   * @example
   * sip-sg3xabeq
   */
  ipName?: string;
  /**
   * @remarks
   * IPV6 address
   * 
   * @example
   * 2408:4005:3aa:1000:470d:66fb:56a5:****
   */
  ipv6Address?: string;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the intervention entry. Valid value:
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      ipName: 'IpName',
      ipv6Address: 'Ipv6Address',
      message: 'Message',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      elasticNetworkInterfaceId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      ipName: 'string',
      ipv6Address: 'string',
      message: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

