// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Revision extends $dara.Model {
  /**
   * @remarks
   * The hash value of the content.
   * 
   * @example
   * EA4942AA8761213890A5C386F88E6464D2C31CA3
   */
  contentHash?: string;
  /**
   * @remarks
   * The name of the hash algorithm.
   * 
   * @example
   * sha1
   */
  contentHashName?: string;
  /**
   * @remarks
   * The CRC64 value of the version.
   * 
   * @example
   * 3574582125365864471
   */
  crc64Hash?: string;
  /**
   * @remarks
   * The time when the version was created.
   * 
   * @example
   * 2019-08-20T06:51:27.292Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The ID of the user who created the version.
   */
  creatorId?: string;
  /**
   * @remarks
   * The name of the user who created the version.
   */
  creatorName?: string;
  /**
   * @remarks
   * The domain ID.
   * 
   * @example
   * bj1
   */
  domainId?: string;
  /**
   * @remarks
   * The download URL. The ListRevision operation does not return this value. The GetRevision, UpdateRevision, and RestoreRevision operations return this value.
   * 
   * @example
   * https://data.aliyunpds.com/hz22%2F5d5b986facbec311ef844c25954f96821497b383%2F5d5b986f955410dd991646bb87c6b4e899eff525?Expires=xxx&OSSAccessKeyId=xxx&Signature=xxx
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The drive ID.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The file extension.
   * 
   * @example
   * mov
   */
  fileExtension?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 9520943DC264
   */
  fileId?: string;
  /**
   * @remarks
   * Indicates whether it is the latest version.
   * 
   * @example
   * false
   */
  isLatestVersion?: boolean;
  /**
   * @remarks
   * Indicates whether the version is permanently retained.
   * 
   * @example
   * false
   */
  keepForever?: boolean;
  /**
   * @remarks
   * The description of the version.
   * 
   * @example
   * aaa
   */
  revisionDescription?: string;
  /**
   * @remarks
   * The version ID.
   * 
   * @example
   * 40CB7794C929
   */
  revisionId?: string;
  /**
   * @remarks
   * The version name.
   * 
   * @example
   * 1.mov
   */
  revisionName?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1
   */
  revisionVersion?: number;
  /**
   * @remarks
   * The version size.
   * 
   * @example
   * 1024
   */
  size?: number;
  /**
   * @remarks
   * The URL of the thumbnail.
   * 
   * @example
   * https://data.aliyunpds.com/hz22%2F5d5b986facbec311ef844c25954f96821497b383%2F5d5b986f955410dd991646bb87c6b4e899eff525?Expires=xxx&OSSAccessKeyId=xxx&Signature=xxx
   */
  thumbnail?: string;
  /**
   * @remarks
   * The time when the version was modified.
   * 
   * @example
   * 2019-08-20T06:51:27.292Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The preview URL.
   * 
   * @example
   * https://data.aliyunpds.com/hz22%2F5d5b986facbec311ef844c25954f96821497b383%2F5d5b986f955410dd991646bb87c6b4e899eff525?Expires=xxx&OSSAccessKeyId=xxx&Signature=xxx
   */
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

