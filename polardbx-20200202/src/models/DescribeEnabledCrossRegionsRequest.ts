// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnabledCrossRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * pxc-bjxxxxxxxx
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The region ID of the instance.
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

