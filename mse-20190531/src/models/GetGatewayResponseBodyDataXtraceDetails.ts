// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayResponseBodyDataXtraceDetails extends $dara.Model {
  /**
   * @remarks
   * The sampling rate of Tracing Analysis.
   * 
   * @example
   * 10
   */
  sample?: number;
  /**
   * @remarks
   * Indicates whether sampling by using Tracing Analysis is enabled.
   * 
   * @example
   * true
   */
  traceOn?: boolean;
  static names(): { [key: string]: string } {
    return {
      sample: 'Sample',
      traceOn: 'TraceOn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sample: 'number',
      traceOn: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

