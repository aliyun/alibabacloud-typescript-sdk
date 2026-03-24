// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NotifyStrategyForModify } from "./NotifyStrategyForModify";


export class UpdateNotifyStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: NotifyStrategyForModify;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * workspace-test
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
      body: NotifyStrategyForModify,
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

