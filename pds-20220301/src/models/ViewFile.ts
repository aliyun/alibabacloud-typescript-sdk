// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ViewFileInvestigationInfo } from "./ViewFileInvestigationInfo";


export class ViewFile extends $dara.Model {
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
  fields?: { [key: string]: any };
  fileExtension?: string;
  fileId?: string;
  fileRevisionId?: string;
  hidden?: boolean;
  investigationInfo?: ViewFileInvestigationInfo;
  joinedAt?: number;
  labels?: string[];
  localCreatedAt?: string;
  localModifiedAt?: string;
  name?: string;
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
  viewId?: string;
  static names(): { [key: string]: string } {
    return {
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
      fields: 'fields',
      fileExtension: 'file_extension',
      fileId: 'file_id',
      fileRevisionId: 'file_revision_id',
      hidden: 'hidden',
      investigationInfo: 'investigation_info',
      joinedAt: 'joined_at',
      labels: 'labels',
      localCreatedAt: 'local_created_at',
      localModifiedAt: 'local_modified_at',
      name: 'name',
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
      viewId: 'view_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
      fields: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      fileExtension: 'string',
      fileId: 'string',
      fileRevisionId: 'string',
      hidden: 'boolean',
      investigationInfo: ViewFileInvestigationInfo,
      joinedAt: 'number',
      labels: { 'type': 'array', 'itemType': 'string' },
      localCreatedAt: 'string',
      localModifiedAt: 'string',
      name: 'string',
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
      viewId: 'string',
    };
  }

  validate() {
    if(this.fields) {
      $dara.Model.validateMap(this.fields);
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

