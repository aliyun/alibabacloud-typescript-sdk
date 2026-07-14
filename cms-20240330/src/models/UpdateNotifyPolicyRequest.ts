// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NotifyPolicyConfig } from "./NotifyPolicyConfig";


export class UpdateNotifyPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The request body. This is the complete notification policy configuration object NotifyPolicyConfig.
   */
  body?: NotifyPolicyConfig;
  /**
   * @remarks
   * The workspace ID. This parameter is used to isolate notification policy resources across different business spaces.
   * 
   * This parameter is required.
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
      body: NotifyPolicyConfig,
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

