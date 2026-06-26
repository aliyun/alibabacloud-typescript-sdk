// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRealTimeConcurrencyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum concurrency.
   * 
   * @example
   * 2
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * The real-time concurrency.
   * 
   * @example
   * 1
   */
  realTimeConcurrency?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E6E61E1A-D2DC-5ACF-AED4-A115B6691F98
   */
  requestId?: string;
  /**
   * @remarks
   * The timestamp of the request.
   * 
   * @example
   * 1661584255029
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      maxConcurrency: 'MaxConcurrency',
      realTimeConcurrency: 'RealTimeConcurrency',
      requestId: 'RequestId',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxConcurrency: 'number',
      realTimeConcurrency: 'number',
      requestId: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

