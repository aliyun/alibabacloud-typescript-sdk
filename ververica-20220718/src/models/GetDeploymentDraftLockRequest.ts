// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeploymentDraftLockRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the job draft. You can get this ID by calling the ListDeploymentDrafts operation.
   * 
   * This parameter is required.
   * 
   * @example
   * c84d73be-40ad-4627-8bdd-fa1eba51b234
   */
  deploymentDraftId?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentDraftId: 'deploymentDraftId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentDraftId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

