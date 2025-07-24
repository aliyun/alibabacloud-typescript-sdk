// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDoctorHBaseTableResponseBodyDataAnalysis extends $dara.Model {
  /**
   * @remarks
   * List of read hotspot regions.
   * 
   * @example
   * null
   */
  readRequestHotspotRegionList?: string[];
  /**
   * @remarks
   * Description of read imbalance.
   */
  readRequestUnbalanceSuggestion?: string;
  /**
   * @remarks
   * List of read/write hotspot regions.
   * 
   * @example
   * null
   */
  requestHotspotRegionList?: string[];
  /**
   * @remarks
   * Description of read/write imbalance.
   */
  requestUnbalanceSuggestion?: string;
  /**
   * @remarks
   * Table score.
   * 
   * @example
   * 85
   */
  tableScore?: number;
  /**
   * @remarks
   * List of write hotspot regions.
   * 
   * @example
   * null
   */
  writeRequestHotspotRegionList?: string[];
  /**
   * @remarks
   * Description of write imbalance.
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

export class GetDoctorHBaseTableResponseBodyDataMetricsColdAccessDay extends $dara.Model {
  /**
   * @remarks
   * Description of the metric.
   * 
   * @example
   * Cold access day
   */
  description?: string;
  /**
   * @remarks
   * Name of the metric.
   * 
   * @example
   * coldAccessDay
   */
  name?: string;
  /**
   * @remarks
   * Unit of the metric.
   * 
   * @example
   * day
   */
  unit?: string;
  /**
   * @remarks
   * Value of the metric.
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

export class GetDoctorHBaseTableResponseBodyDataMetricsColdConfigDay extends $dara.Model {
  /**
   * @remarks
   * Description of the metric.
   * 
   * @example
   * Cold config day
   */
  description?: string;
  /**
   * @remarks
   * Metric name.
   * 
   * @example
   * coldConfigDay
   */
  name?: string;
  /**
   * @remarks
   * Unit of the metric.
   * 
   * @example
   * day
   */
  unit?: string;
  /**
   * @remarks
   * Metric value.
   * 
   * @example
   * 10
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

export class GetDoctorHBaseTableResponseBodyDataMetricsColdDataSize extends $dara.Model {
  /**
   * @remarks
   * Metric description.
   * 
   * @example
   * Size of the cold data size
   */
  description?: string;
  /**
   * @remarks
   * Metric name.
   * 
   * @example
   * coldDataSize
   */
  name?: string;
  /**
   * @remarks
   * Metric unit.
   * 
   * @example
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * Metric value.
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

export class GetDoctorHBaseTableResponseBodyDataMetricsDailyReadRequest extends $dara.Model {
  /**
   * @remarks
   * Description of the metric.
   * 
   * @example
   * test-update
   */
  description?: string;
  /**
   * @remarks
   * Name of the item.
   * 
   * @example
   * dailyReadRequest
   */
  name?: string;
  /**
   * @remarks
   * Unit of the metric.
   * 
   * @example
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * Value of the metric.
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

export class GetDoctorHBaseTableResponseBodyDataMetricsDailyReadRequestDayGrowthRatio extends $dara.Model {
  /**
   * @remarks
   * Description of the metric.
   * 
   * @example
   * Day growth ratio of table size
   */
  description?: string;
  /**
   * @remarks
   * Metric name.
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
   * 1.5
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

export class GetDoctorHBaseTableResponseBodyDataMetricsDailyWriteRequest extends $dara.Model {
  /**
   * @remarks
   * Description of the metric.
   * 
   * @example
   * Number of write requests per day
   */
  description?: string;
  /**
   * @remarks
   * Name of the metric.
   * 
   * @example
   * dailyWriteRequest
   */
  name?: string;
  /**
   * @remarks
   * Unit of the metric.
   * 
   * @example
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * Value of the metric.
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

export class GetDoctorHBaseTableResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio extends $dara.Model {
  /**
   * @remarks
   * Description of the metric.
   * 
   * @example
   * The balance of distributing requests
   */
  description?: string;
  /**
   * @remarks
   * Name of the metric.
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
   * 0.5
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

export class GetDoctorHBaseTableResponseBodyDataMetricsFreezeConfigDay extends $dara.Model {
  /**
   * @remarks
   * Description of the metric.
   * 
   * @example
   * Freeze config day
   */
  description?: string;
  /**
   * @remarks
   * Name of the metric.
   * 
   * @example
   * freezeConfigDay
   */
  name?: string;
  /**
   * @remarks
   * Unit of the metric.
   * 
   * @example
   * day
   */
  unit?: string;
  /**
   * @remarks
   * Value of the metric.
   * 
   * @example
   * 10
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

export class GetDoctorHBaseTableResponseBodyDataMetricsFreezeDataSize extends $dara.Model {
  /**
   * @remarks
   * Metric description.
   * 
   * @example
   * Size of the freeze data size
   */
  description?: string;
  /**
   * @remarks
   * Metric name.
   * 
   * @example
   * freezeDataSize
   */
  name?: string;
  /**
   * @remarks
   * Metric unit.
   * 
   * @example
   * MB
   */
  unit?: string;
  /**
   * @remarks
   * Metric value.
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

export class GetDoctorHBaseTableResponseBodyDataMetricsHotDataSize extends $dara.Model {
  /**
   * @remarks
   * Description of the metric.
   * 
   * @example
   * Size of the hot data size
   */
  description?: string;
  /**
   * @remarks
   * Name of the metric.
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
   * The metric value.
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

export class GetDoctorHBaseTableResponseBodyDataMetricsLocality extends $dara.Model {
  /**
   * @remarks
   * Description of the metric.
   * 
   * @example
   * The locality of data
   */
  description?: string;
  /**
   * @remarks
   * Name of the metric.
   * 
   * @example
   * locality
   */
  name?: string;
  /**
   * @remarks
   * Unit of the metric.
   * 
   * @example
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * Value of the metric.
   * 
   * @example
   * 0.5
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

export class GetDoctorHBaseTableResponseBodyDataMetricsReadRequestBalance extends $dara.Model {
  /**
   * @remarks
   * Description of the metric.
   * 
   * @example
   * The balance of distributing read requests
   */
  description?: string;
  /**
   * @remarks
   * Name of the metric.
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
   * 0.5
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

export class GetDoctorHBaseTableResponseBodyDataMetricsRegionBalance extends $dara.Model {
  /**
   * @remarks
   * Description of the metric.
   * 
   * @example
   * The ability to evenly distribute Regions on different RegionServer nodes
   */
  description?: string;
  /**
   * @remarks
   * Metric name.
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
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * The metric value.
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

export class GetDoctorHBaseTableResponseBodyDataMetricsRegionCount extends $dara.Model {
  /**
   * @remarks
   * Metric description.
   * 
   * @example
   * Number of regions count
   */
  description?: string;
  /**
   * @remarks
   * Metric name.
   * 
   * @example
   * regionCount
   */
  name?: string;
  /**
   * @remarks
   * Metric unit.
   * 
   * @example
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * Metric value.
   * 
   * @example
   * 10
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

export class GetDoctorHBaseTableResponseBodyDataMetricsRegionCountDayGrowthRatio extends $dara.Model {
  /**
   * @remarks
   * Metric description.
   * 
   * @example
   * Day growth ratio of region count
   */
  description?: string;
  /**
   * @remarks
   * Metric name.
   * 
   * @example
   * regionCountDayGrowthRatio
   */
  name?: string;
  /**
   * @remarks
   * Metric unit.
   * 
   * @example
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * Metric value.
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

export class GetDoctorHBaseTableResponseBodyDataMetricsRegionServerCount extends $dara.Model {
  /**
   * @remarks
   * Metric description.
   * 
   * @example
   * Number of region servers count
   */
  description?: string;
  /**
   * @remarks
   * Metric name.
   * 
   * @example
   * regionServerCount
   */
  name?: string;
  /**
   * @remarks
   * Metric unit.
   * 
   * @example
   * “”
   */
  unit?: string;
  /**
   * @remarks
   * Usage.
   * 
   * @example
   * 10
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

export class GetDoctorHBaseTableResponseBodyDataMetricsRequestBalance extends $dara.Model {
  /**
   * @remarks
   * Description of the metric.
   * 
   * @example
   * The balance of distributing requests
   */
  description?: string;
  /**
   * @remarks
   * Name of the metric.
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
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * The metric value.
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

export class GetDoctorHBaseTableResponseBodyDataMetricsStoreFileCount extends $dara.Model {
  /**
   * @remarks
   * Description of the metric.
   * 
   * @example
   * Number of store files
   */
  description?: string;
  /**
   * @remarks
   * Name of the metric.
   * 
   * @example
   * storeFileCount
   */
  name?: string;
  /**
   * @remarks
   * Unit of the metric.
   * 
   * @example
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * Value of the metric.
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

export class GetDoctorHBaseTableResponseBodyDataMetricsStoreFileCountDayGrowthRatio extends $dara.Model {
  /**
   * @remarks
   * Metric description.
   * 
   * @example
   * Day growth ratio of store file count
   */
  description?: string;
  /**
   * @remarks
   * Metric name.
   * 
   * @example
   * storeFileCountDayGrowthRatio
   */
  name?: string;
  /**
   * @remarks
   * Metric unit.
   * 
   * @example
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * Metric value.
   * 
   * @example
   * 1.5
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

export class GetDoctorHBaseTableResponseBodyDataMetricsTableSize extends $dara.Model {
  /**
   * @remarks
   * Description of the metric.
   * 
   * @example
   * Size of the table
   */
  description?: string;
  /**
   * @remarks
   * Metric name.
   * 
   * @example
   * tableSize
   */
  name?: string;
  /**
   * @remarks
   * Unit of the metric
   * 
   * @example
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * Metric value.
   * 
   * @example
   * tb_item
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

export class GetDoctorHBaseTableResponseBodyDataMetricsTableSizeDayGrowthRatio extends $dara.Model {
  /**
   * @remarks
   * Metric description.
   * 
   * @example
   * Day growth ratio of table size
   */
  description?: string;
  /**
   * @remarks
   * Metric name.
   * 
   * @example
   * tableSizeDayGrowthRatio
   */
  name?: string;
  /**
   * @remarks
   * Metric unit.
   * 
   * @example
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * Metric value.
   * 
   * @example
   * 1.5
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

export class GetDoctorHBaseTableResponseBodyDataMetricsWarmConfigDay extends $dara.Model {
  /**
   * @remarks
   * Metric description.
   * 
   * @example
   * Size of the warm data size
   */
  description?: string;
  /**
   * @remarks
   * Metric name.
   * 
   * @example
   * warmConfigDay
   */
  name?: string;
  /**
   * @remarks
   * Metric unit.
   * 
   * @example
   * MB
   */
  unit?: string;
  /**
   * @remarks
   * Metric value.
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

export class GetDoctorHBaseTableResponseBodyDataMetricsWarmDataSize extends $dara.Model {
  /**
   * @remarks
   * Description of the metric.
   * 
   * @example
   * Size of the warm data size
   */
  description?: string;
  /**
   * @remarks
   * Name of the metric.
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
   * Usage rate.
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

export class GetDoctorHBaseTableResponseBodyDataMetricsWriteRequestBalance extends $dara.Model {
  /**
   * @remarks
   * Description of the metric.
   * 
   * @example
   * The balance of distributing write requests
   */
  description?: string;
  /**
   * @remarks
   * Name of the metric.
   * 
   * @example
   * writeRequestBalance
   */
  name?: string;
  /**
   * @remarks
   * Unit of the metric.
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
   * 0.5
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

export class GetDoctorHBaseTableResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * Number of days the table has not been accessed.
   */
  coldAccessDay?: GetDoctorHBaseTableResponseBodyDataMetricsColdAccessDay;
  /**
   * @remarks
   * Cold data access days configuration.
   */
  coldConfigDay?: GetDoctorHBaseTableResponseBodyDataMetricsColdConfigDay;
  /**
   * @remarks
   * Cold data size.
   */
  coldDataSize?: GetDoctorHBaseTableResponseBodyDataMetricsColdDataSize;
  /**
   * @remarks
   * Number of read requests per day.
   */
  dailyReadRequest?: GetDoctorHBaseTableResponseBodyDataMetricsDailyReadRequest;
  /**
   * @remarks
   * Daily growth ratio of daily read requests.
   */
  dailyReadRequestDayGrowthRatio?: GetDoctorHBaseTableResponseBodyDataMetricsDailyReadRequestDayGrowthRatio;
  /**
   * @remarks
   * Number of write requests per day.
   */
  dailyWriteRequest?: GetDoctorHBaseTableResponseBodyDataMetricsDailyWriteRequest;
  /**
   * @remarks
   * Daily write request growth ratio.
   */
  dailyWriteRequestDayGrowthRatio?: GetDoctorHBaseTableResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio;
  /**
   * @remarks
   * Configuration for the number of days cold data is accessed.
   */
  freezeConfigDay?: GetDoctorHBaseTableResponseBodyDataMetricsFreezeConfigDay;
  /**
   * @remarks
   * Frozen data size.
   */
  freezeDataSize?: GetDoctorHBaseTableResponseBodyDataMetricsFreezeDataSize;
  /**
   * @remarks
   * Hot data size.
   */
  hotDataSize?: GetDoctorHBaseTableResponseBodyDataMetricsHotDataSize;
  /**
   * @remarks
   * Locality rate.
   */
  locality?: GetDoctorHBaseTableResponseBodyDataMetricsLocality;
  /**
   * @remarks
   * Read request balance.
   */
  readRequestBalance?: GetDoctorHBaseTableResponseBodyDataMetricsReadRequestBalance;
  /**
   * @remarks
   * Region balance.
   */
  regionBalance?: GetDoctorHBaseTableResponseBodyDataMetricsRegionBalance;
  /**
   * @remarks
   * Number of regions.
   */
  regionCount?: GetDoctorHBaseTableResponseBodyDataMetricsRegionCount;
  /**
   * @remarks
   * Daily incremental ratio of regions
   */
  regionCountDayGrowthRatio?: GetDoctorHBaseTableResponseBodyDataMetricsRegionCountDayGrowthRatio;
  /**
   * @remarks
   * Number of RegionServers.
   */
  regionServerCount?: GetDoctorHBaseTableResponseBodyDataMetricsRegionServerCount;
  /**
   * @remarks
   * Request balance.
   */
  requestBalance?: GetDoctorHBaseTableResponseBodyDataMetricsRequestBalance;
  /**
   * @remarks
   * Number of store files.
   */
  storeFileCount?: GetDoctorHBaseTableResponseBodyDataMetricsStoreFileCount;
  /**
   * @remarks
   * Daily growth ratio of store file count.
   */
  storeFileCountDayGrowthRatio?: GetDoctorHBaseTableResponseBodyDataMetricsStoreFileCountDayGrowthRatio;
  /**
   * @remarks
   * Table size.
   */
  tableSize?: GetDoctorHBaseTableResponseBodyDataMetricsTableSize;
  /**
   * @remarks
   * Daily growth ratio of table size.
   */
  tableSizeDayGrowthRatio?: GetDoctorHBaseTableResponseBodyDataMetricsTableSizeDayGrowthRatio;
  /**
   * @remarks
   * Warm data access days configuration.
   */
  warmConfigDay?: GetDoctorHBaseTableResponseBodyDataMetricsWarmConfigDay;
  /**
   * @remarks
   * Warm data size.
   */
  warmDataSize?: GetDoctorHBaseTableResponseBodyDataMetricsWarmDataSize;
  /**
   * @remarks
   * Write request balance.
   */
  writeRequestBalance?: GetDoctorHBaseTableResponseBodyDataMetricsWriteRequestBalance;
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
      coldAccessDay: GetDoctorHBaseTableResponseBodyDataMetricsColdAccessDay,
      coldConfigDay: GetDoctorHBaseTableResponseBodyDataMetricsColdConfigDay,
      coldDataSize: GetDoctorHBaseTableResponseBodyDataMetricsColdDataSize,
      dailyReadRequest: GetDoctorHBaseTableResponseBodyDataMetricsDailyReadRequest,
      dailyReadRequestDayGrowthRatio: GetDoctorHBaseTableResponseBodyDataMetricsDailyReadRequestDayGrowthRatio,
      dailyWriteRequest: GetDoctorHBaseTableResponseBodyDataMetricsDailyWriteRequest,
      dailyWriteRequestDayGrowthRatio: GetDoctorHBaseTableResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio,
      freezeConfigDay: GetDoctorHBaseTableResponseBodyDataMetricsFreezeConfigDay,
      freezeDataSize: GetDoctorHBaseTableResponseBodyDataMetricsFreezeDataSize,
      hotDataSize: GetDoctorHBaseTableResponseBodyDataMetricsHotDataSize,
      locality: GetDoctorHBaseTableResponseBodyDataMetricsLocality,
      readRequestBalance: GetDoctorHBaseTableResponseBodyDataMetricsReadRequestBalance,
      regionBalance: GetDoctorHBaseTableResponseBodyDataMetricsRegionBalance,
      regionCount: GetDoctorHBaseTableResponseBodyDataMetricsRegionCount,
      regionCountDayGrowthRatio: GetDoctorHBaseTableResponseBodyDataMetricsRegionCountDayGrowthRatio,
      regionServerCount: GetDoctorHBaseTableResponseBodyDataMetricsRegionServerCount,
      requestBalance: GetDoctorHBaseTableResponseBodyDataMetricsRequestBalance,
      storeFileCount: GetDoctorHBaseTableResponseBodyDataMetricsStoreFileCount,
      storeFileCountDayGrowthRatio: GetDoctorHBaseTableResponseBodyDataMetricsStoreFileCountDayGrowthRatio,
      tableSize: GetDoctorHBaseTableResponseBodyDataMetricsTableSize,
      tableSizeDayGrowthRatio: GetDoctorHBaseTableResponseBodyDataMetricsTableSizeDayGrowthRatio,
      warmConfigDay: GetDoctorHBaseTableResponseBodyDataMetricsWarmConfigDay,
      warmDataSize: GetDoctorHBaseTableResponseBodyDataMetricsWarmDataSize,
      writeRequestBalance: GetDoctorHBaseTableResponseBodyDataMetricsWriteRequestBalance,
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

export class GetDoctorHBaseTableResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Diagnostic results.
   */
  analysis?: GetDoctorHBaseTableResponseBodyDataAnalysis;
  /**
   * @remarks
   * Metrics information.
   */
  metrics?: GetDoctorHBaseTableResponseBodyDataMetrics;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: GetDoctorHBaseTableResponseBodyDataAnalysis,
      metrics: GetDoctorHBaseTableResponseBodyDataMetrics,
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

export class GetDoctorHBaseTableResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returned data.
   */
  data?: GetDoctorHBaseTableResponseBodyData;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
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
      data: GetDoctorHBaseTableResponseBodyData,
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

