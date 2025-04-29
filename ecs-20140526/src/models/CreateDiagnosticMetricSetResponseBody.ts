// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDiagnosticMetricSetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the diagnostic metric set, which is the unique identifier of the set.
   * 
   * @example
   * dms-o7ymuutup5l*****
   */
  metricSetId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metricSetId: 'MetricSetId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricSetId: 'string',
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

