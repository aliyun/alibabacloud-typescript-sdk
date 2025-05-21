// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAICoachScriptRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  scriptRecordId?: string;
  static names(): { [key: string]: string } {
    return {
      scriptRecordId: 'scriptRecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scriptRecordId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

