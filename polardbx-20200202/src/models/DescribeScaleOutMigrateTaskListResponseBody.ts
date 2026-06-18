// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScaleOutMigrateTaskListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Migration task progress.
   * 
   * @example
   * 32
   */
  progress?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * C458B1E8-1683-3645-B154-6BA32080EEA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      progress: 'Progress',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      progress: 'number',
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

