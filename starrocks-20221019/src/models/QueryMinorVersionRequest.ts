// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMinorVersionRequest extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 3.3
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

