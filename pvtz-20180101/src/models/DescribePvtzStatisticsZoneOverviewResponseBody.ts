// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePvtzStatisticsZoneOverviewResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2
   */
  refusedDomainCount?: number;
  /**
   * @example
   * 3
   */
  suddenDropDomainCount?: number;
  /**
   * @example
   * 5
   */
  suddenIncreaseDomainCount?: number;
  static names(): { [key: string]: string } {
    return {
      refusedDomainCount: 'RefusedDomainCount',
      suddenDropDomainCount: 'SuddenDropDomainCount',
      suddenIncreaseDomainCount: 'SuddenIncreaseDomainCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refusedDomainCount: 'number',
      suddenDropDomainCount: 'number',
      suddenIncreaseDomainCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePvtzStatisticsZoneOverviewResponseBody extends $dara.Model {
  data?: DescribePvtzStatisticsZoneOverviewResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C6F1D541-E7A6-447A-A2B5-9F7A20B2A8FB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribePvtzStatisticsZoneOverviewResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

