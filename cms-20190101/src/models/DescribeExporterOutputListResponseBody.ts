// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExporterOutputListResponseBodyDatapointsDatapointConfigJson extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID.
   * 
   * @example
   * LTAIpY33********
   */
  ak?: string;
  /**
   * @remarks
   * The Log Service endpoint to which the monitoring data is exported.
   * 
   * @example
   * http://cn-qingdao-share.log.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The Logstore.
   * 
   * @example
   * monitorlogstore
   */
  logstore?: string;
  /**
   * @remarks
   * The Log Service project to which the monitoring data is exported.
   * 
   * @example
   * exporter
   */
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
  /**
   * @remarks
   * The JSON object that contains the details about the destination to which the monitoring data is exported.
   */
  configJson?: DescribeExporterOutputListResponseBodyDatapointsDatapointConfigJson;
  /**
   * @remarks
   * The time when the configuration set was created. The value is a UNIX timestamp.
   * 
   * @example
   * 1584016495498
   */
  createTime?: number;
  /**
   * @remarks
   * The name of the configuration set.
   * 
   * @example
   * exporterOut
   */
  destName?: string;
  /**
   * @remarks
   * The service to which the monitoring data is exported.
   * 
   * > Only Log Service is supported. More services will be supported in the future.
   * 
   * @example
   * SLS
   */
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
  /**
   * @remarks
   * The HTTP status code.
   * 
   * > The status code 200 indicates that the request was successful. Other status codes indicate that the request failed.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The configuration sets for exporting monitoring data.
   */
  datapoints?: DescribeExporterOutputListResponseBodyDatapoints;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * sucess
   */
  message?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0E657631-CD6C-4C24-9637-98D000B9272C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 25
   */
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

