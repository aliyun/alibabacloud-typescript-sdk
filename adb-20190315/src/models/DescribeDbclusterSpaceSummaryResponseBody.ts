// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterSpaceSummaryResponseBodyDataColdData extends $dara.Model {
  /**
   * @remarks
   * The data size of table records. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  dataSize?: number;
  /**
   * @remarks
   * The data size of regular indexes. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  indexSize?: number;
  /**
   * @remarks
   * The other data size. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  otherSize?: number;
  /**
   * @remarks
   * The data size of primary key indexes. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  primaryKeyIndexSize?: number;
  /**
   * @remarks
   * The cold data size. Unit: bytes.
   * 
   * >  Formula: Cold data size = Data size of table records + Data size of regular indexes + Data size of primary key indexes + Other data size.
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
   * The data growth within the last day. Unit: bytes.
   * 
   * >  Formula: Data growth within the last day = Current data size - Data size of one day ago.
   * 
   * @example
   * 1048576
   */
  dayGrowth?: number;
  /**
   * @remarks
   * The daily data growth within the last seven days. Unit: bytes.
   * 
   * >  Formula: Daily data growth within the last seven days = (Current data size - Data size of seven days ago)/7.
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
   * The data size of table records. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  dataSize?: number;
  /**
   * @remarks
   * The data size of regular indexes. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  indexSize?: number;
  /**
   * @remarks
   * The other data size. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  otherSize?: number;
  /**
   * @remarks
   * The data size of primary key indexes. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  primaryKeyIndexSize?: number;
  /**
   * @remarks
   * The hot data size. Unit: bytes.
   * 
   * >  Formula: Hot data size = Data size of table records + Data size of regular indexes + Data size of primary key indexes + Other data size.
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

export class DescribeDBClusterSpaceSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried storage overview information.
   */
  data?: DescribeDBClusterSpaceSummaryResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25B56BC7-4978-40B3-9E48-4B7067******
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

