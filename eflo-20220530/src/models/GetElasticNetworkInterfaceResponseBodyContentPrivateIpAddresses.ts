// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetElasticNetworkInterfaceResponseBodyContentPrivateIpAddresses extends $dara.Model {
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
   * 1672971789000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the cluster was updated.
   * 
   * @example
   * 1672971789000
   */
  gmtModified?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface Secondary Private IP Unique Identifier
   * 
   * @example
   * sip-ywz****
   */
  ipName?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface secondary private IP address
   * 
   * @example
   * 172.16.****
   */
  privateIpAddress?: string;
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
      message: 'Message',
      privateIpAddress: 'PrivateIpAddress',
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
      message: 'string',
      privateIpAddress: 'string',
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

