// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConnectorsResponseBodyConnectorsUpgradeTime extends $dara.Model {
  /**
   * @example
   * 23:00
   */
  end?: string;
  /**
   * @example
   * 20:00
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'string',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

