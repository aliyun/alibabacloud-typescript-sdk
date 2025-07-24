// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoctorHBaseTablesResponseBodyDataAnalysis extends $dara.Model {
  /**
   * @remarks
   * The regions that have read hotspot issues.
   * 
   * @example
   * null
   */
  readRequestHotspotRegionList?: string[];
  /**
   * @remarks
   * The description of read imbalance.
   * 
   * @example
   * read request unbalance is <p class=\\"report-detail-topic\\">
   */
  readRequestUnbalanceSuggestion?: string;
  /**
   * @remarks
   * The regions that have read/write hotspot issues.
   * 
   * @example
   * null
   */
  requestHotspotRegionList?: string[];
  /**
   * @remarks
   * The description of read/write imbalance.
   * 
   * @example
   * read request unbalance is <p class=\\"report-detail-topic\\">
   */
  requestUnbalanceSuggestion?: string;
  /**
   * @remarks
   * The score of the table.
   * 
   * @example
   * 67
   */
  tableScore?: number;
  /**
   * @remarks
   * The regions that have write hotspot issues.
   * 
   * @example
   * null
   */
  writeRequestHotspotRegionList?: string[];
  /**
   * @remarks
   * The description of write imbalance.
   * 
   * @example
   * write request unbalance is <p class=\\"report-detail-topic\\">
   */
  writeRequestUnbalanceSuggestion?: string;
  static names(): { [key: string]: string } {
    return {
      readRequestHotspotRegionList: 'ReadRequestHotspotRegionList',
      readRequestUnbalanceSuggestion: 'ReadRequestUnbalanceSuggestion',
      requestHotspotRegionList: 'RequestHotspotRegionList',
      requestUnbalanceSuggestion: 'RequestUnbalanceSuggestion',
      tableScore: 'TableScore',
      writeRequestHotspotRegionList: 'WriteRequestHotspotRegionList',
      writeRequestUnbalanceSuggestion: 'WriteRequestUnbalanceSuggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readRequestHotspotRegionList: { 'type': 'array', 'itemType': 'string' },
      readRequestUnbalanceSuggestion: 'string',
      requestHotspotRegionList: { 'type': 'array', 'itemType': 'string' },
      requestUnbalanceSuggestion: 'string',
      tableScore: 'number',
      writeRequestHotspotRegionList: { 'type': 'array', 'itemType': 'string' },
      writeRequestUnbalanceSuggestion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.readRequestHotspotRegionList)) {
      $dara.Model.validateArray(this.readRequestHotspotRegionList);
    }
    if(Array.isArray(this.requestHotspotRegionList)) {
      $dara.Model.validateArray(this.requestHotspotRegionList);
    }
    if(Array.isArray(this.writeRequestHotspotRegionList)) {
      $dara.Model.validateArray(this.writeRequestHotspotRegionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsColdAccessDay extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Cold access day
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * coldAccessDay
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * day
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 1
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsColdConfigDay extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Cold config day
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * coldConfigDay
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * day
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 1
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsColdDataSize extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Size of the cold data size
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * coldDataSize
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * MB
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 100
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsDailyReadRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Number of read requests per day
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * dailyReadRequest
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * “”
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 1000
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsDailyReadRequestDayGrowthRatio extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Day growth ratio of read requests
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * dailyReadRequestDayGrowthRatio
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 0.8
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsDailyWriteRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Number of write requests per day
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * dailyWriteRequest
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * “”
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 1000
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * The balance of distributing requests
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * dailyWriteRequestDayGrowthRatio
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 0.8
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsFreezeConfigDay extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Freeze config day
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * freezeConfigDay
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * day
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 1
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsFreezeDataSize extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Size of the freeze data size
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * freezeDataSize
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * MB
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 100
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsHotDataSize extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Size of the hot data size
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * hotDataSize
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * MB
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 100
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsLocality extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * The locality of data
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * locality
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 0
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsReadRequestBalance extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * The balance of distributing read requests
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * readRequestBalance
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 1.0
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsRegionBalance extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * The ability to evenly distribute Regions on different RegionServer nodes
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * regionBalance
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * “”
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 1.0
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsRegionCount extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Number of regions count
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * regionCount
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 3
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsRegionCountDayGrowthRatio extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Day growth ratio of region count
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * regionCountDayGrowthRatio
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 1.0
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsRegionServerCount extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Number of region servers count
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * regionServerCount
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 2
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsRequestBalance extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * The balance of distributing requests
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * requestBalance
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * “”
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 0.9
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsStoreFileCount extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Number of store files
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * storeFileCount
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 36
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsStoreFileCountDayGrowthRatio extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Day growth ratio of store file count
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * storeFileCountDayGrowthRatio
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 0.7
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsTableSize extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Size of the table
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * tableSize
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * MB
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 678
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsTableSizeDayGrowthRatio extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Day growth ratio of table size
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * tableSizeDayGrowthRatio
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * \\""
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 1.0
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsWarmConfigDay extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Warm config day
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * warmConfigDay
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * day
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 1
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsWarmDataSize extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Size of the warm data size
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * warmDataSize
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * MB
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 100
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsWriteRequestBalance extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * The balance of distributing write requests
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * writeRequestBalance
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 1.0
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The number of days during which the table was not accessed.
   */
  coldAccessDay?: ListDoctorHBaseTablesResponseBodyDataMetricsColdAccessDay;
  /**
   * @remarks
   * The number of consecutive days without access to data before the data is considered as very cold data.
   */
  coldConfigDay?: ListDoctorHBaseTablesResponseBodyDataMetricsColdConfigDay;
  /**
   * @remarks
   * The size of cold data.
   */
  coldDataSize?: ListDoctorHBaseTablesResponseBodyDataMetricsColdDataSize;
  /**
   * @remarks
   * The total number of read requests for the table in a day.
   */
  dailyReadRequest?: ListDoctorHBaseTablesResponseBodyDataMetricsDailyReadRequest;
  /**
   * @remarks
   * The daily increment ratio of the number of read requests in a day.
   */
  dailyReadRequestDayGrowthRatio?: ListDoctorHBaseTablesResponseBodyDataMetricsDailyReadRequestDayGrowthRatio;
  /**
   * @remarks
   * The total number of write requests for the table in a day.
   */
  dailyWriteRequest?: ListDoctorHBaseTablesResponseBodyDataMetricsDailyWriteRequest;
  /**
   * @remarks
   * The daily increment ratio of the number of write requests in a day.
   */
  dailyWriteRequestDayGrowthRatio?: ListDoctorHBaseTablesResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio;
  /**
   * @remarks
   * The number of consecutive days without access to data before the data was considered as very cold data.
   */
  freezeConfigDay?: ListDoctorHBaseTablesResponseBodyDataMetricsFreezeConfigDay;
  /**
   * @remarks
   * The size of very cold data.
   */
  freezeDataSize?: ListDoctorHBaseTablesResponseBodyDataMetricsFreezeDataSize;
  /**
   * @remarks
   * The size of hot data.
   */
  hotDataSize?: ListDoctorHBaseTablesResponseBodyDataMetricsHotDataSize;
  /**
   * @remarks
   * The localization rate.
   */
  locality?: ListDoctorHBaseTablesResponseBodyDataMetricsLocality;
  /**
   * @remarks
   * The read balancing degree.
   */
  readRequestBalance?: ListDoctorHBaseTablesResponseBodyDataMetricsReadRequestBalance;
  /**
   * @remarks
   * The balancing degree.
   */
  regionBalance?: ListDoctorHBaseTablesResponseBodyDataMetricsRegionBalance;
  /**
   * @remarks
   * The number of regions that host the table.
   */
  regionCount?: ListDoctorHBaseTablesResponseBodyDataMetricsRegionCount;
  /**
   * @remarks
   * The daily increment ratio of the number of regions.
   */
  regionCountDayGrowthRatio?: ListDoctorHBaseTablesResponseBodyDataMetricsRegionCountDayGrowthRatio;
  /**
   * @remarks
   * The number of region servers that host the table.
   */
  regionServerCount?: ListDoctorHBaseTablesResponseBodyDataMetricsRegionServerCount;
  /**
   * @remarks
   * The request balancing degree.
   */
  requestBalance?: ListDoctorHBaseTablesResponseBodyDataMetricsRequestBalance;
  /**
   * @remarks
   * The number of StoreFiles.
   */
  storeFileCount?: ListDoctorHBaseTablesResponseBodyDataMetricsStoreFileCount;
  /**
   * @remarks
   * The daily increment ratio of the number of StoreFiles.
   */
  storeFileCountDayGrowthRatio?: ListDoctorHBaseTablesResponseBodyDataMetricsStoreFileCountDayGrowthRatio;
  /**
   * @remarks
   * The size of the table.
   */
  tableSize?: ListDoctorHBaseTablesResponseBodyDataMetricsTableSize;
  /**
   * @remarks
   * The daily increment ratio of the table size.
   */
  tableSizeDayGrowthRatio?: ListDoctorHBaseTablesResponseBodyDataMetricsTableSizeDayGrowthRatio;
  /**
   * @remarks
   * The number of consecutive days without access to data before the data is considered as cold data.
   */
  warmConfigDay?: ListDoctorHBaseTablesResponseBodyDataMetricsWarmConfigDay;
  /**
   * @remarks
   * The size of warm data.
   */
  warmDataSize?: ListDoctorHBaseTablesResponseBodyDataMetricsWarmDataSize;
  /**
   * @remarks
   * The write balancing degree.
   */
  writeRequestBalance?: ListDoctorHBaseTablesResponseBodyDataMetricsWriteRequestBalance;
  static names(): { [key: string]: string } {
    return {
      coldAccessDay: 'ColdAccessDay',
      coldConfigDay: 'ColdConfigDay',
      coldDataSize: 'ColdDataSize',
      dailyReadRequest: 'DailyReadRequest',
      dailyReadRequestDayGrowthRatio: 'DailyReadRequestDayGrowthRatio',
      dailyWriteRequest: 'DailyWriteRequest',
      dailyWriteRequestDayGrowthRatio: 'DailyWriteRequestDayGrowthRatio',
      freezeConfigDay: 'FreezeConfigDay',
      freezeDataSize: 'FreezeDataSize',
      hotDataSize: 'HotDataSize',
      locality: 'Locality',
      readRequestBalance: 'ReadRequestBalance',
      regionBalance: 'RegionBalance',
      regionCount: 'RegionCount',
      regionCountDayGrowthRatio: 'RegionCountDayGrowthRatio',
      regionServerCount: 'RegionServerCount',
      requestBalance: 'RequestBalance',
      storeFileCount: 'StoreFileCount',
      storeFileCountDayGrowthRatio: 'StoreFileCountDayGrowthRatio',
      tableSize: 'TableSize',
      tableSizeDayGrowthRatio: 'TableSizeDayGrowthRatio',
      warmConfigDay: 'WarmConfigDay',
      warmDataSize: 'WarmDataSize',
      writeRequestBalance: 'WriteRequestBalance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldAccessDay: ListDoctorHBaseTablesResponseBodyDataMetricsColdAccessDay,
      coldConfigDay: ListDoctorHBaseTablesResponseBodyDataMetricsColdConfigDay,
      coldDataSize: ListDoctorHBaseTablesResponseBodyDataMetricsColdDataSize,
      dailyReadRequest: ListDoctorHBaseTablesResponseBodyDataMetricsDailyReadRequest,
      dailyReadRequestDayGrowthRatio: ListDoctorHBaseTablesResponseBodyDataMetricsDailyReadRequestDayGrowthRatio,
      dailyWriteRequest: ListDoctorHBaseTablesResponseBodyDataMetricsDailyWriteRequest,
      dailyWriteRequestDayGrowthRatio: ListDoctorHBaseTablesResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio,
      freezeConfigDay: ListDoctorHBaseTablesResponseBodyDataMetricsFreezeConfigDay,
      freezeDataSize: ListDoctorHBaseTablesResponseBodyDataMetricsFreezeDataSize,
      hotDataSize: ListDoctorHBaseTablesResponseBodyDataMetricsHotDataSize,
      locality: ListDoctorHBaseTablesResponseBodyDataMetricsLocality,
      readRequestBalance: ListDoctorHBaseTablesResponseBodyDataMetricsReadRequestBalance,
      regionBalance: ListDoctorHBaseTablesResponseBodyDataMetricsRegionBalance,
      regionCount: ListDoctorHBaseTablesResponseBodyDataMetricsRegionCount,
      regionCountDayGrowthRatio: ListDoctorHBaseTablesResponseBodyDataMetricsRegionCountDayGrowthRatio,
      regionServerCount: ListDoctorHBaseTablesResponseBodyDataMetricsRegionServerCount,
      requestBalance: ListDoctorHBaseTablesResponseBodyDataMetricsRequestBalance,
      storeFileCount: ListDoctorHBaseTablesResponseBodyDataMetricsStoreFileCount,
      storeFileCountDayGrowthRatio: ListDoctorHBaseTablesResponseBodyDataMetricsStoreFileCountDayGrowthRatio,
      tableSize: ListDoctorHBaseTablesResponseBodyDataMetricsTableSize,
      tableSizeDayGrowthRatio: ListDoctorHBaseTablesResponseBodyDataMetricsTableSizeDayGrowthRatio,
      warmConfigDay: ListDoctorHBaseTablesResponseBodyDataMetricsWarmConfigDay,
      warmDataSize: ListDoctorHBaseTablesResponseBodyDataMetricsWarmDataSize,
      writeRequestBalance: ListDoctorHBaseTablesResponseBodyDataMetricsWriteRequestBalance,
    };
  }

  validate() {
    if(this.coldAccessDay && typeof (this.coldAccessDay as any).validate === 'function') {
      (this.coldAccessDay as any).validate();
    }
    if(this.coldConfigDay && typeof (this.coldConfigDay as any).validate === 'function') {
      (this.coldConfigDay as any).validate();
    }
    if(this.coldDataSize && typeof (this.coldDataSize as any).validate === 'function') {
      (this.coldDataSize as any).validate();
    }
    if(this.dailyReadRequest && typeof (this.dailyReadRequest as any).validate === 'function') {
      (this.dailyReadRequest as any).validate();
    }
    if(this.dailyReadRequestDayGrowthRatio && typeof (this.dailyReadRequestDayGrowthRatio as any).validate === 'function') {
      (this.dailyReadRequestDayGrowthRatio as any).validate();
    }
    if(this.dailyWriteRequest && typeof (this.dailyWriteRequest as any).validate === 'function') {
      (this.dailyWriteRequest as any).validate();
    }
    if(this.dailyWriteRequestDayGrowthRatio && typeof (this.dailyWriteRequestDayGrowthRatio as any).validate === 'function') {
      (this.dailyWriteRequestDayGrowthRatio as any).validate();
    }
    if(this.freezeConfigDay && typeof (this.freezeConfigDay as any).validate === 'function') {
      (this.freezeConfigDay as any).validate();
    }
    if(this.freezeDataSize && typeof (this.freezeDataSize as any).validate === 'function') {
      (this.freezeDataSize as any).validate();
    }
    if(this.hotDataSize && typeof (this.hotDataSize as any).validate === 'function') {
      (this.hotDataSize as any).validate();
    }
    if(this.locality && typeof (this.locality as any).validate === 'function') {
      (this.locality as any).validate();
    }
    if(this.readRequestBalance && typeof (this.readRequestBalance as any).validate === 'function') {
      (this.readRequestBalance as any).validate();
    }
    if(this.regionBalance && typeof (this.regionBalance as any).validate === 'function') {
      (this.regionBalance as any).validate();
    }
    if(this.regionCount && typeof (this.regionCount as any).validate === 'function') {
      (this.regionCount as any).validate();
    }
    if(this.regionCountDayGrowthRatio && typeof (this.regionCountDayGrowthRatio as any).validate === 'function') {
      (this.regionCountDayGrowthRatio as any).validate();
    }
    if(this.regionServerCount && typeof (this.regionServerCount as any).validate === 'function') {
      (this.regionServerCount as any).validate();
    }
    if(this.requestBalance && typeof (this.requestBalance as any).validate === 'function') {
      (this.requestBalance as any).validate();
    }
    if(this.storeFileCount && typeof (this.storeFileCount as any).validate === 'function') {
      (this.storeFileCount as any).validate();
    }
    if(this.storeFileCountDayGrowthRatio && typeof (this.storeFileCountDayGrowthRatio as any).validate === 'function') {
      (this.storeFileCountDayGrowthRatio as any).validate();
    }
    if(this.tableSize && typeof (this.tableSize as any).validate === 'function') {
      (this.tableSize as any).validate();
    }
    if(this.tableSizeDayGrowthRatio && typeof (this.tableSizeDayGrowthRatio as any).validate === 'function') {
      (this.tableSizeDayGrowthRatio as any).validate();
    }
    if(this.warmConfigDay && typeof (this.warmConfigDay as any).validate === 'function') {
      (this.warmConfigDay as any).validate();
    }
    if(this.warmDataSize && typeof (this.warmDataSize as any).validate === 'function') {
      (this.warmDataSize as any).validate();
    }
    if(this.writeRequestBalance && typeof (this.writeRequestBalance as any).validate === 'function') {
      (this.writeRequestBalance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The diagnosis result.
   */
  analysis?: ListDoctorHBaseTablesResponseBodyDataAnalysis;
  /**
   * @remarks
   * The metric information.
   */
  metrics?: ListDoctorHBaseTablesResponseBodyDataMetrics;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * tb_item
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      metrics: 'Metrics',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: ListDoctorHBaseTablesResponseBodyDataAnalysis,
      metrics: ListDoctorHBaseTablesResponseBodyDataMetrics,
      tableName: 'string',
    };
  }

  validate() {
    if(this.analysis && typeof (this.analysis as any).validate === 'function') {
      (this.analysis as any).validate();
    }
    if(this.metrics && typeof (this.metrics as any).validate === 'function') {
      (this.metrics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListDoctorHBaseTablesResponseBodyData[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The page number of the next page returned.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDoctorHBaseTablesResponseBodyData },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

