// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExporterOutputListResponseBodyDatapointsDatapointConfigJson extends $dara.Model {
  ak?: string;
  endpoint?: string;
  logstore?: string;
  project?: string;
  static names(): { [key: string]: string } {
    return {
      ak: 'ak',
      endpoint: 'endpoint',
      logstore: 'logstore',
      project: 'project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ak: 'string',
      endpoint: 'string',
      logstore: 'string',
      project: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExporterOutputListResponseBodyDatapointsDatapoint extends $dara.Model {
  configJson?: DescribeExporterOutputListResponseBodyDatapointsDatapointConfigJson;
  createTime?: number;
  destName?: string;
  destType?: string;
  static names(): { [key: string]: string } {
    return {
      configJson: 'ConfigJson',
      createTime: 'CreateTime',
      destName: 'DestName',
      destType: 'DestType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configJson: DescribeExporterOutputListResponseBodyDatapointsDatapointConfigJson,
      createTime: 'number',
      destName: 'string',
      destType: 'string',
    };
  }

  validate() {
    if(this.configJson && typeof (this.configJson as any).validate === 'function') {
      (this.configJson as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExporterOutputListResponseBodyDatapoints extends $dara.Model {
  datapoint?: DescribeExporterOutputListResponseBodyDatapointsDatapoint[];
  static names(): { [key: string]: string } {
    return {
      datapoint: 'Datapoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datapoint: { 'type': 'array', 'itemType': DescribeExporterOutputListResponseBodyDatapointsDatapoint },
    };
  }

  validate() {
    if(Array.isArray(this.datapoint)) {
      $dara.Model.validateArray(this.datapoint);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExporterOutputListResponseBody extends $dara.Model {
  code?: string;
  datapoints?: DescribeExporterOutputListResponseBodyDatapoints;
  message?: string;
  pageNumber?: number;
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      datapoints: 'Datapoints',
      message: 'Message',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      datapoints: DescribeExporterOutputListResponseBodyDatapoints,
      message: 'string',
      pageNumber: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(this.datapoints && typeof (this.datapoints as any).validate === 'function') {
      (this.datapoints as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

