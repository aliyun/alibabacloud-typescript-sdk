// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSnapshotSettingRequest extends $dara.Model {
  /**
   * @remarks
   * The data backup configuration, including the automatic backup start time and the scheduled backup switch.
   * 
   * @example
   * {
   *     "quartzRegex":"0 0 01 ? * * *",
   *     "enable":true,
   *     "indices": [
   *         "orders-*"
   *     ]
   * }
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

