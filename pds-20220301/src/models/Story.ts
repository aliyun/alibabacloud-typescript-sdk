// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { File } from "./File";


export class Story extends $dara.Model {
  coverFileId?: string;
  coverFileThumbnailUrl?: string;
  createdAt?: string;
  customLabels?: { [key: string]: any };
  faceGroupIds?: string[];
  storyEndTime?: string;
  storyFileList?: File[];
  storyId?: string;
  storyName?: string;
  storyStartTime?: string;
  storySubType?: string;
  storyType?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      coverFileId: 'cover_file_id',
      coverFileThumbnailUrl: 'cover_file_thumbnail_url',
      createdAt: 'created_at',
      customLabels: 'custom_labels',
      faceGroupIds: 'face_group_ids',
      storyEndTime: 'story_end_time',
      storyFileList: 'story_file_list',
      storyId: 'story_id',
      storyName: 'story_name',
      storyStartTime: 'story_start_time',
      storySubType: 'story_sub_type',
      storyType: 'story_type',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverFileId: 'string',
      coverFileThumbnailUrl: 'string',
      createdAt: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      faceGroupIds: { 'type': 'array', 'itemType': 'string' },
      storyEndTime: 'string',
      storyFileList: { 'type': 'array', 'itemType': File },
      storyId: 'string',
      storyName: 'string',
      storyStartTime: 'string',
      storySubType: 'string',
      storyType: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    if(this.customLabels) {
      $dara.Model.validateMap(this.customLabels);
    }
    if(Array.isArray(this.faceGroupIds)) {
      $dara.Model.validateArray(this.faceGroupIds);
    }
    if(Array.isArray(this.storyFileList)) {
      $dara.Model.validateArray(this.storyFileList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

