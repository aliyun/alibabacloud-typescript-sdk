// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExperimentPlansRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return. Default value: 20.
   * 
   * @example
   * 20
   */
  limit?: number;
  /**
   * @remarks
   * Optional. For pagination, use `offset` and `limit` instead.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Optional. For pagination, use `offset` and `limit` instead.
   * 
   * @example
   * eyJsYXN0SWQiOjEyM30=
   */
  nextToken?: string;
  /**
   * @remarks
   * The offset. Default value: 0.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The plan name used for fuzzy match.
   * 
   * @example
   * arms_agent
   */
  planName?: string;
  /**
   * @remarks
   * The exact status used for filtering.
   * 
   * @example
   * pending
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      offset: 'offset',
      planName: 'planName',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      maxResults: 'number',
      nextToken: 'string',
      offset: 'number',
      planName: 'string',
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

