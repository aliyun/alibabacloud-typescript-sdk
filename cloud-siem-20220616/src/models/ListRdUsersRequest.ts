// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRdUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The region of the data management center for Threat Analysis. Select the region of the data management center based on the region where your assets reside. Valid values:
   * - cn-hangzhou: Assets reside in the Chinese mainland and Hong Kong (China).
   * - ap-southeast-1: Assets reside in regions outside China.
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

