// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFacegroupRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The face ID of the thumbnail of the face-based group. You can obtain the face ID from the **image_media_metadata** parameter in the returned results of the GetFile, ListFile, or SearchFile operation.
   * 
   * @example
   * face1
   */
  groupCoverFaceId?: string;
  /**
   * @remarks
   * The ID of the face-based group. You can call the ListFacegroups operation to query the group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * group-abc
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the face-based group. The name can be up to 128 characters in length.
   */
  groupName?: string;
  /**
   * @remarks
   * The remarks. The remarks can be up to 128 characters in length.
   */
  remarks?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      groupCoverFaceId: 'group_cover_face_id',
      groupId: 'group_id',
      groupName: 'group_name',
      remarks: 'remarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      groupCoverFaceId: 'string',
      groupId: 'string',
      groupName: 'string',
      remarks: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

