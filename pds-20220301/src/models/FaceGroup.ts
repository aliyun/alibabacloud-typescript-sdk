// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceGroupGroupCoverFaceBoundary extends $dara.Model {
  /**
   * @remarks
   * The height of the border. Unit: pixel.
   * 
   * @example
   * 300
   */
  height?: number;
  /**
   * @remarks
   * The distance from the left side of the photo to the border. Unit: pixel.
   * 
   * @example
   * 10
   */
  left?: number;
  /**
   * @remarks
   * The distance from the top of the photo to the border. Unit: pixel.
   * 
   * @example
   * 30
   */
  top?: number;
  /**
   * @remarks
   * The width of the border. Unit: pixel.
   * 
   * @example
   * 200
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      left: 'Left',
      top: 'Top',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      left: 'number',
      top: 'number',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceGroup extends $dara.Model {
  /**
   * @remarks
   * The time when the face-based group was generated.
   * 
   * @example
   * 2022-01-14T10:10:52.83948013+08:00
   */
  createdAt?: string;
  /**
   * @remarks
   * The border of the image used as the cover the face-based group.
   */
  groupCoverFaceBoundary?: FaceGroupGroupCoverFaceBoundary;
  /**
   * @remarks
   * The ID of the file used as the cover of the face-based group.
   * 
   * @example
   * 6549c959640fbd517c9b4d93b3b36aecc45xxxxx
   */
  groupCoverFileId?: string;
  /**
   * @remarks
   * The height of the image used as the cover of the face-based group.
   * 
   * @example
   * 1080
   */
  groupCoverHeight?: number;
  /**
   * @remarks
   * The URL of the image used as the cover of the face-based group.
   * 
   * @example
   * https://xxx
   */
  groupCoverUrl?: string;
  /**
   * @remarks
   * The width of the image used as the cover of the face-based group.
   * 
   * @example
   * 1920
   */
  groupCoverWidth?: number;
  /**
   * @remarks
   * The ID of the face-based group.
   * 
   * @example
   * Cluster-ae6e3472-999e-410b-b54e-cd5dba****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the face-based group.
   * 
   * @example
   * name
   */
  groupName?: string;
  /**
   * @remarks
   * The number of photos in the face-based group.
   * 
   * @example
   * 10
   */
  imageCount?: number;
  /**
   * @remarks
   * The remarks.
   */
  remarks?: string;
  /**
   * @remarks
   * The time when the face-based group was modified.
   * 
   * @example
   * 2022-01-14T10:10:52.83948013+08:00
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      groupCoverFaceBoundary: 'group_cover_face_boundary',
      groupCoverFileId: 'group_cover_file_id',
      groupCoverHeight: 'group_cover_height',
      groupCoverUrl: 'group_cover_url',
      groupCoverWidth: 'group_cover_width',
      groupId: 'group_id',
      groupName: 'group_name',
      imageCount: 'image_count',
      remarks: 'remarks',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      groupCoverFaceBoundary: FaceGroupGroupCoverFaceBoundary,
      groupCoverFileId: 'string',
      groupCoverHeight: 'number',
      groupCoverUrl: 'string',
      groupCoverWidth: 'number',
      groupId: 'string',
      groupName: 'string',
      imageCount: 'number',
      remarks: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    if(this.groupCoverFaceBoundary && typeof (this.groupCoverFaceBoundary as any).validate === 'function') {
      (this.groupCoverFaceBoundary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

