// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMem0InfoRequest extends $dara.Model {
  /**
   * @remarks
   * Instance Name
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-spsil01pww4hfz
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * Region
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
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

