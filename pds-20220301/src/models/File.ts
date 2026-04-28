// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImageMediaMetadata } from "./ImageMediaMetadata";
import { VideoMediaMetadata } from "./VideoMediaMetadata";


export class FileDirSizeInfo extends $dara.Model {
  /**
   * @remarks
   * The number of all descendant folders in the folder, which is calculated recursively.
   * 
   * @example
   * 1
   */
  dirCount?: number;
  /**
   * @remarks
   * The number of all descendant files in the folder, which is calculated recursively.
   * 
   * @example
   * 10
   */
  fileCount?: number;
  static names(): { [key: string]: string } {
    return {
      dirCount: 'dir_count',
      fileCount: 'file_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dirCount: 'number',
      fileCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class File extends $dara.Model {
  /**
   * @remarks
   * The permissions.
   */
  actionList?: string[];
  /**
   * @remarks
   * The remaining time until the file is automatically deleted from the recycle bin (if in it).
   */
  autoDeleteLeftSec?: number;
  /**
   * @remarks
   * The category. Drive and Photo Service (PDS) classifies files based on their extensions and mime-type. The supported categories include doc, image, audio, and video.
   * 
   * @example
   * image
   */
  category?: string;
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
   * The name of the hash algorithm. Set the value to sha1.
   * 
   * @example
   * sha1
   */
  contentHashName?: string;
  /**
   * @remarks
   * The type of the content.
   * 
   * @example
   * application/json
   */
  contentType?: string;
  /**
   * @remarks
   * crc64
   * 
   * @example
   * 3574582125365864471
   */
  crc64Hash?: string;
  /**
   * @remarks
   * The time when the file was created.
   * 
   * @example
   * 2019-08-20T06:51:27.292Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The description of the file.
   * 
   * @example
   * image file
   */
  description?: string;
  /**
   * @remarks
   * The information about the folder structure. This parameter is returned only if you include the dir_size field in the fields parameter by calling the ListFile or GetFile operation.
   */
  dirSizeInfo?: FileDirSizeInfo;
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
   * The download URL. The default validity period of the download URL is 15 minutes. If the URL expires, you can obtain the URL by calling the GetFile operation.
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
   * The file name extension.
   * 
   * @example
   * txt
   */
  fileExtension?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 5d79206586bb5dd69fb34c349282718146c55da7
   */
  fileId?: string;
  /**
   * @remarks
   * Specifies whether to hide the file.
   * 
   * @example
   * false
   */
  hidden?: boolean;
  /**
   * @remarks
   * The file ID path.
   * 
   * @example
   * id1/id2
   */
  idPath?: string;
  /**
   * @remarks
   * The image metadata. This parameter takes effect only if the value-added image processing feature is enabled.
   */
  imageMediaMetadata?: ImageMediaMetadata;
  /**
   * @remarks
   * The labels of the file.
   * 
   * @example
   * ["label1:1", "label2:2"]
   */
  labels?: string[];
  /**
   * @remarks
   * The time when the local file was created. The time refers to the local time when the file was uploaded. This parameter helps identify the local upload time.
   * 
   * @example
   * 2019-08-20T06:51:27.292Z
   */
  localCreatedAt?: string;
  /**
   * @remarks
   * The time when the local file was modified. The time refers to the local time when the modified file was uploaded. This parameter helps identify the local update time.
   * 
   * @example
   * 2019-08-20T06:51:27.292Z
   */
  localModifiedAt?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * 1.mov
   */
  name?: string;
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * root/f1/f2
   */
  namePath?: string;
  /**
   * @remarks
   * The parent folder ID.
   * 
   * @example
   * 3d5b846942cf94fa72324c8a4bda34e81da635a
   */
  parentFileId?: string;
  /**
   * @remarks
   * The version ID. If a file that has the same file ID with an existing one is uploaded, a new version ID is generated for the file.
   * 
   * @example
   * 5d5b846942cf94fa72324c14a4bda34e81da635d
   */
  revisionId?: string;
  /**
   * @remarks
   * The file size
   * 
   * or folder size. The folder size is calculated based on all descendant files and folders in the folder. Note: The folder size can be returned only when you call the ListFile or GetFile operation and include the dir_size field in the fields parameter.
   * 
   * @example
   * 1024
   */
  size?: number;
  /**
   * @remarks
   * Specifies whether to add the file to favorites.
   * 
   * @example
   * false
   */
  starred?: boolean;
  /**
   * @remarks
   * The status of the file. Only files and directories in the available state can be accessed. If you call the GetFile operation to obtain a file that is in the uploading state, a response indicating that the file does not exist is returned. If you call the ListFile operation to query files, files in the uploading state are not returned.
   * 
   * @example
   * available
   */
  status?: string;
  /**
   * @remarks
   * The URL of the thumbnail. This parameter is deprecated and we recommend that you use thumbnail_urls.
   * 
   * @example
   * https://data.aliyunpds.com/hz22%2F5d5b986facbec311ef844c25954f96821497b383%2F5d5b986f955410dd991646bb87c6b4e899eff525?Expires=xxx&OSSAccessKeyId=xxx&Signature=xxx
   */
  thumbnail?: string;
  /**
   * @remarks
   * The information about the returned thumbnail. The value corresponds to the key that is specified by thumbnail_processes.
   */
  thumbnailUrls?: { [key: string]: string };
  /**
   * @remarks
   * The time when the file was put into the recycle bin.
   * 
   * @example
   * 2019-08-20T06:51:27.292Z
   */
  trashedAt?: string;
  /**
   * @remarks
   * The file type.
   * 
   * Valid values:
   * 
   * *   file
   * *   folder
   * 
   * @example
   * file
   */
  type?: string;
  /**
   * @remarks
   * The time when the file was modified.
   * 
   * @example
   * 2019-08-20T06:51:27.292Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The upload ID.
   * 
   * @example
   * C9DCFE5A82644AC7A02DB74C30C934A6
   */
  uploadId?: string;
  /**
   * @remarks
   * The custom tags.
   */
  userTags?: { [key: string]: string };
  /**
   * @remarks
   * The audio and video information.
   */
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

