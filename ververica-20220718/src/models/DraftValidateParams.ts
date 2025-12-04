// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DraftValidateParams extends $dara.Model {
  deploymentDraftId?: string;
  deploymentTargetName?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentDraftId: 'deploymentDraftId',
      deploymentTargetName: 'deploymentTargetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentDraftId: 'string',
      deploymentTargetName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

