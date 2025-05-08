// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneNacosConfigResponseBodyDataSkipData extends $dara.Model {
  /**
   * @remarks
   * Data ID.
   * 
   * @example
   * test.yaml
   */
  dataId?: string;
  /**
   * @remarks
   * Group ID.
   * 
   * @example
   * public
   */
  group?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      group: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

