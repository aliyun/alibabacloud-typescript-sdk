// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Revision extends $dara.Model {
  contentHash?: string;
  contentHashName?: string;
  crc64Hash?: string;
  createdAt?: string;
  creatorId?: string;
  creatorName?: string;
  domainId?: string;
  downloadUrl?: string;
  driveId?: string;
  fileExtension?: string;
  fileId?: string;
  isLatestVersion?: boolean;
  keepForever?: boolean;
  revisionDescription?: string;
  revisionId?: string;
  revisionName?: string;
  revisionVersion?: number;
  size?: number;
  thumbnail?: string;
  updatedAt?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      contentHash: 'content_hash',
      contentHashName: 'content_hash_name',
      crc64Hash: 'crc64_hash',
      createdAt: 'created_at',
      creatorId: 'creator_id',
      creatorName: 'creator_name',
      domainId: 'domain_id',
      downloadUrl: 'download_url',
      driveId: 'drive_id',
      fileExtension: 'file_extension',
      fileId: 'file_id',
      isLatestVersion: 'is_latest_version',
      keepForever: 'keep_forever',
      revisionDescription: 'revision_description',
      revisionId: 'revision_id',
      revisionName: 'revision_name',
      revisionVersion: 'revision_version',
      size: 'size',
      thumbnail: 'thumbnail',
      updatedAt: 'updated_at',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentHash: 'string',
      contentHashName: 'string',
      crc64Hash: 'string',
      createdAt: 'string',
      creatorId: 'string',
      creatorName: 'string',
      domainId: 'string',
      downloadUrl: 'string',
      driveId: 'string',
      fileExtension: 'string',
      fileId: 'string',
      isLatestVersion: 'boolean',
      keepForever: 'boolean',
      revisionDescription: 'string',
      revisionId: 'string',
      revisionName: 'string',
      revisionVersion: 'number',
      size: 'number',
      thumbnail: 'string',
      updatedAt: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

