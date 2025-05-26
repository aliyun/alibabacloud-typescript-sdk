// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterSpaceSummaryResponseBodyDataColdData } from "./DescribeDbclusterSpaceSummaryResponseBodyDataColdData";
import { DescribeDBClusterSpaceSummaryResponseBodyDataDataGrowth } from "./DescribeDbclusterSpaceSummaryResponseBodyDataDataGrowth";
import { DescribeDBClusterSpaceSummaryResponseBodyDataHotData } from "./DescribeDbclusterSpaceSummaryResponseBodyDataHotData";


export class DescribeDBClusterSpaceSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cold data.
   */
  coldData?: DescribeDBClusterSpaceSummaryResponseBodyDataColdData;
  /**
   * @remarks
   * The data growth.
   */
  dataGrowth?: DescribeDBClusterSpaceSummaryResponseBodyDataDataGrowth;
  /**
   * @remarks
   * The hot data.
   */
  hotData?: DescribeDBClusterSpaceSummaryResponseBodyDataHotData;
  /**
   * @remarks
   * The total data size. Unit: bytes.
   * 
   * >  Formula: Total data size = Hot data size+ Cold data size.
   * 
   * @example
   * 8388608
   */
  totalSize?: string;
  static names(): { [key: string]: string } {
    return {
      coldData: 'ColdData',
      dataGrowth: 'DataGrowth',
      hotData: 'HotData',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldData: DescribeDBClusterSpaceSummaryResponseBodyDataColdData,
      dataGrowth: DescribeDBClusterSpaceSummaryResponseBodyDataDataGrowth,
      hotData: DescribeDBClusterSpaceSummaryResponseBodyDataHotData,
      totalSize: 'string',
    };
  }

  validate() {
    if(this.coldData && typeof (this.coldData as any).validate === 'function') {
      (this.coldData as any).validate();
    }
    if(this.dataGrowth && typeof (this.dataGrowth as any).validate === 'function') {
      (this.dataGrowth as any).validate();
    }
    if(this.hotData && typeof (this.hotData as any).validate === 'function') {
      (this.hotData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

