// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudDriveUsersRequest extends $dara.Model {
  /**
   * @remarks
   * Enterprise cloud drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+cds-352282****
   */
  cdsId?: string;
  /**
   * @remarks
   * List of end user IDs.
   * 
   * This parameter is required.
   */
  endUserId?: string[];
  /**
   * @remarks
   * The ID of the region. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to obtain a list of regions supported by WUYING Workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Maximum storage size for a user\\"s personal cloud drive. This value must not exceed the remaining available capacity in the enterprise cloud drive. Unit: byte.
   * 
   * This parameter is required.
   * 
   * @example
   * 209715200
   */
  userMaxSize?: number;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      endUserId: 'EndUserId',
      regionId: 'RegionId',
      userMaxSize: 'UserMaxSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      endUserId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      userMaxSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.endUserId)) {
      $dara.Model.validateArray(this.endUserId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

