// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MaintainWindowForModify } from "./MaintainWindowForModify";


export class CreateMaintainWindowRequest extends $dara.Model {
  /**
   * @remarks
   * The request body. This parameter is required by the backend. Pass in a complete MaintainWindowForModify configuration object.
   */
  body?: MaintainWindowForModify;
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
      body: 'body',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: MaintainWindowForModify,
      workspace: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

