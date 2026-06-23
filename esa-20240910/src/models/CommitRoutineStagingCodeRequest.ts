// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CommitRoutineStagingCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the code version.
   * 
   * @example
   * description of this code ver
   */
  codeDescription?: string;
  /**
   * @remarks
   * The deployment environment whose environment variable configuration is used. If you do not specify this parameter, environment variables are not used.
   * 
   * @example
   * production
   */
  deployEnv?: string;
  /**
   * @remarks
   * The name of the Edge Routine.
   * 
   * This parameter is required.
   * 
   * @example
   * test-routine1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      codeDescription: 'CodeDescription',
      deployEnv: 'DeployEnv',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeDescription: 'string',
      deployEnv: 'string',
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

