// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneNacosConfigResponseBodyDataFailData extends $dara.Model {
  /**
   * @remarks
   * Data ID.
   * 
   * @example
   * test2.yaml
   */
  dataId?: string;
  /**
   * @remarks
   * Group ID.
   * 
   * @example
   * test
   */
  group?: string;
  /**
   * @remarks
   * The reason for the current operation.
   * 
   * @example
   * param not support
   */
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

