// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDoctorHDFSClusterResponseBodyDataAnalysis extends $dara.Model {
  /**
   * @remarks
   * The overall score of HDFS storage resources.
   * 
   * @example
   * 55
   */
  hdfsScore?: number;
  static names(): { [key: string]: string } {
    return {
      hdfsScore: 'HdfsScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hdfsScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsColdDataDayGrowthSize extends $dara.Model {
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
   * -182636577752
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsColdDataRatio extends $dara.Model {
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsColdDataSize extends $dara.Model {
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
   * 5570958082267
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsColdDataSizeDayGrowthRatio extends $dara.Model {
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
   * ”“
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * -0.03
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsEmptyFileCount extends $dara.Model {
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
   * 15595897
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsEmptyFileCountDayGrowthRatio extends $dara.Model {
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
   * 0.005
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsEmptyFileDayGrowthCount extends $dara.Model {
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
   * 114
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsEmptyFileRatio extends $dara.Model {
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
   * 0.3
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsFreezeDataDayGrowthSize extends $dara.Model {
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
   * -167683929450
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsFreezeDataRatio extends $dara.Model {
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
   * ”“
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsFreezeDataSize extends $dara.Model {
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
   * 1231312431
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio extends $dara.Model {
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
   * -0.09
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsHotDataDayGrowthSize extends $dara.Model {
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
   * 123154
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsHotDataRatio extends $dara.Model {
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
   * ”“
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 0.22
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsHotDataSize extends $dara.Model {
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
   * 6701531944206
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsHotDataSizeDayGrowthRatio extends $dara.Model {
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
   * 0.1114
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsLargeFileCount extends $dara.Model {
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsLargeFileCountDayGrowthRatio extends $dara.Model {
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
   * 0.39
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsLargeFileDayGrowthCount extends $dara.Model {
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
   * “”
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsLargeFileRatio extends $dara.Model {
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
   * 0.22
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsMediumFileCount extends $dara.Model {
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
   * ”“
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 234
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsMediumFileCountDayGrowthRatio extends $dara.Model {
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
   * 0.19
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsMediumFileDayGrowthCount extends $dara.Model {
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
   * ”“
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 176
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsMediumFileRatio extends $dara.Model {
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
   * 0.21
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsSmallFileCount extends $dara.Model {
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
   * ”“
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 12345
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsSmallFileCountDayGrowthRatio extends $dara.Model {
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsSmallFileDayGrowthCount extends $dara.Model {
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
   * 12321
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsSmallFileRatio extends $dara.Model {
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
   * 0.19
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsTinyFileCount extends $dara.Model {
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
   * 232131
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsTinyFileCountDayGrowthRatio extends $dara.Model {
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
   * 0.003
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsTinyFileDayGrowthCount extends $dara.Model {
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
   * -123
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsTinyFileRatio extends $dara.Model {
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
   * ”“
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 0.19
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsTotalDataDayGrowthSize extends $dara.Model {
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
   * 256482228248
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsTotalDataSize extends $dara.Model {
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
   * 62086342083623
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsTotalDataSizeDayGrowthRatio extends $dara.Model {
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
   * 0.14
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsTotalFileCount extends $dara.Model {
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
   * 51683279
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsTotalFileCountDayGrowthRatio extends $dara.Model {
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsTotalFileDayGrowthCount extends $dara.Model {
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
   * “”
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 27809
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsWarmDataDayGrowthSize extends $dara.Model {
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
   * -64806998319
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsWarmDataRatio extends $dara.Model {
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
   * ”“
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsWarmDataSize extends $dara.Model {
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
   * 4062349775577
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

export class GetDoctorHDFSClusterResponseBodyDataMetricsWarmDataSizeDayGrowthRatio extends $dara.Model {
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
   * -0.015
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

export class GetDoctorHDFSClusterResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The daily increment of the amount of cold data. Cold data refers to data that is not accessed for more than 30 days but is accessed in 90 days.
   */
  coldDataDayGrowthSize?: GetDoctorHDFSClusterResponseBodyDataMetricsColdDataDayGrowthSize;
  /**
   * @remarks
   * The proportion of cold data. Cold data refers to data that is not accessed for more than 30 days but is accessed in 90 days.
   */
  coldDataRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsColdDataRatio;
  /**
   * @remarks
   * The amount of cold data. Cold data refers to data that is not accessed for more than 30 days but is accessed in 90 days.
   */
  coldDataSize?: GetDoctorHDFSClusterResponseBodyDataMetricsColdDataSize;
  /**
   * @remarks
   * The day-to-day growth rate of the amount of cold data. Cold data refers to data that is not accessed for more than 30 days but is accessed in 90 days.
   */
  coldDataSizeDayGrowthRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsColdDataSizeDayGrowthRatio;
  /**
   * @remarks
   * The number of empty files. Empty files are those with a size of 0 MB.
   */
  emptyFileCount?: GetDoctorHDFSClusterResponseBodyDataMetricsEmptyFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the number of empty files. Empty files are those with a size of 0 MB.
   */
  emptyFileCountDayGrowthRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsEmptyFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the number of empty files. Empty files are those with a size of 0 MB.
   */
  emptyFileDayGrowthCount?: GetDoctorHDFSClusterResponseBodyDataMetricsEmptyFileDayGrowthCount;
  /**
   * @remarks
   * The proportion of empty files. Empty files are those with a size of 0 MB.
   */
  emptyFileRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsEmptyFileRatio;
  /**
   * @remarks
   * The daily increment of the amount of very cold data. Very cold data refers to data that is not accessed for more than 90 days.
   */
  freezeDataDayGrowthSize?: GetDoctorHDFSClusterResponseBodyDataMetricsFreezeDataDayGrowthSize;
  /**
   * @remarks
   * The proportion of very cold data. Very cold data refers to data that is not accessed for more than 90 days.
   */
  freezeDataRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsFreezeDataRatio;
  /**
   * @remarks
   * The amount of very cold data. Very cold data refers to data that is not accessed for more than 90 days.
   */
  freezeDataSize?: GetDoctorHDFSClusterResponseBodyDataMetricsFreezeDataSize;
  /**
   * @remarks
   * The day-to-day growth rate of the amount of very cold data. Very cold data refers to data that is not accessed for more than 90 days.
   */
  freezeDataSizeDayGrowthRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the amount of hot data. Hot data refers to data that is accessed in recent seven days.
   */
  hotDataDayGrowthSize?: GetDoctorHDFSClusterResponseBodyDataMetricsHotDataDayGrowthSize;
  /**
   * @remarks
   * The proportion of hot data. Hot data refers to data that is accessed in recent seven days.
   */
  hotDataRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsHotDataRatio;
  /**
   * @remarks
   * The amount of hot data. Hot data refers to data that is accessed in recent seven days.
   */
  hotDataSize?: GetDoctorHDFSClusterResponseBodyDataMetricsHotDataSize;
  /**
   * @remarks
   * The day-to-day growth rate of the amount of hot data. Hot data refers to data that is accessed in recent seven days.
   */
  hotDataSizeDayGrowthRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsHotDataSizeDayGrowthRatio;
  /**
   * @remarks
   * The number of large files. Large files are those with a size greater than 1 GB.
   */
  largeFileCount?: GetDoctorHDFSClusterResponseBodyDataMetricsLargeFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the number of large files. Large files are those with a size greater than 1 GB.
   */
  largeFileCountDayGrowthRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsLargeFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the number of large files. Large files are those with a size greater than 1 GB.
   */
  largeFileDayGrowthCount?: GetDoctorHDFSClusterResponseBodyDataMetricsLargeFileDayGrowthCount;
  /**
   * @remarks
   * The proportion of large files. Large files are those with a size greater than 1 GB.
   */
  largeFileRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsLargeFileRatio;
  /**
   * @remarks
   * The number of medium files. Medium files are those with a size greater than or equal to 128 MB and less than or equal to 1 GB.
   */
  mediumFileCount?: GetDoctorHDFSClusterResponseBodyDataMetricsMediumFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the number of medium files. Medium files are those with a size greater than or equal to 128 MB and less than or equal to 1 GB.
   */
  mediumFileCountDayGrowthRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsMediumFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the number of medium files. Medium files are those with a size greater than or equal to 128 MB and less than or equal to 1 GB.
   */
  mediumFileDayGrowthCount?: GetDoctorHDFSClusterResponseBodyDataMetricsMediumFileDayGrowthCount;
  /**
   * @remarks
   * The proportion of medium files. Medium files are those with a size greater than or equal to 128 MB and less than or equal to 1 GB.
   */
  mediumFileRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsMediumFileRatio;
  /**
   * @remarks
   * The number of small files. Small files are those with a size greater than or equal to 10 MB and less than 128 MB.
   */
  smallFileCount?: GetDoctorHDFSClusterResponseBodyDataMetricsSmallFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the number of small files. Small files are those with a size greater than or equal to 10 MB and less than 128 MB.
   */
  smallFileCountDayGrowthRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsSmallFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the number of small files. Small files are those with a size greater than or equal to 10 MB and less than 128 MB.
   */
  smallFileDayGrowthCount?: GetDoctorHDFSClusterResponseBodyDataMetricsSmallFileDayGrowthCount;
  /**
   * @remarks
   * The proportion of small files. Small files are those with a size greater than or equal to 10 MB and less than 128 MB.
   */
  smallFileRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsSmallFileRatio;
  /**
   * @remarks
   * The number of very small files. Very small files are those with a size greater than 0 MB and less than 10 MB.
   */
  tinyFileCount?: GetDoctorHDFSClusterResponseBodyDataMetricsTinyFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the number of very small files. Very small files are those with a size greater than 0 MB and less than 10 MB.
   */
  tinyFileCountDayGrowthRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsTinyFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the number of very small files. Very small files are those with a size greater than 0 MB and less than 10 MB.
   */
  tinyFileDayGrowthCount?: GetDoctorHDFSClusterResponseBodyDataMetricsTinyFileDayGrowthCount;
  /**
   * @remarks
   * The proportion of very small files. Very small files are those with a size greater than 0 MB and less than 10 MB.
   */
  tinyFileRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsTinyFileRatio;
  /**
   * @remarks
   * The daily incremental of the total data volume.
   */
  totalDataDayGrowthSize?: GetDoctorHDFSClusterResponseBodyDataMetricsTotalDataDayGrowthSize;
  /**
   * @remarks
   * The total amount of data.
   */
  totalDataSize?: GetDoctorHDFSClusterResponseBodyDataMetricsTotalDataSize;
  /**
   * @remarks
   * The day-to-day growth rate of the total data volume.
   */
  totalDataSizeDayGrowthRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsTotalDataSizeDayGrowthRatio;
  /**
   * @remarks
   * The total number of files.
   */
  totalFileCount?: GetDoctorHDFSClusterResponseBodyDataMetricsTotalFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the total number of files.
   */
  totalFileCountDayGrowthRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsTotalFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the total number of files.
   */
  totalFileDayGrowthCount?: GetDoctorHDFSClusterResponseBodyDataMetricsTotalFileDayGrowthCount;
  /**
   * @remarks
   * The daily increment of the amount of warm data. Warm data refers to data that is not accessed for more than 7 days but is accessed in 30 days.
   */
  warmDataDayGrowthSize?: GetDoctorHDFSClusterResponseBodyDataMetricsWarmDataDayGrowthSize;
  /**
   * @remarks
   * The proportion of warm data. Warm data refers to data that is not accessed for more than 7 days but is accessed in 30 days.
   */
  warmDataRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsWarmDataRatio;
  /**
   * @remarks
   * The amount of warm data. Warm data refers to data that is not accessed for more than 7 days but is accessed in 30 days.
   */
  warmDataSize?: GetDoctorHDFSClusterResponseBodyDataMetricsWarmDataSize;
  /**
   * @remarks
   * The day-to-day growth rate of the amount of warm data. Warm data refers to data that is not accessed for more than 7 days but is accessed in 30 days.
   */
  warmDataSizeDayGrowthRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsWarmDataSizeDayGrowthRatio;
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
      coldDataDayGrowthSize: GetDoctorHDFSClusterResponseBodyDataMetricsColdDataDayGrowthSize,
      coldDataRatio: GetDoctorHDFSClusterResponseBodyDataMetricsColdDataRatio,
      coldDataSize: GetDoctorHDFSClusterResponseBodyDataMetricsColdDataSize,
      coldDataSizeDayGrowthRatio: GetDoctorHDFSClusterResponseBodyDataMetricsColdDataSizeDayGrowthRatio,
      emptyFileCount: GetDoctorHDFSClusterResponseBodyDataMetricsEmptyFileCount,
      emptyFileCountDayGrowthRatio: GetDoctorHDFSClusterResponseBodyDataMetricsEmptyFileCountDayGrowthRatio,
      emptyFileDayGrowthCount: GetDoctorHDFSClusterResponseBodyDataMetricsEmptyFileDayGrowthCount,
      emptyFileRatio: GetDoctorHDFSClusterResponseBodyDataMetricsEmptyFileRatio,
      freezeDataDayGrowthSize: GetDoctorHDFSClusterResponseBodyDataMetricsFreezeDataDayGrowthSize,
      freezeDataRatio: GetDoctorHDFSClusterResponseBodyDataMetricsFreezeDataRatio,
      freezeDataSize: GetDoctorHDFSClusterResponseBodyDataMetricsFreezeDataSize,
      freezeDataSizeDayGrowthRatio: GetDoctorHDFSClusterResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio,
      hotDataDayGrowthSize: GetDoctorHDFSClusterResponseBodyDataMetricsHotDataDayGrowthSize,
      hotDataRatio: GetDoctorHDFSClusterResponseBodyDataMetricsHotDataRatio,
      hotDataSize: GetDoctorHDFSClusterResponseBodyDataMetricsHotDataSize,
      hotDataSizeDayGrowthRatio: GetDoctorHDFSClusterResponseBodyDataMetricsHotDataSizeDayGrowthRatio,
      largeFileCount: GetDoctorHDFSClusterResponseBodyDataMetricsLargeFileCount,
      largeFileCountDayGrowthRatio: GetDoctorHDFSClusterResponseBodyDataMetricsLargeFileCountDayGrowthRatio,
      largeFileDayGrowthCount: GetDoctorHDFSClusterResponseBodyDataMetricsLargeFileDayGrowthCount,
      largeFileRatio: GetDoctorHDFSClusterResponseBodyDataMetricsLargeFileRatio,
      mediumFileCount: GetDoctorHDFSClusterResponseBodyDataMetricsMediumFileCount,
      mediumFileCountDayGrowthRatio: GetDoctorHDFSClusterResponseBodyDataMetricsMediumFileCountDayGrowthRatio,
      mediumFileDayGrowthCount: GetDoctorHDFSClusterResponseBodyDataMetricsMediumFileDayGrowthCount,
      mediumFileRatio: GetDoctorHDFSClusterResponseBodyDataMetricsMediumFileRatio,
      smallFileCount: GetDoctorHDFSClusterResponseBodyDataMetricsSmallFileCount,
      smallFileCountDayGrowthRatio: GetDoctorHDFSClusterResponseBodyDataMetricsSmallFileCountDayGrowthRatio,
      smallFileDayGrowthCount: GetDoctorHDFSClusterResponseBodyDataMetricsSmallFileDayGrowthCount,
      smallFileRatio: GetDoctorHDFSClusterResponseBodyDataMetricsSmallFileRatio,
      tinyFileCount: GetDoctorHDFSClusterResponseBodyDataMetricsTinyFileCount,
      tinyFileCountDayGrowthRatio: GetDoctorHDFSClusterResponseBodyDataMetricsTinyFileCountDayGrowthRatio,
      tinyFileDayGrowthCount: GetDoctorHDFSClusterResponseBodyDataMetricsTinyFileDayGrowthCount,
      tinyFileRatio: GetDoctorHDFSClusterResponseBodyDataMetricsTinyFileRatio,
      totalDataDayGrowthSize: GetDoctorHDFSClusterResponseBodyDataMetricsTotalDataDayGrowthSize,
      totalDataSize: GetDoctorHDFSClusterResponseBodyDataMetricsTotalDataSize,
      totalDataSizeDayGrowthRatio: GetDoctorHDFSClusterResponseBodyDataMetricsTotalDataSizeDayGrowthRatio,
      totalFileCount: GetDoctorHDFSClusterResponseBodyDataMetricsTotalFileCount,
      totalFileCountDayGrowthRatio: GetDoctorHDFSClusterResponseBodyDataMetricsTotalFileCountDayGrowthRatio,
      totalFileDayGrowthCount: GetDoctorHDFSClusterResponseBodyDataMetricsTotalFileDayGrowthCount,
      warmDataDayGrowthSize: GetDoctorHDFSClusterResponseBodyDataMetricsWarmDataDayGrowthSize,
      warmDataRatio: GetDoctorHDFSClusterResponseBodyDataMetricsWarmDataRatio,
      warmDataSize: GetDoctorHDFSClusterResponseBodyDataMetricsWarmDataSize,
      warmDataSizeDayGrowthRatio: GetDoctorHDFSClusterResponseBodyDataMetricsWarmDataSizeDayGrowthRatio,
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

export class GetDoctorHDFSClusterResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The analysis results.
   */
  analysis?: GetDoctorHDFSClusterResponseBodyDataAnalysis;
  /**
   * @remarks
   * The metric information.
   */
  metrics?: GetDoctorHDFSClusterResponseBodyDataMetrics;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: GetDoctorHDFSClusterResponseBodyDataAnalysis,
      metrics: GetDoctorHDFSClusterResponseBodyDataMetrics,
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

export class GetDoctorHDFSClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HDFS analysis results.
   */
  data?: GetDoctorHDFSClusterResponseBodyData;
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
      data: GetDoctorHDFSClusterResponseBodyData,
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

