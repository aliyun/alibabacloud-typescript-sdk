// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchExportRequest extends $dara.Model {
  /**
   * @remarks
   * The cursor value. This parameter is required when you repeatedly call this operation to export data. You can obtain the Cursor value by using one of the following methods:
   * 
   * - When you call this operation for the first time, you must call the Cursor operation to obtain the Cursor value. For more information, see [Cursor](https://help.aliyun.com/document_detail/2330730.html).
   * 
   * - When you call this operation again, you can obtain the Cursor value from the response of the previous call.
   * 
   * This parameter is required.
   * 
   * @example
   * eyJidWNrZXRzIjo0LCJjdXJzb3IiOiIxNjQxNDU0MzIwMDAwMWUxY2YxNWY0NTU0MTliZjllYTY4OWQ2ODI1OTU1Yzc1NmZjMDQ2OTMxMzczMzM2MzUzMTMxMzEzMzM0MzMzODM5MzEzMTMwMjQyYzY5MmQ3NTY2MzYzMjY3NmI2ZjM5MzU2YjY4MzAzMTYyNzg3MTcwNjkzMTM3MjQyYyIsImN1cnNvclZlcnNpb24iOiJxdWVyeSIsImVuZFRpbWUiOjE2NDE0NTQ3OTU4MjMsImV4cG9ydEVuZFRpbWUiOjE2NDE0NTQ3OTU4MjMsImV4cG9ydFN0YXJ0VGltZSI6MTY0MTQ1NDE5NTgyMywiZXhwcmVzc1JhbmdlIjpmYWxzZSwiaGFzTmV4dCI6dHJ1ZSwiaW5wdXRNZXRyaWMiOiJDUFVVdGlsaXphdGlvbiIsImlucHV0TmFtZXNwYWNlIjoiYWNzX2Vjc19kYXNoYm9hcmQiLCJsaW1pdCI6MTAwMCwibG9nVGltZU1vZGUiOnRydWUsIm1hdGNoZXJzIjp7ImNoYWluIjpbeyJsYWJlbCI6InVzZXJJZCIsIm9wZXJhdG9yIjoiRVFVQUxTIiwidmFsdWUiOiIxNzM2NTExMTM0Mzg5MTEwIn1dfSwibWV0cmljIjoiQ1BVVXRpbGl6YXRpb24iLCJtZXRyaWNUeXBlIjoiTUVUUklDIiwibmFtZXNwYWNlIjoiYWNzX2Vjc19kYXNoYm9hcmQiLCJuZXh0UGtBZGFwdGVyIjp7fSwib2Zmc2V0IjowLCJwYXJlbnRVaWQiOjEyNzA2NzY2Nzk1NDY3MDQsInN0YXJ0VGltZSI6MTY0MTQ1NDE5NTgyMywic3RlcCI6LTEsInRpbWVvdXQiOjEyMCwid2luZG93Ijo2****
   */
  cursor?: string;
  /**
   * @remarks
   * The maximum number of data records to return each time.
   * 
   * Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  length?: number;
  /**
   * @remarks
   * The measurements used to customize the returned data. By default, all measurements are returned.
   * 
   * For example, the `cpu_idle` monitoring metrics for the `acs_ecs_dashboard` cloud service have three measurement columns: `Average`, `Maximum`, and `Minimum`. If you want to return only the `Average` and `Maximum` columns, set the Settings of this parameter to the `["Average", "Maximum"]` array.
   * 
   * For more information about how to obtain the measurements of the monitoring metrics for a cloud service, see the `statistics` column in [Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   */
  measurements?: string[];
  /**
   * @remarks
   * The name of the monitoring metric for the cloud service.
   * 
   * For more information about how to obtain the monitoring metric name of a cloud service, see [Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * > This parameter must be the same as the Metric request parameter in the Cursor operation.
   * 
   * This parameter is required.
   * 
   * @example
   * cpu_idle
   */
  metric?: string;
  /**
   * @remarks
   * The data namespace of the cloud service.
   * 
   * For more information about how to obtain the data namespace of a cloud service, see [Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * > This parameter must be the same as the Namespace request parameter in the Cursor operation.
   * 
   * This parameter is required.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      cursor: 'Cursor',
      length: 'Length',
      measurements: 'Measurements',
      metric: 'Metric',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursor: 'string',
      length: 'number',
      measurements: { 'type': 'array', 'itemType': 'string' },
      metric: 'string',
      namespace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.measurements)) {
      $dara.Model.validateArray(this.measurements);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

