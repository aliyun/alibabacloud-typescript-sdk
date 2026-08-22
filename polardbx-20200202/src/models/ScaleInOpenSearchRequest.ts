// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScaleInOpenSearchRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-spsil01pww4hfz
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
  /**
   * @remarks
   * The total number of data nodes after the scale-in. The value must be a positive integer and less than the current number of data nodes.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  searchNodeCount?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
      searchNodeCount: 'SearchNodeCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      regionId: 'string',
      searchNodeCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

