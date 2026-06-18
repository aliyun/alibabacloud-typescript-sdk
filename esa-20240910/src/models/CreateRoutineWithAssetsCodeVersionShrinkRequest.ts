// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoutineWithAssetsCodeVersionShrinkRequest extends $dara.Model {
  buildId?: number;
  codeDescription?: string;
  confOptionsShrink?: string;
  deployEnv?: string;
  extraInfo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      buildId: 'BuildId',
      codeDescription: 'CodeDescription',
      confOptionsShrink: 'ConfOptions',
      deployEnv: 'DeployEnv',
      extraInfo: 'ExtraInfo',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildId: 'number',
      codeDescription: 'string',
      confOptionsShrink: 'string',
      deployEnv: 'string',
      extraInfo: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

