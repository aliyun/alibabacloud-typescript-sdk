// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFilePermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the enterprise drive.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+cds-346063****
   */
  cdsId?: string;
  /**
   * @remarks
   * The ID of the user who uses the drive.
   * 
   * @example
   * user01
   */
  endUserId?: string;
  /**
   * @remarks
   * The file ID. You can call the [ListCdsFiles](https://help.aliyun.com/document_detail/2247622.html) operation to get the file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 6333e553a133ce21e6f747cf948bb9ef95d7****
   */
  fileId?: string;
  /**
   * @remarks
   * The ID of the team space.
   * 
   * @example
   * cg-c3acvkkbsfkte****
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the region. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.
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
      fileId: 'FileId',
      groupId: 'GroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      endUserId: 'string',
      fileId: 'string',
      groupId: 'string',
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

