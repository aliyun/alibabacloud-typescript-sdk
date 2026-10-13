// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFaultReportsShrinkRequest extends $dara.Model {
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
  nodesShrink?: string;
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
      nodesShrink: 'Nodes',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      nodesShrink: 'string',
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

