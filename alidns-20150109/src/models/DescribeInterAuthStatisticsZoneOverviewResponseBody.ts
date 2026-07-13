// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInterAuthStatisticsZoneOverviewResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of domain names with refused responses.
   * 
   * @example
   * 6
   */
  refusedDomainCount?: number;
  /**
   * @remarks
   * The number of domain names with a sudden drop in QPS.
   * 
   * @example
   * 66
   */
  suddenDropDomainCount?: number;
  /**
   * @remarks
   * The number of domain names with a sudden increase in QPS.
   * 
   * @example
   * 56
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

export class DescribeInterAuthStatisticsZoneOverviewResponseBody extends $dara.Model {
  /**
   * @remarks
   * The overview data for the zone.
   */
  data?: DescribeInterAuthStatisticsZoneOverviewResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
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
      data: DescribeInterAuthStatisticsZoneOverviewResponseBodyData,
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

