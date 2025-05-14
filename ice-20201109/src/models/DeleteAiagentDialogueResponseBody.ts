// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAIAgentDialogueResponseBody extends $dara.Model {
  /**
   * @example
   * 7B117AF5-2A1******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

