// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExecutorLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of log. Only logs of this type are returned.
   * 
   * @example
   * log4j
   */
  logType?: string;
  /**
   * @remarks
   * The maximum number of results to return per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. This is the `nextToken` from a previously truncated response.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      logType: 'logType',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

