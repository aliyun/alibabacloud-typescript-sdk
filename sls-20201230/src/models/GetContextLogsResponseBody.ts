// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContextLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of logs that are generated before the generation time of the start log.
   * 
   * @example
   * 100
   */
  backLines?: number;
  /**
   * @remarks
   * The number of logs that are generated after the generation time of the start log.
   * 
   * @example
   * 100
   */
  forwardLines?: number;
  /**
   * @remarks
   * The logs that are returned.
   */
  logs?: { [key: string]: any }[];
  /**
   * @remarks
   * Indicates whether the query and analysis results are complete. Valid values:
   * 
   * *   Complete: The query is successful, and the complete query and analysis results are returned.
   * *   Incomplete: The query is successful, but the query and analysis results are incomplete. To obtain the complete results, you must repeat the request.
   * 
   * @example
   * Complete
   */
  progress?: string;
  /**
   * @remarks
   * The total number of logs that are returned. The logs include the start log that is specified in the request.
   * 
   * @example
   * 201
   */
  totalLines?: number;
  static names(): { [key: string]: string } {
    return {
      backLines: 'back_lines',
      forwardLines: 'forward_lines',
      logs: 'logs',
      progress: 'progress',
      totalLines: 'total_lines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backLines: 'number',
      forwardLines: 'number',
      logs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      progress: 'string',
      totalLines: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

