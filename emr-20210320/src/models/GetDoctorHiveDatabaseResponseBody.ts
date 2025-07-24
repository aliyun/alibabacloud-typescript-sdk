// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDoctorHiveDatabaseResponseBodyDataAnalysis extends $dara.Model {
  /**
   * @remarks
   * The score for the file sizes of the Hive database.
   * 
   * @example
   * 85
   */
  hiveDistributionScore?: number;
  /**
   * @remarks
   * The score for the data formats of the Hive database.
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

export class GetDoctorHiveDatabaseResponseBodyDataFormats extends $dara.Model {
  /**
   * @remarks
   * The daily increment of data in the format.
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
   * 1000
   */
  formatSize?: number;
  /**
   * @remarks
   * The day-to-day growth rate of data in the format.
   * 
   * @example
   * 0.5
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsColdDataDayGrowthSize extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsColdDataRatio extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsColdDataSize extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsColdDataSizeDayGrowthRatio extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsEmptyFileCount extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsEmptyFileCountDayGrowthRatio extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsEmptyFileDayGrowthCount extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsEmptyFileRatio extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsFreezeDataDayGrowthSize extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsFreezeDataRatio extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsFreezeDataSize extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsHotDataDayGrowthSize extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsHotDataRatio extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsHotDataSize extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsHotDataSizeDayGrowthRatio extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsLargeFileCount extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsLargeFileCountDayGrowthRatio extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsLargeFileDayGrowthCount extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsLargeFileRatio extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsMediumFileCount extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsMediumFileCountDayGrowthRatio extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsMediumFileDayGrowthCount extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsMediumFileRatio extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsPartitionNum extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsSmallFileCount extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsSmallFileCountDayGrowthRatio extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsSmallFileDayGrowthCount extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsSmallFileRatio extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsTableCount extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsTinyFileCount extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsTinyFileCountDayGrowthRatio extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsTinyFileDayGrowthCount extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsTinyFileRatio extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsTotalDataDayGrowthSize extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsTotalDataSize extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsTotalDataSizeDayGrowthRatio extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsTotalFileCount extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsTotalFileCountDayGrowthRatio extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsTotalFileDayGrowthCount extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsWarmDataDayGrowthSize extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsWarmDataRatio extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsWarmDataSize extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetricsWarmDataSizeDayGrowthRatio extends $dara.Model {
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

export class GetDoctorHiveDatabaseResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The daily increment of the amount of cold data. Cold data refers to data that is not accessed for more than 30 days but is accessed in previous 90 days.
   */
  coldDataDayGrowthSize?: GetDoctorHiveDatabaseResponseBodyDataMetricsColdDataDayGrowthSize;
  /**
   * @remarks
   * The proportion of cold data. Cold data refers to data that is not accessed for more than 30 days but is accessed in previous 90 days.
   */
  coldDataRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsColdDataRatio;
  /**
   * @remarks
   * The amount of cold data. Cold data refers to data that is not accessed for more than 30 days but is accessed in previous 90 days.
   */
  coldDataSize?: GetDoctorHiveDatabaseResponseBodyDataMetricsColdDataSize;
  /**
   * @remarks
   * The day-to-day growth rate of the amount of cold data. Cold data refers to data that is not accessed for more than 30 days but is accessed in previous 90 days.
   */
  coldDataSizeDayGrowthRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsColdDataSizeDayGrowthRatio;
  /**
   * @remarks
   * The number of empty files. Empty files are those with a size of 0 MB.
   */
  emptyFileCount?: GetDoctorHiveDatabaseResponseBodyDataMetricsEmptyFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the number of empty files. Empty files are those with a size of 0 MB.
   */
  emptyFileCountDayGrowthRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsEmptyFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the number of empty files. Empty files are those with a size of 0 MB.
   */
  emptyFileDayGrowthCount?: GetDoctorHiveDatabaseResponseBodyDataMetricsEmptyFileDayGrowthCount;
  /**
   * @remarks
   * The proportion of empty files. Empty files are those with a size of 0 MB.
   */
  emptyFileRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsEmptyFileRatio;
  /**
   * @remarks
   * The daily increment of the amount of very cold data. Very cold data refers to data that is not accessed for more than 90 days.
   */
  freezeDataDayGrowthSize?: GetDoctorHiveDatabaseResponseBodyDataMetricsFreezeDataDayGrowthSize;
  /**
   * @remarks
   * The proportion of very cold data. Very cold data refers to data that is not accessed for more than 90 days.
   */
  freezeDataRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsFreezeDataRatio;
  /**
   * @remarks
   * The amount of very cold data. Very cold data refers to data that is not accessed for more than 90 days.
   */
  freezeDataSize?: GetDoctorHiveDatabaseResponseBodyDataMetricsFreezeDataSize;
  /**
   * @remarks
   * The day-to-day growth rate of the amount of very cold data. Very cold data refers to data that is not accessed for more than 90 days.
   */
  freezeDataSizeDayGrowthRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the amount of hot data. Hot data refers to data that is accessed in previous seven days.
   */
  hotDataDayGrowthSize?: GetDoctorHiveDatabaseResponseBodyDataMetricsHotDataDayGrowthSize;
  /**
   * @remarks
   * The proportion of hot data. Hot data refers to data that is accessed in previous seven days.
   */
  hotDataRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsHotDataRatio;
  /**
   * @remarks
   * The amount of hot data. Hot data refers to data that is accessed in previous seven days.
   */
  hotDataSize?: GetDoctorHiveDatabaseResponseBodyDataMetricsHotDataSize;
  /**
   * @remarks
   * The day-to-day growth rate of the amount of hot data. Hot data refers to data that is accessed in previous seven days.
   */
  hotDataSizeDayGrowthRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsHotDataSizeDayGrowthRatio;
  /**
   * @remarks
   * The number of large files. Large files are those with a size greater than 1 GB.
   */
  largeFileCount?: GetDoctorHiveDatabaseResponseBodyDataMetricsLargeFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the number of large files. Large files are those with a size greater than 1 GB.
   */
  largeFileCountDayGrowthRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsLargeFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the number of large files. Large files are those with a size greater than 1 GB.
   */
  largeFileDayGrowthCount?: GetDoctorHiveDatabaseResponseBodyDataMetricsLargeFileDayGrowthCount;
  /**
   * @remarks
   * The proportion of large files. Large files are those with a size greater than 1 GB.
   */
  largeFileRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsLargeFileRatio;
  /**
   * @remarks
   * The number of medium files. Medium files are those with a size greater than or equal to 128 MB and less than or equal to 1 GB.
   */
  mediumFileCount?: GetDoctorHiveDatabaseResponseBodyDataMetricsMediumFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the number of medium files. Medium files are those with a size greater than or equal to 128 MB and less than or equal to 1 GB.
   */
  mediumFileCountDayGrowthRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsMediumFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the number of medium files. Medium files are those with a size greater than or equal to 128 MB and less than or equal to 1 GB.
   */
  mediumFileDayGrowthCount?: GetDoctorHiveDatabaseResponseBodyDataMetricsMediumFileDayGrowthCount;
  /**
   * @remarks
   * The proportion of medium files. Medium files are those with a size greater than or equal to 128 MB and less than or equal to 1 GB.
   */
  mediumFileRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsMediumFileRatio;
  /**
   * @remarks
   * The number of partitions.
   */
  partitionNum?: GetDoctorHiveDatabaseResponseBodyDataMetricsPartitionNum;
  /**
   * @remarks
   * The number of small files. Small files are those with a size greater than or equal to 10 MB and less than 128 MB.
   */
  smallFileCount?: GetDoctorHiveDatabaseResponseBodyDataMetricsSmallFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the number of small files. Small files are those with a size greater than or equal to 10 MB and less than 128 MB.
   */
  smallFileCountDayGrowthRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsSmallFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the number of small files. Small files are those with a size greater than or equal to 10 MB and less than 128 MB.
   */
  smallFileDayGrowthCount?: GetDoctorHiveDatabaseResponseBodyDataMetricsSmallFileDayGrowthCount;
  /**
   * @remarks
   * The proportion of small files. Small files are those with a size greater than or equal to 10 MB and less than 128 MB.
   */
  smallFileRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsSmallFileRatio;
  /**
   * @remarks
   * The number of tables.
   */
  tableCount?: GetDoctorHiveDatabaseResponseBodyDataMetricsTableCount;
  /**
   * @remarks
   * The number of very small files. Very small files are those with a size greater than 0 MB and less than 10 MB.
   */
  tinyFileCount?: GetDoctorHiveDatabaseResponseBodyDataMetricsTinyFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the number of very small files. Very small files are those with a size greater than 0 MB and less than 10 MB.
   */
  tinyFileCountDayGrowthRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsTinyFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the number of very small files. Very small files are those with a size greater than 0 MB and less than 10 MB.
   */
  tinyFileDayGrowthCount?: GetDoctorHiveDatabaseResponseBodyDataMetricsTinyFileDayGrowthCount;
  /**
   * @remarks
   * The proportion of very small files. Very small files are those with a size greater than 0 MB and less than 10 MB.
   */
  tinyFileRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsTinyFileRatio;
  /**
   * @remarks
   * The daily incremental of the total amount of data.
   */
  totalDataDayGrowthSize?: GetDoctorHiveDatabaseResponseBodyDataMetricsTotalDataDayGrowthSize;
  /**
   * @remarks
   * The total amount of data.
   */
  totalDataSize?: GetDoctorHiveDatabaseResponseBodyDataMetricsTotalDataSize;
  /**
   * @remarks
   * The day-to-day growth rate of the total data volume.
   */
  totalDataSizeDayGrowthRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsTotalDataSizeDayGrowthRatio;
  /**
   * @remarks
   * The total number of files.
   */
  totalFileCount?: GetDoctorHiveDatabaseResponseBodyDataMetricsTotalFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the total number of files.
   */
  totalFileCountDayGrowthRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsTotalFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the total number of files.
   */
  totalFileDayGrowthCount?: GetDoctorHiveDatabaseResponseBodyDataMetricsTotalFileDayGrowthCount;
  /**
   * @remarks
   * The daily increment of the amount of warm data. Warm data refers to data that is not accessed for more than 7 days but is accessed in previous 30 days.
   */
  warmDataDayGrowthSize?: GetDoctorHiveDatabaseResponseBodyDataMetricsWarmDataDayGrowthSize;
  /**
   * @remarks
   * The proportion of warm data. Warm data refers to data that is not accessed for more than 7 days but is accessed in previous 30 days.
   */
  warmDataRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsWarmDataRatio;
  /**
   * @remarks
   * The amount of warm data. Warm data refers to data that is not accessed for more than 7 days but is accessed in previous 30 days.
   */
  warmDataSize?: GetDoctorHiveDatabaseResponseBodyDataMetricsWarmDataSize;
  /**
   * @remarks
   * The day-to-day growth rate of the amount of warm data. Warm data refers to data that is not accessed for more than 7 days but is accessed in previous 30 days.
   */
  warmDataSizeDayGrowthRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsWarmDataSizeDayGrowthRatio;
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
      coldDataDayGrowthSize: GetDoctorHiveDatabaseResponseBodyDataMetricsColdDataDayGrowthSize,
      coldDataRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsColdDataRatio,
      coldDataSize: GetDoctorHiveDatabaseResponseBodyDataMetricsColdDataSize,
      coldDataSizeDayGrowthRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsColdDataSizeDayGrowthRatio,
      emptyFileCount: GetDoctorHiveDatabaseResponseBodyDataMetricsEmptyFileCount,
      emptyFileCountDayGrowthRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsEmptyFileCountDayGrowthRatio,
      emptyFileDayGrowthCount: GetDoctorHiveDatabaseResponseBodyDataMetricsEmptyFileDayGrowthCount,
      emptyFileRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsEmptyFileRatio,
      freezeDataDayGrowthSize: GetDoctorHiveDatabaseResponseBodyDataMetricsFreezeDataDayGrowthSize,
      freezeDataRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsFreezeDataRatio,
      freezeDataSize: GetDoctorHiveDatabaseResponseBodyDataMetricsFreezeDataSize,
      freezeDataSizeDayGrowthRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio,
      hotDataDayGrowthSize: GetDoctorHiveDatabaseResponseBodyDataMetricsHotDataDayGrowthSize,
      hotDataRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsHotDataRatio,
      hotDataSize: GetDoctorHiveDatabaseResponseBodyDataMetricsHotDataSize,
      hotDataSizeDayGrowthRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsHotDataSizeDayGrowthRatio,
      largeFileCount: GetDoctorHiveDatabaseResponseBodyDataMetricsLargeFileCount,
      largeFileCountDayGrowthRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsLargeFileCountDayGrowthRatio,
      largeFileDayGrowthCount: GetDoctorHiveDatabaseResponseBodyDataMetricsLargeFileDayGrowthCount,
      largeFileRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsLargeFileRatio,
      mediumFileCount: GetDoctorHiveDatabaseResponseBodyDataMetricsMediumFileCount,
      mediumFileCountDayGrowthRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsMediumFileCountDayGrowthRatio,
      mediumFileDayGrowthCount: GetDoctorHiveDatabaseResponseBodyDataMetricsMediumFileDayGrowthCount,
      mediumFileRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsMediumFileRatio,
      partitionNum: GetDoctorHiveDatabaseResponseBodyDataMetricsPartitionNum,
      smallFileCount: GetDoctorHiveDatabaseResponseBodyDataMetricsSmallFileCount,
      smallFileCountDayGrowthRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsSmallFileCountDayGrowthRatio,
      smallFileDayGrowthCount: GetDoctorHiveDatabaseResponseBodyDataMetricsSmallFileDayGrowthCount,
      smallFileRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsSmallFileRatio,
      tableCount: GetDoctorHiveDatabaseResponseBodyDataMetricsTableCount,
      tinyFileCount: GetDoctorHiveDatabaseResponseBodyDataMetricsTinyFileCount,
      tinyFileCountDayGrowthRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsTinyFileCountDayGrowthRatio,
      tinyFileDayGrowthCount: GetDoctorHiveDatabaseResponseBodyDataMetricsTinyFileDayGrowthCount,
      tinyFileRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsTinyFileRatio,
      totalDataDayGrowthSize: GetDoctorHiveDatabaseResponseBodyDataMetricsTotalDataDayGrowthSize,
      totalDataSize: GetDoctorHiveDatabaseResponseBodyDataMetricsTotalDataSize,
      totalDataSizeDayGrowthRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsTotalDataSizeDayGrowthRatio,
      totalFileCount: GetDoctorHiveDatabaseResponseBodyDataMetricsTotalFileCount,
      totalFileCountDayGrowthRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsTotalFileCountDayGrowthRatio,
      totalFileDayGrowthCount: GetDoctorHiveDatabaseResponseBodyDataMetricsTotalFileDayGrowthCount,
      warmDataDayGrowthSize: GetDoctorHiveDatabaseResponseBodyDataMetricsWarmDataDayGrowthSize,
      warmDataRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsWarmDataRatio,
      warmDataSize: GetDoctorHiveDatabaseResponseBodyDataMetricsWarmDataSize,
      warmDataSizeDayGrowthRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsWarmDataSizeDayGrowthRatio,
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

export class GetDoctorHiveDatabaseResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The analysis results.
   */
  analysis?: GetDoctorHiveDatabaseResponseBodyDataAnalysis;
  /**
   * @remarks
   * The information from the perspective of storage formats.
   */
  formats?: GetDoctorHiveDatabaseResponseBodyDataFormats[];
  /**
   * @remarks
   * The metric information.
   */
  metrics?: GetDoctorHiveDatabaseResponseBodyDataMetrics;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      formats: 'Formats',
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: GetDoctorHiveDatabaseResponseBodyDataAnalysis,
      formats: { 'type': 'array', 'itemType': GetDoctorHiveDatabaseResponseBodyDataFormats },
      metrics: GetDoctorHiveDatabaseResponseBodyDataMetrics,
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

export class GetDoctorHiveDatabaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The analysis results of the Hive database.
   */
  data?: GetDoctorHiveDatabaseResponseBodyData;
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
      data: GetDoctorHiveDatabaseResponseBodyData,
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

