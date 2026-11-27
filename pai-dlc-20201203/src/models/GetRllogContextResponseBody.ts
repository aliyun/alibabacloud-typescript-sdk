// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RLLogContextLine } from "./RllogContextLine";


export class GetRLLogContextResponseBody extends $dara.Model {
  /**
   * @remarks
   * The index of the anchor line in Lines. This value is empty if the fallback path does not match the anchor. In this case, Lines contains all lines in the window.
   * 
   * @example
   * 100
   */
  anchorIndex?: number;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * dlc-20210126170216-xxxxxxxx
   */
  jobId?: string;
  /**
   * @remarks
   * The context log lines in ascending order of time.
   */
  lines?: RLLogContextLine[];
  /**
   * @remarks
   * The log locating mode. Valid values: agent_collect_time for the exact path, and raw_time_cluster for the fallback path.
   * 
   * @example
   * agent_collect_time
   */
  mode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the number of raw lines in the fallback path reaches the upper limit of 5,000.
   * 
   * @example
   * False
   */
  truncated?: boolean;
  static names(): { [key: string]: string } {
    return {
      anchorIndex: 'AnchorIndex',
      jobId: 'JobId',
      lines: 'Lines',
      mode: 'Mode',
      requestId: 'RequestId',
      truncated: 'Truncated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorIndex: 'number',
      jobId: 'string',
      lines: { 'type': 'array', 'itemType': RLLogContextLine },
      mode: 'string',
      requestId: 'string',
      truncated: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.lines)) {
      $dara.Model.validateArray(this.lines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

