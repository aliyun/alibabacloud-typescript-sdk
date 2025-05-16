// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodeTemplateDataDisks extends $dara.Model {
  /**
   * @example
   * cloud_auto
   */
  category?: string;
  /**
   * @example
   * false
   */
  deleteWithInstance?: boolean;
  /**
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @example
   * PL0
   */
  level?: string;
  /**
   * @example
   * /data1
   */
  mountDir?: string;
  /**
   * @example
   * 40
   */
  size?: number;
  /**
   * @example
   * s-bp1ei2b44ripxuo46hym
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      deleteWithInstance: 'DeleteWithInstance',
      device: 'Device',
      level: 'Level',
      mountDir: 'MountDir',
      size: 'Size',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      deleteWithInstance: 'boolean',
      device: 'string',
      level: 'string',
      mountDir: 'string',
      size: 'number',
      snapshotId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

