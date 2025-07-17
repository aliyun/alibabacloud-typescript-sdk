// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryReleaseMetricResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned metric data.
   * 
   * @example
   * {"data":{"SystemCpuUser":{"all":[{"date":1632798718000,"val":4.3277,"dim":"SystemCpuUser"},{"date":1632798733000,"val":8.1091,"dim":"SystemCpuUser"}]},"SystemMemUtil":{"all":[{"date":1632798718000,"val":73.4227,"dim":"SystemMemUtil"},{"date":1632798733000,"val":93.0977,"dim":"SystemMemUtil"}]}},"success":true}
   */
  data?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 46355DD8-FC56-40C5-BFC6-269DE4F9****
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
      data: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

