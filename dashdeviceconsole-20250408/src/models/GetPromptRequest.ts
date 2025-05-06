// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPromptRequest extends $dara.Model {
  /**
   * @example
   * chat
   */
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

