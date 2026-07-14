// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableNotifyPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The workspace ID. Used to isolate notification policy resources across different business spaces.
   * 
   * This parameter is required.
   * 
   * @example
   * default-cms-xxxx-cn-hangzhou
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

