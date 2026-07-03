// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserBuyStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The region of the Data Management center for threat analysis. Select a region for the management center based on where your assets are located. Valid values:
   * 
   * - cn-hangzhou: Your assets are in the Chinese mainland or China (Hong Kong).
   * 
   * - ap-southeast-1: Your assets are in a region outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 123XXXXXX
   */
  subUserId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      subUserId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

