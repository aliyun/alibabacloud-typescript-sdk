// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddFilePermissionRequestMemberList } from "./AddFilePermissionRequestMemberList";


export class AddFilePermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud disk whose folder you want to share.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+cds-352282****
   */
  cdsId?: string;
  /**
   * @remarks
   * The ID of the end user who uses the cloud disk.
   * 
   * @example
   * user01
   */
  endUserId?: string;
  /**
   * @remarks
   * The ID of the file.
   * 
   * This parameter is required.
   * 
   * @example
   * 6333e553a133ce21e6f747cf948bb9ef95d7****
   */
  fileId?: string;
  /**
   * @remarks
   * The ID of the team that uses cloud disks in Cloud Drive Service.
   * 
   * @example
   * cg-i1ruuudp92qpj****
   */
  groupId?: string;
  /**
   * @remarks
   * The members who are granted the folder permissions.
   * 
   * This parameter is required.
   */
  memberList?: AddFilePermissionRequestMemberList[];
  /**
   * @remarks
   * The region ID of the folder. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
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
      memberList: 'MemberList',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      endUserId: 'string',
      fileId: 'string',
      groupId: 'string',
      memberList: { 'type': 'array', 'itemType': AddFilePermissionRequestMemberList },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.memberList)) {
      $dara.Model.validateArray(this.memberList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

