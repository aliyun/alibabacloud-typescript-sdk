// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuthRequest extends $dara.Model {
  /**
   * @remarks
   * The region of the threat analysis center. Select a region based on where your assets are located. Valid values:
   * 
   * - cn-hangzhou: Select this value if your assets are deployed in the Chinese mainland or the China (Hong Kong) region.
   * 
   * - ap-southeast-1: Select this value if your assets are deployed in regions outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

