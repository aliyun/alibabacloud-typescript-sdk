// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDoctorHiveClusterResponseBodyDataAnalysis extends $dara.Model {
  /**
   * @remarks
   * The score for the distribution of files of different sizes stored in the Hive cluster.
   * 
   * @example
   * 80
   */
  hiveDistributionScore?: number;
  /**
   * @remarks
   * The score for the distribution of files stored in different formats in the Hive cluster.
   * 
   * @example
   * 80
   */
  hiveFormatScore?: number;
  /**
   * @remarks
   * The score for the access frequency of the Hive cluster.
   * 
   * @example
   * 80
   */
  hiveFrequencyScore?: number;
  /**
   * @remarks
   * The overall score of the Hive cluster.
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

export class GetDoctorHiveClusterResponseBodyDataFormats extends $dara.Model {
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
   * 0.5
   */
  formatRatio?: number;
  /**
   * @remarks
   * The amount of data in the format.
   * 
   * @example
   * 100
   */
  formatSize?: number;
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
      formatName: 'FormatName',
      formatRatio: 'FormatRatio',
      formatSize: 'FormatSize',
      formatSizeUnit: 'FormatSizeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      formatName: 'string',
      formatRatio: 'number',
      formatSize: 'number',
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

export class GetDoctorHiveClusterResponseBodyDataMetricsColdDataDayGrowthSize extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsColdDataRatio extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsColdDataSize extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsColdDataSizeDayGrowthRatio extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsDatabaseCount extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Number of databases
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * databaseCount
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

export class GetDoctorHiveClusterResponseBodyDataMetricsEmptyFileCount extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsEmptyFileCountDayGrowthRatio extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsEmptyFileDayGrowthCount extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsEmptyFileRatio extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsFreezeDataDayGrowthSize extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsFreezeDataRatio extends $dara.Model {
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
   * 0.12
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

export class GetDoctorHiveClusterResponseBodyDataMetricsFreezeDataSize extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsHotDataDayGrowthSize extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsHotDataRatio extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsHotDataSize extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsHotDataSizeDayGrowthRatio extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsLargeFileCount extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsLargeFileCountDayGrowthRatio extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsLargeFileDayGrowthCount extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsLargeFileRatio extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsMediumFileCount extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsMediumFileCountDayGrowthRatio extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsMediumFileDayGrowthCount extends $dara.Model {
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
   * “”
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 178
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

export class GetDoctorHiveClusterResponseBodyDataMetricsMediumFileRatio extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsPartitionNum extends $dara.Model {
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
   * partitionNum
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

export class GetDoctorHiveClusterResponseBodyDataMetricsSmallFileCount extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsSmallFileCountDayGrowthRatio extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsSmallFileDayGrowthCount extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsSmallFileRatio extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsTableCount extends $dara.Model {
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
   * tableCount
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

export class GetDoctorHiveClusterResponseBodyDataMetricsTinyFileCount extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsTinyFileCountDayGrowthRatio extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsTinyFileDayGrowthCount extends $dara.Model {
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
   * day growth count of tiny files
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

export class GetDoctorHiveClusterResponseBodyDataMetricsTinyFileRatio extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsTotalDataDayGrowthSize extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsTotalDataSize extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsTotalDataSizeDayGrowthRatio extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsTotalFileCount extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsTotalFileCountDayGrowthRatio extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsTotalFileDayGrowthCount extends $dara.Model {
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
   * 27800
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

export class GetDoctorHiveClusterResponseBodyDataMetricsWarmDataDayGrowthSize extends $dara.Model {
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
   * -100
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

export class GetDoctorHiveClusterResponseBodyDataMetricsWarmDataRatio extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsWarmDataSize extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetricsWarmDataSizeDayGrowthRatio extends $dara.Model {
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

export class GetDoctorHiveClusterResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The daily increment of the amount of cold data. Cold data refers to data that is not accessed for more than 30 days but is accessed in previous 90 days.
   */
  coldDataDayGrowthSize?: GetDoctorHiveClusterResponseBodyDataMetricsColdDataDayGrowthSize;
  /**
   * @remarks
   * The proportion of cold data. Cold data refers to data that is not accessed for more than 30 days but is accessed in previous 90 days.
   */
  coldDataRatio?: GetDoctorHiveClusterResponseBodyDataMetricsColdDataRatio;
  /**
   * @remarks
   * The amount of cold data. Cold data refers to data that is not accessed for more than 30 days but is accessed in previous 90 days.
   */
  coldDataSize?: GetDoctorHiveClusterResponseBodyDataMetricsColdDataSize;
  /**
   * @remarks
   * The day-to-day growth rate of the amount of cold data. Cold data refers to data that is not accessed for more than 30 days but is accessed in previous 90 days.
   */
  coldDataSizeDayGrowthRatio?: GetDoctorHiveClusterResponseBodyDataMetricsColdDataSizeDayGrowthRatio;
  /**
   * @remarks
   * The number of databases.
   */
  databaseCount?: GetDoctorHiveClusterResponseBodyDataMetricsDatabaseCount;
  /**
   * @remarks
   * The number of empty files. Empty files are those with a size of 0 MB.
   */
  emptyFileCount?: GetDoctorHiveClusterResponseBodyDataMetricsEmptyFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the number of empty files. Empty files are those with a size of 0 MB.
   */
  emptyFileCountDayGrowthRatio?: GetDoctorHiveClusterResponseBodyDataMetricsEmptyFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the number of empty files. Empty files are those with a size of 0 MB.
   */
  emptyFileDayGrowthCount?: GetDoctorHiveClusterResponseBodyDataMetricsEmptyFileDayGrowthCount;
  /**
   * @remarks
   * The proportion of empty files. Empty files are those with a size of 0 MB.
   */
  emptyFileRatio?: GetDoctorHiveClusterResponseBodyDataMetricsEmptyFileRatio;
  /**
   * @remarks
   * The daily increment of the amount of very cold data. Very cold data refers to data that is not accessed for more than 90 days.
   */
  freezeDataDayGrowthSize?: GetDoctorHiveClusterResponseBodyDataMetricsFreezeDataDayGrowthSize;
  /**
   * @remarks
   * The proportion of very cold data. Very cold data refers to data that is not accessed for more than 90 days.
   */
  freezeDataRatio?: GetDoctorHiveClusterResponseBodyDataMetricsFreezeDataRatio;
  /**
   * @remarks
   * The amount of very cold data. Very cold data refers to data that is not accessed for more than 90 days.
   */
  freezeDataSize?: GetDoctorHiveClusterResponseBodyDataMetricsFreezeDataSize;
  /**
   * @remarks
   * The day-to-day growth rate of the amount of very cold data. Very cold data refers to data that is not accessed for more than 90 days.
   */
  freezeDataSizeDayGrowthRatio?: GetDoctorHiveClusterResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the amount of hot data. Hot data refers to data that is accessed in previous seven days.
   */
  hotDataDayGrowthSize?: GetDoctorHiveClusterResponseBodyDataMetricsHotDataDayGrowthSize;
  /**
   * @remarks
   * The proportion of hot data. Hot data refers to data that is accessed in previous seven days.
   */
  hotDataRatio?: GetDoctorHiveClusterResponseBodyDataMetricsHotDataRatio;
  /**
   * @remarks
   * The amount of hot data. Hot data refers to data that is accessed in previous seven days.
   */
  hotDataSize?: GetDoctorHiveClusterResponseBodyDataMetricsHotDataSize;
  /**
   * @remarks
   * The day-to-day growth rate of the amount of hot data. Hot data refers to data that is accessed in previous seven days.
   */
  hotDataSizeDayGrowthRatio?: GetDoctorHiveClusterResponseBodyDataMetricsHotDataSizeDayGrowthRatio;
  /**
   * @remarks
   * The number of large files. Large files are those with a size greater than 1 GB.
   */
  largeFileCount?: GetDoctorHiveClusterResponseBodyDataMetricsLargeFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the number of large files. Large files are those with a size greater than 1 GB.
   */
  largeFileCountDayGrowthRatio?: GetDoctorHiveClusterResponseBodyDataMetricsLargeFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the number of large files. Large files are those with a size greater than 1 GB.
   */
  largeFileDayGrowthCount?: GetDoctorHiveClusterResponseBodyDataMetricsLargeFileDayGrowthCount;
  /**
   * @remarks
   * The proportion of large files. Large files are those with a size greater than 1 GB.
   */
  largeFileRatio?: GetDoctorHiveClusterResponseBodyDataMetricsLargeFileRatio;
  /**
   * @remarks
   * The number of medium files. Medium files are those with a size greater than or equal to 128 MB and less than or equal to 1 GB.
   */
  mediumFileCount?: GetDoctorHiveClusterResponseBodyDataMetricsMediumFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the number of medium files. Medium files are those with a size greater than or equal to 128 MB and less than or equal to 1 GB.
   */
  mediumFileCountDayGrowthRatio?: GetDoctorHiveClusterResponseBodyDataMetricsMediumFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the number of medium files. Medium files are those with a size greater than or equal to 128 MB and less than or equal to 1 GB.
   */
  mediumFileDayGrowthCount?: GetDoctorHiveClusterResponseBodyDataMetricsMediumFileDayGrowthCount;
  /**
   * @remarks
   * The proportion of medium files. Medium files are those with a size greater than or equal to 128 MB and less than or equal to 1 GB.
   */
  mediumFileRatio?: GetDoctorHiveClusterResponseBodyDataMetricsMediumFileRatio;
  /**
   * @remarks
   * The number of partitions.
   */
  partitionNum?: GetDoctorHiveClusterResponseBodyDataMetricsPartitionNum;
  /**
   * @remarks
   * The number of small files. Small files are those with a size greater than or equal to 10 MB and less than 128 MB.
   */
  smallFileCount?: GetDoctorHiveClusterResponseBodyDataMetricsSmallFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the number of small files. Small files are those with a size greater than or equal to 10 MB and less than 128 MB.
   */
  smallFileCountDayGrowthRatio?: GetDoctorHiveClusterResponseBodyDataMetricsSmallFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the number of small files. Small files are those with a size greater than or equal to 10 MB and less than 128 MB.
   */
  smallFileDayGrowthCount?: GetDoctorHiveClusterResponseBodyDataMetricsSmallFileDayGrowthCount;
  /**
   * @remarks
   * The proportion of small files. Small files are those with a size greater than or equal to 10 MB and less than 128 MB.
   */
  smallFileRatio?: GetDoctorHiveClusterResponseBodyDataMetricsSmallFileRatio;
  /**
   * @remarks
   * The number of tables.
   */
  tableCount?: GetDoctorHiveClusterResponseBodyDataMetricsTableCount;
  /**
   * @remarks
   * The number of very small files. Very small files are those with a size greater than 0 MB and less than 10 MB.
   */
  tinyFileCount?: GetDoctorHiveClusterResponseBodyDataMetricsTinyFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the number of very small files. Very small files are those with a size greater than 0 MB and less than 10 MB.
   */
  tinyFileCountDayGrowthRatio?: GetDoctorHiveClusterResponseBodyDataMetricsTinyFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the number of very small files. Very small files are those with a size greater than 0 MB and less than 10 MB.
   */
  tinyFileDayGrowthCount?: GetDoctorHiveClusterResponseBodyDataMetricsTinyFileDayGrowthCount;
  /**
   * @remarks
   * The proportion of very small files. Very small files are those with a size greater than 0 MB and less than 10 MB.
   */
  tinyFileRatio?: GetDoctorHiveClusterResponseBodyDataMetricsTinyFileRatio;
  /**
   * @remarks
   * The daily incremental of the amount of total data.
   */
  totalDataDayGrowthSize?: GetDoctorHiveClusterResponseBodyDataMetricsTotalDataDayGrowthSize;
  /**
   * @remarks
   * The total amount of data.
   */
  totalDataSize?: GetDoctorHiveClusterResponseBodyDataMetricsTotalDataSize;
  /**
   * @remarks
   * The day-to-day growth rate of the total data volume.
   */
  totalDataSizeDayGrowthRatio?: GetDoctorHiveClusterResponseBodyDataMetricsTotalDataSizeDayGrowthRatio;
  /**
   * @remarks
   * The total number of files.
   */
  totalFileCount?: GetDoctorHiveClusterResponseBodyDataMetricsTotalFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the total number of files.
   */
  totalFileCountDayGrowthRatio?: GetDoctorHiveClusterResponseBodyDataMetricsTotalFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the total number of files.
   */
  totalFileDayGrowthCount?: GetDoctorHiveClusterResponseBodyDataMetricsTotalFileDayGrowthCount;
  /**
   * @remarks
   * The daily increment of the amount of warm data. Warm data refers to data that is not accessed for more than 7 days but is accessed in previous 30 days.
   */
  warmDataDayGrowthSize?: GetDoctorHiveClusterResponseBodyDataMetricsWarmDataDayGrowthSize;
  /**
   * @remarks
   * The proportion of warm data. Warm data refers to data that is not accessed for more than 7 days but is accessed in previous 30 days.
   */
  warmDataRatio?: GetDoctorHiveClusterResponseBodyDataMetricsWarmDataRatio;
  /**
   * @remarks
   * The amount of warm data. Warm data refers to data that is not accessed for more than 7 days but is accessed in previous 30 days.
   */
  warmDataSize?: GetDoctorHiveClusterResponseBodyDataMetricsWarmDataSize;
  /**
   * @remarks
   * The day-to-day growth rate of the amount of warm data. Warm data refers to data that is not accessed for more than 7 days but is accessed in previous 30 days.
   */
  warmDataSizeDayGrowthRatio?: GetDoctorHiveClusterResponseBodyDataMetricsWarmDataSizeDayGrowthRatio;
  static names(): { [key: string]: string } {
    return {
      coldDataDayGrowthSize: 'ColdDataDayGrowthSize',
      coldDataRatio: 'ColdDataRatio',
      coldDataSize: 'ColdDataSize',
      coldDataSizeDayGrowthRatio: 'ColdDataSizeDayGrowthRatio',
      databaseCount: 'DatabaseCount',
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
      coldDataDayGrowthSize: GetDoctorHiveClusterResponseBodyDataMetricsColdDataDayGrowthSize,
      coldDataRatio: GetDoctorHiveClusterResponseBodyDataMetricsColdDataRatio,
      coldDataSize: GetDoctorHiveClusterResponseBodyDataMetricsColdDataSize,
      coldDataSizeDayGrowthRatio: GetDoctorHiveClusterResponseBodyDataMetricsColdDataSizeDayGrowthRatio,
      databaseCount: GetDoctorHiveClusterResponseBodyDataMetricsDatabaseCount,
      emptyFileCount: GetDoctorHiveClusterResponseBodyDataMetricsEmptyFileCount,
      emptyFileCountDayGrowthRatio: GetDoctorHiveClusterResponseBodyDataMetricsEmptyFileCountDayGrowthRatio,
      emptyFileDayGrowthCount: GetDoctorHiveClusterResponseBodyDataMetricsEmptyFileDayGrowthCount,
      emptyFileRatio: GetDoctorHiveClusterResponseBodyDataMetricsEmptyFileRatio,
      freezeDataDayGrowthSize: GetDoctorHiveClusterResponseBodyDataMetricsFreezeDataDayGrowthSize,
      freezeDataRatio: GetDoctorHiveClusterResponseBodyDataMetricsFreezeDataRatio,
      freezeDataSize: GetDoctorHiveClusterResponseBodyDataMetricsFreezeDataSize,
      freezeDataSizeDayGrowthRatio: GetDoctorHiveClusterResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio,
      hotDataDayGrowthSize: GetDoctorHiveClusterResponseBodyDataMetricsHotDataDayGrowthSize,
      hotDataRatio: GetDoctorHiveClusterResponseBodyDataMetricsHotDataRatio,
      hotDataSize: GetDoctorHiveClusterResponseBodyDataMetricsHotDataSize,
      hotDataSizeDayGrowthRatio: GetDoctorHiveClusterResponseBodyDataMetricsHotDataSizeDayGrowthRatio,
      largeFileCount: GetDoctorHiveClusterResponseBodyDataMetricsLargeFileCount,
      largeFileCountDayGrowthRatio: GetDoctorHiveClusterResponseBodyDataMetricsLargeFileCountDayGrowthRatio,
      largeFileDayGrowthCount: GetDoctorHiveClusterResponseBodyDataMetricsLargeFileDayGrowthCount,
      largeFileRatio: GetDoctorHiveClusterResponseBodyDataMetricsLargeFileRatio,
      mediumFileCount: GetDoctorHiveClusterResponseBodyDataMetricsMediumFileCount,
      mediumFileCountDayGrowthRatio: GetDoctorHiveClusterResponseBodyDataMetricsMediumFileCountDayGrowthRatio,
      mediumFileDayGrowthCount: GetDoctorHiveClusterResponseBodyDataMetricsMediumFileDayGrowthCount,
      mediumFileRatio: GetDoctorHiveClusterResponseBodyDataMetricsMediumFileRatio,
      partitionNum: GetDoctorHiveClusterResponseBodyDataMetricsPartitionNum,
      smallFileCount: GetDoctorHiveClusterResponseBodyDataMetricsSmallFileCount,
      smallFileCountDayGrowthRatio: GetDoctorHiveClusterResponseBodyDataMetricsSmallFileCountDayGrowthRatio,
      smallFileDayGrowthCount: GetDoctorHiveClusterResponseBodyDataMetricsSmallFileDayGrowthCount,
      smallFileRatio: GetDoctorHiveClusterResponseBodyDataMetricsSmallFileRatio,
      tableCount: GetDoctorHiveClusterResponseBodyDataMetricsTableCount,
      tinyFileCount: GetDoctorHiveClusterResponseBodyDataMetricsTinyFileCount,
      tinyFileCountDayGrowthRatio: GetDoctorHiveClusterResponseBodyDataMetricsTinyFileCountDayGrowthRatio,
      tinyFileDayGrowthCount: GetDoctorHiveClusterResponseBodyDataMetricsTinyFileDayGrowthCount,
      tinyFileRatio: GetDoctorHiveClusterResponseBodyDataMetricsTinyFileRatio,
      totalDataDayGrowthSize: GetDoctorHiveClusterResponseBodyDataMetricsTotalDataDayGrowthSize,
      totalDataSize: GetDoctorHiveClusterResponseBodyDataMetricsTotalDataSize,
      totalDataSizeDayGrowthRatio: GetDoctorHiveClusterResponseBodyDataMetricsTotalDataSizeDayGrowthRatio,
      totalFileCount: GetDoctorHiveClusterResponseBodyDataMetricsTotalFileCount,
      totalFileCountDayGrowthRatio: GetDoctorHiveClusterResponseBodyDataMetricsTotalFileCountDayGrowthRatio,
      totalFileDayGrowthCount: GetDoctorHiveClusterResponseBodyDataMetricsTotalFileDayGrowthCount,
      warmDataDayGrowthSize: GetDoctorHiveClusterResponseBodyDataMetricsWarmDataDayGrowthSize,
      warmDataRatio: GetDoctorHiveClusterResponseBodyDataMetricsWarmDataRatio,
      warmDataSize: GetDoctorHiveClusterResponseBodyDataMetricsWarmDataSize,
      warmDataSizeDayGrowthRatio: GetDoctorHiveClusterResponseBodyDataMetricsWarmDataSizeDayGrowthRatio,
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
    if(this.databaseCount && typeof (this.databaseCount as any).validate === 'function') {
      (this.databaseCount as any).validate();
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

export class GetDoctorHiveClusterResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The analysis results.
   */
  analysis?: GetDoctorHiveClusterResponseBodyDataAnalysis;
  /**
   * @remarks
   * The information from the perspective of storage formats.
   */
  formats?: GetDoctorHiveClusterResponseBodyDataFormats[];
  /**
   * @remarks
   * The metric information.
   */
  metrics?: GetDoctorHiveClusterResponseBodyDataMetrics;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      formats: 'Formats',
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: GetDoctorHiveClusterResponseBodyDataAnalysis,
      formats: { 'type': 'array', 'itemType': GetDoctorHiveClusterResponseBodyDataFormats },
      metrics: GetDoctorHiveClusterResponseBodyDataMetrics,
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

export class GetDoctorHiveClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The analysis results of the Hive cluster.
   */
  data?: GetDoctorHiveClusterResponseBodyData;
  /**
   * @remarks
   * The request ID.
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
      data: GetDoctorHiveClusterResponseBodyData,
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

