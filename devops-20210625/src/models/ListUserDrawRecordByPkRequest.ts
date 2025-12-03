// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserDrawRecordByPkRequest extends $dara.Model {
  /**
   * @example
   * 1789095186553536
   */
  aliyunPk?: string;
  /**
   * @example
   * task_group_0000
   */
  drawGroup?: string;
  /**
   * @example
   * developer-award-draw-pool_123
   */
  drawPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunPk: 'aliyunPk',
      drawGroup: 'drawGroup',
      drawPoolName: 'drawPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunPk: 'string',
      drawGroup: 'string',
      drawPoolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

