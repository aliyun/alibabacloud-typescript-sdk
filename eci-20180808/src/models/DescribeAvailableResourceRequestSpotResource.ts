// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourceRequestSpotResource extends $dara.Model {
  /**
   * @remarks
   * The protection period of the preemptible instance. Unit: hours. Default value: 1. The value of 0 indicates no protection period.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The maximum hourly price of the preemptible elastic container instance. The value can be accurate to three decimal places. If you set SpotStrategy to SpotWithPriceLimit, you must specify the SpotPriceLimit parameter.
   * 
   * @example
   * 0.2
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The bidding policy for the elastic container instance. Valid values:
   * 
   * *   NoSpot: The instance is created as a regular pay-as-you-go instance.
   * *   SpotWithPriceLimit: The instance is created as a preemptible instance with a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The instance is created as a preemptible instance for which the market price at the time of purchase is automatically used as the bid price.
   * 
   * Default value: NoSpot.
   * 
   * > If you set this parameter to SpotWithPriceLimit or SpotAsPriceGo to query preemptible instances, you must set Category to InstanceType. You must also use the Value parameter to specify instance types, or use the Cores and Memory parameters to specify the number of vCPUs and memory size.
   * 
   * @example
   * SpotAsPriceGo
   */
  spotStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      spotDuration: 'SpotDuration',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spotDuration: 'number',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

