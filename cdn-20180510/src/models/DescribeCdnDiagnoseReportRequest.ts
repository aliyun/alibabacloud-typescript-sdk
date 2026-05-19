// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnDiagnoseReportRequest extends $dara.Model {
  /**
   * @example
   * xxxxxxxxx-x-x-xxxxxxxxxxxxxxx
   */
  taskId?: string;
  /**
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

