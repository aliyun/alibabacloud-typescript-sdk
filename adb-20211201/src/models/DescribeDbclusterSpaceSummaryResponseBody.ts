// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterSpaceSummaryResponseBodyDataColdData extends $dara.Model {
  /**
   * @remarks
   * The table record data size. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  dataSize?: number;
  /**
   * @remarks
   * The secondary index data size. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  indexSize?: number;
  /**
   * @remarks
   * The size of other data. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  otherSize?: number;
  /**
   * @remarks
   * The primary key index data size. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  primaryKeyIndexSize?: number;
  /**
   * @remarks
   * The total cold data size. Unit: bytes.
   * 
   * > Calculation formula: Total cold data size = Table record data size + Secondary index data size + Primary key index data size + Others.
   * 
   * @example
   * 4194304
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      dataSize: 'DataSize',
      indexSize: 'IndexSize',
      otherSize: 'OtherSize',
      primaryKeyIndexSize: 'PrimaryKeyIndexSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSize: 'number',
      indexSize: 'number',
      otherSize: 'number',
      primaryKeyIndexSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterSpaceSummaryResponseBodyDataDataGrowth extends $dara.Model {
  /**
   * @remarks
   * The data growth over the past day. Unit: bytes.
   * 
   * > Calculation formula: Data growth over the past day = Current total data size - Total data size one day ago.
   * 
   * @example
   * 1048576
   */
  dayGrowth?: number;
  /**
   * @remarks
   * The average daily data growth over the past 7 days. Unit: bytes.
   * 
   * > Calculation formula: Average daily data growth over the past 7 days = (Current total data size - Total data size 7 days ago) / 7.
   * 
   * @example
   * 1048576
   */
  weekGrowth?: number;
  static names(): { [key: string]: string } {
    return {
      dayGrowth: 'DayGrowth',
      weekGrowth: 'WeekGrowth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayGrowth: 'number',
      weekGrowth: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterSpaceSummaryResponseBodyDataHotData extends $dara.Model {
  /**
   * @remarks
   * The table record data size. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  dataSize?: number;
  /**
   * @remarks
   * The secondary index data size. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  indexSize?: number;
  /**
   * @remarks
   * The size of other data. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  otherSize?: number;
  /**
   * @remarks
   * The primary key index data size. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  primaryKeyIndexSize?: number;
  /**
   * @remarks
   * The total hot data size. Unit: bytes.
   * 
   * > Calculation formula: Total hot data size = Table record data size + Secondary index data size + Primary key index data size + Others.
   * 
   * @example
   * 4194304
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      dataSize: 'DataSize',
      indexSize: 'IndexSize',
      otherSize: 'OtherSize',
      primaryKeyIndexSize: 'PrimaryKeyIndexSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSize: 'number',
      indexSize: 'number',
      otherSize: 'number',
      primaryKeyIndexSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
   * > Calculation formula: Total data size = Total hot data size + Total cold data size.
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

export class DescribeDBClusterSpaceSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeDBClusterSpaceSummaryResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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
      data: DescribeDBClusterSpaceSummaryResponseBodyData,
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

