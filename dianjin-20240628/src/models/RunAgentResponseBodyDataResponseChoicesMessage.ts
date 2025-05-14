// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunAgentResponseBodyDataResponseChoicesMessage extends $dara.Model {
  content?: string;
  /**
   * @example
   * assistant
   */
  role?: string;
  /**
   * @example
   * assistant
   */
  roleDisplayName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
      roleDisplayName: 'roleDisplayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
      roleDisplayName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

