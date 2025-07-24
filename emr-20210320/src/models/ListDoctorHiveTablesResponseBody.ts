// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoctorHiveTablesResponseBodyDataAnalysis extends $dara.Model {
  /**
   * @remarks
   * The score for the file sizes of the Hive table.
   * 
   * @example
   * 80
   */
  hiveDistributionScore?: number;
  /**
   * @remarks
   * The score for the data formats of the Hive table.
   * 
   * @example
   * 60
   */
  hiveFormatScore?: number;
  /**
   * @remarks
   * The score for the access frequency of the Hive table.
   * 
   * @example
   * 70
   */
  hiveFrequencyScore?: number;
  /**
   * @remarks
   * The overall score of the Hive table.
   * 
   * @example
   * 80
   */
  hiveScore?: number;
  static names(): { [key: string]: string } {
    return {
      hiveDistributionScore: 'HiveDistributionScore',
      hiveFormatScore: 'HiveFormatScore',
      hiveFrequencyScore: 'HiveFrequencyScore',
      hiveScore: 'HiveScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hiveDistributionScore: 'number',
      hiveFormatScore: 'number',
      hiveFrequencyScore: 'number',
      hiveScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataFormats extends $dara.Model {
  /**
   * @remarks
   * The daily increment of data in the format.
   * 
   * @example
   * 1232124
   */
  formatDayGrowthSize?: number;
  /**
   * @remarks
   * The name of the storage format.
   * 
   * @example
   * TextInputFormat
   */
  formatName?: string;
  /**
   * @remarks
   * The proportion of the data in the format.
   * 
   * @example
   * 0.23
   */
  formatRatio?: number;
  /**
   * @remarks
   * The amount of data in the format.
   * 
   * @example
   * 506930200
   */
  formatSize?: number;
  /**
   * @remarks
   * The day-to-day growth rate of data in the format.
   * 
   * @example
   * 0.04
   */
  formatSizeDayGrowthRatio?: number;
  /**
   * @remarks
   * The unit of the amount of data in the format.
   * 
   * @example
   * MB
   */
  formatSizeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      formatDayGrowthSize: 'FormatDayGrowthSize',
      formatName: 'FormatName',
      formatRatio: 'FormatRatio',
      formatSize: 'FormatSize',
      formatSizeDayGrowthRatio: 'FormatSizeDayGrowthRatio',
      formatSizeUnit: 'FormatSizeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      formatDayGrowthSize: 'number',
      formatName: 'string',
      formatRatio: 'number',
      formatSize: 'number',
      formatSizeDayGrowthRatio: 'number',
      formatSizeUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsColdDataDayGrowthSize extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Day growth size of cold data
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * coldDataDayGrowthSize
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
   * 217715
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

export class ListDoctorHiveTablesResponseBodyDataMetricsColdDataRatio extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Cold data ratio
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * coldDataRatio
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
   * 0.01
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

export class ListDoctorHiveTablesResponseBodyDataMetricsColdDataSize extends $dara.Model {
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
   * 217715
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

export class ListDoctorHiveTablesResponseBodyDataMetricsColdDataSizeDayGrowthRatio extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Day growth ratio of cold data size
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * coldDataSizeDayGrowthRatio
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
   * 0.01
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

export class ListDoctorHiveTablesResponseBodyDataMetricsEmptyFileCount extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Number of empty files
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * emptyFileCount
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ”“
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 3123
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

export class ListDoctorHiveTablesResponseBodyDataMetricsEmptyFileCountDayGrowthRatio extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Day growth ratio of empty files
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * emptyFileCountDayGrowthRatio
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ”“
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 0.01
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

export class ListDoctorHiveTablesResponseBodyDataMetricsEmptyFileDayGrowthCount extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Day growth count of empty files
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * emptyFileDayGrowthCount
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ”“
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * -20
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

export class ListDoctorHiveTablesResponseBodyDataMetricsEmptyFileRatio extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Ratio of empty files
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * emptyFileRatio
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
   * 0.01
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

export class ListDoctorHiveTablesResponseBodyDataMetricsFreezeDataDayGrowthSize extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Day growth size of freeze data
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * freezeDataDayGrowthSize
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
   * 33229309
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

export class ListDoctorHiveTablesResponseBodyDataMetricsFreezeDataRatio extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Ratio of freeze data
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * freezeDataRatio
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
   * 0.98
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

export class ListDoctorHiveTablesResponseBodyDataMetricsFreezeDataSize extends $dara.Model {
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
   * 33229309
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

export class ListDoctorHiveTablesResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Day growth ratio of freeze data size
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * freezeDataSizeDayGrowthRatio
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ”“
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 0.01
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

export class ListDoctorHiveTablesResponseBodyDataMetricsHotDataDayGrowthSize extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Day growth size of hot data
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * hotDataDayGrowthSize
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
   * 203431
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

export class ListDoctorHiveTablesResponseBodyDataMetricsHotDataRatio extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Hot data ratio
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * hotDataRatio
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
   * 0.01
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

export class ListDoctorHiveTablesResponseBodyDataMetricsHotDataSize extends $dara.Model {
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
   * 203431
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

export class ListDoctorHiveTablesResponseBodyDataMetricsHotDataSizeDayGrowthRatio extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Day growth ratio of hot data size
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * hotDataSizeDayGrowthRatio
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ”“
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 0.01
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

export class ListDoctorHiveTablesResponseBodyDataMetricsLargeFileCount extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Number of large files
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * largeFileCount
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
   * 132
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

export class ListDoctorHiveTablesResponseBodyDataMetricsLargeFileCountDayGrowthRatio extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Day growth ratio of large files
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * largeFileCountDayGrowthRatio
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ”“
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 0.01
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

export class ListDoctorHiveTablesResponseBodyDataMetricsLargeFileDayGrowthCount extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Day growth count of large files
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * largeFileDayGrowthCount
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
   * 40
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

export class ListDoctorHiveTablesResponseBodyDataMetricsLargeFileRatio extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Ratio of large files
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * largeFileRatio
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ”“
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 0.02
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

export class ListDoctorHiveTablesResponseBodyDataMetricsMediumFileCount extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Number of medium files
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * mediumFileCount
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
   * 5
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

export class ListDoctorHiveTablesResponseBodyDataMetricsMediumFileCountDayGrowthRatio extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Day growth ratio of medium files
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * mediumFileCountDayGrowthRatio
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ”“
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 0.01
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

export class ListDoctorHiveTablesResponseBodyDataMetricsMediumFileDayGrowthCount extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Day growth count of medium files
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * mediumFileDayGrowthCount
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
   * 20
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

export class ListDoctorHiveTablesResponseBodyDataMetricsMediumFileRatio extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Ratio of medium files
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * mediumFileRatio
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ”“
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

export class ListDoctorHiveTablesResponseBodyDataMetricsPartitionNum extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * number of partitions
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * partitionNum
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
   * 331
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

export class ListDoctorHiveTablesResponseBodyDataMetricsSmallFileCount extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Number of small files
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * smallFileCount
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * "“
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 18
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

export class ListDoctorHiveTablesResponseBodyDataMetricsSmallFileCountDayGrowthRatio extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Day growth ratio of small files
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * smallFileCountDayGrowthRatio
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ”“
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 0.01
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

export class ListDoctorHiveTablesResponseBodyDataMetricsSmallFileDayGrowthCount extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Day growth count of small files
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * smallFileDayGrowthCount
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ”“
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 18
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

export class ListDoctorHiveTablesResponseBodyDataMetricsSmallFileRatio extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Ratio of small files
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * smallFileRatio
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ”“
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 0.04
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

export class ListDoctorHiveTablesResponseBodyDataMetricsTinyFileCount extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Number of tiny files
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * tinyFileCount
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ”“
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 451
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

export class ListDoctorHiveTablesResponseBodyDataMetricsTinyFileCountDayGrowthRatio extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Day growth ratio of tiny files
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * tinyFileCountDayGrowthRatio
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ”“
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 0.04
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

export class ListDoctorHiveTablesResponseBodyDataMetricsTinyFileDayGrowthCount extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Day growth count of tiny files
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * tinyFileDayGrowthCount
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ”“
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 482
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

export class ListDoctorHiveTablesResponseBodyDataMetricsTinyFileRatio extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Ratio of tiny files
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * tinyFileRatio
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
   * 0.96
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

export class ListDoctorHiveTablesResponseBodyDataMetricsTotalDataDayGrowthSize extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Day growth size of total data
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * totalDataDayGrowthSize
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
   * 33800296
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

export class ListDoctorHiveTablesResponseBodyDataMetricsTotalDataSize extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Total data size in megabytes (MB)
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * totalDataSize
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
   * 33800296
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

export class ListDoctorHiveTablesResponseBodyDataMetricsTotalDataSizeDayGrowthRatio extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Day growth ratio of total data size
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * totalDataSizeDayGrowthRatio
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ”“
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 0.01
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

export class ListDoctorHiveTablesResponseBodyDataMetricsTotalFileCount extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Number of total files
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * totalFileCount
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ”“
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 123
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

export class ListDoctorHiveTablesResponseBodyDataMetricsTotalFileCountDayGrowthRatio extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Day growth ratio of total files
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * totalFileCountDayGrowthRatio
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ”“
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 0.01
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

export class ListDoctorHiveTablesResponseBodyDataMetricsTotalFileDayGrowthCount extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Day growth count of total files
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * totalFileDayGrowthCount
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

export class ListDoctorHiveTablesResponseBodyDataMetricsWarmDataDayGrowthSize extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Day growth size of warm data
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * warmDataDayGrowthSize
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
   * 149841
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

export class ListDoctorHiveTablesResponseBodyDataMetricsWarmDataRatio extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Ratio of warm data
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * warmDataRatio
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
   * 0.1
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

export class ListDoctorHiveTablesResponseBodyDataMetricsWarmDataSize extends $dara.Model {
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
   * 14981
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

export class ListDoctorHiveTablesResponseBodyDataMetricsWarmDataSizeDayGrowthRatio extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Day growth ratio of warm data size
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * warmDataSizeDayGrowthRatio
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ”“
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 0.01
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

export class ListDoctorHiveTablesResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The daily increment of the amount of cold data. Cold data refers to data that is not accessed for more than 30 days but is accessed in previous 90 days.
   */
  coldDataDayGrowthSize?: ListDoctorHiveTablesResponseBodyDataMetricsColdDataDayGrowthSize;
  /**
   * @remarks
   * The proportion of cold data. Cold data refers to data that is not accessed for more than 30 days but is accessed in previous 90 days.
   */
  coldDataRatio?: ListDoctorHiveTablesResponseBodyDataMetricsColdDataRatio;
  /**
   * @remarks
   * The amount of cold data. Cold data refers to data that is not accessed for more than 30 days but is accessed in previous 90 days.
   */
  coldDataSize?: ListDoctorHiveTablesResponseBodyDataMetricsColdDataSize;
  /**
   * @remarks
   * The day-to-day growth rate of the amount of cold data. Cold data refers to data that is not accessed for more than 30 days but is accessed in previous 90 days.
   */
  coldDataSizeDayGrowthRatio?: ListDoctorHiveTablesResponseBodyDataMetricsColdDataSizeDayGrowthRatio;
  /**
   * @remarks
   * The number of empty files. Empty files are those with a size of 0 MB.
   */
  emptyFileCount?: ListDoctorHiveTablesResponseBodyDataMetricsEmptyFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the number of empty files. Empty files are those with a size of 0 MB.
   */
  emptyFileCountDayGrowthRatio?: ListDoctorHiveTablesResponseBodyDataMetricsEmptyFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the number of empty files. Empty files are those with a size of 0 MB.
   */
  emptyFileDayGrowthCount?: ListDoctorHiveTablesResponseBodyDataMetricsEmptyFileDayGrowthCount;
  /**
   * @remarks
   * The proportion of empty files. Empty files are those with a size of 0 MB.
   */
  emptyFileRatio?: ListDoctorHiveTablesResponseBodyDataMetricsEmptyFileRatio;
  /**
   * @remarks
   * The daily increment of the amount of very cold data. Very cold data refers to data that is not accessed for more than 90 days.
   */
  freezeDataDayGrowthSize?: ListDoctorHiveTablesResponseBodyDataMetricsFreezeDataDayGrowthSize;
  /**
   * @remarks
   * The proportion of very cold data. Very cold data refers to data that is not accessed for more than 90 days.
   */
  freezeDataRatio?: ListDoctorHiveTablesResponseBodyDataMetricsFreezeDataRatio;
  /**
   * @remarks
   * The amount of very cold data. Very cold data refers to data that is not accessed for more than 90 days.
   */
  freezeDataSize?: ListDoctorHiveTablesResponseBodyDataMetricsFreezeDataSize;
  /**
   * @remarks
   * The day-to-day growth rate of the amount of very cold data. Very cold data refers to data that is not accessed for more than 90 days.
   */
  freezeDataSizeDayGrowthRatio?: ListDoctorHiveTablesResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the amount of hot data. Hot data refers to data that is accessed in previous seven days.
   */
  hotDataDayGrowthSize?: ListDoctorHiveTablesResponseBodyDataMetricsHotDataDayGrowthSize;
  /**
   * @remarks
   * The proportion of hot data. Hot data refers to data that is accessed in previous seven days.
   */
  hotDataRatio?: ListDoctorHiveTablesResponseBodyDataMetricsHotDataRatio;
  /**
   * @remarks
   * The amount of hot data. Hot data refers to data that is accessed in previous seven days.
   */
  hotDataSize?: ListDoctorHiveTablesResponseBodyDataMetricsHotDataSize;
  /**
   * @remarks
   * The day-to-day growth rate of the amount of hot data. Hot data refers to data that is accessed in previous seven days.
   */
  hotDataSizeDayGrowthRatio?: ListDoctorHiveTablesResponseBodyDataMetricsHotDataSizeDayGrowthRatio;
  /**
   * @remarks
   * The number of large files. Large files are those with a size greater than 1 GB.
   */
  largeFileCount?: ListDoctorHiveTablesResponseBodyDataMetricsLargeFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the number of large files. Large files are those with a size greater than 1 GB.
   */
  largeFileCountDayGrowthRatio?: ListDoctorHiveTablesResponseBodyDataMetricsLargeFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the number of large files. Large files are those with a size greater than 1 GB.
   */
  largeFileDayGrowthCount?: ListDoctorHiveTablesResponseBodyDataMetricsLargeFileDayGrowthCount;
  /**
   * @remarks
   * The proportion of large files. Large files are those with a size greater than 1 GB.
   */
  largeFileRatio?: ListDoctorHiveTablesResponseBodyDataMetricsLargeFileRatio;
  /**
   * @remarks
   * The number of medium files. Medium files are those with a size greater than or equal to 128 MB and less than or equal to 1 GB.
   */
  mediumFileCount?: ListDoctorHiveTablesResponseBodyDataMetricsMediumFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the number of medium files. Medium files are those with a size greater than or equal to 128 MB and less than or equal to 1 GB.
   */
  mediumFileCountDayGrowthRatio?: ListDoctorHiveTablesResponseBodyDataMetricsMediumFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the number of medium files. Medium files are those with a size greater than or equal to 128 MB and less than or equal to 1 GB.
   */
  mediumFileDayGrowthCount?: ListDoctorHiveTablesResponseBodyDataMetricsMediumFileDayGrowthCount;
  /**
   * @remarks
   * The proportion of medium files. Medium files are those with a size greater than or equal to 128 MB and less than or equal to 1 GB.
   */
  mediumFileRatio?: ListDoctorHiveTablesResponseBodyDataMetricsMediumFileRatio;
  /**
   * @remarks
   * The number of partitions.
   */
  partitionNum?: ListDoctorHiveTablesResponseBodyDataMetricsPartitionNum;
  /**
   * @remarks
   * The number of small files. Small files are those with a size greater than or equal to 10 MB and less than 128 MB.
   */
  smallFileCount?: ListDoctorHiveTablesResponseBodyDataMetricsSmallFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the number of small files. Small files are those with a size greater than or equal to 10 MB and less than 128 MB.
   */
  smallFileCountDayGrowthRatio?: ListDoctorHiveTablesResponseBodyDataMetricsSmallFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the number of small files. Small files are those with a size greater than or equal to 10 MB and less than 128 MB.
   */
  smallFileDayGrowthCount?: ListDoctorHiveTablesResponseBodyDataMetricsSmallFileDayGrowthCount;
  /**
   * @remarks
   * The proportion of small files. Small files are those with a size greater than or equal to 10 MB and less than 128 MB.
   */
  smallFileRatio?: ListDoctorHiveTablesResponseBodyDataMetricsSmallFileRatio;
  /**
   * @remarks
   * The number of very small files. Very small files are those with a size greater than 0 MB and less than 10 MB.
   */
  tinyFileCount?: ListDoctorHiveTablesResponseBodyDataMetricsTinyFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the number of very small files. Very small files are those with a size greater than 0 MB and less than 10 MB.
   */
  tinyFileCountDayGrowthRatio?: ListDoctorHiveTablesResponseBodyDataMetricsTinyFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the number of very small files. Very small files are those with a size greater than 0 MB and less than 10 MB.
   */
  tinyFileDayGrowthCount?: ListDoctorHiveTablesResponseBodyDataMetricsTinyFileDayGrowthCount;
  /**
   * @remarks
   * The proportion of very small files. Very small files are those with a size greater than 0 MB and less than 10 MB.
   */
  tinyFileRatio?: ListDoctorHiveTablesResponseBodyDataMetricsTinyFileRatio;
  /**
   * @remarks
   * The daily increment of the total amount of data.
   */
  totalDataDayGrowthSize?: ListDoctorHiveTablesResponseBodyDataMetricsTotalDataDayGrowthSize;
  /**
   * @remarks
   * The total amount of data.
   */
  totalDataSize?: ListDoctorHiveTablesResponseBodyDataMetricsTotalDataSize;
  /**
   * @remarks
   * The day-to-day growth rate of the total amount of data.
   */
  totalDataSizeDayGrowthRatio?: ListDoctorHiveTablesResponseBodyDataMetricsTotalDataSizeDayGrowthRatio;
  /**
   * @remarks
   * The total number of files.
   */
  totalFileCount?: ListDoctorHiveTablesResponseBodyDataMetricsTotalFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the total number of files.
   */
  totalFileCountDayGrowthRatio?: ListDoctorHiveTablesResponseBodyDataMetricsTotalFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the total number of files.
   */
  totalFileDayGrowthCount?: ListDoctorHiveTablesResponseBodyDataMetricsTotalFileDayGrowthCount;
  /**
   * @remarks
   * The daily increment of the amount of warm data. Warm data refers to data that is not accessed for more than 7 days but is accessed in previous 30 days.
   */
  warmDataDayGrowthSize?: ListDoctorHiveTablesResponseBodyDataMetricsWarmDataDayGrowthSize;
  /**
   * @remarks
   * The proportion of warm data. Warm data refers to data that is not accessed for more than 7 days but is accessed in previous 30 days.
   */
  warmDataRatio?: ListDoctorHiveTablesResponseBodyDataMetricsWarmDataRatio;
  /**
   * @remarks
   * The amount of warm data. Warm data refers to data that is not accessed for more than 7 days but is accessed in previous 30 days.
   */
  warmDataSize?: ListDoctorHiveTablesResponseBodyDataMetricsWarmDataSize;
  /**
   * @remarks
   * The day-to-day growth rate of the amount of warm data. Warm data refers to data that is not accessed for more than 7 days but is accessed in previous 30 days.
   */
  warmDataSizeDayGrowthRatio?: ListDoctorHiveTablesResponseBodyDataMetricsWarmDataSizeDayGrowthRatio;
  static names(): { [key: string]: string } {
    return {
      coldDataDayGrowthSize: 'ColdDataDayGrowthSize',
      coldDataRatio: 'ColdDataRatio',
      coldDataSize: 'ColdDataSize',
      coldDataSizeDayGrowthRatio: 'ColdDataSizeDayGrowthRatio',
      emptyFileCount: 'EmptyFileCount',
      emptyFileCountDayGrowthRatio: 'EmptyFileCountDayGrowthRatio',
      emptyFileDayGrowthCount: 'EmptyFileDayGrowthCount',
      emptyFileRatio: 'EmptyFileRatio',
      freezeDataDayGrowthSize: 'FreezeDataDayGrowthSize',
      freezeDataRatio: 'FreezeDataRatio',
      freezeDataSize: 'FreezeDataSize',
      freezeDataSizeDayGrowthRatio: 'FreezeDataSizeDayGrowthRatio',
      hotDataDayGrowthSize: 'HotDataDayGrowthSize',
      hotDataRatio: 'HotDataRatio',
      hotDataSize: 'HotDataSize',
      hotDataSizeDayGrowthRatio: 'HotDataSizeDayGrowthRatio',
      largeFileCount: 'LargeFileCount',
      largeFileCountDayGrowthRatio: 'LargeFileCountDayGrowthRatio',
      largeFileDayGrowthCount: 'LargeFileDayGrowthCount',
      largeFileRatio: 'LargeFileRatio',
      mediumFileCount: 'MediumFileCount',
      mediumFileCountDayGrowthRatio: 'MediumFileCountDayGrowthRatio',
      mediumFileDayGrowthCount: 'MediumFileDayGrowthCount',
      mediumFileRatio: 'MediumFileRatio',
      partitionNum: 'PartitionNum',
      smallFileCount: 'SmallFileCount',
      smallFileCountDayGrowthRatio: 'SmallFileCountDayGrowthRatio',
      smallFileDayGrowthCount: 'SmallFileDayGrowthCount',
      smallFileRatio: 'SmallFileRatio',
      tinyFileCount: 'TinyFileCount',
      tinyFileCountDayGrowthRatio: 'TinyFileCountDayGrowthRatio',
      tinyFileDayGrowthCount: 'TinyFileDayGrowthCount',
      tinyFileRatio: 'TinyFileRatio',
      totalDataDayGrowthSize: 'TotalDataDayGrowthSize',
      totalDataSize: 'TotalDataSize',
      totalDataSizeDayGrowthRatio: 'TotalDataSizeDayGrowthRatio',
      totalFileCount: 'TotalFileCount',
      totalFileCountDayGrowthRatio: 'TotalFileCountDayGrowthRatio',
      totalFileDayGrowthCount: 'TotalFileDayGrowthCount',
      warmDataDayGrowthSize: 'WarmDataDayGrowthSize',
      warmDataRatio: 'WarmDataRatio',
      warmDataSize: 'WarmDataSize',
      warmDataSizeDayGrowthRatio: 'WarmDataSizeDayGrowthRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldDataDayGrowthSize: ListDoctorHiveTablesResponseBodyDataMetricsColdDataDayGrowthSize,
      coldDataRatio: ListDoctorHiveTablesResponseBodyDataMetricsColdDataRatio,
      coldDataSize: ListDoctorHiveTablesResponseBodyDataMetricsColdDataSize,
      coldDataSizeDayGrowthRatio: ListDoctorHiveTablesResponseBodyDataMetricsColdDataSizeDayGrowthRatio,
      emptyFileCount: ListDoctorHiveTablesResponseBodyDataMetricsEmptyFileCount,
      emptyFileCountDayGrowthRatio: ListDoctorHiveTablesResponseBodyDataMetricsEmptyFileCountDayGrowthRatio,
      emptyFileDayGrowthCount: ListDoctorHiveTablesResponseBodyDataMetricsEmptyFileDayGrowthCount,
      emptyFileRatio: ListDoctorHiveTablesResponseBodyDataMetricsEmptyFileRatio,
      freezeDataDayGrowthSize: ListDoctorHiveTablesResponseBodyDataMetricsFreezeDataDayGrowthSize,
      freezeDataRatio: ListDoctorHiveTablesResponseBodyDataMetricsFreezeDataRatio,
      freezeDataSize: ListDoctorHiveTablesResponseBodyDataMetricsFreezeDataSize,
      freezeDataSizeDayGrowthRatio: ListDoctorHiveTablesResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio,
      hotDataDayGrowthSize: ListDoctorHiveTablesResponseBodyDataMetricsHotDataDayGrowthSize,
      hotDataRatio: ListDoctorHiveTablesResponseBodyDataMetricsHotDataRatio,
      hotDataSize: ListDoctorHiveTablesResponseBodyDataMetricsHotDataSize,
      hotDataSizeDayGrowthRatio: ListDoctorHiveTablesResponseBodyDataMetricsHotDataSizeDayGrowthRatio,
      largeFileCount: ListDoctorHiveTablesResponseBodyDataMetricsLargeFileCount,
      largeFileCountDayGrowthRatio: ListDoctorHiveTablesResponseBodyDataMetricsLargeFileCountDayGrowthRatio,
      largeFileDayGrowthCount: ListDoctorHiveTablesResponseBodyDataMetricsLargeFileDayGrowthCount,
      largeFileRatio: ListDoctorHiveTablesResponseBodyDataMetricsLargeFileRatio,
      mediumFileCount: ListDoctorHiveTablesResponseBodyDataMetricsMediumFileCount,
      mediumFileCountDayGrowthRatio: ListDoctorHiveTablesResponseBodyDataMetricsMediumFileCountDayGrowthRatio,
      mediumFileDayGrowthCount: ListDoctorHiveTablesResponseBodyDataMetricsMediumFileDayGrowthCount,
      mediumFileRatio: ListDoctorHiveTablesResponseBodyDataMetricsMediumFileRatio,
      partitionNum: ListDoctorHiveTablesResponseBodyDataMetricsPartitionNum,
      smallFileCount: ListDoctorHiveTablesResponseBodyDataMetricsSmallFileCount,
      smallFileCountDayGrowthRatio: ListDoctorHiveTablesResponseBodyDataMetricsSmallFileCountDayGrowthRatio,
      smallFileDayGrowthCount: ListDoctorHiveTablesResponseBodyDataMetricsSmallFileDayGrowthCount,
      smallFileRatio: ListDoctorHiveTablesResponseBodyDataMetricsSmallFileRatio,
      tinyFileCount: ListDoctorHiveTablesResponseBodyDataMetricsTinyFileCount,
      tinyFileCountDayGrowthRatio: ListDoctorHiveTablesResponseBodyDataMetricsTinyFileCountDayGrowthRatio,
      tinyFileDayGrowthCount: ListDoctorHiveTablesResponseBodyDataMetricsTinyFileDayGrowthCount,
      tinyFileRatio: ListDoctorHiveTablesResponseBodyDataMetricsTinyFileRatio,
      totalDataDayGrowthSize: ListDoctorHiveTablesResponseBodyDataMetricsTotalDataDayGrowthSize,
      totalDataSize: ListDoctorHiveTablesResponseBodyDataMetricsTotalDataSize,
      totalDataSizeDayGrowthRatio: ListDoctorHiveTablesResponseBodyDataMetricsTotalDataSizeDayGrowthRatio,
      totalFileCount: ListDoctorHiveTablesResponseBodyDataMetricsTotalFileCount,
      totalFileCountDayGrowthRatio: ListDoctorHiveTablesResponseBodyDataMetricsTotalFileCountDayGrowthRatio,
      totalFileDayGrowthCount: ListDoctorHiveTablesResponseBodyDataMetricsTotalFileDayGrowthCount,
      warmDataDayGrowthSize: ListDoctorHiveTablesResponseBodyDataMetricsWarmDataDayGrowthSize,
      warmDataRatio: ListDoctorHiveTablesResponseBodyDataMetricsWarmDataRatio,
      warmDataSize: ListDoctorHiveTablesResponseBodyDataMetricsWarmDataSize,
      warmDataSizeDayGrowthRatio: ListDoctorHiveTablesResponseBodyDataMetricsWarmDataSizeDayGrowthRatio,
    };
  }

  validate() {
    if(this.coldDataDayGrowthSize && typeof (this.coldDataDayGrowthSize as any).validate === 'function') {
      (this.coldDataDayGrowthSize as any).validate();
    }
    if(this.coldDataRatio && typeof (this.coldDataRatio as any).validate === 'function') {
      (this.coldDataRatio as any).validate();
    }
    if(this.coldDataSize && typeof (this.coldDataSize as any).validate === 'function') {
      (this.coldDataSize as any).validate();
    }
    if(this.coldDataSizeDayGrowthRatio && typeof (this.coldDataSizeDayGrowthRatio as any).validate === 'function') {
      (this.coldDataSizeDayGrowthRatio as any).validate();
    }
    if(this.emptyFileCount && typeof (this.emptyFileCount as any).validate === 'function') {
      (this.emptyFileCount as any).validate();
    }
    if(this.emptyFileCountDayGrowthRatio && typeof (this.emptyFileCountDayGrowthRatio as any).validate === 'function') {
      (this.emptyFileCountDayGrowthRatio as any).validate();
    }
    if(this.emptyFileDayGrowthCount && typeof (this.emptyFileDayGrowthCount as any).validate === 'function') {
      (this.emptyFileDayGrowthCount as any).validate();
    }
    if(this.emptyFileRatio && typeof (this.emptyFileRatio as any).validate === 'function') {
      (this.emptyFileRatio as any).validate();
    }
    if(this.freezeDataDayGrowthSize && typeof (this.freezeDataDayGrowthSize as any).validate === 'function') {
      (this.freezeDataDayGrowthSize as any).validate();
    }
    if(this.freezeDataRatio && typeof (this.freezeDataRatio as any).validate === 'function') {
      (this.freezeDataRatio as any).validate();
    }
    if(this.freezeDataSize && typeof (this.freezeDataSize as any).validate === 'function') {
      (this.freezeDataSize as any).validate();
    }
    if(this.freezeDataSizeDayGrowthRatio && typeof (this.freezeDataSizeDayGrowthRatio as any).validate === 'function') {
      (this.freezeDataSizeDayGrowthRatio as any).validate();
    }
    if(this.hotDataDayGrowthSize && typeof (this.hotDataDayGrowthSize as any).validate === 'function') {
      (this.hotDataDayGrowthSize as any).validate();
    }
    if(this.hotDataRatio && typeof (this.hotDataRatio as any).validate === 'function') {
      (this.hotDataRatio as any).validate();
    }
    if(this.hotDataSize && typeof (this.hotDataSize as any).validate === 'function') {
      (this.hotDataSize as any).validate();
    }
    if(this.hotDataSizeDayGrowthRatio && typeof (this.hotDataSizeDayGrowthRatio as any).validate === 'function') {
      (this.hotDataSizeDayGrowthRatio as any).validate();
    }
    if(this.largeFileCount && typeof (this.largeFileCount as any).validate === 'function') {
      (this.largeFileCount as any).validate();
    }
    if(this.largeFileCountDayGrowthRatio && typeof (this.largeFileCountDayGrowthRatio as any).validate === 'function') {
      (this.largeFileCountDayGrowthRatio as any).validate();
    }
    if(this.largeFileDayGrowthCount && typeof (this.largeFileDayGrowthCount as any).validate === 'function') {
      (this.largeFileDayGrowthCount as any).validate();
    }
    if(this.largeFileRatio && typeof (this.largeFileRatio as any).validate === 'function') {
      (this.largeFileRatio as any).validate();
    }
    if(this.mediumFileCount && typeof (this.mediumFileCount as any).validate === 'function') {
      (this.mediumFileCount as any).validate();
    }
    if(this.mediumFileCountDayGrowthRatio && typeof (this.mediumFileCountDayGrowthRatio as any).validate === 'function') {
      (this.mediumFileCountDayGrowthRatio as any).validate();
    }
    if(this.mediumFileDayGrowthCount && typeof (this.mediumFileDayGrowthCount as any).validate === 'function') {
      (this.mediumFileDayGrowthCount as any).validate();
    }
    if(this.mediumFileRatio && typeof (this.mediumFileRatio as any).validate === 'function') {
      (this.mediumFileRatio as any).validate();
    }
    if(this.partitionNum && typeof (this.partitionNum as any).validate === 'function') {
      (this.partitionNum as any).validate();
    }
    if(this.smallFileCount && typeof (this.smallFileCount as any).validate === 'function') {
      (this.smallFileCount as any).validate();
    }
    if(this.smallFileCountDayGrowthRatio && typeof (this.smallFileCountDayGrowthRatio as any).validate === 'function') {
      (this.smallFileCountDayGrowthRatio as any).validate();
    }
    if(this.smallFileDayGrowthCount && typeof (this.smallFileDayGrowthCount as any).validate === 'function') {
      (this.smallFileDayGrowthCount as any).validate();
    }
    if(this.smallFileRatio && typeof (this.smallFileRatio as any).validate === 'function') {
      (this.smallFileRatio as any).validate();
    }
    if(this.tinyFileCount && typeof (this.tinyFileCount as any).validate === 'function') {
      (this.tinyFileCount as any).validate();
    }
    if(this.tinyFileCountDayGrowthRatio && typeof (this.tinyFileCountDayGrowthRatio as any).validate === 'function') {
      (this.tinyFileCountDayGrowthRatio as any).validate();
    }
    if(this.tinyFileDayGrowthCount && typeof (this.tinyFileDayGrowthCount as any).validate === 'function') {
      (this.tinyFileDayGrowthCount as any).validate();
    }
    if(this.tinyFileRatio && typeof (this.tinyFileRatio as any).validate === 'function') {
      (this.tinyFileRatio as any).validate();
    }
    if(this.totalDataDayGrowthSize && typeof (this.totalDataDayGrowthSize as any).validate === 'function') {
      (this.totalDataDayGrowthSize as any).validate();
    }
    if(this.totalDataSize && typeof (this.totalDataSize as any).validate === 'function') {
      (this.totalDataSize as any).validate();
    }
    if(this.totalDataSizeDayGrowthRatio && typeof (this.totalDataSizeDayGrowthRatio as any).validate === 'function') {
      (this.totalDataSizeDayGrowthRatio as any).validate();
    }
    if(this.totalFileCount && typeof (this.totalFileCount as any).validate === 'function') {
      (this.totalFileCount as any).validate();
    }
    if(this.totalFileCountDayGrowthRatio && typeof (this.totalFileCountDayGrowthRatio as any).validate === 'function') {
      (this.totalFileCountDayGrowthRatio as any).validate();
    }
    if(this.totalFileDayGrowthCount && typeof (this.totalFileDayGrowthCount as any).validate === 'function') {
      (this.totalFileDayGrowthCount as any).validate();
    }
    if(this.warmDataDayGrowthSize && typeof (this.warmDataDayGrowthSize as any).validate === 'function') {
      (this.warmDataDayGrowthSize as any).validate();
    }
    if(this.warmDataRatio && typeof (this.warmDataRatio as any).validate === 'function') {
      (this.warmDataRatio as any).validate();
    }
    if(this.warmDataSize && typeof (this.warmDataSize as any).validate === 'function') {
      (this.warmDataSize as any).validate();
    }
    if(this.warmDataSizeDayGrowthRatio && typeof (this.warmDataSizeDayGrowthRatio as any).validate === 'function') {
      (this.warmDataSizeDayGrowthRatio as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The analysis results.
   */
  analysis?: ListDoctorHiveTablesResponseBodyDataAnalysis;
  /**
   * @remarks
   * The table format information.
   */
  formats?: ListDoctorHiveTablesResponseBodyDataFormats[];
  /**
   * @remarks
   * The metric information.
   */
  metrics?: ListDoctorHiveTablesResponseBodyDataMetrics;
  /**
   * @remarks
   * The owner.
   * 
   * @example
   * DW
   */
  owner?: string;
  /**
   * @remarks
   * The table name. The table name must follow the naming rule in Hive. A name in the {Database name.Table name} format uniquely identifies a table.
   * 
   * @example
   * dw.dwd_creta_service_order_long_renew_long_da
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      formats: 'Formats',
      metrics: 'Metrics',
      owner: 'Owner',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: ListDoctorHiveTablesResponseBodyDataAnalysis,
      formats: { 'type': 'array', 'itemType': ListDoctorHiveTablesResponseBodyDataFormats },
      metrics: ListDoctorHiveTablesResponseBodyDataMetrics,
      owner: 'string',
      tableName: 'string',
    };
  }

  validate() {
    if(this.analysis && typeof (this.analysis as any).validate === 'function') {
      (this.analysis as any).validate();
    }
    if(Array.isArray(this.formats)) {
      $dara.Model.validateArray(this.formats);
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

export class ListDoctorHiveTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The analysis results of Hive tables.
   */
  data?: ListDoctorHiveTablesResponseBodyData[];
  /**
   * @remarks
   * The maximum number of entries that are returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
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
      data: { 'type': 'array', 'itemType': ListDoctorHiveTablesResponseBodyData },
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

