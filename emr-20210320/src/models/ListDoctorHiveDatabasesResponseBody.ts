// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoctorHiveDatabasesResponseBodyDataAnalysis extends $dara.Model {
  /**
   * @remarks
   * The score for the distribution of files of different sizes stored in the Hive database.
   * 
   * @example
   * 85
   */
  hiveDistributionScore?: number;
  /**
   * @remarks
   * The score for the distribution of files stored in different formats in the Hive database.
   * 
   * @example
   * 85
   */
  hiveFormatScore?: number;
  /**
   * @remarks
   * The score for the access frequency of the Hive database.
   * 
   * @example
   * 85
   */
  hiveFrequencyScore?: number;
  /**
   * @remarks
   * The overall score of the Hive database.
   * 
   * @example
   * 85
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

export class ListDoctorHiveDatabasesResponseBodyDataFormats extends $dara.Model {
  /**
   * @remarks
   * The daily increment of storage format-specific data.
   * 
   * @example
   * 1000
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
   * The proportion of data in a specific storage format.
   * 
   * @example
   * 0.5
   */
  formatRatio?: number;
  /**
   * @remarks
   * The amount of storage format-specific data.
   * 
   * @example
   * 1000
   */
  formatSize?: number;
  /**
   * @remarks
   * The day-to-day growth rate of storage format-specific data.
   * 
   * @example
   * 0.5
   */
  formatSizeDayGrowthRatio?: number;
  /**
   * @remarks
   * The unit of the amount of storage format-specific data.
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsColdDataDayGrowthSize extends $dara.Model {
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsColdDataRatio extends $dara.Model {
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsColdDataSize extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Ratio of cold files
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsColdDataSizeDayGrowthRatio extends $dara.Model {
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsEmptyFileCount extends $dara.Model {
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
   * ""
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsEmptyFileCountDayGrowthRatio extends $dara.Model {
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsEmptyFileDayGrowthCount extends $dara.Model {
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
   * ""
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsEmptyFileRatio extends $dara.Model {
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsFreezeDataDayGrowthSize extends $dara.Model {
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsFreezeDataRatio extends $dara.Model {
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsFreezeDataSize extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Ratio of freeze files
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio extends $dara.Model {
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsHotDataDayGrowthSize extends $dara.Model {
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsHotDataRatio extends $dara.Model {
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsHotDataSize extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Ratio of hot files
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsHotDataSizeDayGrowthRatio extends $dara.Model {
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsLargeFileCount extends $dara.Model {
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsLargeFileCountDayGrowthRatio extends $dara.Model {
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsLargeFileDayGrowthCount extends $dara.Model {
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsLargeFileRatio extends $dara.Model {
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsMediumFileCount extends $dara.Model {
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
   * ""
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsMediumFileCountDayGrowthRatio extends $dara.Model {
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsMediumFileDayGrowthCount extends $dara.Model {
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsMediumFileRatio extends $dara.Model {
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsPartitionNum extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Number of partitions
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * ppartitionNum
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsSmallFileCount extends $dara.Model {
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
   * ""
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsSmallFileCountDayGrowthRatio extends $dara.Model {
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsSmallFileDayGrowthCount extends $dara.Model {
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
   * ""
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsSmallFileRatio extends $dara.Model {
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsTableCount extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Number of tables
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * TableCount
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsTinyFileCount extends $dara.Model {
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
   * ""
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsTinyFileCountDayGrowthRatio extends $dara.Model {
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsTinyFileDayGrowthCount extends $dara.Model {
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
   * ""
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsTinyFileRatio extends $dara.Model {
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsTotalDataDayGrowthSize extends $dara.Model {
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsTotalDataSize extends $dara.Model {
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsTotalDataSizeDayGrowthRatio extends $dara.Model {
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsTotalFileCount extends $dara.Model {
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
   * ""
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsTotalFileCountDayGrowthRatio extends $dara.Model {
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsTotalFileDayGrowthCount extends $dara.Model {
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsWarmDataDayGrowthSize extends $dara.Model {
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsWarmDataRatio extends $dara.Model {
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsWarmDataSize extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Ratio of warm files
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

export class ListDoctorHiveDatabasesResponseBodyDataMetricsWarmDataSizeDayGrowthRatio extends $dara.Model {
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
   * WarmDataSizeDayGrowthRatio
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

export class ListDoctorHiveDatabasesResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The daily increment of the amount of cold data. Cold data refers to data that is not accessed for more than 30 days but is accessed in 90 days.
   */
  coldDataDayGrowthSize?: ListDoctorHiveDatabasesResponseBodyDataMetricsColdDataDayGrowthSize;
  /**
   * @remarks
   * The proportion of cold data. Cold data refers to data that is not accessed for more than 30 days but is accessed in 90 days.
   */
  coldDataRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsColdDataRatio;
  /**
   * @remarks
   * The amount of cold data. Cold data refers to data that is not accessed for more than 30 days but is accessed in 90 days.
   */
  coldDataSize?: ListDoctorHiveDatabasesResponseBodyDataMetricsColdDataSize;
  /**
   * @remarks
   * The day-to-day growth rate of the amount of cold data. Cold data refers to data that is not accessed for more than 30 days but is accessed in 90 days.
   */
  coldDataSizeDayGrowthRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsColdDataSizeDayGrowthRatio;
  /**
   * @remarks
   * The number of empty files. Empty files are those with a size of 0 MB.
   */
  emptyFileCount?: ListDoctorHiveDatabasesResponseBodyDataMetricsEmptyFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the number of empty files. Empty files are those with a size of 0 MB.
   */
  emptyFileCountDayGrowthRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsEmptyFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the number of empty files. Empty files are those with a size of 0 MB.
   */
  emptyFileDayGrowthCount?: ListDoctorHiveDatabasesResponseBodyDataMetricsEmptyFileDayGrowthCount;
  /**
   * @remarks
   * The proportion of empty files. Empty files are those with a size of 0 MB.
   */
  emptyFileRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsEmptyFileRatio;
  /**
   * @remarks
   * The daily increment of the amount of very cold data. Very cold data refers to data that is not accessed for more than 90 days.
   */
  freezeDataDayGrowthSize?: ListDoctorHiveDatabasesResponseBodyDataMetricsFreezeDataDayGrowthSize;
  /**
   * @remarks
   * The proportion of very cold data. Very cold data refers to data that is not accessed for more than 90 days.
   */
  freezeDataRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsFreezeDataRatio;
  /**
   * @remarks
   * The amount of very cold data. Very cold data refers to data that is not accessed for more than 90 days.
   */
  freezeDataSize?: ListDoctorHiveDatabasesResponseBodyDataMetricsFreezeDataSize;
  /**
   * @remarks
   * The day-to-day growth rate of the amount of very cold data. Very cold data refers to data that is not accessed for more than 90 days.
   */
  freezeDataSizeDayGrowthRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the amount of hot data. Hot data refers to data that is accessed in recent seven days.
   */
  hotDataDayGrowthSize?: ListDoctorHiveDatabasesResponseBodyDataMetricsHotDataDayGrowthSize;
  /**
   * @remarks
   * The proportion of hot data. Hot data refers to data that is accessed in recent seven days.
   */
  hotDataRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsHotDataRatio;
  /**
   * @remarks
   * The amount of hot data. Hot data refers to data that is accessed in recent seven days.
   */
  hotDataSize?: ListDoctorHiveDatabasesResponseBodyDataMetricsHotDataSize;
  /**
   * @remarks
   * The day-to-day growth rate of the amount of hot data. Hot data refers to data that is accessed in recent seven days.
   */
  hotDataSizeDayGrowthRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsHotDataSizeDayGrowthRatio;
  /**
   * @remarks
   * The number of large files. Large files are those with a size greater than 1 GB.
   */
  largeFileCount?: ListDoctorHiveDatabasesResponseBodyDataMetricsLargeFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the number of large files. Large files are those with a size greater than 1 GB.
   */
  largeFileCountDayGrowthRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsLargeFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the number of large files. Large files are those with a size greater than 1 GB.
   */
  largeFileDayGrowthCount?: ListDoctorHiveDatabasesResponseBodyDataMetricsLargeFileDayGrowthCount;
  /**
   * @remarks
   * The proportion of large files. Large files are those with a size greater than 1 GB.
   */
  largeFileRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsLargeFileRatio;
  /**
   * @remarks
   * The number of medium files. Medium files are those with a size greater than or equal to 128 MB and less than or equal to 1 GB.
   */
  mediumFileCount?: ListDoctorHiveDatabasesResponseBodyDataMetricsMediumFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the number of medium files. Medium files are those with a size greater than or equal to 128 MB and less than or equal to 1 GB.
   */
  mediumFileCountDayGrowthRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsMediumFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the number of medium files. Medium files are those with a size greater than or equal to 128 MB and less than or equal to 1 GB.
   */
  mediumFileDayGrowthCount?: ListDoctorHiveDatabasesResponseBodyDataMetricsMediumFileDayGrowthCount;
  /**
   * @remarks
   * The proportion of medium files. Medium files are those with a size greater than or equal to 128 MB and less than or equal to 1 GB.
   */
  mediumFileRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsMediumFileRatio;
  /**
   * @remarks
   * The number of partitions.
   */
  partitionNum?: ListDoctorHiveDatabasesResponseBodyDataMetricsPartitionNum;
  /**
   * @remarks
   * The number of small files. Small files are those with a size greater than or equal to 10 MB and less than 128 MB.
   */
  smallFileCount?: ListDoctorHiveDatabasesResponseBodyDataMetricsSmallFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the number of small files. Small files are those with a size greater than or equal to 10 MB and less than 128 MB.
   */
  smallFileCountDayGrowthRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsSmallFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the number of small files. Small files are those with a size greater than or equal to 10 MB and less than 128 MB.
   */
  smallFileDayGrowthCount?: ListDoctorHiveDatabasesResponseBodyDataMetricsSmallFileDayGrowthCount;
  /**
   * @remarks
   * The proportion of small files. Small files are those with a size greater than or equal to 10 MB and less than 128 MB.
   */
  smallFileRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsSmallFileRatio;
  /**
   * @remarks
   * The number of tables.
   */
  tableCount?: ListDoctorHiveDatabasesResponseBodyDataMetricsTableCount;
  /**
   * @remarks
   * The number of very small files. Very small files are those with a size greater than 0 MB and less than 10 MB.
   */
  tinyFileCount?: ListDoctorHiveDatabasesResponseBodyDataMetricsTinyFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the number of very small files. Very small files are those with a size greater than 0 MB and less than 10 MB.
   */
  tinyFileCountDayGrowthRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsTinyFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the number of very small files. Very small files are those with a size greater than 0 MB and less than 10 MB.
   */
  tinyFileDayGrowthCount?: ListDoctorHiveDatabasesResponseBodyDataMetricsTinyFileDayGrowthCount;
  /**
   * @remarks
   * The proportion of very small files. Very small files are those with a size greater than 0 MB and less than 10 MB.
   */
  tinyFileRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsTinyFileRatio;
  /**
   * @remarks
   * The daily increment of the total data volume.
   */
  totalDataDayGrowthSize?: ListDoctorHiveDatabasesResponseBodyDataMetricsTotalDataDayGrowthSize;
  /**
   * @remarks
   * The total amount of data.
   */
  totalDataSize?: ListDoctorHiveDatabasesResponseBodyDataMetricsTotalDataSize;
  /**
   * @remarks
   * The day-to-day growth rate of the total data volume.
   */
  totalDataSizeDayGrowthRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsTotalDataSizeDayGrowthRatio;
  /**
   * @remarks
   * The total number of files.
   */
  totalFileCount?: ListDoctorHiveDatabasesResponseBodyDataMetricsTotalFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the total number of files.
   */
  totalFileCountDayGrowthRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsTotalFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the total number of files.
   */
  totalFileDayGrowthCount?: ListDoctorHiveDatabasesResponseBodyDataMetricsTotalFileDayGrowthCount;
  /**
   * @remarks
   * The daily increment of the amount of warm data. Warm data refers to data that is not accessed for more than 7 days but is accessed in 30 days.
   */
  warmDataDayGrowthSize?: ListDoctorHiveDatabasesResponseBodyDataMetricsWarmDataDayGrowthSize;
  /**
   * @remarks
   * The proportion of warm data. Warm data refers to data that is not accessed for more than 7 days but is accessed in 30 days.
   */
  warmDataRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsWarmDataRatio;
  /**
   * @remarks
   * The amount of warm data. Warm data refers to data that is not accessed for more than 7 days but is accessed in 30 days.
   */
  warmDataSize?: ListDoctorHiveDatabasesResponseBodyDataMetricsWarmDataSize;
  /**
   * @remarks
   * The day-to-day growth rate of the amount of warm data. Warm data refers to data that is not accessed for more than 7 days but is accessed in 30 days.
   */
  warmDataSizeDayGrowthRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsWarmDataSizeDayGrowthRatio;
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
      tableCount: 'TableCount',
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
      coldDataDayGrowthSize: ListDoctorHiveDatabasesResponseBodyDataMetricsColdDataDayGrowthSize,
      coldDataRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsColdDataRatio,
      coldDataSize: ListDoctorHiveDatabasesResponseBodyDataMetricsColdDataSize,
      coldDataSizeDayGrowthRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsColdDataSizeDayGrowthRatio,
      emptyFileCount: ListDoctorHiveDatabasesResponseBodyDataMetricsEmptyFileCount,
      emptyFileCountDayGrowthRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsEmptyFileCountDayGrowthRatio,
      emptyFileDayGrowthCount: ListDoctorHiveDatabasesResponseBodyDataMetricsEmptyFileDayGrowthCount,
      emptyFileRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsEmptyFileRatio,
      freezeDataDayGrowthSize: ListDoctorHiveDatabasesResponseBodyDataMetricsFreezeDataDayGrowthSize,
      freezeDataRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsFreezeDataRatio,
      freezeDataSize: ListDoctorHiveDatabasesResponseBodyDataMetricsFreezeDataSize,
      freezeDataSizeDayGrowthRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio,
      hotDataDayGrowthSize: ListDoctorHiveDatabasesResponseBodyDataMetricsHotDataDayGrowthSize,
      hotDataRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsHotDataRatio,
      hotDataSize: ListDoctorHiveDatabasesResponseBodyDataMetricsHotDataSize,
      hotDataSizeDayGrowthRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsHotDataSizeDayGrowthRatio,
      largeFileCount: ListDoctorHiveDatabasesResponseBodyDataMetricsLargeFileCount,
      largeFileCountDayGrowthRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsLargeFileCountDayGrowthRatio,
      largeFileDayGrowthCount: ListDoctorHiveDatabasesResponseBodyDataMetricsLargeFileDayGrowthCount,
      largeFileRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsLargeFileRatio,
      mediumFileCount: ListDoctorHiveDatabasesResponseBodyDataMetricsMediumFileCount,
      mediumFileCountDayGrowthRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsMediumFileCountDayGrowthRatio,
      mediumFileDayGrowthCount: ListDoctorHiveDatabasesResponseBodyDataMetricsMediumFileDayGrowthCount,
      mediumFileRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsMediumFileRatio,
      partitionNum: ListDoctorHiveDatabasesResponseBodyDataMetricsPartitionNum,
      smallFileCount: ListDoctorHiveDatabasesResponseBodyDataMetricsSmallFileCount,
      smallFileCountDayGrowthRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsSmallFileCountDayGrowthRatio,
      smallFileDayGrowthCount: ListDoctorHiveDatabasesResponseBodyDataMetricsSmallFileDayGrowthCount,
      smallFileRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsSmallFileRatio,
      tableCount: ListDoctorHiveDatabasesResponseBodyDataMetricsTableCount,
      tinyFileCount: ListDoctorHiveDatabasesResponseBodyDataMetricsTinyFileCount,
      tinyFileCountDayGrowthRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsTinyFileCountDayGrowthRatio,
      tinyFileDayGrowthCount: ListDoctorHiveDatabasesResponseBodyDataMetricsTinyFileDayGrowthCount,
      tinyFileRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsTinyFileRatio,
      totalDataDayGrowthSize: ListDoctorHiveDatabasesResponseBodyDataMetricsTotalDataDayGrowthSize,
      totalDataSize: ListDoctorHiveDatabasesResponseBodyDataMetricsTotalDataSize,
      totalDataSizeDayGrowthRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsTotalDataSizeDayGrowthRatio,
      totalFileCount: ListDoctorHiveDatabasesResponseBodyDataMetricsTotalFileCount,
      totalFileCountDayGrowthRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsTotalFileCountDayGrowthRatio,
      totalFileDayGrowthCount: ListDoctorHiveDatabasesResponseBodyDataMetricsTotalFileDayGrowthCount,
      warmDataDayGrowthSize: ListDoctorHiveDatabasesResponseBodyDataMetricsWarmDataDayGrowthSize,
      warmDataRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsWarmDataRatio,
      warmDataSize: ListDoctorHiveDatabasesResponseBodyDataMetricsWarmDataSize,
      warmDataSizeDayGrowthRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsWarmDataSizeDayGrowthRatio,
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
    if(this.tableCount && typeof (this.tableCount as any).validate === 'function') {
      (this.tableCount as any).validate();
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

export class ListDoctorHiveDatabasesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The analysis results.
   */
  analysis?: ListDoctorHiveDatabasesResponseBodyDataAnalysis;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * db1
   */
  databaseName?: string;
  /**
   * @remarks
   * The information from the perspective of storage formats.
   */
  formats?: ListDoctorHiveDatabasesResponseBodyDataFormats[];
  /**
   * @remarks
   * The metric information.
   */
  metrics?: ListDoctorHiveDatabasesResponseBodyDataMetrics;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      databaseName: 'DatabaseName',
      formats: 'Formats',
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: ListDoctorHiveDatabasesResponseBodyDataAnalysis,
      databaseName: 'string',
      formats: { 'type': 'array', 'itemType': ListDoctorHiveDatabasesResponseBodyDataFormats },
      metrics: ListDoctorHiveDatabasesResponseBodyDataMetrics,
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

export class ListDoctorHiveDatabasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The analysis results of Hive databases.
   */
  data?: ListDoctorHiveDatabasesResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListDoctorHiveDatabasesResponseBodyData },
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

