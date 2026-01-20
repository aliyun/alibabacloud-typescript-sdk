// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportModelFeatureTrainingSetTableResponseBody extends $dara.Model {
  /**
   * @example
   * 0FBBE454-9BD1-5D8F-9129-D14DB7FAFE0B
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

