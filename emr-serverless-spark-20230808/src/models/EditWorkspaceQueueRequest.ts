// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EditWorkspaceQueueRequestResourceSpec } from "./EditWorkspaceQueueRequestResourceSpec";


export class EditWorkspaceQueueRequest extends $dara.Model {
  environments?: string[];
  resourceSpec?: EditWorkspaceQueueRequestResourceSpec;
  /**
   * @example
   * w-975bcfda9625****
   */
  workspaceId?: string;
  /**
   * @example
   * dev_queue
   */
  workspaceQueueName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      environments: 'environments',
      resourceSpec: 'resourceSpec',
      workspaceId: 'workspaceId',
      workspaceQueueName: 'workspaceQueueName',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environments: { 'type': 'array', 'itemType': 'string' },
      resourceSpec: EditWorkspaceQueueRequestResourceSpec,
      workspaceId: 'string',
      workspaceQueueName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.environments)) {
      $dara.Model.validateArray(this.environments);
    }
    if(this.resourceSpec && typeof (this.resourceSpec as any).validate === 'function') {
      (this.resourceSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

