// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceInspectionRunsRequest extends $dara.Model {
  /**
   * @example
   * 2026-09-08T00:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * eyJvZmZzZXQiOjIwfQ
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * Succeeded
   */
  reportStatus?: string;
  /**
   * @example
   * risk
   */
  result?: string;
  /**
   * @example
   * reportFinishedAt
   */
  sortBy?: string;
  /**
   * @example
   * 2026-09-01T00:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @example
   * rmq.consumer-health
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      regionId: 'regionId',
      reportStatus: 'reportStatus',
      result: 'result',
      sortBy: 'sortBy',
      startTime: 'startTime',
      status: 'status',
      templateCode: 'templateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      reportStatus: 'string',
      result: 'string',
      sortBy: 'string',
      startTime: 'string',
      status: 'string',
      templateCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

