// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMemoryRequest extends $dara.Model {
  /**
   * @remarks
   * The metadata of the Memory.
   * 
   * @example
   * {"sessionId":"test_session_001"}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The new text for the Memory.
   * 
   * @example
   * Likes to play tennis on weekends
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      metadata: 'metadata',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      text: 'string',
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

