// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsMixedResponseBodyRegionsRegion extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The version of the cluster.
   * 
   * Valid values:
   * 
   * *   2.0
   * *   3.0
   * 
   * @example
   * 3.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

