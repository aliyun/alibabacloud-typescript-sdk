// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableMaintainWindowRequest extends $dara.Model {
  /**
   * @remarks
   * The workspace name. This parameter is required by the backend and is used to isolate silence policy resources across different business spaces.
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

