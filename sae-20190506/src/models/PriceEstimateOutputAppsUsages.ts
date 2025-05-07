// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PriceEstimateOutputAppsUsages extends $dara.Model {
  /**
   * @example
   * 3600.00
   */
  amount?: number;
  /**
   * @example
   * Microservice_cpuUsage
   */
  id?: string;
  /**
   * @example
   * 核*秒
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      id: 'Id',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      id: 'string',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

