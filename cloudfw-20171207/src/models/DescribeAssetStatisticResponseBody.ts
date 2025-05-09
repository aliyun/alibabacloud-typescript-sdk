// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAssetStatisticResponseBodyResourceSpecStatistic } from "./DescribeAssetStatisticResponseBodyResourceSpecStatistic";


export class DescribeAssetStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 850A84******25g4d2
   */
  requestId?: string;
  /**
   * @remarks
   * The statistics on specifications.
   */
  resourceSpecStatistic?: DescribeAssetStatisticResponseBodyResourceSpecStatistic;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceSpecStatistic: 'ResourceSpecStatistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceSpecStatistic: DescribeAssetStatisticResponseBodyResourceSpecStatistic,
    };
  }

  validate() {
    if(this.resourceSpecStatistic && typeof (this.resourceSpecStatistic as any).validate === 'function') {
      (this.resourceSpecStatistic as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

