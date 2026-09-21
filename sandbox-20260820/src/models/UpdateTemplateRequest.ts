// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublicUpdateTemplateInput } from "./PublicUpdateTemplateInput";


export class UpdateTemplateRequest extends $dara.Model {
  body?: PublicUpdateTemplateInput;
  /**
   * @example
   * team-a1b2c3d4e5f6
   */
  teamID?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      teamID: 'teamID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: PublicUpdateTemplateInput,
      teamID: 'string',
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

