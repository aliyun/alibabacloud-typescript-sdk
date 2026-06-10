// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCloudDriveUsersRequest extends $dara.Model {
  /**
   * @remarks
   * WUYING Workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+cds-64326*****
   */
  cdsId?: string;
  /**
   * @remarks
   * List of end user IDs.
   */
  endUserId?: string[];
  /**
   * @remarks
   * Region ID. You can invoke [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to obtain the list of regions supported by WUYING Workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      endUserId: 'EndUserId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      endUserId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
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

