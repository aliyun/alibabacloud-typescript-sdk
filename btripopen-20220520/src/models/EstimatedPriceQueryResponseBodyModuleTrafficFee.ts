// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EstimatedPriceQueryResponseBodyModuleTrafficFeeBtripRoutes } from "./EstimatedPriceQueryResponseBodyModuleTrafficFeeBtripRoutes";


export class EstimatedPriceQueryResponseBodyModuleTrafficFee extends $dara.Model {
  btripRoutes?: EstimatedPriceQueryResponseBodyModuleTrafficFeeBtripRoutes[];
  /**
   * @example
   * demo
   */
  errMsg?: string;
  /**
   * @example
   * 265000
   */
  maxFee?: number;
  /**
   * @example
   * 30100
   */
  minFee?: number;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      btripRoutes: 'btrip_routes',
      errMsg: 'err_msg',
      maxFee: 'max_fee',
      minFee: 'min_fee',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripRoutes: { 'type': 'array', 'itemType': EstimatedPriceQueryResponseBodyModuleTrafficFeeBtripRoutes },
      errMsg: 'string',
      maxFee: 'number',
      minFee: 'number',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.btripRoutes)) {
      $dara.Model.validateArray(this.btripRoutes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

