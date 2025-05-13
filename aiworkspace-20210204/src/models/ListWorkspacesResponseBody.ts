// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWorkspacesResponseBodyWorkspaces } from "./ListWorkspacesResponseBodyWorkspaces";


export class ListWorkspacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8D7B2E70-F770-505B-A672-09F1D8F2EC1E
   */
  requestId?: string;
  /**
   * @remarks
   * The type and quantity of resources that can be activated in a workspace. This list is returned when the Option is set to GetResourceLimits. Valid values:
   * 
   * *   MaxCompute_share: pay-as-you-go MaxCompute
   * *   MaxCompute_isolate: subscription MaxCompute
   * *   DLC_share: pay-as-you-go DLC
   * *   PAI_Isolate: subscription PAI
   * *   PAI_share: pay-as-you-go PAI
   * *   DataWorks_isolate: subscription DataWorks
   * *   DataWorks_share: pay-as-you-go DataWorks
   * 
   * @example
   * {
   *    "MaxCompute_share": 1,
   *    "MaxCompute_isolate": 1,
   *    "DLC_share": 1
   * }
   */
  resourceLimits?: { [key: string]: any };
  /**
   * @remarks
   * The number of workspaces that meet the query conditions.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of workspace details. This list is returned when Option is set to GetWorkspaces.
   */
  workspaces?: ListWorkspacesResponseBodyWorkspaces[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceLimits: 'ResourceLimits',
      totalCount: 'TotalCount',
      workspaces: 'Workspaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceLimits: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      totalCount: 'number',
      workspaces: { 'type': 'array', 'itemType': ListWorkspacesResponseBodyWorkspaces },
    };
  }

  validate() {
    if(this.resourceLimits) {
      $dara.Model.validateMap(this.resourceLimits);
    }
    if(Array.isArray(this.workspaces)) {
      $dara.Model.validateArray(this.workspaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

