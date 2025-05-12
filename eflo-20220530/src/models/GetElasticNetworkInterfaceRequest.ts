// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetElasticNetworkInterfaceRequest extends $dara.Model {
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
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

