// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubscriptionForModify } from "./SubscriptionForModify";


export class UpdateSubscriptionRequest extends $dara.Model {
  body?: SubscriptionForModify;
  /**
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
      body: SubscriptionForModify,
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

