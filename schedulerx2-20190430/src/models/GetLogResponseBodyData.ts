// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The logs. The value is an array of strings.
   */
  logs?: string[];
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

