// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateWorkspaceResourceResponseBodyResources } from "./CreateWorkspaceResourceResponseBodyResources";


export class CreateWorkspaceResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1e195c5116124202371861018d5bde
   */
  requestId?: string;
  /**
   * @remarks
   * The resources.
   */
  resources?: CreateWorkspaceResourceResponseBodyResources[];
  /**
   * @remarks
   * The total number of resources.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resources: 'Resources',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': CreateWorkspaceResourceResponseBodyResources },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

