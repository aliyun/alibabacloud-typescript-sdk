// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportNacosConfigResponseBodyDataFailData extends $dara.Model {
  /**
   * @remarks
   * The ID of the group.
   * 
   * @example
   * test2.yaml
   */
  dataId?: string;
  /**
   * @example
   * test
   */
  group?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      group: 'Group',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      group: 'string',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

