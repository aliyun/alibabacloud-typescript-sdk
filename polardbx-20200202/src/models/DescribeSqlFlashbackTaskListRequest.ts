// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSqlFlashbackTaskListRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the PolarDB-X instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-**********
   */
  polardbxInstanceId?: string;
  /**
   * @remarks
   * The region in which the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      polardbxInstanceId: 'PolardbxInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polardbxInstanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

