// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteElasticNetworkInterfaceRequest extends $dara.Model {
  /**
   * @remarks
   * By default, popApi is not ignored and idempotent
   * 
   * @example
   * 141cccd6-dfbd-11ec-b8e8-0242ac110003
   */
  clientToken?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface ID
   * 
   * This parameter is required.
   * 
   * @example
   * leni-1234****
   */
  elasticNetworkInterfaceId?: string;
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
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      elasticNetworkInterfaceId: 'string',
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

