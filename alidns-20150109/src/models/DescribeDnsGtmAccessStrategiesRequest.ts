// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmAccessStrategiesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * instance1
   */
  instanceId?: string;
  /**
   * @remarks
   * The language to return some response parameters. Default value: en. Valid values: en, zh, and ja.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the access policy. Valid values:
   * 
   * *   GEO: geographical location-based
   * *   LATENCY: latency-based
   * 
   * This parameter is required.
   * 
   * @example
   * geo
   */
  strategyMode?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      strategyMode: 'StrategyMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      strategyMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

