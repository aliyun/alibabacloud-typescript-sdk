// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCloudDriveUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The enterprise cloud disk ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+cds-596198****
   */
  cdsId?: string;
  /**
   * @remarks
   * A list of end user IDs.
   * 
   * This parameter is required.
   */
  endUserId?: string[];
  /**
   * @remarks
   * The region ID. You can invoke [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to obtain the list of regions supported by WUYING Workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of Cloud Drive Service users.
   * 
   * Valid values:
   * 
   * *   disabled
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     unavailable
   * 
   *     <!-- -->
   * 
   * *   enabled
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     available
   * 
   *     <!-- -->
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The maximum storage space of a user. Unit: bytes.
   * 
   * @example
   * 1024
   */
  userMaxSize?: number;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      endUserId: 'EndUserId',
      regionId: 'RegionId',
      status: 'Status',
      userMaxSize: 'UserMaxSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      endUserId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      status: 'string',
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

