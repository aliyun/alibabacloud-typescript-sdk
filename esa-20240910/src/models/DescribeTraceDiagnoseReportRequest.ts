// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTraceDiagnoseReportRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the diagnostic task. You must specify at least one of TraceId and TaskId. If both are missing, the API returns an error.
   * 
   * @example
   * xxxxxxxxx-x-x-xxxxxxxxxxxxxxx
   */
  taskId?: string;
  /**
   * @remarks
   * The ID of the diagnostic trace. You must specify at least one of TraceId and TaskId. If both are missing, the API returns an error.
   * 
   * @example
   * 0000xxxxxxxxxxxxxxxxxxxxxx75e
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

