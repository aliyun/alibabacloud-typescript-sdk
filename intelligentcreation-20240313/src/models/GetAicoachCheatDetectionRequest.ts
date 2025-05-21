// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAICoachCheatDetectionRequest extends $dara.Model {
  /**
   * @example
   * 79e954faffe2415ebd18188ba787d78e
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

