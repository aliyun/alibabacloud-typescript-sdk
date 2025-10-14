// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdcVersionListRequest extends $dara.Model {
  /**
   * @example
   * pxc-bjrl7****k2vp7
   */
  DBInstanceName?: string;
  /**
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

