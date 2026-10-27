// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeColdDataBasicInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the PolarDB-X instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-htri0ori2r****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
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

