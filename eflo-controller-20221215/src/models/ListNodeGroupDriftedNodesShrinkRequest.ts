// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodeGroupDriftedNodesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries per page for a paged query. Valid values: 1 to 500. Default value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the NextToken value returned in the previous call. You do not need to set this parameter for the first request.
   * 
   * @example
   * 563d42ae0b17572449ec8c97f7f66069
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the node group.
   * 
   * This parameter is required.
   * 
   * @example
   * ng-3525
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * Limits the check scope. If not specified, all nodes in the node group are checked. <warning>If the model is a super node, pass the TrayNode ID.</warning>
   */
  nodeIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeGroupId: 'NodeGroupId',
      nodeIdsShrink: 'NodeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      nodeGroupId: 'string',
      nodeIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

