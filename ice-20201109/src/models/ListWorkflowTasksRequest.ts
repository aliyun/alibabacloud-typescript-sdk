// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowTasksRequest extends $dara.Model {
  /**
   * @example
   * 2025-07-15T00:00:00Z
   */
  endOfCreateTime?: string;
  keyText?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * **************VRpbWUQARgBIpcBCgkA1bUtaAAAAAAKiQEDhAAAADFTMzg2NTY2NjU2MzM3NjU2NjYyMzkzMTYyMzI2MjYzNjY2**********
   */
  nextToken?: string;
  /**
   * @example
   * 2025-07-12T00:00:00Z
   */
  startOfCreateTime?: string;
  /**
   * @example
   * ******b4fb044839815d4f2cd8******
   */
  workflowId?: string;
  /**
   * @example
   * example-workflow-****
   */
  workflowName?: string;
  static names(): { [key: string]: string } {
    return {
      endOfCreateTime: 'EndOfCreateTime',
      keyText: 'KeyText',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      startOfCreateTime: 'StartOfCreateTime',
      workflowId: 'WorkflowId',
      workflowName: 'WorkflowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endOfCreateTime: 'string',
      keyText: 'string',
      maxResults: 'number',
      nextToken: 'string',
      startOfCreateTime: 'string',
      workflowId: 'string',
      workflowName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

