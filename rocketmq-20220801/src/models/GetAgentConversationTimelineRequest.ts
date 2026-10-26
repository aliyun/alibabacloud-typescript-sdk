// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentConversationTimelineRequest extends $dara.Model {
  /**
   * @example
   * 42
   */
  after?: number;
  /**
   * @example
   * false
   */
  includeImageData?: boolean;
  static names(): { [key: string]: string } {
    return {
      after: 'after',
      includeImageData: 'includeImageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      after: 'number',
      includeImageData: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

