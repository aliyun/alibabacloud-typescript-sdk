// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImageMediaMetadata } from "./ImageMediaMetadata";
import { InvestigationInfo } from "./InvestigationInfo";


export class AlbumFile extends $dara.Model {
  albumId?: string;
  category?: string;
  contentHash?: string;
  contentHashName?: string;
  contentType?: string;
  crc64Hash?: string;
  createdAt?: string;
  description?: string;
  domainId?: string;
  downloadUrl?: string;
  driveId?: string;
  exFieldsInfo?: { [key: string]: any };
  fileExtension?: string;
  fileId?: string;
  hidden?: boolean;
  imageMediaMetadata?: ImageMediaMetadata;
  investigationInfo?: InvestigationInfo;
  joinedAt?: number;
  labels?: string[];
  localCreatedAt?: string;
  localModifiedAt?: string;
  mimeType?: string;
  name?: string;
  objectUri?: string;
  parentFileId?: string;
  revisionId?: string;
  size?: number;
  starred?: boolean;
  status?: string;
  thumbnail?: string;
  thumbnailUrls?: { [key: string]: string };
  transhedAt?: string;
  type?: string;
  updatedAt?: string;
  uploadId?: string;
  userMeta?: string;
  static names(): { [key: string]: string } {
    return {
      albumId: 'album_id',
      category: 'category',
      contentHash: 'content_hash',
      contentHashName: 'content_hash_name',
      contentType: 'content_type',
      crc64Hash: 'crc64_hash',
      createdAt: 'created_at',
      description: 'description',
      domainId: 'domain_id',
      downloadUrl: 'download_url',
      driveId: 'drive_id',
      exFieldsInfo: 'ex_fields_info',
      fileExtension: 'file_extension',
      fileId: 'file_id',
      hidden: 'hidden',
      imageMediaMetadata: 'image_media_metadata',
      investigationInfo: 'investigation_info',
      joinedAt: 'joined_at',
      labels: 'labels',
      localCreatedAt: 'local_created_at',
      localModifiedAt: 'local_modified_at',
      mimeType: 'mime_type',
      name: 'name',
      objectUri: 'object_uri',
      parentFileId: 'parent_file_id',
      revisionId: 'revision_id',
      size: 'size',
      starred: 'starred',
      status: 'status',
      thumbnail: 'thumbnail',
      thumbnailUrls: 'thumbnail_urls',
      transhedAt: 'transhed_at',
      type: 'type',
      updatedAt: 'updated_at',
      uploadId: 'upload_id',
      userMeta: 'user_meta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumId: 'string',
      category: 'string',
      contentHash: 'string',
      contentHashName: 'string',
      contentType: 'string',
      crc64Hash: 'string',
      createdAt: 'string',
      description: 'string',
      domainId: 'string',
      downloadUrl: 'string',
      driveId: 'string',
      exFieldsInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      fileExtension: 'string',
      fileId: 'string',
      hidden: 'boolean',
      imageMediaMetadata: ImageMediaMetadata,
      investigationInfo: InvestigationInfo,
      joinedAt: 'number',
      labels: { 'type': 'array', 'itemType': 'string' },
      localCreatedAt: 'string',
      localModifiedAt: 'string',
      mimeType: 'string',
      name: 'string',
      objectUri: 'string',
      parentFileId: 'string',
      revisionId: 'string',
      size: 'number',
      starred: 'boolean',
      status: 'string',
      thumbnail: 'string',
      thumbnailUrls: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      transhedAt: 'string',
      type: 'string',
      updatedAt: 'string',
      uploadId: 'string',
      userMeta: 'string',
    };
  }

  validate() {
    if(this.exFieldsInfo) {
      $dara.Model.validateMap(this.exFieldsInfo);
    }
    if(this.imageMediaMetadata && typeof (this.imageMediaMetadata as any).validate === 'function') {
      (this.imageMediaMetadata as any).validate();
    }
    if(this.investigationInfo && typeof (this.investigationInfo as any).validate === 'function') {
      (this.investigationInfo as any).validate();
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.thumbnailUrls) {
      $dara.Model.validateMap(this.thumbnailUrls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

