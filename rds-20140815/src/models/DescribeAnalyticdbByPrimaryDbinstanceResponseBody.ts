// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAnalyticdbByPrimaryDBInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of associated analytic instances.
   * 
   * @example
   * 0
   */
  analyticDBCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 77862BFF-ED59-552A-A2E8-692FEAFC9527
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      analyticDBCount: 'AnalyticDBCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyticDBCount: 'number',
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

