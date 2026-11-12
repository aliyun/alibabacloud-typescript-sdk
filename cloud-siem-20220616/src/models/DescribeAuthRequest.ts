// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuthRequest extends $dara.Model {
  /**
   * @remarks
   * The region of the data management center for Threat Analysis. Select the management center region based on the region where your assets are located. Valid values:
   * - cn-hangzhou: Select this value if your assets are located in the Chinese mainland and Hong Kong (China).
   * - ap-southeast-1: Select this value if your assets are located outside China.
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

