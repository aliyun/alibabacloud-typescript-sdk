// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImageMediaMetadata } from "./ImageMediaMetadata";
import { CreateFileRequestPartInfoList } from "./CreateFileRequestPartInfoList";
import { UserTag } from "./UserTag";
import { VideoMediaMetadata } from "./VideoMediaMetadata";


export class CreateFileRequest extends $dara.Model {
  /**
   * @remarks
   * The processing method that is used if the file that you want to create has the same name as an existing file in the cloud. Valid values:
   * 
   * ignore: allows you to create the file by using the same name as an existing file in the cloud.
   * 
   * auto_rename: automatically renames the file that you want to create. By default, the current point in time is added to the end of the file name. Example: xxx_20060102_150405.
   * 
   * refuse: does not create the file that you want to create but returns the information about the file that has the same name in the cloud.
   * 
   * Default value: ignore.
   * 
   * @example
   * ignore
   * 
   * **if can be null:**
   * true
   */
  checkNameMode?: string;
  /**
   * @remarks
   * The hash value of the file content. The value is calculated based on the algorithm specified by content_hash_name.
   * 
   * @example
   * 7C4A8D09CA3762AF61E59520943DC26494F8941B
   * 
   * **if can be null:**
   * true
   */
  contentHash?: string;
  /**
   * @remarks
   * The name of the algorithm that is used to calculate the hash value of the file content. Only SHA1 is supported.
   * 
   * @example
   * sha1
   * 
   * **if can be null:**
   * true
   */
  contentHashName?: string;
  /**
   * @remarks
   * The type of the file content. Default value: application/oct-stream.
   * 
   * @example
   * application/json
   * 
   * **if can be null:**
   * true
   */
  contentType?: string;
  /**
   * @remarks
   * The description of the file. The description can be up to 1,024 characters in length. By default, this parameter is left empty.
   * 
   * @example
   * 重要文件
   * 
   * **if can be null:**
   * true
   */
  description?: string;
  /**
   * @remarks
   * The drive ID. This parameter is required if the file is not uploaded by using the share URL of the file.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The file ID. This parameter is required if check_name_mode is set to ignore.
   * 
   * @example
   * 9520943DC264
   * 
   * **if can be null:**
   * true
   */
  fileId?: string;
  /**
   * @remarks
   * Specifies whether to hide the file or folder. By default, the file or folder is not hidden.
   * 
   * @example
   * false
   * 
   * **if can be null:**
   * true
   */
  hidden?: boolean;
  /**
   * @remarks
   * The information about the image specified by the client.
   */
  imageMediaMetadata?: ImageMediaMetadata;
  /**
   * @remarks
   * The time when the local file was created. By default, this parameter is left empty. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format based on the UTC+0 time zone.
   * 
   * @example
   * 2019-08-20T06:51:27.292Z
   * 
   * **if can be null:**
   * true
   */
  localCreatedAt?: string;
  /**
   * @remarks
   * The time when the local file was modified. By default, this parameter is left empty. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format based on the UTC+0 time zone.
   * 
   * @example
   * 2019-08-20T06:51:27.292Z
   */
  localModifiedAt?: string;
  /**
   * @remarks
   * The name of the file. The name can be up to 1,024 bytes in length based on the UTF-8 encoding rule and cannot contain forward slash (/).
   * 
   * This parameter is required.
   * 
   * @example
   * a.txt
   * 
   * **if can be null:**
   * false
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to enable the parallel upload feature.
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * true
   */
  parallelUpload?: boolean;
  /**
   * @remarks
   * The ID of the parent directory. If you want to create a file or folder in the root directory, set this parameter to root.
   * 
   * This parameter is required.
   * 
   * @example
   * fileid1
   */
  parentFileId?: string;
  /**
   * @remarks
   * The information about the file parts. You can specify up to 10,000 parts. By default, if you do not specify this parameter, only one part is returned.
   */
  partInfoList?: CreateFileRequestPartInfoList[];
  /**
   * @remarks
   * The SHA-1 hash value of the first 1 KB data of the file. This parameter is required if you perform instant file upload by using the pre-hashing feature. If the SHA-1 hash value is not matched on the cloud, the client does not need to calculate the SHA-1 hash value of the entire file.
   * 
   * @example
   * 7C4A8D09CA3762AF61E59520943DC26494F89411
   * 
   * **if can be null:**
   * true
   */
  preHash?: string;
  /**
   * @remarks
   * The share ID. This parameter is required if the file is uploaded by using the share URL of the file.
   * 
   * @example
   * 7JQX1FswpQ8
   * 
   * **if can be null:**
   * true
   */
  shareId?: string;
  /**
   * @remarks
   * The size of the file. Unit: bytes.
   * 
   * @example
   * 1024
   * 
   * **if can be null:**
   * true
   */
  size?: number;
  /**
   * @remarks
   * The type of the file. Valid values:
   * 
   * file folder
   * 
   * This parameter is required.
   * 
   * @example
   * file
   * 
   * **if can be null:**
   * true
   */
  type?: string;
  /**
   * @remarks
   * The custom tags. You can specify up to 1,000 tags.
   */
  userTags?: UserTag[];
  /**
   * @remarks
   * The information about the video specified by the client.
   */
  videoMediaMetadata?: VideoMediaMetadata;
  static names(): { [key: string]: string } {
    return {
      checkNameMode: 'check_name_mode',
      contentHash: 'content_hash',
      contentHashName: 'content_hash_name',
      contentType: 'content_type',
      description: 'description',
      driveId: 'drive_id',
      fileId: 'file_id',
      hidden: 'hidden',
      imageMediaMetadata: 'image_media_metadata',
      localCreatedAt: 'local_created_at',
      localModifiedAt: 'local_modified_at',
      name: 'name',
      parallelUpload: 'parallel_upload',
      parentFileId: 'parent_file_id',
      partInfoList: 'part_info_list',
      preHash: 'pre_hash',
      shareId: 'share_id',
      size: 'size',
      type: 'type',
      userTags: 'user_tags',
      videoMediaMetadata: 'video_media_metadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkNameMode: 'string',
      contentHash: 'string',
      contentHashName: 'string',
      contentType: 'string',
      description: 'string',
      driveId: 'string',
      fileId: 'string',
      hidden: 'boolean',
      imageMediaMetadata: ImageMediaMetadata,
      localCreatedAt: 'string',
      localModifiedAt: 'string',
      name: 'string',
      parallelUpload: 'boolean',
      parentFileId: 'string',
      partInfoList: { 'type': 'array', 'itemType': CreateFileRequestPartInfoList },
      preHash: 'string',
      shareId: 'string',
      size: 'number',
      type: 'string',
      userTags: { 'type': 'array', 'itemType': UserTag },
      videoMediaMetadata: VideoMediaMetadata,
    };
  }

  validate() {
    if(this.imageMediaMetadata && typeof (this.imageMediaMetadata as any).validate === 'function') {
      (this.imageMediaMetadata as any).validate();
    }
    if(Array.isArray(this.partInfoList)) {
      $dara.Model.validateArray(this.partInfoList);
    }
    if(Array.isArray(this.userTags)) {
      $dara.Model.validateArray(this.userTags);
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

