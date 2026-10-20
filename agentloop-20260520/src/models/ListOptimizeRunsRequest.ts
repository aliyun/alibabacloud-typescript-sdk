// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOptimizeRunsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * MTIzNDU2Nzg5MA==
   */
  nextToken?: string;
  /**
   * @remarks
   * The status used to filter results.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * The lower bound of the window start time in UNIX seconds.
   * 
   * @example
   * 1786432688000
   */
  windowStartTimeBegin?: number;
  /**
   * @remarks
   * The upper bound of the window start time in UNIX seconds.
   * 
   * @example
   * 1786432690000
   */
  windowStartTimeEnd?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      status: 'status',
      windowStartTimeBegin: 'windowStartTimeBegin',
      windowStartTimeEnd: 'windowStartTimeEnd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      status: 'string',
      windowStartTimeBegin: 'number',
      windowStartTimeEnd: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

