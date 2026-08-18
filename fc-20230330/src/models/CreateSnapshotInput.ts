// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSnapshotInput extends $dara.Model {
  description?: string;
  /**
   * @example
   * custom-test-session-id
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

