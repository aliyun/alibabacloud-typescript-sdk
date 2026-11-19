// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiAppTraceDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AI application.
   * 
   * @example
   * id-xxx
   */
  appId?: string;
  /**
   * @remarks
   * The end time of the query. Specify the time in the YYYY-MM-DD HH:mm:ss format.
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
   * The start time of the query. Specify the time in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2026-01-01 16:08:38
   */
  startTime?: string;
  /**
   * @remarks
   * The trace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 4d3b7c9e2f1a4b8c9d0e1f2a3b4c5d6e
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

