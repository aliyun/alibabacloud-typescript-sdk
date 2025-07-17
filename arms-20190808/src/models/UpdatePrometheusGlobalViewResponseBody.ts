// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePrometheusGlobalViewResponseBodyDataFailedInstances extends $dara.Model {
  /**
   * @remarks
   * The ID of the Prometheus instance.
   * 
   * @example
   * cdb65ed2d527345*********
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * sourcename-test
   */
  sourceName?: string;
  /**
   * @remarks
   * The type of the data source. AlibabaPrometheus MetricStore CustomPrometheus
   * 
   * @example
   * AlibabaPrometheus
   */
  sourceType?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 23784673825*******
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      sourceName: 'SourceName',
      sourceType: 'SourceType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      sourceName: 'string',
      sourceType: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrometheusGlobalViewResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data sources that failed to be updated.
   */
  failedInstances?: UpdatePrometheusGlobalViewResponseBodyDataFailedInstances[];
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
  static names(): { [key: string]: string } {
    return {
      failedInstances: 'FailedInstances',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedInstances: { 'type': 'array', 'itemType': UpdatePrometheusGlobalViewResponseBodyDataFailedInstances },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.failedInstances)) {
      $dara.Model.validateArray(this.failedInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrometheusGlobalViewResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned struct.
   */
  data?: UpdatePrometheusGlobalViewResponseBodyData;
  /**
   * @remarks
   * The error message that is returned if the request failed.
   * 
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * E9C9DA3D-10FE-472E-9EEF-2D0A3E41****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: UpdatePrometheusGlobalViewResponseBodyData,
      message: 'string',
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

