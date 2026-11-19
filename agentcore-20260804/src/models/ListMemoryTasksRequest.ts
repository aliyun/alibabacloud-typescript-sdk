// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMemoryTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results per page.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token returned for the same resource and filter conditions.
   * 
   * @example
   * eyJvZmZzZXQiOjIwMH0=
   */
  nextToken?: string;
  /**
   * @remarks
   * ruleId
   * 
   * This parameter is required.
   * 
   * @example
   * rule-2f5f9c5a8d0e4c3b
   */
  ruleId?: string;
  /**
   * @remarks
   * status
   * 
   * @example
   * SUCCEEDED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      ruleId: 'ruleId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      ruleId: 'string',
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

