// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The region of the Data Management hub. Select a region based on the location of your assets. Valid values:
   * 
   * - cn-hangzhou: For assets in the Chinese mainland and China (Hong Kong).
   * 
   * - ap-southeast-1: For assets in regions outside China.
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

