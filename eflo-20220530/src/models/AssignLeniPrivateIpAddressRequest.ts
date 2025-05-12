// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssignLeniPrivateIpAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotent identifier.
   * 
   * @example
   * 3fd79d62-ab1d-11ec-9a53-0242ac110004
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the response code.
   * 
   * @example
   * wuhuaiyu
   */
  description?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface ID.
   * 
   * This parameter is required.
   * 
   * @example
   * leni-1234****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface secondary private network IP (automatically assigned by default).
   * 
   * @example
   * 10.0.****
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      privateIpAddress: 'PrivateIpAddress',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      elasticNetworkInterfaceId: 'string',
      privateIpAddress: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

