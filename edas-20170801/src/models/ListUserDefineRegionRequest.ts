// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserDefineRegionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether remote debugging is allowed.
   * 
   * @example
   * false
   */
  debugEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      debugEnable: 'DebugEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debugEnable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

