// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiAppTraceDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The AI application ID that identifies a specific AI application instance.
   * 
   * @example
   * id-xxx
   */
  appId?: string;
  /**
   * @remarks
   * The end time of the query.
   * 
   * @example
   * 2026-01-02 16:08:38
   */
  endTime?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The start time of the query.
   * 
   * @example
   * 2026-01-01 16:08:38
   */
  startTime?: string;
  /**
   * @remarks
   * The trace ID used to track and correlate a specific request chain.
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxx
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      regionId: 'RegionId',
      startTime: 'StartTime',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'string',
      regionId: 'string',
      startTime: 'string',
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

