// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BuildAICoachScriptRecordRequest extends $dara.Model {
  /**
   * @example
   * https://xxx/data.json
   */
  scriptJsonUrl?: string;
  static names(): { [key: string]: string } {
    return {
      scriptJsonUrl: 'scriptJsonUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scriptJsonUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

