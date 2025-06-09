// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSnapshotSettingResponseBody extends $dara.Model {
  /**
   * @example
   * A7B03723-AA73-5A5F-B71C-270792614DD8
   */
  requestId?: string;
  /**
   * @example
   * {
   *     "quartzRegex": "0 0 01 ? * * *",
   *     "enable": true
   *   }
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

