// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOptimizeTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return. Default value: 20. Maximum value: 100.
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
   * The task status.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * EfficiencyAnalysis
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

