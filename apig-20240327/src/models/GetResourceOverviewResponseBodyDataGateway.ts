// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceOverviewResponseBodyDataGateway extends $dara.Model {
  /**
   * @remarks
   * Number of running gateways.
   * 
   * @example
   * 1
   */
  runningCount?: number;
  /**
   * @remarks
   * Number of gateway instances.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      runningCount: 'runningCount',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runningCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

