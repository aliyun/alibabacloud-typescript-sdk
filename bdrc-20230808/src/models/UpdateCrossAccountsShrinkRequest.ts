// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCrossAccountsShrinkRequest extends $dara.Model {
  createTargetsShrink?: string;
  deleteTargetsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      createTargetsShrink: 'CreateTargets',
      deleteTargetsShrink: 'DeleteTargets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTargetsShrink: 'string',
      deleteTargetsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

