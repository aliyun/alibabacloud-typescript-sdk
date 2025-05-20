// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FileDirSizeInfo } from "./FileDirSizeInfo";
import { ImageMediaMetadata } from "./ImageMediaMetadata";
import { VideoMediaMetadata } from "./VideoMediaMetadata";


export class File extends $dara.Model {
  actionList?: string[];
  autoDeleteLeftSec?: number;
  category?: string;
  contentHash?: string;
  contentHashName?: string;
  contentType?: string;
  crc64Hash?: string;
  createdAt?: string;
  description?: string;
  dirSizeInfo?: FileDirSizeInfo;
  domainId?: string;
  downloadUrl?: string;
  driveId?: string;
  fileExtension?: string;
  fileId?: string;
  hidden?: boolean;
  idPath?: string;
  imageMediaMetadata?: ImageMediaMetadata;
  labels?: string[];
  localCreatedAt?: string;
  localModifiedAt?: string;
  name?: string;
  namePath?: string;
  parentFileId?: string;
  revisionId?: string;
  size?: number;
  starred?: boolean;
  status?: string;
  thumbnail?: string;
  thumbnailUrls?: { [key: string]: string };
  trashedAt?: string;
  type?: string;
  updatedAt?: string;
  uploadId?: string;
  userTags?: { [key: string]: string };
  videoMediaMetadata?: VideoMediaMetadata;
  static names(): { [key: string]: string } {
    return {
      actionList: 'action_list',
      autoDeleteLeftSec: 'auto_delete_left_sec',
      category: 'category',
      contentHash: 'content_hash',
      contentHashName: 'content_hash_name',
      contentType: 'content_type',
      crc64Hash: 'crc64_hash',
      createdAt: 'created_at',
      description: 'description',
      dirSizeInfo: 'dir_size_info',
      domainId: 'domain_id',
      downloadUrl: 'download_url',
      driveId: 'drive_id',
      fileExtension: 'file_extension',
      fileId: 'file_id',
      hidden: 'hidden',
      idPath: 'id_path',
      imageMediaMetadata: 'image_media_metadata',
      labels: 'labels',
      localCreatedAt: 'local_created_at',
      localModifiedAt: 'local_modified_at',
      name: 'name',
      namePath: 'name_path',
      parentFileId: 'parent_file_id',
      revisionId: 'revision_id',
      size: 'size',
      starred: 'starred',
      status: 'status',
      thumbnail: 'thumbnail',
      thumbnailUrls: 'thumbnail_urls',
      trashedAt: 'trashed_at',
      type: 'type',
      updatedAt: 'updated_at',
      uploadId: 'upload_id',
      userTags: 'user_tags',
      videoMediaMetadata: 'video_media_metadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionList: { 'type': 'array', 'itemType': 'string' },
      autoDeleteLeftSec: 'number',
      category: 'string',
      contentHash: 'string',
      contentHashName: 'string',
      contentType: 'string',
      crc64Hash: 'string',
      createdAt: 'string',
      description: 'string',
      dirSizeInfo: FileDirSizeInfo,
      domainId: 'string',
      downloadUrl: 'string',
      driveId: 'string',
      fileExtension: 'string',
      fileId: 'string',
      hidden: 'boolean',
      idPath: 'string',
      imageMediaMetadata: ImageMediaMetadata,
      labels: { 'type': 'array', 'itemType': 'string' },
      localCreatedAt: 'string',
      localModifiedAt: 'string',
      name: 'string',
      namePath: 'string',
      parentFileId: 'string',
      revisionId: 'string',
      size: 'number',
      starred: 'boolean',
      status: 'string',
      thumbnail: 'string',
      thumbnailUrls: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      trashedAt: 'string',
      type: 'string',
      updatedAt: 'string',
      uploadId: 'string',
      userTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      videoMediaMetadata: VideoMediaMetadata,
    };
  }

  validate() {
    if(Array.isArray(this.actionList)) {
      $dara.Model.validateArray(this.actionList);
    }
    if(this.dirSizeInfo && typeof (this.dirSizeInfo as any).validate === 'function') {
      (this.dirSizeInfo as any).validate();
    }
    if(this.imageMediaMetadata && typeof (this.imageMediaMetadata as any).validate === 'function') {
      (this.imageMediaMetadata as any).validate();
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.thumbnailUrls) {
      $dara.Model.validateMap(this.thumbnailUrls);
    }
    if(this.userTags) {
      $dara.Model.validateMap(this.userTags);
    }
    if(this.videoMediaMetadata && typeof (this.videoMediaMetadata as any).validate === 'function') {
      (this.videoMediaMetadata as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

