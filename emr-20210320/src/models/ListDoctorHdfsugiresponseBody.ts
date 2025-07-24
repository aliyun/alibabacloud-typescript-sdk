// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoctorHDFSUGIResponseBodyDataMetricsTotalDataSize extends $dara.Model {
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
   * 40440503
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSUGIResponseBodyDataMetricsTotalDirCount extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Number of total dirs
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * totalDirCount
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

export class ListDoctorHDFSUGIResponseBodyDataMetricsTotalFileCount extends $dara.Model {
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
   * 34
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSUGIResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The total data size.
   */
  totalDataSize?: ListDoctorHDFSUGIResponseBodyDataMetricsTotalDataSize;
  /**
   * @remarks
   * The total number of directories.
   */
  totalDirCount?: ListDoctorHDFSUGIResponseBodyDataMetricsTotalDirCount;
  /**
   * @remarks
   * The total number of files.
   */
  totalFileCount?: ListDoctorHDFSUGIResponseBodyDataMetricsTotalFileCount;
  static names(): { [key: string]: string } {
    return {
      totalDataSize: 'TotalDataSize',
      totalDirCount: 'TotalDirCount',
      totalFileCount: 'TotalFileCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalDataSize: ListDoctorHDFSUGIResponseBodyDataMetricsTotalDataSize,
      totalDirCount: ListDoctorHDFSUGIResponseBodyDataMetricsTotalDirCount,
      totalFileCount: ListDoctorHDFSUGIResponseBodyDataMetricsTotalFileCount,
    };
  }

  validate() {
    if(this.totalDataSize && typeof (this.totalDataSize as any).validate === 'function') {
      (this.totalDataSize as any).validate();
    }
    if(this.totalDirCount && typeof (this.totalDirCount as any).validate === 'function') {
      (this.totalDirCount as any).validate();
    }
    if(this.totalFileCount && typeof (this.totalFileCount as any).validate === 'function') {
      (this.totalFileCount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSUGIResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The metric information.
   */
  metrics?: ListDoctorHDFSUGIResponseBodyDataMetrics;
  /**
   * @remarks
   * The actual name of the owner or group returned based on the value of Type.
   * 
   * @example
   * DW
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: ListDoctorHDFSUGIResponseBodyDataMetrics,
      name: 'string',
    };
  }

  validate() {
    if(this.metrics && typeof (this.metrics as any).validate === 'function') {
      (this.metrics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSUGIResponseBody extends $dara.Model {
  /**
   * @remarks
   * The results of batch HDFS analysis.
   */
  data?: ListDoctorHDFSUGIResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListDoctorHDFSUGIResponseBodyData },
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

