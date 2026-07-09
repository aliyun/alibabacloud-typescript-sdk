// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEvaluationRunsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page.
   * 
   * @example
   * eyJsYXN0SWQiOjEwMX0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The run type filter condition.
   * 
   * @example
   * backfill
   */
  runType?: string;
  /**
   * @remarks
   * The run status filter condition.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      runType: 'runType',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      runType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

