// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OfflineAICoachScriptRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      scriptId: 'scriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scriptId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

