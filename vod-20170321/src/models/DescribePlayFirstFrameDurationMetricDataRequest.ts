// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlayFirstFrameDurationMetricDataRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  beginTs?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  endTs?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      beginTs: 'BeginTs',
      endTs: 'EndTs',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTs: 'string',
      endTs: 'string',
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

