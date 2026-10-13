// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFaultReportsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * DA4F08D4
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of nodes.
   */
  nodes?: string[];
  /**
   * @remarks
   * The status of the fault report.
   * 
   * @example
   * Processing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodes: 'Nodes',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      nodes: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

