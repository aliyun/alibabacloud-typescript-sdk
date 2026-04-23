// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExecutorLogsRequest extends $dara.Model {
  /**
   * @example
   * log4j
   */
  logType?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 1
   */
  nextToken?: string;
  /**
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

