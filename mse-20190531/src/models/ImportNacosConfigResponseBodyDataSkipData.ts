// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportNacosConfigResponseBodyDataSkipData extends $dara.Model {
  /**
   * @remarks
   * The ID of the group.
   * 
   * @example
   * test.yaml
   */
  dataId?: string;
  /**
   * @remarks
   * The information about configurations that are failed to be imported.
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

