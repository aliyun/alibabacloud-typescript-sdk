// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchExportShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * When you call this operation to export data, you must specify the `Cursor` parameter. You can obtain the value of the `Cursor` parameter by using one of the following methods:
   * 
   * *   When you call this operation for the first time, you must call the Cursor operation to obtain the `Cursor` value. For more information, see [Cursor](https://help.aliyun.com/document_detail/2330730.html).
   * *   When you call this operation again, you can obtain the `Cursor` value from the returned data of the last call.
   * 
   * This parameter is required.
   * 
   * @example
   * eyJidWNrZXRzIjo0LCJjdXJzb3IiOiIxNjQxNDU0MzIwMDAwMWUxY2YxNWY0NTU0MTliZjllYTY4OWQ2ODI1OTU1Yzc1NmZjMDQ2OTMxMzczMzM2MzUzMTMxMzEzMzM0MzMzODM5MzEzMTMwMjQyYzY5MmQ3NTY2MzYzMjY3NmI2ZjM5MzU2YjY4MzAzMTYyNzg3MTcwNjkzMTM3MjQyYyIsImN1cnNvclZlcnNpb24iOiJxdWVyeSIsImVuZFRpbWUiOjE2NDE0NTQ3OTU4MjMsImV4cG9ydEVuZFRpbWUiOjE2NDE0NTQ3OTU4MjMsImV4cG9ydFN0YXJ0VGltZSI6MTY0MTQ1NDE5NTgyMywiZXhwcmVzc1JhbmdlIjpmYWxzZSwiaGFzTmV4dCI6dHJ1ZSwiaW5wdXRNZXRyaWMiOiJDUFVVdGlsaXphdGlvbiIsImlucHV0TmFtZXNwYWNlIjoiYWNzX2Vjc19kYXNoYm9hcmQiLCJsaW1pdCI6MTAwMCwibG9nVGltZU1vZGUiOnRydWUsIm1hdGNoZXJzIjp7ImNoYWluIjpbeyJsYWJlbCI6InVzZXJJZCIsIm9wZXJhdG9yIjoiRVFVQUxTIiwidmFsdWUiOiIxNzM2NTExMTM0Mzg5MTEwIn1dfSwibWV0cmljIjoiQ1BVVXRpbGl6YXRpb24iLCJtZXRyaWNUeXBlIjoiTUVUUklDIiwibmFtZXNwYWNlIjoiYWNzX2Vjc19kYXNoYm9hcmQiLCJuZXh0UGtBZGFwdGVyIjp7fSwib2Zmc2V0IjowLCJwYXJlbnRVaWQiOjEyNzA2NzY2Nzk1NDY3MDQsInN0YXJ0VGltZSI6MTY0MTQ1NDE5NTgyMywic3RlcCI6LTEsInRpbWVvdXQiOjEyMCwid2luZG93Ijo2****
   */
  cursor?: string;
  /**
   * @remarks
   * The maximum number of data entries that can be returned in each response.
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
   * The statistical methods used to customize the returned data. By default, the measurements based on all statistical methods are returned.
   * 
   * For example, the `cpu_idle` metric of ECS (`acs_ecs_dashboard`) has three statistical methods: `Average`, `Maximum`, and `Minimum`. If you want to return only the measurements based on the `Average` and `Maximum` statistical methods, set this parameter to `["Average", "Maximum"]`.
   * 
   * The statistical methods of metrics are displayed in the `Statistics` column on the Metrics page of each cloud service. For more information, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   */
  measurementsShrink?: string;
  /**
   * @remarks
   * The metric that is used to monitor the cloud service.
   * 
   * For more information about the metrics of cloud services, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * >  The value of this parameter must be the same as the value of the request parameter `Metric` in the Cursor operation.
   * 
   * This parameter is required.
   * 
   * @example
   * cpu_idle
   */
  metric?: string;
  /**
   * @remarks
   * The namespace of the cloud service.
   * 
   * For more information about the namespaces of cloud services, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * >  The value of this parameter must be the same as the value of the request parameter `Namespace` in the Cursor operation.
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
      measurementsShrink: 'Measurements',
      metric: 'Metric',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursor: 'string',
      length: 'number',
      measurementsShrink: 'string',
      metric: 'string',
      namespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

