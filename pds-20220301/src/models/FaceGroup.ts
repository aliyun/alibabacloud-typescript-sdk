// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FaceGroupGroupCoverFaceBoundary } from "./FaceGroupGroupCoverFaceBoundary";


export class FaceGroup extends $dara.Model {
  /**
   * @example
   * 2022-01-14T10:10:52.83948013+08:00
   */
  createdAt?: string;
  groupCoverFaceBoundary?: FaceGroupGroupCoverFaceBoundary;
  /**
   * @example
   * 6549c959640fbd517c9b4d93b3b36aecc45xxxxx
   */
  groupCoverFileId?: string;
  /**
   * @example
   * 1080
   */
  groupCoverHeight?: number;
  /**
   * @example
   * https://xxx
   */
  groupCoverUrl?: string;
  /**
   * @example
   * 1920
   */
  groupCoverWidth?: number;
  /**
   * @example
   * Cluster-ae6e3472-999e-410b-b54e-cd5dba****
   */
  groupId?: string;
  /**
   * @example
   * name
   */
  groupName?: string;
  /**
   * @example
   * 10
   */
  imageCount?: number;
  remarks?: string;
  /**
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

