// This file is auto-generated, don't edit it
/**
 */
import GatewayClient from '@alicloud/gateway-pds';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class DriveLogDetailUpdateTo extends $dara.Model {
  name?: string;
  ownerId?: string;
  ownerName?: string;
  ownerType?: string;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      ownerId: 'owner_id',
      ownerName: 'owner_name',
      ownerType: 'owner_type',
      totalSize: 'total_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ownerId: 'string',
      ownerName: 'string',
      ownerType: 'string',
      totalSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceGroupGroupCoverFaceBoundary extends $dara.Model {
  /**
   * @example
   * 300
   */
  height?: number;
  /**
   * @example
   * 10
   */
  left?: number;
  /**
   * @example
   * 30
   */
  top?: number;
  /**
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

export class FileDirSizeInfo extends $dara.Model {
  dirCount?: number;
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

export class InvestigationInfoVideoDetailBlockFrames extends $dara.Model {
  label?: string;
  offset?: number;
  rate?: number;
  static names(): { [key: string]: string } {
    return {
      label: 'label',
      offset: 'offset',
      rate: 'rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      offset: 'number',
      rate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvestigationInfoVideoDetail extends $dara.Model {
  blockFrames?: InvestigationInfoVideoDetailBlockFrames[];
  static names(): { [key: string]: string } {
    return {
      blockFrames: 'block_frames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockFrames: { 'type': 'array', 'itemType': InvestigationInfoVideoDetailBlockFrames },
    };
  }

  validate() {
    if(Array.isArray(this.blockFrames)) {
      $dara.Model.validateArray(this.blockFrames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PermissionActionList extends $dara.Model {
  action?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PermissionConditionIpEquals extends $dara.Model {
  clientIp?: string[];
  static names(): { [key: string]: string } {
    return {
      clientIp: 'client_ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.clientIp)) {
      $dara.Model.validateArray(this.clientIp);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PermissionConditionIpNotEquals extends $dara.Model {
  clientIp?: string[];
  static names(): { [key: string]: string } {
    return {
      clientIp: 'client_ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.clientIp)) {
      $dara.Model.validateArray(this.clientIp);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PermissionConditionStringLike extends $dara.Model {
  vpcId?: string[];
  static names(): { [key: string]: string } {
    return {
      vpcId: 'vpc_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vpcId)) {
      $dara.Model.validateArray(this.vpcId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PermissionConditionStringNotLike extends $dara.Model {
  vpcId?: string[];
  static names(): { [key: string]: string } {
    return {
      vpcId: 'vpc_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vpcId)) {
      $dara.Model.validateArray(this.vpcId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadPartInfoParallelSha1Ctx extends $dara.Model {
  h?: number[];
  partOffset?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'h',
      partOffset: 'part_offset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: { 'type': 'array', 'itemType': 'number' },
      partOffset: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.h)) {
      $dara.Model.validateArray(this.h);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadPartInfoParallelSha256Ctx extends $dara.Model {
  h?: number[];
  partOffset?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'h',
      partOffset: 'part_offset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: { 'type': 'array', 'itemType': 'number' },
      partOffset: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.h)) {
      $dara.Model.validateArray(this.h);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UserLogDetailUpdateTo extends $dara.Model {
  email?: string;
  expiredAt?: number;
  name?: string;
  phone?: string;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      expiredAt: 'expired_at',
      name: 'name',
      phone: 'phone',
      roleId: 'role_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      expiredAt: 'number',
      name: 'string',
      phone: 'string',
      roleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoPreviewPlayInfoLiveTranscodingTaskList extends $dara.Model {
  keepOriginalResolution?: boolean;
  status?: string;
  templateId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      keepOriginalResolution: 'keep_original_resolution',
      status: 'status',
      templateId: 'template_id',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keepOriginalResolution: 'boolean',
      status: 'string',
      templateId: 'string',
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

export class VideoPreviewPlayInfoMeta extends $dara.Model {
  duration?: number;
  height?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'duration',
      height: 'height',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      height: 'number',
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

export class VideoPreviewPlayInfoOfflineVideoTranscodingList extends $dara.Model {
  keepOriginalResolution?: boolean;
  status?: string;
  templateId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      keepOriginalResolution: 'keep_original_resolution',
      status: 'status',
      templateId: 'template_id',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keepOriginalResolution: 'boolean',
      status: 'string',
      templateId: 'string',
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

export class VideoPreviewPlayInfoQuickVideoList extends $dara.Model {
  status?: string;
  templateId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      templateId: 'template_id',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      templateId: 'string',
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

export class VideoPreviewPlayMetaLiveTranscodingTaskList extends $dara.Model {
  /**
   * @example
   * true
   */
  keepOriginalResolution?: boolean;
  /**
   * @example
   * finished
   */
  status?: string;
  /**
   * @example
   * 264_720p
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      keepOriginalResolution: 'keep_original_resolution',
      status: 'status',
      templateId: 'template_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keepOriginalResolution: 'boolean',
      status: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoPreviewPlayMetaMeta extends $dara.Model {
  /**
   * @example
   * 10
   */
  duration?: number;
  /**
   * @example
   * 720
   */
  height?: number;
  /**
   * @example
   * 1280
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'duration',
      height: 'height',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      height: 'number',
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

export class VideoPreviewPlayMetaOfflineVideoTranscodingList extends $dara.Model {
  /**
   * @example
   * true
   */
  keepOriginalResolution?: string;
  /**
   * @example
   * finished
   */
  status?: string;
  /**
   * @example
   * 264_720p
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      keepOriginalResolution: 'keep_original_resolution',
      status: 'status',
      templateId: 'template_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keepOriginalResolution: 'string',
      status: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoPreviewPlayMetaQuickVideoList extends $dara.Model {
  /**
   * @example
   * finished
   */
  status?: string;
  /**
   * @example
   * 264_720p
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      templateId: 'template_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewFileInvestigationInfo extends $dara.Model {
  status?: number;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      suggestion: 'suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      suggestion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddStoryFilesRequestFiles extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 63e5e4340f76cb3ead5f40f68163f0f967c1a7bf
   */
  fileId?: string;
  /**
   * @example
   * 642a88dd06e49d9c0a14411ebae606f70edd9a59
   */
  revisionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'file_id',
      revisionId: 'revision_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      revisionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRequestRequests extends $dara.Model {
  /**
   * @remarks
   * The request parameters of a child request. The parameter value must be a JSON string. For more information, see the topic of the corresponding child request.
   * 
   * Before you specify the request body, you must specify a header by using Content-Type. Content-Type can only be set to application/json.
   */
  body?: { [key: string]: any };
  /**
   * @remarks
   * The header of a child request, which indicates the type of the data specified in the request body.
   */
  headers?: { [key: string]: string };
  /**
   * @remarks
   * The ID of the child request. The ID is used to associate a child request with a response. The ID of a child request must be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 93433894994ad2e1
   */
  id?: string;
  /**
   * @remarks
   * The method of a child request. Valid values:
   * 
   * *   POST
   * *   GET
   * *   PUT
   * *   DELETE
   * *   HEAD
   * 
   * This parameter is required.
   * 
   * @example
   * POST
   */
  method?: string;
  /**
   * @remarks
   * The API path of a child request. Valid values:
   * 
   * *   /file/get: queries the information about a file.
   * *   /file/update: modifies the information about a file.
   * *   /file/search: searches for a file.
   * *   /file/copy: copies a file or folder.
   * *   /file/move: moves a file or folder.
   * *   /file/delete: deletes a file or folder.
   * *   /file/get_download_url: queries the download URL of a file.
   * *   /file/get_share_link_download_url: queries the download URL of a file in a share.
   * *   /recyclebin/trash: moves a file or folder to the recycle bin.
   * *   /recyclebin/restore: restores a file or folder.
   * *   /file/put_usertags: adds tags to a user.
   * *   /file/delete_usertags: removes tags from a user.
   * *   /drive/get: queries the information about a drive.
   * *   /user/get: queries the information about a user.
   * *   /group/get: queries the information about a group.
   * *   /share_link/create: creates a share.
   * *   /share_link/update: modifies a share.
   * *   /share_link/cancel: cancels a share.
   * *   /share_link/list: queries shares.
   * *   /share_link/get: queries the information about a share.
   * *   /share_link/get_share_token: queries an access token of a share.
   * *   /async_task/get: queries the information about an asynchronous task.
   * 
   * This parameter is required.
   * 
   * @example
   * /file/get
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      headers: 'headers',
      id: 'id',
      method: 'method',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      id: 'string',
      method: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.body) {
      $dara.Model.validateMap(this.body);
    }
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchResponseBodyResponses extends $dara.Model {
  /**
   * @remarks
   * The response parameters of a child request. For more information, see the topic of the corresponding child request.
   */
  body?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the child request. The ID is used to associate a child request with a response.
   * 
   * @example
   * 93433894994ad2e1
   */
  id?: string;
  /**
   * @remarks
   * The returned HTTP status code of a child request. For more information, see the topic of the corresponding child request.
   * 
   * @example
   * 200
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      id: 'id',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'string',
      status: 'number',
    };
  }

  validate() {
    if(this.body) {
      $dara.Model.validateMap(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomizedStoryRequestStoryCover extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 63e5e4340f76cb3ead5f40f68163f0f967c1a7bf
   */
  fileId?: string;
  /**
   * @example
   * 642a88d4aff041ee68fd4fc89beb80e1119da343
   */
  revisionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'file_id',
      revisionId: 'revision_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      revisionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomizedStoryRequestStoryFiles extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 63e5e4340f76cb3ead5f40f68163f0f967c1a7bf
   */
  fileId?: string;
  /**
   * @example
   * 642a88d4aff041ee68fd4fc89beb80e1119da343
   */
  revisionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'file_id',
      revisionId: 'revision_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      revisionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileRequestPartInfoListParallelSha1Ctx extends $dara.Model {
  /**
   * @remarks
   * The first to fifth 32-bit variables of the SHA-1 hash value of the file content before the file part. This parameter takes effect only if the parallel upload feature is enabled.
   */
  h?: number[];
  /**
   * @remarks
   * The size of the file content before the file part. Unit: bytes. The value must be a multiple of 64. This parameter takes effect only if the parallel upload feature is enabled.
   * 
   * @example
   * 10240
   */
  partOffset?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'h',
      partOffset: 'part_offset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: { 'type': 'array', 'itemType': 'number' },
      partOffset: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.h)) {
      $dara.Model.validateArray(this.h);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileRequestPartInfoList extends $dara.Model {
  /**
   * @remarks
   * The MD5 hash value of the file part. This parameter is required when the MD5 hash value of the file part needs to be verified during part upload.
   * 
   * @example
   * ASKJDJSKDJJSJDJS
   */
  contentMd5?: string;
  /**
   * @remarks
   * The SHA-1 hash value of the file content before the file part. This parameter takes effect only if the parallel upload feature is enabled.
   */
  parallelSha1Ctx?: CreateFileRequestPartInfoListParallelSha1Ctx;
  /**
   * @remarks
   * The serial number of a file part. The number starts from 1.
   * 
   * @example
   * 1
   */
  partNumber?: number;
  static names(): { [key: string]: string } {
    return {
      contentMd5: 'content_md5',
      parallelSha1Ctx: 'parallel_sha1_ctx',
      partNumber: 'part_number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentMd5: 'string',
      parallelSha1Ctx: CreateFileRequestPartInfoListParallelSha1Ctx,
      partNumber: 'number',
    };
  }

  validate() {
    if(this.parallelSha1Ctx && typeof (this.parallelSha1Ctx as any).validate === 'function') {
      (this.parallelSha1Ctx as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequestGroupInfoList extends $dara.Model {
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * g123
   */
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'group_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilePutUserTagsRequestUserTags extends $dara.Model {
  /**
   * @remarks
   * The name of the tag. The tag name cannot be empty and cannot contain number signs (#).
   * 
   * This parameter is required.
   * 
   * @example
   * tag
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. The tag value cannot contain number signs (#).
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileRemovePermissionRequestMemberList extends $dara.Model {
  /**
   * @remarks
   * The identity to whom the permissions are granted, which is a user or a group.
   * 
   * This parameter is required.
   */
  identity?: Identity;
  /**
   * @remarks
   * The role ID. You can grant permissions by assigning roles to identities, or you can customize the permissions. To grant permissions by assigning roles to identities, specify role_id. role_id and action_list are mutually exclusive. If both parameters are specified, role_id has a higher priority.
   * 
   * Valid values:
   * 
   * SystemFileOwner: collaborator.
   * 
   * SystemFileDownloader: downloader.
   * 
   * SystemFileEditor: editor.
   * 
   * SystemFileEditorWithoutDelete: editor without permissions to delete the file.
   * 
   * SystemFileEditorWithoutShareLink: editor without permissions to share the file.
   * 
   * SystemFileMetaViewer: viewer of lists.
   * 
   * SystemFileUploader: uploader. SystemFileUploaderAndDownloader: uploader and downloader.
   * 
   * SystemFileDownloaderWithShareLink: downloader and sharer.
   * 
   * SystemFileUploaderAndDownloaderWithShareLink: uploader, downloader, and sharer.
   * 
   * SystemFileUploaderAndViewer: viewer and uploader.
   * 
   * SystemFileUploaderWithShareLink: uploader and sharer.
   * 
   * SystemFileViewer: viewer.
   * 
   * This parameter is required.
   * 
   * @example
   * SystemFileDownloader
   */
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      identity: 'identity',
      roleId: 'role_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identity: Identity,
      roleId: 'string',
    };
  }

  validate() {
    if(this.identity && typeof (this.identity as any).validate === 'function') {
      (this.identity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadUrlRequestPartInfoListParallelSha1Ctx extends $dara.Model {
  /**
   * @remarks
   * The first to fifth 32-bit variables of the SHA-1 hash value of the file content before the file part. This parameter takes effect only if the parallel upload feature is enabled.
   */
  h?: number[];
  /**
   * @remarks
   * The size of the file part. Unit: bytes. The value must be a multiple of 64. This parameter takes effect only if the parallel upload feature is enabled.
   * 
   * @example
   * 10240
   */
  partOffset?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'h',
      partOffset: 'part_offset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: { 'type': 'array', 'itemType': 'number' },
      partOffset: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.h)) {
      $dara.Model.validateArray(this.h);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadUrlRequestPartInfoListParallelSha256Ctx extends $dara.Model {
  h?: number[];
  partOffset?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'h',
      partOffset: 'part_offset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: { 'type': 'array', 'itemType': 'number' },
      partOffset: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.h)) {
      $dara.Model.validateArray(this.h);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadUrlRequestPartInfoList extends $dara.Model {
  contentMd5?: string;
  contentType?: string;
  /**
   * @remarks
   * The SHA-1 hash value of the file content before the file part. This parameter takes effect only if the parallel upload feature is enabled.
   */
  parallelSha1Ctx?: GetUploadUrlRequestPartInfoListParallelSha1Ctx;
  parallelSha256Ctx?: GetUploadUrlRequestPartInfoListParallelSha256Ctx;
  /**
   * @remarks
   * The serial number of a part.
   * 
   * @example
   * 1
   */
  partNumber?: number;
  static names(): { [key: string]: string } {
    return {
      contentMd5: 'content_md5',
      contentType: 'content_type',
      parallelSha1Ctx: 'parallel_sha1_ctx',
      parallelSha256Ctx: 'parallel_sha256_ctx',
      partNumber: 'part_number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentMd5: 'string',
      contentType: 'string',
      parallelSha1Ctx: GetUploadUrlRequestPartInfoListParallelSha1Ctx,
      parallelSha256Ctx: GetUploadUrlRequestPartInfoListParallelSha256Ctx,
      partNumber: 'number',
    };
  }

  validate() {
    if(this.parallelSha1Ctx && typeof (this.parallelSha1Ctx as any).validate === 'function') {
      (this.parallelSha1Ctx as any).validate();
    }
    if(this.parallelSha256Ctx && typeof (this.parallelSha256Ctx as any).validate === 'function') {
      (this.parallelSha256Ctx as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvestigateFileRequestDriveFileIds extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9520943DC264
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssignmentResponseBodyAssignmentList extends $dara.Model {
  /**
   * @remarks
   * The time when the role was assigned. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1622682267564
   */
  createdAt?: number;
  /**
   * @remarks
   * The ID of the user who assigned the role.
   * 
   * @example
   * 216***c83
   */
  creator?: string;
  /**
   * @remarks
   * The domain ID.
   * 
   * @example
   * hz1
   */
  domainId?: string;
  /**
   * @remarks
   * The identity to whom the role is assigned, which is a user or a group.
   */
  identity?: Identity;
  /**
   * @remarks
   * The ID of the managed resource, such as a group ID.
   * 
   * @example
   * 105***b82
   */
  manageResourceId?: string;
  /**
   * @remarks
   * The type of the managed resource. For example, a value of RT_Group indicates group.
   * 
   * @example
   * RT_Group
   */
  manageResourceType?: string;
  /**
   * @remarks
   * The ID of the role assigned to the identity.
   * 
   * @example
   * SystemGroupAdmin
   */
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      creator: 'creator',
      domainId: 'domain_id',
      identity: 'identity',
      manageResourceId: 'manage_resource_id',
      manageResourceType: 'manage_resource_type',
      roleId: 'role_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      creator: 'string',
      domainId: 'string',
      identity: Identity,
      manageResourceId: 'string',
      manageResourceType: 'string',
      roleId: 'string',
    };
  }

  validate() {
    if(this.identity && typeof (this.identity as any).validate === 'function') {
      (this.identity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeltaResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The information about the file.
   */
  file?: File;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 122fb09598ae66777c7040109a16f49381f6abe2
   */
  fileId?: string;
  /**
   * @remarks
   * The operation that is performed. Valid values: Valid values:
   * 
   * *   create
   * *   overwrite
   * *   delete
   * *   update
   * *   move
   * *   trash
   * *   restore
   * *   rename
   * 
   * @example
   * create
   */
  op?: string;
  static names(): { [key: string]: string } {
    return {
      file: 'file',
      fileId: 'file_id',
      op: 'op',
    };
  }

  static types(): { [key: string]: any } {
    return {
      file: File,
      fileId: 'string',
      op: 'string',
    };
  }

  validate() {
    if(this.file && typeof (this.file as any).validate === 'function') {
      (this.file as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveStoryFilesRequestFiles extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 63e5e4340f76cb3ead5f40f68163f0f967c1a7bf
   */
  fileId?: string;
  /**
   * @example
   * 642a88dd06e49d9c0a14411ebae606f70edd9a59
   */
  revisionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'file_id',
      revisionId: 'revision_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      revisionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchSimilarImageClustersResponseBodySimilarImageClusters extends $dara.Model {
  files?: File[];
  static names(): { [key: string]: string } {
    return {
      files: 'files',
    };
  }

  static types(): { [key: string]: any } {
    return {
      files: { 'type': 'array', 'itemType': File },
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchStoriesRequestCreateTimeRange extends $dara.Model {
  /**
   * @example
   * 2022-12-31T00:00:00+08:00
   */
  end?: string;
  /**
   * @example
   * 2016-12-31T00:00:00+08:00
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'string',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchStoriesRequestStoryEndTimeRange extends $dara.Model {
  /**
   * @example
   * 2022-12-31T00:00:00+08:00
   */
  end?: string;
  /**
   * @example
   * 2016-12-31T00:00:00+08:00
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'string',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchStoriesRequestStoryStartTimeRange extends $dara.Model {
  /**
   * @example
   * 2022-12-31T00:00:00+08:00
   */
  end?: string;
  /**
   * @example
   * 2016-12-31T00:00:00+08:00
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'string',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStoryRequestCover extends $dara.Model {
  /**
   * @example
   * 63e5e4340f76cb3ead5f40f68163f0f967c1a7bf
   */
  fileId?: string;
  /**
   * @example
   * 642a88dd06e49d9c0a14411ebae606f70edd9a59
   */
  revisionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'file_id',
      revisionId: 'revision_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      revisionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserRequestGroupInfoList extends $dara.Model {
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * g123
   */
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'group_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AccountAccessTokenResponse extends $dara.Model {
  accessToken?: string;
  avatar?: string;
  defaultDriveId?: string;
  defaultSboxDriveId?: string;
  deviceId?: string;
  deviceName?: string;
  domainId?: string;
  existLink?: LinkInfo[];
  expireTime?: string;
  expiresIn?: number;
  isFirstLogin?: boolean;
  needLink?: boolean;
  needRpVerify?: boolean;
  nickName?: string;
  pathStatus?: string;
  pinSetup?: boolean;
  refreshToken?: string;
  role?: string;
  state?: string;
  status?: string;
  tokenType?: string;
  userData?: { [key: string]: string };
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'access_token',
      avatar: 'avatar',
      defaultDriveId: 'default_drive_id',
      defaultSboxDriveId: 'default_sbox_drive_id',
      deviceId: 'device_id',
      deviceName: 'device_name',
      domainId: 'domain_id',
      existLink: 'exist_link',
      expireTime: 'expire_time',
      expiresIn: 'expires_in',
      isFirstLogin: 'is_first_login',
      needLink: 'need_link',
      needRpVerify: 'need_rp_verify',
      nickName: 'nick_name',
      pathStatus: 'path_status',
      pinSetup: 'pin_setup',
      refreshToken: 'refresh_token',
      role: 'role',
      state: 'state',
      status: 'status',
      tokenType: 'token_type',
      userData: 'user_data',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      avatar: 'string',
      defaultDriveId: 'string',
      defaultSboxDriveId: 'string',
      deviceId: 'string',
      deviceName: 'string',
      domainId: 'string',
      existLink: { 'type': 'array', 'itemType': LinkInfo },
      expireTime: 'string',
      expiresIn: 'number',
      isFirstLogin: 'boolean',
      needLink: 'boolean',
      needRpVerify: 'boolean',
      nickName: 'string',
      pathStatus: 'string',
      pinSetup: 'boolean',
      refreshToken: 'string',
      role: 'string',
      state: 'string',
      status: 'string',
      tokenType: 'string',
      userData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.existLink)) {
      $dara.Model.validateArray(this.existLink);
    }
    if(this.userData) {
      $dara.Model.validateMap(this.userData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AccountLinkInfo extends $dara.Model {
  authenticationType?: string;
  createdAt?: number;
  displayName?: string;
  domainId?: string;
  extra?: string;
  identity?: string;
  lastLoginTime?: number;
  status?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationType: 'authentication_type',
      createdAt: 'created_at',
      displayName: 'display_name',
      domainId: 'domain_id',
      extra: 'extra',
      identity: 'identity',
      lastLoginTime: 'last_login_time',
      status: 'status',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationType: 'string',
      createdAt: 'number',
      displayName: 'string',
      domainId: 'string',
      extra: 'string',
      identity: 'string',
      lastLoginTime: 'number',
      status: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Activity extends $dara.Model {
  activityId?: string;
  device?: string;
  driveId?: string;
  eventType?: number;
  latestEventTime?: string;
  resourceCategory?: number;
  resourceList?: { [key: string]: any }[];
  totalResourceCount?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'activity_id',
      device: 'device',
      driveId: 'drive_id',
      eventType: 'event_type',
      latestEventTime: 'latest_event_time',
      resourceCategory: 'resource_category',
      resourceList: 'resource_list',
      totalResourceCount: 'total_resource_count',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      device: 'string',
      driveId: 'string',
      eventType: 'number',
      latestEventTime: 'string',
      resourceCategory: 'number',
      resourceList: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      totalResourceCount: 'number',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceList)) {
      $dara.Model.validateArray(this.resourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddStoryFile extends $dara.Model {
  errorCode?: string;
  errorMessage?: string;
  /**
   * @example
   * 63e5e4340f76cb3ead5f40f68163f0f967c1a7bf
   */
  fileId?: string;
  /**
   * @example
   * 642a88dd06e49d9c0a14411ebae606f70edd9a59
   */
  revisionId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'error_code',
      errorMessage: 'error_message',
      fileId: 'file_id',
      revisionId: 'revision_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      fileId: 'string',
      revisionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Address extends $dara.Model {
  /**
   * @example
   * 杭州市
   */
  city?: string;
  /**
   * @example
   * 中国
   */
  country?: string;
  /**
   * @example
   * 余杭区
   */
  district?: string;
  /**
   * @example
   * 浙江省
   */
  province?: string;
  /**
   * @example
   * 文一西路
   */
  township?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'city',
      country: 'country',
      district: 'district',
      province: 'province',
      township: 'township',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      country: 'string',
      district: 'string',
      province: 'string',
      township: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddressGroup extends $dara.Model {
  addressDetail?: Address;
  count?: number;
  coverFileId?: string;
  coverUrl?: string;
  location?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      addressDetail: 'address_detail',
      count: 'count',
      coverFileId: 'cover_file_id',
      coverUrl: 'cover_url',
      location: 'location',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressDetail: Address,
      count: 'number',
      coverFileId: 'string',
      coverUrl: 'string',
      location: 'string',
      name: 'string',
    };
  }

  validate() {
    if(this.addressDetail && typeof (this.addressDetail as any).validate === 'function') {
      (this.addressDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Aggregation extends $dara.Model {
  field?: Buffer;
  groups?: AggregationsGroup[];
  operation?: Buffer;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      field: 'field',
      groups: 'groups',
      operation: 'operation',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'Buffer',
      groups: { 'type': 'array', 'itemType': AggregationsGroup },
      operation: 'Buffer',
      value: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AggregationsGroup extends $dara.Model {
  count?: number;
  value?: Buffer;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      value: 'Buffer',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Album extends $dara.Model {
  albumId?: string;
  baseFaceFile?: File;
  baseFaceGroupId?: string;
  coverFile?: File;
  createdAt?: string;
  description?: string;
  fileCount?: number;
  name?: string;
  owner?: string;
  updatedAt?: string;
  userTags?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      albumId: 'album_id',
      baseFaceFile: 'base_face_file',
      baseFaceGroupId: 'base_face_group_id',
      coverFile: 'cover_file',
      createdAt: 'created_at',
      description: 'description',
      fileCount: 'file_count',
      name: 'name',
      owner: 'owner',
      updatedAt: 'updated_at',
      userTags: 'user_tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumId: 'string',
      baseFaceFile: File,
      baseFaceGroupId: 'string',
      coverFile: File,
      createdAt: 'string',
      description: 'string',
      fileCount: 'number',
      name: 'string',
      owner: 'string',
      updatedAt: 'string',
      userTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.baseFaceFile && typeof (this.baseFaceFile as any).validate === 'function') {
      (this.baseFaceFile as any).validate();
    }
    if(this.coverFile && typeof (this.coverFile as any).validate === 'function') {
      (this.coverFile as any).validate();
    }
    if(this.userTags) {
      $dara.Model.validateMap(this.userTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class App extends $dara.Model {
  appId?: string;
  appName?: string;
  appSecret?: string;
  createdAt?: string;
  description?: string;
  logo?: string;
  provider?: string;
  redirectUri?: string;
  scope?: string[];
  stage?: string;
  type?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'app_id',
      appName: 'app_name',
      appSecret: 'app_secret',
      createdAt: 'created_at',
      description: 'description',
      logo: 'logo',
      provider: 'provider',
      redirectUri: 'redirect_uri',
      scope: 'scope',
      stage: 'stage',
      type: 'type',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appSecret: 'string',
      createdAt: 'string',
      description: 'string',
      logo: 'string',
      provider: 'string',
      redirectUri: 'string',
      scope: { 'type': 'array', 'itemType': 'string' },
      stage: 'string',
      type: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scope)) {
      $dara.Model.validateArray(this.scope);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppAccessStrategy extends $dara.Model {
  effect?: string;
  exceptAppIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      effect: 'effect',
      exceptAppIdList: 'except_app_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      exceptAppIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.exceptAppIdList)) {
      $dara.Model.validateArray(this.exceptAppIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ArchiveFilesConfigResponse extends $dara.Model {
  enabled?: boolean;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuditLog extends $dara.Model {
  actedAt?: string;
  actionCategory?: string;
  actionType?: string;
  actorId?: string;
  actorName?: string;
  actorType?: string;
  clientDevice?: string;
  clientIp?: string;
  clientType?: string;
  clientVersion?: string;
  detail?: AuditLogDetail;
  filePathType?: string;
  logId?: string;
  objectId?: string;
  objectName?: string;
  static names(): { [key: string]: string } {
    return {
      actedAt: 'acted_at',
      actionCategory: 'action_category',
      actionType: 'action_type',
      actorId: 'actor_id',
      actorName: 'actor_name',
      actorType: 'actor_type',
      clientDevice: 'client_device',
      clientIp: 'client_ip',
      clientType: 'client_type',
      clientVersion: 'client_version',
      detail: 'detail',
      filePathType: 'file_path_type',
      logId: 'log_id',
      objectId: 'object_id',
      objectName: 'object_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actedAt: 'string',
      actionCategory: 'string',
      actionType: 'string',
      actorId: 'string',
      actorName: 'string',
      actorType: 'string',
      clientDevice: 'string',
      clientIp: 'string',
      clientType: 'string',
      clientVersion: 'string',
      detail: AuditLogDetail,
      filePathType: 'string',
      logId: 'string',
      objectId: 'string',
      objectName: 'string',
    };
  }

  validate() {
    if(this.detail && typeof (this.detail as any).validate === 'function') {
      (this.detail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuditLogDetail extends $dara.Model {
  driveLogDetail?: DriveLogDetail;
  fileLogDetail?: FileLogDetail;
  userLogDetail?: UserLogDetail;
  static names(): { [key: string]: string } {
    return {
      driveLogDetail: 'drive_log_detail',
      fileLogDetail: 'file_log_detail',
      userLogDetail: 'user_log_detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveLogDetail: DriveLogDetail,
      fileLogDetail: FileLogDetail,
      userLogDetail: UserLogDetail,
    };
  }

  validate() {
    if(this.driveLogDetail && typeof (this.driveLogDetail as any).validate === 'function') {
      (this.driveLogDetail as any).validate();
    }
    if(this.fileLogDetail && typeof (this.fileLogDetail as any).validate === 'function') {
      (this.fileLogDetail as any).validate();
    }
    if(this.userLogDetail && typeof (this.userLogDetail as any).validate === 'function') {
      (this.userLogDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BaseAlbumFileOperationResult extends $dara.Model {
  errorCode?: string;
  errorMessage?: string;
  file?: CommonFileItem;
  isSucceed?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'error_code',
      errorMessage: 'error_message',
      file: 'file',
      isSucceed: 'is_succeed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      file: CommonFileItem,
      isSucceed: 'boolean',
    };
  }

  validate() {
    if(this.file && typeof (this.file as any).validate === 'function') {
      (this.file as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BaseAssignmentResponse extends $dara.Model {
  associatedRoleTagId?: string;
  createdAt?: string;
  creator?: string;
  disinheritSubGroup?: boolean;
  domainId?: string;
  identity?: Identity;
  manageResourceId?: string;
  manageResourceType?: string;
  roleId?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      associatedRoleTagId: 'associated_role_tag_id',
      createdAt: 'created_at',
      creator: 'creator',
      disinheritSubGroup: 'disinherit_sub_group',
      domainId: 'domain_id',
      identity: 'identity',
      manageResourceId: 'manage_resource_id',
      manageResourceType: 'manage_resource_type',
      roleId: 'role_id',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedRoleTagId: 'string',
      createdAt: 'string',
      creator: 'string',
      disinheritSubGroup: 'boolean',
      domainId: 'string',
      identity: Identity,
      manageResourceId: 'string',
      manageResourceType: 'string',
      roleId: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    if(this.identity && typeof (this.identity as any).validate === 'function') {
      (this.identity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BaseDomainResponse extends $dara.Model {
  createdAt?: string;
  description?: string;
  domainId?: string;
  domainName?: string;
  initDriveEnable?: boolean;
  initDriveSize?: number;
  parentDomainId?: string;
  publishedAppAccessStrategy?: AppAccessStrategy;
  shareLinkEnabled?: boolean;
  sizeQuota?: number;
  sizeQuotaUsed?: number;
  status?: number;
  updatedAt?: string;
  usedSize?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      description: 'description',
      domainId: 'domain_id',
      domainName: 'domain_name',
      initDriveEnable: 'init_drive_enable',
      initDriveSize: 'init_drive_size',
      parentDomainId: 'parent_domain_id',
      publishedAppAccessStrategy: 'published_app_access_strategy',
      shareLinkEnabled: 'share_link_enabled',
      sizeQuota: 'size_quota',
      sizeQuotaUsed: 'size_quota_used',
      status: 'status',
      updatedAt: 'updated_at',
      usedSize: 'used_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      description: 'string',
      domainId: 'string',
      domainName: 'string',
      initDriveEnable: 'boolean',
      initDriveSize: 'number',
      parentDomainId: 'string',
      publishedAppAccessStrategy: AppAccessStrategy,
      shareLinkEnabled: 'boolean',
      sizeQuota: 'number',
      sizeQuotaUsed: 'number',
      status: 'number',
      updatedAt: 'string',
      usedSize: 'number',
    };
  }

  validate() {
    if(this.publishedAppAccessStrategy && typeof (this.publishedAppAccessStrategy as any).validate === 'function') {
      (this.publishedAppAccessStrategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BaseDriveResponse extends $dara.Model {
  actionList?: string[];
  category?: string;
  createdAt?: string;
  /**
   * @example
   * ccp
   */
  creator?: string;
  deltaEnabled?: boolean;
  /**
   * @example
   * ccp team drive
   */
  description?: string;
  /**
   * @example
   * hz999
   */
  domainId?: string;
  /**
   * @example
   * 123
   */
  driveId?: string;
  /**
   * @example
   * ccpdrive
   */
  driveName?: string;
  /**
   * @example
   * normal
   */
  driveType?: string;
  encryptDataAccess?: boolean;
  encryptMode?: string;
  isHandover?: boolean;
  /**
   * @example
   * ccp
   */
  owner?: string;
  /**
   * @example
   * user
   */
  ownerType?: string;
  pathStatus?: string;
  permission?: { [key: string]: IDPermission };
  relativePath?: string;
  /**
   * @example
   * enabled
   */
  status?: string;
  /**
   * @example
   * 123
   */
  storeId?: string;
  /**
   * @example
   * 102400
   */
  totalSize?: number;
  updatedAt?: string;
  /**
   * @example
   * 1024
   */
  usedSize?: number;
  static names(): { [key: string]: string } {
    return {
      actionList: 'action_list',
      category: 'category',
      createdAt: 'created_at',
      creator: 'creator',
      deltaEnabled: 'delta_enabled',
      description: 'description',
      domainId: 'domain_id',
      driveId: 'drive_id',
      driveName: 'drive_name',
      driveType: 'drive_type',
      encryptDataAccess: 'encrypt_data_access',
      encryptMode: 'encrypt_mode',
      isHandover: 'is_handover',
      owner: 'owner',
      ownerType: 'owner_type',
      pathStatus: 'path_status',
      permission: 'permission',
      relativePath: 'relative_path',
      status: 'status',
      storeId: 'store_id',
      totalSize: 'total_size',
      updatedAt: 'updated_at',
      usedSize: 'used_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionList: { 'type': 'array', 'itemType': 'string' },
      category: 'string',
      createdAt: 'string',
      creator: 'string',
      deltaEnabled: 'boolean',
      description: 'string',
      domainId: 'string',
      driveId: 'string',
      driveName: 'string',
      driveType: 'string',
      encryptDataAccess: 'boolean',
      encryptMode: 'string',
      isHandover: 'boolean',
      owner: 'string',
      ownerType: 'string',
      pathStatus: 'string',
      permission: { 'type': 'map', 'keyType': 'string', 'valueType': IDPermission },
      relativePath: 'string',
      status: 'string',
      storeId: 'string',
      totalSize: 'number',
      updatedAt: 'string',
      usedSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.actionList)) {
      $dara.Model.validateArray(this.actionList);
    }
    if(this.permission) {
      $dara.Model.validateMap(this.permission);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BaseFileListInheritPermissionResponse extends $dara.Model {
  fileId?: string;
  member?: FilePermissionMember;
  static names(): { [key: string]: string } {
    return {
      fileId: 'file_id',
      member: 'member',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      member: FilePermissionMember,
    };
  }

  validate() {
    if(this.member && typeof (this.member as any).validate === 'function') {
      (this.member as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BaseFileUserPermissionResponse extends $dara.Model {
  canAccess?: boolean;
  createdAt?: number;
  creator?: string;
  disinheritSubGroup?: boolean;
  /**
   * @example
   * bj23
   */
  domainId?: string;
  driveId?: string;
  expireTime?: number;
  fileFullPath?: string;
  fileId?: string;
  identity?: Identity;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      canAccess: 'can_access',
      createdAt: 'created_at',
      creator: 'creator',
      disinheritSubGroup: 'disinherit_sub_group',
      domainId: 'domain_id',
      driveId: 'drive_id',
      expireTime: 'expire_time',
      fileFullPath: 'file_full_path',
      fileId: 'file_id',
      identity: 'identity',
      roleId: 'role_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canAccess: 'boolean',
      createdAt: 'number',
      creator: 'string',
      disinheritSubGroup: 'boolean',
      domainId: 'string',
      driveId: 'string',
      expireTime: 'number',
      fileFullPath: 'string',
      fileId: 'string',
      identity: Identity,
      roleId: 'string',
    };
  }

  validate() {
    if(this.identity && typeof (this.identity as any).validate === 'function') {
      (this.identity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BaseGroupResponse extends $dara.Model {
  /**
   * @example
   * 111111
   */
  createdAt?: number;
  /**
   * @example
   * system
   */
  creator?: string;
  /**
   * @example
   * desc-111
   */
  description?: string;
  /**
   * @example
   * bj123
   */
  domainId?: string;
  /**
   * @example
   * b38b5681bd964950ad8bc0f8ea504793
   */
  groupId?: string;
  /**
   * @example
   * name-111
   */
  groupName?: string;
  isSync?: boolean;
  permission?: { [key: string]: IDPermission };
  /**
   * @example
   * 111111
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      creator: 'creator',
      description: 'description',
      domainId: 'domain_id',
      groupId: 'group_id',
      groupName: 'group_name',
      isSync: 'is_sync',
      permission: 'permission',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      creator: 'string',
      description: 'string',
      domainId: 'string',
      groupId: 'string',
      groupName: 'string',
      isSync: 'boolean',
      permission: { 'type': 'map', 'keyType': 'string', 'valueType': IDPermission },
      updatedAt: 'string',
    };
  }

  validate() {
    if(this.permission) {
      $dara.Model.validateMap(this.permission);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BaseRoleMemberResponse extends $dara.Model {
  assignmentList?: BaseAssignmentResponse[];
  createdAt?: string;
  creator?: string;
  domainId?: string;
  identity?: Identity;
  identityName?: string;
  isAdmin?: boolean;
  subdomainId?: string;
  static names(): { [key: string]: string } {
    return {
      assignmentList: 'assignment_list',
      createdAt: 'created_at',
      creator: 'creator',
      domainId: 'domain_id',
      identity: 'identity',
      identityName: 'identity_name',
      isAdmin: 'is_admin',
      subdomainId: 'subdomain_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignmentList: { 'type': 'array', 'itemType': BaseAssignmentResponse },
      createdAt: 'string',
      creator: 'string',
      domainId: 'string',
      identity: Identity,
      identityName: 'string',
      isAdmin: 'boolean',
      subdomainId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assignmentList)) {
      $dara.Model.validateArray(this.assignmentList);
    }
    if(this.identity && typeof (this.identity as any).validate === 'function') {
      (this.identity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BaseUserResponse extends $dara.Model {
  /**
   * @example
   * http://a.b.c/ccp.jpg
   */
  avatar?: string;
  /**
   * @example
   * 1567407718386
   */
  createdAt?: string;
  /**
   * @example
   * system
   */
  creator?: string;
  /**
   * @example
   * 123
   */
  defaultDriveId?: string;
  defaultLocation?: string;
  denyChangePasswordBySelf?: boolean;
  /**
   * @example
   * ccp team user
   */
  description?: string;
  /**
   * @example
   * hz999
   */
  domainId?: string;
  /**
   * @example
   * 123@ccp.com
   */
  email?: string;
  /**
   * @example
   * 0
   */
  expiredAt?: number;
  isSync?: boolean;
  lastLoginTime?: number;
  needChangePasswordNextLogin?: boolean;
  /**
   * @example
   * abc
   */
  nickName?: string;
  pathStatus?: string;
  permission?: { [key: string]: IDPermission };
  /**
   * @example
   * 13700000000
   */
  phone?: string;
  phoneRegion?: string;
  /**
   * @example
   * user
   */
  role?: string;
  /**
   * @example
   * enabled
   */
  status?: string;
  /**
   * @example
   * 1567407718386
   */
  updatedAt?: string;
  userData?: { [key: string]: any };
  /**
   * @example
   * ccpuserid
   */
  userId?: string;
  /**
   * @example
   * name
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'avatar',
      createdAt: 'created_at',
      creator: 'creator',
      defaultDriveId: 'default_drive_id',
      defaultLocation: 'default_location',
      denyChangePasswordBySelf: 'deny_change_password_by_self',
      description: 'description',
      domainId: 'domain_id',
      email: 'email',
      expiredAt: 'expired_at',
      isSync: 'is_sync',
      lastLoginTime: 'last_login_time',
      needChangePasswordNextLogin: 'need_change_password_next_login',
      nickName: 'nick_name',
      pathStatus: 'path_status',
      permission: 'permission',
      phone: 'phone',
      phoneRegion: 'phone_region',
      role: 'role',
      status: 'status',
      updatedAt: 'updated_at',
      userData: 'user_data',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      createdAt: 'string',
      creator: 'string',
      defaultDriveId: 'string',
      defaultLocation: 'string',
      denyChangePasswordBySelf: 'boolean',
      description: 'string',
      domainId: 'string',
      email: 'string',
      expiredAt: 'number',
      isSync: 'boolean',
      lastLoginTime: 'number',
      needChangePasswordNextLogin: 'boolean',
      nickName: 'string',
      pathStatus: 'string',
      permission: { 'type': 'map', 'keyType': 'string', 'valueType': IDPermission },
      phone: 'string',
      phoneRegion: 'string',
      role: 'string',
      status: 'string',
      updatedAt: 'string',
      userData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(this.permission) {
      $dara.Model.validateMap(this.permission);
    }
    if(this.userData) {
      $dara.Model.validateMap(this.userData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BenefitPkgDeliveryInfo extends $dara.Model {
  amount?: number;
  createdAt?: string;
  expireTime?: string;
  isPermanent?: boolean;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      createdAt: 'created_at',
      expireTime: 'expire_time',
      isPermanent: 'is_permanent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      createdAt: 'string',
      expireTime: 'string',
      isPermanent: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CNameStatus extends $dara.Model {
  /**
   * @example
   * BINDING/BOUND
   */
  bingdingState?: string;
  /**
   * @example
   * NORMAL/ABNORMAL
   */
  legalState?: string;
  /**
   * @example
   * beian
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      bingdingState: 'bingding_state',
      legalState: 'legal_state',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bingdingState: 'string',
      legalState: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CdnFileDownloadCallbackInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccp-bj1-bj-1234
   */
  bucket?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  domainId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  driveId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  expire?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  fileId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  object?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * md5.Sum([]byte(fmt.Sprintf("%v%v%v%v%v%v...%v", 		req.Object, req.Range, req.DomainID, req.DriveID, req.UserID, req.FileID, req.Expire)))
   */
  token?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'bucket',
      domainId: 'domain_id',
      driveId: 'drive_id',
      expire: 'expire',
      fileId: 'file_id',
      object: 'object',
      token: 'token',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      domainId: 'string',
      driveId: 'string',
      expire: 'number',
      fileId: 'string',
      object: 'string',
      token: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertInfo extends $dara.Model {
  /**
   * @example
   * xxx
   */
  certBody?: string;
  /**
   * @example
   * xxx
   */
  certName?: string;
  /**
   * @example
   * xxx
   */
  certPrivatekey?: string;
  static names(): { [key: string]: string } {
    return {
      certBody: 'cert_body',
      certName: 'cert_name',
      certPrivatekey: 'cert_privatekey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certBody: 'string',
      certName: 'string',
      certPrivatekey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearRecycleBinItem extends $dara.Model {
  asyncTaskId?: string;
  domainId?: string;
  driveId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'async_task_id',
      domainId: 'domain_id',
      driveId: 'drive_id',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      domainId: 'string',
      driveId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommonFileItem extends $dara.Model {
  driveId?: string;
  fileId?: string;
  revisionId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      revisionId: 'revision_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      revisionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CssCreateOrderParam extends $dara.Model {
  agentId?: string;
  autoPay?: boolean;
  autoUseCoupon?: boolean;
  bid?: string;
  buyerId?: number;
  certificate?: string;
  childId?: number;
  cilentIp?: string;
  commodities?: CssInstanceCommodity[];
  createrNick?: string;
  cssAuthRequestParam?: any;
  fromApp?: string;
  language?: string;
  marketType?: number;
  memo?: string;
  orderOrigin?: string;
  orderParams?: { [key: string]: string };
  payerId?: number;
  planGroupId?: number;
  planId?: number;
  planInstanceId?: string;
  promotionCode?: string;
  promotionInputParam?: any;
  requestId?: string;
  skipChannel?: boolean;
  token?: string;
  transientAccess?: any;
  umidToken?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      autoPay: 'autoPay',
      autoUseCoupon: 'autoUseCoupon',
      bid: 'bid',
      buyerId: 'buyerId',
      certificate: 'certificate',
      childId: 'childId',
      cilentIp: 'cilentIp',
      commodities: 'commodities',
      createrNick: 'createrNick',
      cssAuthRequestParam: 'cssAuthRequestParam',
      fromApp: 'fromApp',
      language: 'language',
      marketType: 'marketType',
      memo: 'memo',
      orderOrigin: 'orderOrigin',
      orderParams: 'orderParams',
      payerId: 'payerId',
      planGroupId: 'planGroupId',
      planId: 'planId',
      planInstanceId: 'planInstanceId',
      promotionCode: 'promotionCode',
      promotionInputParam: 'promotionInputParam',
      requestId: 'requestId',
      skipChannel: 'skipChannel',
      token: 'token',
      transientAccess: 'transientAccess',
      umidToken: 'umidToken',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      autoPay: 'boolean',
      autoUseCoupon: 'boolean',
      bid: 'string',
      buyerId: 'number',
      certificate: 'string',
      childId: 'number',
      cilentIp: 'string',
      commodities: { 'type': 'array', 'itemType': CssInstanceCommodity },
      createrNick: 'string',
      cssAuthRequestParam: 'any',
      fromApp: 'string',
      language: 'string',
      marketType: 'number',
      memo: 'string',
      orderOrigin: 'string',
      orderParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      payerId: 'number',
      planGroupId: 'number',
      planId: 'number',
      planInstanceId: 'string',
      promotionCode: 'string',
      promotionInputParam: 'any',
      requestId: 'string',
      skipChannel: 'boolean',
      token: 'string',
      transientAccess: 'any',
      umidToken: 'string',
      userId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.commodities)) {
      $dara.Model.validateArray(this.commodities);
    }
    if(this.orderParams) {
      $dara.Model.validateMap(this.orderParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CssInstanceCommodity extends $dara.Model {
  activityId?: number;
  aliyunProduceCode?: string;
  chargeType?: string;
  commodityCode?: string;
  components?: CssInstanceComponent[];
  duration?: number;
  instanceId?: string;
  isFree?: boolean;
  isPrePayPostCharge?: boolean;
  isRenewChange?: boolean;
  isSyncToSubscription?: boolean;
  orderParams?: { [key: string]: string };
  orderType?: string;
  planItemId?: number;
  pricingCycle?: string;
  quantity?: number;
  redeemNoList?: string[];
  redeemOrderType?: string;
  refundSpecCode?: string;
  specCode?: string;
  specUpgradeOriginSpecCodes?: string[];
  specifyStartDate?: number;
  upgradeInquireFinancialValue?: boolean;
  static names(): { [key: string]: string } {
    return {
      activityId: 'activityId',
      aliyunProduceCode: 'aliyunProduceCode',
      chargeType: 'chargeType',
      commodityCode: 'commodityCode',
      components: 'components',
      duration: 'duration',
      instanceId: 'instanceId',
      isFree: 'isFree',
      isPrePayPostCharge: 'isPrePayPostCharge',
      isRenewChange: 'isRenewChange',
      isSyncToSubscription: 'isSyncToSubscription',
      orderParams: 'orderParams',
      orderType: 'orderType',
      planItemId: 'planItemId',
      pricingCycle: 'pricingCycle',
      quantity: 'quantity',
      redeemNoList: 'redeemNoList',
      redeemOrderType: 'redeemOrderType',
      refundSpecCode: 'refundSpecCode',
      specCode: 'specCode',
      specUpgradeOriginSpecCodes: 'specUpgradeOriginSpecCodes',
      specifyStartDate: 'specifyStartDate',
      upgradeInquireFinancialValue: 'upgradeInquireFinancialValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'number',
      aliyunProduceCode: 'string',
      chargeType: 'string',
      commodityCode: 'string',
      components: { 'type': 'array', 'itemType': CssInstanceComponent },
      duration: 'number',
      instanceId: 'string',
      isFree: 'boolean',
      isPrePayPostCharge: 'boolean',
      isRenewChange: 'boolean',
      isSyncToSubscription: 'boolean',
      orderParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      orderType: 'string',
      planItemId: 'number',
      pricingCycle: 'string',
      quantity: 'number',
      redeemNoList: { 'type': 'array', 'itemType': 'string' },
      redeemOrderType: 'string',
      refundSpecCode: 'string',
      specCode: 'string',
      specUpgradeOriginSpecCodes: { 'type': 'array', 'itemType': 'string' },
      specifyStartDate: 'number',
      upgradeInquireFinancialValue: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    if(this.orderParams) {
      $dara.Model.validateMap(this.orderParams);
    }
    if(Array.isArray(this.redeemNoList)) {
      $dara.Model.validateArray(this.redeemNoList);
    }
    if(Array.isArray(this.specUpgradeOriginSpecCodes)) {
      $dara.Model.validateArray(this.specUpgradeOriginSpecCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CssInstanceComponent extends $dara.Model {
  componentCode?: string;
  componentName?: string;
  globalKey?: string;
  instanceProperty?: CssInstanceProperty[];
  moduleAttrStatus?: number;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      componentCode: 'componentCode',
      componentName: 'componentName',
      globalKey: 'globalKey',
      instanceProperty: 'instanceProperty',
      moduleAttrStatus: 'moduleAttrStatus',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentCode: 'string',
      componentName: 'string',
      globalKey: 'string',
      instanceProperty: { 'type': 'array', 'itemType': CssInstanceProperty },
      moduleAttrStatus: 'number',
      tag: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceProperty)) {
      $dara.Model.validateArray(this.instanceProperty);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CssInstanceProperty extends $dara.Model {
  code?: string;
  globalKey?: string;
  name?: string;
  unit?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      globalKey: 'globalKey',
      name: 'name',
      unit: 'unit',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      globalKey: 'string',
      name: 'string',
      unit: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CssProduce extends $dara.Model {
  bid?: string;
  buyerId?: number;
  childId?: number;
  fromApp?: string;
  orderId?: number;
  payerId?: number;
  purchases?: CssPurchase[];
  requestId?: string;
  skipChannel?: boolean;
  token?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      bid: 'bid',
      buyerId: 'buyerId',
      childId: 'childId',
      fromApp: 'fromApp',
      orderId: 'orderId',
      payerId: 'payerId',
      purchases: 'purchases',
      requestId: 'requestId',
      skipChannel: 'skipChannel',
      token: 'token',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'string',
      buyerId: 'number',
      childId: 'number',
      fromApp: 'string',
      orderId: 'number',
      payerId: 'number',
      purchases: { 'type': 'array', 'itemType': CssPurchase },
      requestId: 'string',
      skipChannel: 'boolean',
      token: 'string',
      userId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.purchases)) {
      $dara.Model.validateArray(this.purchases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CssPurchase extends $dara.Model {
  chargeType?: string;
  commodityCode?: string;
  endDate?: number;
  gmtCreate?: number;
  instanceComponents?: CssInstanceComponent[];
  instanceId?: string;
  orderType?: string;
  purchaseParams?: { [key: string]: string };
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      commodityCode: 'commodityCode',
      endDate: 'endDate',
      gmtCreate: 'gmtCreate',
      instanceComponents: 'instanceComponents',
      instanceId: 'instanceId',
      orderType: 'orderType',
      purchaseParams: 'purchaseParams',
      startDate: 'startDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      endDate: 'number',
      gmtCreate: 'number',
      instanceComponents: { 'type': 'array', 'itemType': CssInstanceComponent },
      instanceId: 'string',
      orderType: 'string',
      purchaseParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      startDate: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceComponents)) {
      $dara.Model.validateArray(this.instanceComponents);
    }
    if(this.purchaseParams) {
      $dara.Model.validateMap(this.purchaseParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomSideLinkConfig extends $dara.Model {
  icon?: string;
  link?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      icon: 'icon',
      link: 'link',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icon: 'string',
      link: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataBoxPrivileges extends $dara.Model {
  featureAttrId?: string;
  featureId?: string;
  quota?: number;
  static names(): { [key: string]: string } {
    return {
      featureAttrId: 'feature_attr_id',
      featureId: 'feature_id',
      quota: 'quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureAttrId: 'string',
      featureId: 'string',
      quota: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataCName extends $dara.Model {
  certExpireTime?: number;
  certName?: string;
  cname?: string;
  cnameType?: string;
  location?: string;
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      certExpireTime: 'cert_expire_time',
      certName: 'cert_name',
      cname: 'cname',
      cnameType: 'cname_type',
      location: 'location',
      storeId: 'store_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certExpireTime: 'number',
      certName: 'string',
      cname: 'string',
      cnameType: 'string',
      location: 'string',
      storeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Domain extends $dara.Model {
  createdAt?: string;
  dataHashName?: string;
  description?: string;
  domainId?: string;
  domainName?: string;
  initDriveEnable?: boolean;
  initDriveSize?: number;
  parentDomainId?: string;
  publishedAppAccessStrategy?: AppAccessStrategy;
  sharable?: boolean;
  sizeQuota?: number;
  sizeQuotaUsed?: number;
  status?: number;
  updatedAt?: string;
  usedSize?: number;
  userCountQuota?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      dataHashName: 'data_hash_name',
      description: 'description',
      domainId: 'domain_id',
      domainName: 'domain_name',
      initDriveEnable: 'init_drive_enable',
      initDriveSize: 'init_drive_size',
      parentDomainId: 'parent_domain_id',
      publishedAppAccessStrategy: 'published_app_access_strategy',
      sharable: 'sharable',
      sizeQuota: 'size_quota',
      sizeQuotaUsed: 'size_quota_used',
      status: 'status',
      updatedAt: 'updated_at',
      usedSize: 'used_size',
      userCountQuota: 'user_count_quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      dataHashName: 'string',
      description: 'string',
      domainId: 'string',
      domainName: 'string',
      initDriveEnable: 'boolean',
      initDriveSize: 'number',
      parentDomainId: 'string',
      publishedAppAccessStrategy: AppAccessStrategy,
      sharable: 'boolean',
      sizeQuota: 'number',
      sizeQuotaUsed: 'number',
      status: 'number',
      updatedAt: 'string',
      usedSize: 'number',
      userCountQuota: 'number',
    };
  }

  validate() {
    if(this.publishedAppAccessStrategy && typeof (this.publishedAppAccessStrategy as any).validate === 'function') {
      (this.publishedAppAccessStrategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DomainAppConfig extends $dara.Model {
  allowUploadCustomFileExtList?: string[];
  allowUploadFileCategoryList?: string[];
  sameNameFileUploadMode?: string;
  singleFileUploadSizeLimit?: number;
  webClientDownloadMode?: string;
  static names(): { [key: string]: string } {
    return {
      allowUploadCustomFileExtList: 'allow_upload_custom_file_ext_list',
      allowUploadFileCategoryList: 'allow_upload_file_category_list',
      sameNameFileUploadMode: 'same_name_file_upload_mode',
      singleFileUploadSizeLimit: 'single_file_upload_size_limit',
      webClientDownloadMode: 'web_client_download_mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUploadCustomFileExtList: { 'type': 'array', 'itemType': 'string' },
      allowUploadFileCategoryList: { 'type': 'array', 'itemType': 'string' },
      sameNameFileUploadMode: 'string',
      singleFileUploadSizeLimit: 'number',
      webClientDownloadMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowUploadCustomFileExtList)) {
      $dara.Model.validateArray(this.allowUploadCustomFileExtList);
    }
    if(Array.isArray(this.allowUploadFileCategoryList)) {
      $dara.Model.validateArray(this.allowUploadFileCategoryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DomainBuildClientConfig extends $dara.Model {
  copyright?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      copyright: 'copyright',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      copyright: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DomainEndpoints extends $dara.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DomainSeniorConfig extends $dara.Model {
  clientDownloadEnable?: boolean;
  cspFrameAncestors?: string;
  customLoginAppid?: string;
  customLoginUrl?: string;
  customLogoutUrl?: string;
  customSideLinkList?: CustomSideLinkConfig[];
  homePageBgImageUrl?: string;
  homePageFooter?: string;
  homePageFooter2?: string;
  homePageSlogan?: string;
  refererEnable?: boolean;
  wxTxtList?: WxTrustedDomainConfig;
  static names(): { [key: string]: string } {
    return {
      clientDownloadEnable: 'client_download_enable',
      cspFrameAncestors: 'csp_frame_ancestors',
      customLoginAppid: 'custom_login_appid',
      customLoginUrl: 'custom_login_url',
      customLogoutUrl: 'custom_logout_url',
      customSideLinkList: 'custom_side_link_list',
      homePageBgImageUrl: 'home_page_bg_image_url',
      homePageFooter: 'home_page_footer',
      homePageFooter2: 'home_page_footer2',
      homePageSlogan: 'home_page_slogan',
      refererEnable: 'referer_enable',
      wxTxtList: 'wx_txt_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientDownloadEnable: 'boolean',
      cspFrameAncestors: 'string',
      customLoginAppid: 'string',
      customLoginUrl: 'string',
      customLogoutUrl: 'string',
      customSideLinkList: { 'type': 'array', 'itemType': CustomSideLinkConfig },
      homePageBgImageUrl: 'string',
      homePageFooter: 'string',
      homePageFooter2: 'string',
      homePageSlogan: 'string',
      refererEnable: 'boolean',
      wxTxtList: WxTrustedDomainConfig,
    };
  }

  validate() {
    if(Array.isArray(this.customSideLinkList)) {
      $dara.Model.validateArray(this.customSideLinkList);
    }
    if(this.wxTxtList && typeof (this.wxTxtList as any).validate === 'function') {
      (this.wxTxtList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Drive extends $dara.Model {
  createdAt?: string;
  creator?: string;
  description?: string;
  domainId?: string;
  driveId?: string;
  driveName?: string;
  driveType?: string;
  owner?: string;
  ownerType?: string;
  status?: string;
  totalSize?: number;
  usedSize?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      creator: 'creator',
      description: 'description',
      domainId: 'domain_id',
      driveId: 'drive_id',
      driveName: 'drive_name',
      driveType: 'drive_type',
      owner: 'owner',
      ownerType: 'owner_type',
      status: 'status',
      totalSize: 'total_size',
      usedSize: 'used_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      creator: 'string',
      description: 'string',
      domainId: 'string',
      driveId: 'string',
      driveName: 'string',
      driveType: 'string',
      owner: 'string',
      ownerType: 'string',
      status: 'string',
      totalSize: 'number',
      usedSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DriveLogDetail extends $dara.Model {
  forceDelete?: boolean;
  handoverOwnerName?: string;
  name?: string;
  ownerId?: string;
  ownerName?: string;
  ownerType?: string;
  totalSize?: number;
  updateTo?: DriveLogDetailUpdateTo;
  static names(): { [key: string]: string } {
    return {
      forceDelete: 'force_delete',
      handoverOwnerName: 'handover_owner_name',
      name: 'name',
      ownerId: 'owner_id',
      ownerName: 'owner_name',
      ownerType: 'owner_type',
      totalSize: 'total_size',
      updateTo: 'update_to',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceDelete: 'boolean',
      handoverOwnerName: 'string',
      name: 'string',
      ownerId: 'string',
      ownerName: 'string',
      ownerType: 'string',
      totalSize: 'number',
      updateTo: DriveLogDetailUpdateTo,
    };
  }

  validate() {
    if(this.updateTo && typeof (this.updateTo as any).validate === 'function') {
      (this.updateTo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExternalMultiFileRevisionConfig extends $dara.Model {
  revisionCount?: number;
  revisionMergeEnabled?: boolean;
  revisionRecyclePeriod?: number;
  static names(): { [key: string]: string } {
    return {
      revisionCount: 'revision_count',
      revisionMergeEnabled: 'revision_merge_enabled',
      revisionRecyclePeriod: 'revision_recycle_period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      revisionCount: 'number',
      revisionMergeEnabled: 'boolean',
      revisionRecyclePeriod: 'number',
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

export class FaceThumbnail extends $dara.Model {
  /**
   * @example
   * Cluster-e3b7fb52-22b3-44f2-9746-8c1804bd6af0
   */
  faceGroupId?: string;
  /**
   * @example
   * a9a66a86-73dd-4c95-8b79-1d8a49db5226
   */
  faceId?: string;
  /**
   * @example
   * https://pds-domain.region.aliyuncs.com/QieGeH98%2F1001%2F63e5e551ee621482ab934a0687c6cda75fc07864%2F642a8a40c00f1ad379df421694713ee65170f09b?security-token=CAIS%2BgF1q6Ft5B2yfSjIr5bjHPCNnrdR8aSaSW7woVlmVd1Bt5HorDz2IHpPfHdoBe0btvU%2BlWxX6fwZlq5rR4QAXlDfNSyFeX20qFHPWZHInuDox55m4cTXNAr%2BIhr%2F29CoEIedZdjBe%2FCrRknZnytou9XTfimjWFrXWv%2Fgy%2BQQDLItUxK%2FcCBNCfpPOwJms7V6D3bKMuu3OROY6Qi5TmgQ41En1DIlt%2FXuk5DCtkqB12eXkLFF%2B97DRbG%2FdNRpMZtFVNO44fd7bKKp0lQLsUMSqv8q0fEcqGaW4o7CWQJLnzyCMvvJ9OVDFyN0aKEnH7J%2Bq%2FzxhTPrMnpkSlacGoABPMvZ8rSESUEP96Vbf%2Bk0JRg9Qb1MnaIJqWAgo8K6K0UP1CtqL2zrUtugpKKDHOYiKbq2O0S5yLUPVX5vBHqEi%2FFc7i6ZnHCMcXLJs4rKDKwRBEhovUXXlklq2q43OSVtLrXkBy9Xs1ers%2FhJhcxpNA0Vl3EWfJxa2BTylEdnLOQ%3D&x-oss-access-key-id=STS.NUVWJ9shpFfqKHAEY3YRmXTCN&x-oss-expires=1686455451&x-oss-process=image%2Fcrop%2Cx_1128%2Cy_1211%2Cw_914%2Ch_914%2Fformat%2Cjpg&x-oss-signature=jmhOz91Tww1ciMEwadDiioU7d93FDiBNr8s8mHyMqW0%3D&x-oss-signature-version=OSS2
   * 
   * @deprecated
   */
  faceThumbnail?: string;
  static names(): { [key: string]: string } {
    return {
      faceGroupId: 'face_group_id',
      faceId: 'face_id',
      faceThumbnail: 'face_thumbnail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceGroupId: 'string',
      faceId: 'string',
      faceThumbnail: 'string',
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

export class FileDownloadCallbackInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccp-bj1-bj-1234
   */
  bucket?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  domainId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  driveId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  object?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'bucket',
      domainId: 'domain_id',
      driveId: 'drive_id',
      fileId: 'file_id',
      object: 'object',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      domainId: 'string',
      driveId: 'string',
      fileId: 'string',
      object: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileLogDetail extends $dara.Model {
  decompressFileList?: string[];
  newName?: string;
  parentPath?: string;
  revVersion?: number;
  revisionId?: string;
  size?: number;
  toParentPath?: string;
  toParentPathType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      decompressFileList: 'decompress_file_list',
      newName: 'new_name',
      parentPath: 'parent_path',
      revVersion: 'rev_version',
      revisionId: 'revision_id',
      size: 'size',
      toParentPath: 'to_parent_path',
      toParentPathType: 'to_parent_path_type',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      decompressFileList: { 'type': 'array', 'itemType': 'string' },
      newName: 'string',
      parentPath: 'string',
      revVersion: 'number',
      revisionId: 'string',
      size: 'number',
      toParentPath: 'string',
      toParentPathType: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.decompressFileList)) {
      $dara.Model.validateArray(this.decompressFileList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilePermissionMember extends $dara.Model {
  actionList?: string[];
  disinheritSubGroup?: boolean;
  expireTime?: number;
  identity?: Identity;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      actionList: 'action_list',
      disinheritSubGroup: 'disinherit_sub_group',
      expireTime: 'expire_time',
      identity: 'identity',
      roleId: 'role_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionList: { 'type': 'array', 'itemType': 'string' },
      disinheritSubGroup: 'boolean',
      expireTime: 'number',
      identity: Identity,
      roleId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actionList)) {
      $dara.Model.validateArray(this.actionList);
    }
    if(this.identity && typeof (this.identity as any).validate === 'function') {
      (this.identity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileStreamInfo extends $dara.Model {
  contentHash?: string;
  contentHashName?: string;
  contentMd5?: string;
  partInfoList?: UploadPartInfo;
  preHash?: string;
  proofCode?: string;
  proofVersion?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      contentHash: 'content_hash',
      contentHashName: 'content_hash_name',
      contentMd5: 'content_md5',
      partInfoList: 'part_info_list',
      preHash: 'pre_hash',
      proofCode: 'proof_code',
      proofVersion: 'proof_version',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentHash: 'string',
      contentHashName: 'string',
      contentMd5: 'string',
      partInfoList: UploadPartInfo,
      preHash: 'string',
      proofCode: 'string',
      proofVersion: 'string',
      size: 'number',
    };
  }

  validate() {
    if(this.partInfoList && typeof (this.partInfoList as any).validate === 'function') {
      (this.partInfoList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOfficeEditUrlOption extends $dara.Model {
  copy?: boolean;
  print?: boolean;
  readonly?: boolean;
  static names(): { [key: string]: string } {
    return {
      copy: 'copy',
      print: 'print',
      readonly: 'readonly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      copy: 'boolean',
      print: 'boolean',
      readonly: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOfficeEditUrlWatermark extends $dara.Model {
  fillstyle?: string;
  font?: string;
  horizontal?: number;
  rotate?: number;
  type?: number;
  value?: string;
  vertical?: number;
  static names(): { [key: string]: string } {
    return {
      fillstyle: 'fillstyle',
      font: 'font',
      horizontal: 'horizontal',
      rotate: 'rotate',
      type: 'type',
      value: 'value',
      vertical: 'vertical',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fillstyle: 'string',
      font: 'string',
      horizontal: 'number',
      rotate: 'number',
      type: 'number',
      value: 'string',
      vertical: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOfficePreviewUrlOption extends $dara.Model {
  copy?: boolean;
  print?: boolean;
  static names(): { [key: string]: string } {
    return {
      copy: 'copy',
      print: 'print',
    };
  }

  static types(): { [key: string]: any } {
    return {
      copy: 'boolean',
      print: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Group extends $dara.Model {
  createdAt?: number;
  creator?: string;
  description?: string;
  domainId?: string;
  groupId?: string;
  groupName?: string;
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      creator: 'creator',
      description: 'description',
      domainId: 'domain_id',
      groupId: 'group_id',
      groupName: 'group_name',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      creator: 'string',
      description: 'string',
      domainId: 'string',
      groupId: 'string',
      groupName: 'string',
      updatedAt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotDriveFile extends $dara.Model {
  /**
   * @example
   * 2
   */
  actionCount?: number;
  actionList?: string[];
  /**
   * @example
   * doc
   */
  category?: string;
  /**
   * @example
   * 1727059860000
   */
  countAt?: number;
  /**
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @example
   * 666ff36c22278f023ec
   */
  fileId?: string;
  /**
   * @example
   * a.jpg
   */
  name?: string;
  /**
   * @example
   * 666ff36c22278f023ec
   */
  revisionId?: string;
  static names(): { [key: string]: string } {
    return {
      actionCount: 'action_count',
      actionList: 'action_list',
      category: 'category',
      countAt: 'count_at',
      driveId: 'drive_id',
      fileId: 'file_id',
      name: 'name',
      revisionId: 'revision_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCount: 'number',
      actionList: { 'type': 'array', 'itemType': 'string' },
      category: 'string',
      countAt: 'number',
      driveId: 'string',
      fileId: 'string',
      name: 'string',
      revisionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actionList)) {
      $dara.Model.validateArray(this.actionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotKnowledgeBaseFile extends $dara.Model {
  /**
   * @example
   * 1
   */
  actionCount?: number;
  actionList?: string[];
  /**
   * @example
   * image
   */
  category?: string;
  /**
   * @example
   * 1727578860000
   */
  countAt?: number;
  /**
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @example
   * 666ff36c22278f023ec
   */
  fileId?: string;
  /**
   * @example
   * 4jTsp3AgW
   */
  knowledgeBaseId?: string;
  /**
   * @example
   * a.jpg
   */
  name?: string;
  /**
   * @example
   * 666ff36c22278f023ec
   */
  revisionId?: string;
  static names(): { [key: string]: string } {
    return {
      actionCount: 'action_count',
      actionList: 'action_list',
      category: 'category',
      countAt: 'count_at',
      driveId: 'drive_id',
      fileId: 'file_id',
      knowledgeBaseId: 'knowledge_base_id',
      name: 'name',
      revisionId: 'revision_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCount: 'number',
      actionList: { 'type': 'array', 'itemType': 'string' },
      category: 'string',
      countAt: 'number',
      driveId: 'string',
      fileId: 'string',
      knowledgeBaseId: 'string',
      name: 'string',
      revisionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actionList)) {
      $dara.Model.validateArray(this.actionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IDPermission extends $dara.Model {
  disinheritSubGroup?: boolean;
  expireTime?: number;
  /**
   * **if can be null:**
   * false
   */
  permission?: Permission;
  roles?: string[];
  static names(): { [key: string]: string } {
    return {
      disinheritSubGroup: 'disinherit_sub_group',
      expireTime: 'expire_time',
      permission: 'permission',
      roles: 'roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disinheritSubGroup: 'boolean',
      expireTime: 'number',
      permission: Permission,
      roles: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.permission && typeof (this.permission as any).validate === 'function') {
      (this.permission as any).validate();
    }
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Identity extends $dara.Model {
  identityId?: string;
  /**
   * @example
   * IT_User
   */
  identityType?: string;
  static names(): { [key: string]: string } {
    return {
      identityId: 'identity_id',
      identityType: 'identity_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityId: 'string',
      identityType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IdentityToBenefitPkgMapping extends $dara.Model {
  benefitPkgComputationRule?: string;
  benefitPkgId?: string;
  benefitPkgName?: string;
  benefitPkgOwnerId?: string;
  benefitPkgPriority?: number;
  benefitPkgType?: string;
  createdAt?: string;
  deliveryInfoList?: BenefitPkgDeliveryInfo[];
  identityId?: string;
  identityType?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      benefitPkgComputationRule: 'benefit_pkg_computation_rule',
      benefitPkgId: 'benefit_pkg_id',
      benefitPkgName: 'benefit_pkg_name',
      benefitPkgOwnerId: 'benefit_pkg_owner_id',
      benefitPkgPriority: 'benefit_pkg_priority',
      benefitPkgType: 'benefit_pkg_type',
      createdAt: 'created_at',
      deliveryInfoList: 'delivery_info_list',
      identityId: 'identity_id',
      identityType: 'identity_type',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      benefitPkgComputationRule: 'string',
      benefitPkgId: 'string',
      benefitPkgName: 'string',
      benefitPkgOwnerId: 'string',
      benefitPkgPriority: 'number',
      benefitPkgType: 'string',
      createdAt: 'string',
      deliveryInfoList: { 'type': 'array', 'itemType': BenefitPkgDeliveryInfo },
      identityId: 'string',
      identityType: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deliveryInfoList)) {
      $dara.Model.validateArray(this.deliveryInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageMediaMetadata extends $dara.Model {
  /**
   * @example
   * 浙江省杭州市滨江区西兴街道江陵路
   */
  addressLine?: string;
  /**
   * @example
   * 杭州市
   */
  city?: string;
  /**
   * @example
   * 中国
   */
  country?: string;
  /**
   * @example
   * 滨江区
   */
  district?: string;
  /**
   * @example
   * {"Compression":{"value":"6"},"DateTime":{"value":"2020:08:19 17:11:11"}}
   */
  exif?: string;
  facesThumbnail?: FaceThumbnail[];
  /**
   * @example
   * 1080
   */
  height?: number;
  imageQuality?: ImageQuality;
  imageTags?: SystemTag[];
  /**
   * @example
   * 30.185453,120.218522
   */
  location?: string;
  /**
   * @example
   * 浙江省
   */
  province?: string;
  /**
   * @example
   * 2006-01-02T15:04:05.000Z07:00
   */
  time?: string;
  /**
   * @example
   * 西兴街道
   */
  township?: string;
  /**
   * @example
   * 1920
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      addressLine: 'address_line',
      city: 'city',
      country: 'country',
      district: 'district',
      exif: 'exif',
      facesThumbnail: 'faces_thumbnail',
      height: 'height',
      imageQuality: 'image_quality',
      imageTags: 'image_tags',
      location: 'location',
      province: 'province',
      time: 'time',
      township: 'township',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressLine: 'string',
      city: 'string',
      country: 'string',
      district: 'string',
      exif: 'string',
      facesThumbnail: { 'type': 'array', 'itemType': FaceThumbnail },
      height: 'number',
      imageQuality: ImageQuality,
      imageTags: { 'type': 'array', 'itemType': SystemTag },
      location: 'string',
      province: 'string',
      time: 'string',
      township: 'string',
      width: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.facesThumbnail)) {
      $dara.Model.validateArray(this.facesThumbnail);
    }
    if(this.imageQuality && typeof (this.imageQuality as any).validate === 'function') {
      (this.imageQuality as any).validate();
    }
    if(Array.isArray(this.imageTags)) {
      $dara.Model.validateArray(this.imageTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageProcess extends $dara.Model {
  imageThumbnailProcess?: string;
  officeThumbnailProcess?: string;
  videoThumbnailProcess?: string;
  static names(): { [key: string]: string } {
    return {
      imageThumbnailProcess: 'image_thumbnail_process',
      officeThumbnailProcess: 'office_thumbnail_process',
      videoThumbnailProcess: 'video_thumbnail_process',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageThumbnailProcess: 'string',
      officeThumbnailProcess: 'string',
      videoThumbnailProcess: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageQuality extends $dara.Model {
  /**
   * @example
   * 0.736
   */
  overallScore?: number;
  static names(): { [key: string]: string } {
    return {
      overallScore: 'overall_score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overallScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageTag extends $dara.Model {
  /**
   * @example
   * 10
   */
  count?: number;
  /**
   * @example
   * image
   */
  coverFileCategory?: string;
  /**
   * @example
   * 5d79206586bb5dd69fb34c349282718146c55da7
   */
  coverFileId?: string;
  /**
   * @example
   * 0.736
   */
  coverOverallScore?: number;
  /**
   * @example
   * 1
   */
  coverTagConfidence?: number;
  /**
   * @example
   * https://data.aliyunpds.com/hz22%2F5d5b986facbec311ef844c25954f96821497b383%2F5d5b986f955410dd991646bb87c6b4e899eff525?Expires=xxx&OSSAccessKeyId=xxx&Signature=xxx
   */
  coverUrl?: string;
  /**
   * @example
   * 动物
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      coverFileCategory: 'cover_file_category',
      coverFileId: 'cover_file_id',
      coverOverallScore: 'cover_overall_score',
      coverTagConfidence: 'cover_tag_confidence',
      coverUrl: 'cover_url',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      coverFileCategory: 'string',
      coverFileId: 'string',
      coverOverallScore: 'number',
      coverTagConfidence: 'number',
      coverUrl: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Int64Range extends $dara.Model {
  from?: number;
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'from',
      to: 'to',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvestigationInfo extends $dara.Model {
  status?: number;
  suggestion?: string;
  videoDetail?: InvestigationInfoVideoDetail;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      suggestion: 'suggestion',
      videoDetail: 'video_detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      suggestion: 'string',
      videoDetail: InvestigationInfoVideoDetail,
    };
  }

  validate() {
    if(this.videoDetail && typeof (this.videoDetail as any).validate === 'function') {
      (this.videoDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JWTPayload extends $dara.Model {
  aud?: string;
  autoCreate?: boolean;
  exp?: number;
  iat?: number;
  iss?: string;
  jti?: string;
  nbf?: number;
  sub?: string;
  subType?: string;
  static names(): { [key: string]: string } {
    return {
      aud: 'aud',
      autoCreate: 'auto_create',
      exp: 'exp',
      iat: 'iat',
      iss: 'iss',
      jti: 'jti',
      nbf: 'nbf',
      sub: 'sub',
      subType: 'sub_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aud: 'string',
      autoCreate: 'boolean',
      exp: 'number',
      iat: 'number',
      iss: 'string',
      jti: 'string',
      nbf: 'number',
      sub: 'string',
      subType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KnowledgeBase extends $dara.Model {
  coverUri?: string;
  createdAt?: number;
  description?: string;
  fileFilter?: string;
  knowledgeBaseId?: string;
  linkRuleList?: LinkRule[];
  name?: string;
  ownerId?: string;
  ownerName?: string;
  ownerType?: string;
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      coverUri: 'cover_uri',
      createdAt: 'created_at',
      description: 'description',
      fileFilter: 'file_filter',
      knowledgeBaseId: 'knowledge_base_id',
      linkRuleList: 'link_rule_list',
      name: 'name',
      ownerId: 'owner_id',
      ownerName: 'owner_name',
      ownerType: 'owner_type',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUri: 'string',
      createdAt: 'number',
      description: 'string',
      fileFilter: 'string',
      knowledgeBaseId: 'string',
      linkRuleList: { 'type': 'array', 'itemType': LinkRule },
      name: 'string',
      ownerId: 'string',
      ownerName: 'string',
      ownerType: 'string',
      updatedAt: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.linkRuleList)) {
      $dara.Model.validateArray(this.linkRuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KnowledgeCategory extends $dara.Model {
  createdAt?: number;
  description?: string;
  keywords?: string[];
  knowledgeBaseId?: string;
  knowledgeBaseName?: string;
  knowledgeCategoryId?: string;
  name?: string;
  owner?: string;
  ownerType?: string;
  parentKnowledgeCategoryId?: string;
  status?: string;
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      description: 'description',
      keywords: 'keywords',
      knowledgeBaseId: 'knowledge_base_id',
      knowledgeBaseName: 'knowledge_base_name',
      knowledgeCategoryId: 'knowledge_category_id',
      name: 'name',
      owner: 'owner',
      ownerType: 'owner_type',
      parentKnowledgeCategoryId: 'parent_knowledge_category_id',
      status: 'status',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      description: 'string',
      keywords: { 'type': 'array', 'itemType': 'string' },
      knowledgeBaseId: 'string',
      knowledgeBaseName: 'string',
      knowledgeCategoryId: 'string',
      name: 'string',
      owner: 'string',
      ownerType: 'string',
      parentKnowledgeCategoryId: 'string',
      status: 'string',
      updatedAt: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.keywords)) {
      $dara.Model.validateArray(this.keywords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KnowledgeFile extends $dara.Model {
  creatorId?: string;
  driveId?: string;
  driveName?: string;
  fileCategory?: string;
  fileCreatedAt?: number;
  fileCreatorId?: string;
  fileId?: string;
  fileImageTime?: number;
  fileLastModifierId?: string;
  fileLastModifierType?: string;
  fileName?: string;
  fileNamePath?: string;
  fileSize?: number;
  fileUpdatedAt?: number;
  joinedAt?: number;
  knowledgeBaseId?: string;
  knowledgeCategoryId?: string;
  revisionId?: string;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'creator_id',
      driveId: 'drive_id',
      driveName: 'drive_name',
      fileCategory: 'file_category',
      fileCreatedAt: 'file_created_at',
      fileCreatorId: 'file_creator_id',
      fileId: 'file_id',
      fileImageTime: 'file_image_time',
      fileLastModifierId: 'file_last_modifier_id',
      fileLastModifierType: 'file_last_modifier_type',
      fileName: 'file_name',
      fileNamePath: 'file_name_path',
      fileSize: 'file_size',
      fileUpdatedAt: 'file_updated_at',
      joinedAt: 'joined_at',
      knowledgeBaseId: 'knowledge_base_id',
      knowledgeCategoryId: 'knowledge_category_id',
      revisionId: 'revision_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'string',
      driveId: 'string',
      driveName: 'string',
      fileCategory: 'string',
      fileCreatedAt: 'number',
      fileCreatorId: 'string',
      fileId: 'string',
      fileImageTime: 'number',
      fileLastModifierId: 'string',
      fileLastModifierType: 'string',
      fileName: 'string',
      fileNamePath: 'string',
      fileSize: 'number',
      fileUpdatedAt: 'number',
      joinedAt: 'number',
      knowledgeBaseId: 'string',
      knowledgeCategoryId: 'string',
      revisionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KnowledgeFileItem extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  driveId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LinkInfo extends $dara.Model {
  extra?: string;
  identity?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      extra: 'extra',
      identity: 'identity',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      identity: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LinkRule extends $dara.Model {
  linkType?: string;
  srcDriveId?: string;
  srcDriveName?: string;
  srcFileId?: string;
  srcFileName?: string;
  srcValid?: boolean;
  static names(): { [key: string]: string } {
    return {
      linkType: 'link_type',
      srcDriveId: 'src_drive_id',
      srcDriveName: 'src_drive_name',
      srcFileId: 'src_file_id',
      srcFileName: 'src_file_name',
      srcValid: 'src_valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      linkType: 'string',
      srcDriveId: 'string',
      srcDriveName: 'string',
      srcFileId: 'string',
      srcFileName: 'string',
      srcValid: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LocationDateCluster extends $dara.Model {
  address?: Address;
  clusterId?: string;
  createdAt?: string;
  customLabels?: { [key: string]: string };
  driveId?: string;
  endTime?: string;
  level?: string;
  startTime?: string;
  title?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      clusterId: 'cluster_id',
      createdAt: 'created_at',
      customLabels: 'custom_labels',
      driveId: 'drive_id',
      endTime: 'end_time',
      level: 'level',
      startTime: 'start_time',
      title: 'title',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: Address,
      clusterId: 'string',
      createdAt: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      driveId: 'string',
      endTime: 'string',
      level: 'string',
      startTime: 'string',
      title: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    if(this.address && typeof (this.address as any).validate === 'function') {
      (this.address as any).validate();
    }
    if(this.customLabels) {
      $dara.Model.validateMap(this.customLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Membership extends $dara.Model {
  createdAt?: number;
  creator?: string;
  description?: string;
  domainId?: string;
  groupId?: string;
  memberRole?: string;
  memberType?: string;
  subGroupId?: string;
  updatedAt?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      creator: 'creator',
      description: 'description',
      domainId: 'domain_id',
      groupId: 'group_id',
      memberRole: 'member_role',
      memberType: 'member_type',
      subGroupId: 'sub_group_id',
      updatedAt: 'updated_at',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      creator: 'string',
      description: 'string',
      domainId: 'string',
      groupId: 'string',
      memberRole: 'string',
      memberType: 'string',
      subGroupId: 'string',
      updatedAt: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NameCheckResult extends $dara.Model {
  existFileId?: string;
  existFileType?: string;
  static names(): { [key: string]: string } {
    return {
      existFileId: 'exist_file_id',
      existFileType: 'exist_file_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      existFileId: 'string',
      existFileType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfficeEditConfig extends $dara.Model {
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfficePreviewConfig extends $dara.Model {
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Permission extends $dara.Model {
  actionList?: PermissionActionList[];
  collection?: string;
  condition?: PermissionCondition;
  createdAt?: number;
  effect?: string;
  identityId?: string;
  identityType?: string;
  resource?: string;
  resourceType?: string;
  updatedAt?: number;
  userTags?: string[];
  static names(): { [key: string]: string } {
    return {
      actionList: 'action_list',
      collection: 'collection',
      condition: 'condition',
      createdAt: 'created_at',
      effect: 'effect',
      identityId: 'identity_id',
      identityType: 'identity_type',
      resource: 'resource',
      resourceType: 'resource_type',
      updatedAt: 'updated_at',
      userTags: 'user_tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionList: { 'type': 'array', 'itemType': PermissionActionList },
      collection: 'string',
      condition: PermissionCondition,
      createdAt: 'number',
      effect: 'string',
      identityId: 'string',
      identityType: 'string',
      resource: 'string',
      resourceType: 'string',
      updatedAt: 'number',
      userTags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.actionList)) {
      $dara.Model.validateArray(this.actionList);
    }
    if(this.condition && typeof (this.condition as any).validate === 'function') {
      (this.condition as any).validate();
    }
    if(Array.isArray(this.userTags)) {
      $dara.Model.validateArray(this.userTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PermissionCondition extends $dara.Model {
  ipEquals?: PermissionConditionIpEquals;
  ipNotEquals?: PermissionConditionIpNotEquals;
  stringLike?: PermissionConditionStringLike;
  stringNotLike?: PermissionConditionStringNotLike;
  static names(): { [key: string]: string } {
    return {
      ipEquals: 'ip_equals',
      ipNotEquals: 'ip_not_equals',
      stringLike: 'string_like',
      stringNotLike: 'string_not_like',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipEquals: PermissionConditionIpEquals,
      ipNotEquals: PermissionConditionIpNotEquals,
      stringLike: PermissionConditionStringLike,
      stringNotLike: PermissionConditionStringNotLike,
    };
  }

  validate() {
    if(this.ipEquals && typeof (this.ipEquals as any).validate === 'function') {
      (this.ipEquals as any).validate();
    }
    if(this.ipNotEquals && typeof (this.ipNotEquals as any).validate === 'function') {
      (this.ipNotEquals as any).validate();
    }
    if(this.stringLike && typeof (this.stringLike as any).validate === 'function') {
      (this.stringLike as any).validate();
    }
    if(this.stringNotLike && typeof (this.stringNotLike as any).validate === 'function') {
      (this.stringNotLike as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PersonalRightsInfoResponse extends $dara.Model {
  expiresTime?: string;
  historyLatestRights?: PersonalRightsInfoResponse;
  icon?: string;
  isExpires?: boolean;
  name?: string;
  otherRights?: PersonalRightsInfoResponse;
  privileges?: DataBoxPrivileges[];
  spuId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      expiresTime: 'expires_time',
      historyLatestRights: 'history_latest_rights',
      icon: 'icon',
      isExpires: 'is_expires',
      name: 'name',
      otherRights: 'other_rights',
      privileges: 'privileges',
      spuId: 'spu_id',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiresTime: 'string',
      historyLatestRights: PersonalRightsInfoResponse,
      icon: 'string',
      isExpires: 'boolean',
      name: 'string',
      otherRights: PersonalRightsInfoResponse,
      privileges: { 'type': 'array', 'itemType': DataBoxPrivileges },
      spuId: 'string',
      title: 'string',
    };
  }

  validate() {
    if(this.historyLatestRights && typeof (this.historyLatestRights as any).validate === 'function') {
      (this.historyLatestRights as any).validate();
    }
    if(this.otherRights && typeof (this.otherRights as any).validate === 'function') {
      (this.otherRights as any).validate();
    }
    if(Array.isArray(this.privileges)) {
      $dara.Model.validateArray(this.privileges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PersonalSpaceInfo extends $dara.Model {
  totalSize?: number;
  usedSize?: number;
  static names(): { [key: string]: string } {
    return {
      totalSize: 'total_size',
      usedSize: 'used_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalSize: 'number',
      usedSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecycleBinConfig extends $dara.Model {
  autoDeleteEnabled?: boolean;
  autoDeleteKeepSecond?: number;
  deleteTrashNormalFileDisabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoDeleteEnabled: 'auto_delete_enabled',
      autoDeleteKeepSecond: 'auto_delete_keep_second',
      deleteTrashNormalFileDisabled: 'delete_trash_normal_file_disabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDeleteEnabled: 'boolean',
      autoDeleteKeepSecond: 'number',
      deleteTrashNormalFileDisabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundNoticeParam extends $dara.Model {
  aliuid?: number;
  aliyunProduceCode?: string;
  commodityCode?: string;
  instanceId?: string;
  newExpireTime?: any;
  orderIds?: number[];
  refundParamMap?: { [key: string]: string };
  refundType?: string;
  static names(): { [key: string]: string } {
    return {
      aliuid: 'aliuid',
      aliyunProduceCode: 'aliyunProduceCode',
      commodityCode: 'commodityCode',
      instanceId: 'instanceId',
      newExpireTime: 'newExpireTime',
      orderIds: 'orderIds',
      refundParamMap: 'refundParamMap',
      refundType: 'refundType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliuid: 'number',
      aliyunProduceCode: 'string',
      commodityCode: 'string',
      instanceId: 'string',
      newExpireTime: 'any',
      orderIds: { 'type': 'array', 'itemType': 'number' },
      refundParamMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      refundType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.orderIds)) {
      $dara.Model.validateArray(this.orderIds);
    }
    if(this.refundParamMap) {
      $dara.Model.validateMap(this.refundParamMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class Role extends $dara.Model {
  createdAt?: number;
  creator?: string;
  description?: string;
  manageResourceType?: string;
  name?: string;
  permissions?: Permission[];
  roleId?: string;
  status?: string;
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      creator: 'creator',
      description: 'description',
      manageResourceType: 'manage_resource_type',
      name: 'name',
      permissions: 'permissions',
      roleId: 'role_id',
      status: 'status',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      creator: 'string',
      description: 'string',
      manageResourceType: 'string',
      name: 'string',
      permissions: { 'type': 'array', 'itemType': Permission },
      roleId: 'string',
      status: 'string',
      updatedAt: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.permissions)) {
      $dara.Model.validateArray(this.permissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFromThirdPartyItem extends $dara.Model {
  authenticationType?: string;
  extra?: string;
  identity?: string;
  others?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      authenticationType: 'authentication_type',
      extra: 'extra',
      identity: 'identity',
      others: 'others',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationType: 'string',
      extra: 'string',
      identity: 'string',
      others: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.others) {
      $dara.Model.validateMap(this.others);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShareLink extends $dara.Model {
  accessCount?: number;
  createdAt?: string;
  creator?: string;
  description?: string;
  disableDownload?: boolean;
  disablePreview?: boolean;
  disableSave?: boolean;
  downloadCount?: number;
  downloadLimit?: number;
  driveId?: string;
  expiration?: string;
  expired?: boolean;
  fileIdList?: string[];
  officeEditable?: boolean;
  previewCount?: number;
  previewLimit?: number;
  reportCount?: number;
  saveCount?: number;
  saveDownloadLimit?: number;
  saveLimit?: number;
  shareAllFiles?: boolean;
  shareId?: string;
  shareName?: string;
  sharePwd?: string;
  status?: string;
  updatedAt?: string;
  videoPreviewCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessCount: 'access_count',
      createdAt: 'created_at',
      creator: 'creator',
      description: 'description',
      disableDownload: 'disable_download',
      disablePreview: 'disable_preview',
      disableSave: 'disable_save',
      downloadCount: 'download_count',
      downloadLimit: 'download_limit',
      driveId: 'drive_id',
      expiration: 'expiration',
      expired: 'expired',
      fileIdList: 'file_id_list',
      officeEditable: 'office_editable',
      previewCount: 'preview_count',
      previewLimit: 'preview_limit',
      reportCount: 'report_count',
      saveCount: 'save_count',
      saveDownloadLimit: 'save_download_limit',
      saveLimit: 'save_limit',
      shareAllFiles: 'share_all_files',
      shareId: 'share_id',
      shareName: 'share_name',
      sharePwd: 'share_pwd',
      status: 'status',
      updatedAt: 'updated_at',
      videoPreviewCount: 'video_preview_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessCount: 'number',
      createdAt: 'string',
      creator: 'string',
      description: 'string',
      disableDownload: 'boolean',
      disablePreview: 'boolean',
      disableSave: 'boolean',
      downloadCount: 'number',
      downloadLimit: 'number',
      driveId: 'string',
      expiration: 'string',
      expired: 'boolean',
      fileIdList: { 'type': 'array', 'itemType': 'string' },
      officeEditable: 'boolean',
      previewCount: 'number',
      previewLimit: 'number',
      reportCount: 'number',
      saveCount: 'number',
      saveDownloadLimit: 'number',
      saveLimit: 'number',
      shareAllFiles: 'boolean',
      shareId: 'string',
      shareName: 'string',
      sharePwd: 'string',
      status: 'string',
      updatedAt: 'string',
      videoPreviewCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.fileIdList)) {
      $dara.Model.validateArray(this.fileIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShareLinkConfig extends $dara.Model {
  enableShareLinkOfficeEdit?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableShareLinkOfficeEdit: 'enable_share_link_office_edit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableShareLinkOfficeEdit: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShareLinkDetail extends $dara.Model {
  enableOfficeEditable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableOfficeEditable: 'enable_office_editable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableOfficeEditable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SimpleQuery extends $dara.Model {
  field?: Buffer;
  operation?: Buffer;
  subQueries?: SimpleQuery[];
  value?: Buffer;
  static names(): { [key: string]: string } {
    return {
      field: 'field',
      operation: 'operation',
      subQueries: 'sub_queries',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'Buffer',
      operation: 'Buffer',
      subQueries: { 'type': 'array', 'itemType': SimpleQuery },
      value: 'Buffer',
    };
  }

  validate() {
    if(Array.isArray(this.subQueries)) {
      $dara.Model.validateArray(this.subQueries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SimpleStreamInfo extends $dara.Model {
  contentHash?: string;
  contentHashName?: string;
  crc64Hash?: string;
  downloadUrl?: string;
  size?: number;
  thumbnail?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      contentHash: 'content_hash',
      contentHashName: 'content_hash_name',
      crc64Hash: 'crc64_hash',
      downloadUrl: 'download_url',
      size: 'size',
      thumbnail: 'thumbnail',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentHash: 'string',
      contentHashName: 'string',
      crc64Hash: 'string',
      downloadUrl: 'string',
      size: 'number',
      thumbnail: 'string',
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

export class SystemTag extends $dara.Model {
  /**
   * @example
   * 0.877
   */
  centricScore?: number;
  /**
   * @example
   * 0.98
   */
  confidence?: number;
  /**
   * @example
   * 篮球
   */
  name?: string;
  /**
   * @example
   * 运动
   */
  parentName?: string;
  /**
   * @example
   * 3
   */
  tagLevel?: number;
  static names(): { [key: string]: string } {
    return {
      centricScore: 'centric_score',
      confidence: 'confidence',
      name: 'name',
      parentName: 'parent_name',
      tagLevel: 'tag_level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centricScore: 'number',
      confidence: 'number',
      name: 'string',
      parentName: 'string',
      tagLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TimeRange extends $dara.Model {
  end?: string;
  start?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'string',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Token extends $dara.Model {
  accessToken?: string;
  avatar?: string;
  defaultDriveId?: string;
  defaultSboxDriveId?: string;
  deviceId?: string;
  deviceName?: string;
  domainId?: string;
  existLink?: LinkInfo[];
  expireTime?: string;
  expiresIn?: number;
  isFirstLogin?: boolean;
  needLink?: boolean;
  needRpVerify?: boolean;
  nickName?: string;
  pinSetup?: boolean;
  refreshToken?: string;
  role?: string;
  state?: string;
  status?: string;
  tokenType?: string;
  userData?: { [key: string]: string };
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'access_token',
      avatar: 'avatar',
      defaultDriveId: 'default_drive_id',
      defaultSboxDriveId: 'default_sbox_drive_id',
      deviceId: 'device_id',
      deviceName: 'device_name',
      domainId: 'domain_id',
      existLink: 'exist_link',
      expireTime: 'expire_time',
      expiresIn: 'expires_in',
      isFirstLogin: 'is_first_login',
      needLink: 'need_link',
      needRpVerify: 'need_rp_verify',
      nickName: 'nick_name',
      pinSetup: 'pin_setup',
      refreshToken: 'refresh_token',
      role: 'role',
      state: 'state',
      status: 'status',
      tokenType: 'token_type',
      userData: 'user_data',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      avatar: 'string',
      defaultDriveId: 'string',
      defaultSboxDriveId: 'string',
      deviceId: 'string',
      deviceName: 'string',
      domainId: 'string',
      existLink: { 'type': 'array', 'itemType': LinkInfo },
      expireTime: 'string',
      expiresIn: 'number',
      isFirstLogin: 'boolean',
      needLink: 'boolean',
      needRpVerify: 'boolean',
      nickName: 'string',
      pinSetup: 'boolean',
      refreshToken: 'string',
      role: 'string',
      state: 'string',
      status: 'string',
      tokenType: 'string',
      userData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.existLink)) {
      $dara.Model.validateArray(this.existLink);
    }
    if(this.userData) {
      $dara.Model.validateMap(this.userData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UncompressConfigResponse extends $dara.Model {
  enabled?: boolean;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UncompressedFileInfo extends $dara.Model {
  driveId?: string;
  fileId?: string;
  isFolder?: boolean;
  items?: UncompressedFileInfo[];
  name?: string;
  size?: number;
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      isFolder: 'is_folder',
      items: 'items',
      name: 'name',
      size: 'size',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      isFolder: 'boolean',
      items: { 'type': 'array', 'itemType': UncompressedFileInfo },
      name: 'string',
      size: 'number',
      updatedAt: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFormInfo extends $dara.Model {
  bucketName?: string;
  endpoint?: string;
  formData?: { [key: string]: string };
  objectKey?: string;
  ossAccessKeyId?: string;
  ossEndPoint?: string;
  ossSecurityToken?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucket_name',
      endpoint: 'endpoint',
      formData: 'form_data',
      objectKey: 'object_key',
      ossAccessKeyId: 'oss_access_key_id',
      ossEndPoint: 'oss_end_point',
      ossSecurityToken: 'oss_security_token',
      policy: 'policy',
      signature: 'signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      endpoint: 'string',
      formData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      objectKey: 'string',
      ossAccessKeyId: 'string',
      ossEndPoint: 'string',
      ossSecurityToken: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  validate() {
    if(this.formData) {
      $dara.Model.validateMap(this.formData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadPartInfo extends $dara.Model {
  /**
   * @example
   * 0CC175B9C0F1B6A831C399E269772661
   */
  etag?: string;
  internalUploadUrl?: string;
  parallelSha1Ctx?: UploadPartInfoParallelSha1Ctx;
  parallelSha256Ctx?: UploadPartInfoParallelSha256Ctx;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  partNumber?: number;
  /**
   * @example
   * 1024
   */
  partSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  uploadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      etag: 'etag',
      internalUploadUrl: 'internal_upload_url',
      parallelSha1Ctx: 'parallel_sha1_ctx',
      parallelSha256Ctx: 'parallel_sha256_ctx',
      partNumber: 'part_number',
      partSize: 'part_size',
      uploadUrl: 'upload_url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      etag: 'string',
      internalUploadUrl: 'string',
      parallelSha1Ctx: UploadPartInfoParallelSha1Ctx,
      parallelSha256Ctx: UploadPartInfoParallelSha256Ctx,
      partNumber: 'number',
      partSize: 'number',
      uploadUrl: 'string',
    };
  }

  validate() {
    if(this.parallelSha1Ctx && typeof (this.parallelSha1Ctx as any).validate === 'function') {
      (this.parallelSha1Ctx as any).validate();
    }
    if(this.parallelSha256Ctx && typeof (this.parallelSha256Ctx as any).validate === 'function') {
      (this.parallelSha256Ctx as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class User extends $dara.Model {
  avatar?: string;
  createdAt?: number;
  creator?: string;
  defaultDriveId?: string;
  description?: string;
  domainId?: string;
  email?: string;
  nickName?: string;
  phone?: string;
  role?: string;
  status?: string;
  updatedAt?: number;
  userData?: { [key: string]: string };
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'avatar',
      createdAt: 'created_at',
      creator: 'creator',
      defaultDriveId: 'default_drive_id',
      description: 'description',
      domainId: 'domain_id',
      email: 'email',
      nickName: 'nick_name',
      phone: 'phone',
      role: 'role',
      status: 'status',
      updatedAt: 'updated_at',
      userData: 'user_data',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      createdAt: 'number',
      creator: 'string',
      defaultDriveId: 'string',
      description: 'string',
      domainId: 'string',
      email: 'string',
      nickName: 'string',
      phone: 'string',
      role: 'string',
      status: 'string',
      updatedAt: 'number',
      userData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(this.userData) {
      $dara.Model.validateMap(this.userData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UserExtraItem extends $dara.Model {
  account?: AccountLinkInfo[];
  /**
   * @example
   * http://a.b.c/ccp.jpg
   */
  avatar?: string;
  /**
   * @example
   * 1567407718386
   */
  createdAt?: string;
  /**
   * @example
   * system
   */
  creator?: string;
  /**
   * **if can be null:**
   * true
   */
  defaultDrive?: BaseDriveResponse;
  /**
   * @example
   * 123
   */
  defaultDriveId?: string;
  defaultLocation?: string;
  denyChangePasswordBySelf?: boolean;
  /**
   * @example
   * ccp team user
   */
  description?: string;
  /**
   * @example
   * hz999
   */
  domainId?: string;
  /**
   * @example
   * 123@ccp.com
   */
  email?: string;
  /**
   * @example
   * 0
   */
  expiredAt?: number;
  isSync?: boolean;
  lastLoginTime?: number;
  needChangePasswordNextLogin?: boolean;
  /**
   * @example
   * abc
   */
  nickName?: string;
  parentGroup?: BaseDriveResponse[];
  pathStatus?: string;
  permission?: { [key: string]: IDPermission };
  /**
   * @example
   * 13700000000
   */
  phone?: string;
  phoneRegion?: string;
  /**
   * @example
   * user
   */
  role?: string;
  /**
   * @example
   * enabled
   */
  status?: string;
  /**
   * @example
   * 1567407718386
   */
  updatedAt?: string;
  userData?: { [key: string]: any };
  /**
   * @example
   * ccpuserid
   */
  userId?: string;
  /**
   * @example
   * name
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'account',
      avatar: 'avatar',
      createdAt: 'created_at',
      creator: 'creator',
      defaultDrive: 'default_drive',
      defaultDriveId: 'default_drive_id',
      defaultLocation: 'default_location',
      denyChangePasswordBySelf: 'deny_change_password_by_self',
      description: 'description',
      domainId: 'domain_id',
      email: 'email',
      expiredAt: 'expired_at',
      isSync: 'is_sync',
      lastLoginTime: 'last_login_time',
      needChangePasswordNextLogin: 'need_change_password_next_login',
      nickName: 'nick_name',
      parentGroup: 'parent_group',
      pathStatus: 'path_status',
      permission: 'permission',
      phone: 'phone',
      phoneRegion: 'phone_region',
      role: 'role',
      status: 'status',
      updatedAt: 'updated_at',
      userData: 'user_data',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: { 'type': 'array', 'itemType': AccountLinkInfo },
      avatar: 'string',
      createdAt: 'string',
      creator: 'string',
      defaultDrive: BaseDriveResponse,
      defaultDriveId: 'string',
      defaultLocation: 'string',
      denyChangePasswordBySelf: 'boolean',
      description: 'string',
      domainId: 'string',
      email: 'string',
      expiredAt: 'number',
      isSync: 'boolean',
      lastLoginTime: 'number',
      needChangePasswordNextLogin: 'boolean',
      nickName: 'string',
      parentGroup: { 'type': 'array', 'itemType': BaseDriveResponse },
      pathStatus: 'string',
      permission: { 'type': 'map', 'keyType': 'string', 'valueType': IDPermission },
      phone: 'string',
      phoneRegion: 'string',
      role: 'string',
      status: 'string',
      updatedAt: 'string',
      userData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.account)) {
      $dara.Model.validateArray(this.account);
    }
    if(this.defaultDrive && typeof (this.defaultDrive as any).validate === 'function') {
      (this.defaultDrive as any).validate();
    }
    if(Array.isArray(this.parentGroup)) {
      $dara.Model.validateArray(this.parentGroup);
    }
    if(this.permission) {
      $dara.Model.validateMap(this.permission);
    }
    if(this.userData) {
      $dara.Model.validateMap(this.userData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UserLogDetail extends $dara.Model {
  email?: string;
  expiredAt?: number;
  name?: string;
  phone?: string;
  roleId?: string;
  updateTo?: UserLogDetailUpdateTo;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      expiredAt: 'expired_at',
      name: 'name',
      phone: 'phone',
      roleId: 'role_id',
      updateTo: 'update_to',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      expiredAt: 'number',
      name: 'string',
      phone: 'string',
      roleId: 'string',
      updateTo: UserLogDetailUpdateTo,
    };
  }

  validate() {
    if(this.updateTo && typeof (this.updateTo as any).validate === 'function') {
      (this.updateTo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UserTag extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoMediaAudioStream extends $dara.Model {
  /**
   * @example
   * 129280
   */
  bitRate?: string;
  /**
   * @example
   * aac
   */
  codeName?: string;
  /**
   * @example
   * 7704.573000
   */
  duration?: string;
  static names(): { [key: string]: string } {
    return {
      bitRate: 'bit_rate',
      codeName: 'code_name',
      duration: 'duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitRate: 'string',
      codeName: 'string',
      duration: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoMediaMetadata extends $dara.Model {
  /**
   * @example
   * 1080
   */
  height?: number;
  videoMediaAudioStream?: VideoMediaAudioStream[];
  videoMediaVideoStream?: VideoMediaVideoStream[];
  /**
   * @example
   * 1920
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'height',
      videoMediaAudioStream: 'video_media_audio_stream',
      videoMediaVideoStream: 'video_media_video_stream',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      videoMediaAudioStream: { 'type': 'array', 'itemType': VideoMediaAudioStream },
      videoMediaVideoStream: { 'type': 'array', 'itemType': VideoMediaVideoStream },
      width: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.videoMediaAudioStream)) {
      $dara.Model.validateArray(this.videoMediaAudioStream);
    }
    if(Array.isArray(this.videoMediaVideoStream)) {
      $dara.Model.validateArray(this.videoMediaVideoStream);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoMediaVideoStream extends $dara.Model {
  /**
   * @example
   * 108420
   */
  bitrate?: string;
  /**
   * @example
   * h264
   */
  codeName?: string;
  /**
   * @example
   * 22.88
   */
  duration?: string;
  /**
   * @example
   * 90
   */
  frameCount?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'bitrate',
      codeName: 'code_name',
      duration: 'duration',
      frameCount: 'frame_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      codeName: 'string',
      duration: 'string',
      frameCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoPreviewPlayInfo extends $dara.Model {
  /**
   * @example
   * live_transcoding
   */
  category?: string;
  liveTranscodingSubtitleTaskList?: VideoPreviewSubtitleInfo[];
  liveTranscodingTaskList?: VideoPreviewPlayInfoLiveTranscodingTaskList[];
  masterUrl?: string;
  meta?: VideoPreviewPlayInfoMeta;
  offlineVideoTranscodingList?: VideoPreviewPlayInfoOfflineVideoTranscodingList[];
  offlineVideoTranscodingSubtitleList?: VideoPreviewSubtitleInfo[];
  quickVideoList?: VideoPreviewPlayInfoQuickVideoList[];
  quickVideoSubtitleList?: VideoPreviewSubtitleInfo[];
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      liveTranscodingSubtitleTaskList: 'live_transcoding_subtitle_task_list',
      liveTranscodingTaskList: 'live_transcoding_task_list',
      masterUrl: 'master_url',
      meta: 'meta',
      offlineVideoTranscodingList: 'offline_video_transcoding_list',
      offlineVideoTranscodingSubtitleList: 'offline_video_transcoding_subtitle_list',
      quickVideoList: 'quick_video_list',
      quickVideoSubtitleList: 'quick_video_subtitle_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      liveTranscodingSubtitleTaskList: { 'type': 'array', 'itemType': VideoPreviewSubtitleInfo },
      liveTranscodingTaskList: { 'type': 'array', 'itemType': VideoPreviewPlayInfoLiveTranscodingTaskList },
      masterUrl: 'string',
      meta: VideoPreviewPlayInfoMeta,
      offlineVideoTranscodingList: { 'type': 'array', 'itemType': VideoPreviewPlayInfoOfflineVideoTranscodingList },
      offlineVideoTranscodingSubtitleList: { 'type': 'array', 'itemType': VideoPreviewSubtitleInfo },
      quickVideoList: { 'type': 'array', 'itemType': VideoPreviewPlayInfoQuickVideoList },
      quickVideoSubtitleList: { 'type': 'array', 'itemType': VideoPreviewSubtitleInfo },
    };
  }

  validate() {
    if(Array.isArray(this.liveTranscodingSubtitleTaskList)) {
      $dara.Model.validateArray(this.liveTranscodingSubtitleTaskList);
    }
    if(Array.isArray(this.liveTranscodingTaskList)) {
      $dara.Model.validateArray(this.liveTranscodingTaskList);
    }
    if(this.meta && typeof (this.meta as any).validate === 'function') {
      (this.meta as any).validate();
    }
    if(Array.isArray(this.offlineVideoTranscodingList)) {
      $dara.Model.validateArray(this.offlineVideoTranscodingList);
    }
    if(Array.isArray(this.offlineVideoTranscodingSubtitleList)) {
      $dara.Model.validateArray(this.offlineVideoTranscodingSubtitleList);
    }
    if(Array.isArray(this.quickVideoList)) {
      $dara.Model.validateArray(this.quickVideoList);
    }
    if(Array.isArray(this.quickVideoSubtitleList)) {
      $dara.Model.validateArray(this.quickVideoSubtitleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoPreviewPlayMeta extends $dara.Model {
  /**
   * @example
   * live_transcoding
   */
  category?: string;
  liveTranscodingTaskList?: VideoPreviewPlayMetaLiveTranscodingTaskList[];
  meta?: VideoPreviewPlayMetaMeta;
  offlineVideoTranscodingList?: VideoPreviewPlayMetaOfflineVideoTranscodingList[];
  quickVideoList?: VideoPreviewPlayMetaQuickVideoList[];
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      liveTranscodingTaskList: 'live_transcoding_task_list',
      meta: 'meta',
      offlineVideoTranscodingList: 'offline_video_transcoding_list',
      quickVideoList: 'quick_video_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      liveTranscodingTaskList: { 'type': 'array', 'itemType': VideoPreviewPlayMetaLiveTranscodingTaskList },
      meta: VideoPreviewPlayMetaMeta,
      offlineVideoTranscodingList: { 'type': 'array', 'itemType': VideoPreviewPlayMetaOfflineVideoTranscodingList },
      quickVideoList: { 'type': 'array', 'itemType': VideoPreviewPlayMetaQuickVideoList },
    };
  }

  validate() {
    if(Array.isArray(this.liveTranscodingTaskList)) {
      $dara.Model.validateArray(this.liveTranscodingTaskList);
    }
    if(this.meta && typeof (this.meta as any).validate === 'function') {
      (this.meta as any).validate();
    }
    if(Array.isArray(this.offlineVideoTranscodingList)) {
      $dara.Model.validateArray(this.offlineVideoTranscodingList);
    }
    if(Array.isArray(this.quickVideoList)) {
      $dara.Model.validateArray(this.quickVideoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoPreviewSubtitleInfo extends $dara.Model {
  language?: string;
  status?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'language',
      status: 'status',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      status: 'string',
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

export class View extends $dara.Model {
  category?: string;
  createdAt?: string;
  description?: string;
  exFieldsInfo?: { [key: string]: any };
  fileCount?: number;
  name?: string;
  owner?: string;
  updatedAt?: string;
  viewId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      createdAt: 'created_at',
      description: 'description',
      exFieldsInfo: 'ex_fields_info',
      fileCount: 'file_count',
      name: 'name',
      owner: 'owner',
      updatedAt: 'updated_at',
      viewId: 'view_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      createdAt: 'string',
      description: 'string',
      exFieldsInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      fileCount: 'number',
      name: 'string',
      owner: 'string',
      updatedAt: 'string',
      viewId: 'string',
    };
  }

  validate() {
    if(this.exFieldsInfo) {
      $dara.Model.validateMap(this.exFieldsInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class WatermarkEnableConfig extends $dara.Model {
  displayAccessUserName?: boolean;
  displayCustomText?: string;
  displayShareLinkCreatorName?: boolean;
  enableDocPreview?: boolean;
  static names(): { [key: string]: string } {
    return {
      displayAccessUserName: 'display_access_user_name',
      displayCustomText: 'display_custom_text',
      displayShareLinkCreatorName: 'display_shareLink_creator_name',
      enableDocPreview: 'enable_doc_preview',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayAccessUserName: 'boolean',
      displayCustomText: 'string',
      displayShareLinkCreatorName: 'boolean',
      enableDocPreview: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WxTrustedDomainConfig extends $dara.Model {
  content?: string;
  name?: string;
  show?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      name: 'name',
      show: 'show',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      name: 'string',
      show: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the destination group to which the member is added.
   * 
   * This parameter is required.
   * 
   * @example
   * 3e5***2c2
   */
  groupId?: string;
  /**
   * @remarks
   * The member ID. If member_type is set to user, set this parameter to a user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2e4***1b1
   */
  memberId?: string;
  /**
   * @remarks
   * The type of the member. Set the value to user. When you create a group, you can directly add the group to a parent group.
   * 
   * * user
   * 
   * Note: A group can be added to only one group. A user can be added to multiple groups.
   * 
   * This parameter is required.
   * 
   * @example
   * user
   */
  memberType?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'group_id',
      memberId: 'member_id',
      memberType: 'member_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      memberId: 'string',
      memberType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupMemberResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddStoryFilesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  files?: AddStoryFilesRequestFiles[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9132e0d8-fe92-4e56-86c3-f5f112308003
   */
  storyId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      files: 'files',
      storyId: 'story_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      files: { 'type': 'array', 'itemType': AddStoryFilesRequestFiles },
      storyId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddStoryFilesResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  driveId?: string;
  files?: AddStoryFile[];
  requestId?: string;
  /**
   * @example
   * 9132e0d8-fe92-4e56-86c3-f5f112308003
   */
  storyId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      files: 'files',
      requestId: 'request_id',
      storyId: 'story_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      files: { 'type': 'array', 'itemType': AddStoryFile },
      requestId: 'string',
      storyId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddStoryFilesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddStoryFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddStoryFilesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of a user. The group administrator role can only be assigned to a user.
   * 
   * This parameter is required.
   */
  identity?: Identity;
  /**
   * @remarks
   * The ID of the resource that the role can manage. You can only set this parameter to the ID of a group.
   * 
   * This parameter is required.
   * 
   * @example
   * 105***b82
   */
  manageResourceId?: string;
  /**
   * @remarks
   * The type of the resource that the role can manage. Valid value: RT_Group.
   * 
   * This parameter is required.
   * 
   * @example
   * RT_Group
   */
  manageResourceType?: string;
  /**
   * @remarks
   * The ID of the role that is assigned to a user. Valid value: SystemGroupAdmin.
   * 
   * This parameter is required.
   * 
   * @example
   * SystemGroupAdmin
   */
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      identity: 'identity',
      manageResourceId: 'manage_resource_id',
      manageResourceType: 'manage_resource_type',
      roleId: 'role_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identity: Identity,
      manageResourceId: 'string',
      manageResourceType: 'string',
      roleId: 'string',
    };
  }

  validate() {
    if(this.identity && typeof (this.identity as any).validate === 'function') {
      (this.identity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignRoleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID returned when the application was created.
   * 
   * This parameter is required.
   * 
   * @example
   * 47eUHhrzgWBvlLWj
   */
  clientId?: string;
  /**
   * @remarks
   * Specifies whether to hide the consent page.
   * 
   * @example
   * true
   */
  hideConsent?: boolean;
  /**
   * @remarks
   * The authentication method. Valid values:
   * 
   * *   default: all logon methods that are integrated on the default logon page provided by Drive and Photo Service.
   * *   ding: logs on by scanning a DingTalk QR code.
   * *   ding_sns: logs on by entering a DingTalk account and its password.
   * *   ram: logs on as an Alibaba Cloud Resource Access Management (RAM) user.
   * *   wechat: logs on by scanning a WeCom QR code.
   * *   wechat_app: logs on without authentication in WeCom.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  loginType?: string;
  /**
   * @remarks
   * The callback URL specified when the application was created.
   * 
   * This parameter is required.
   * 
   * @example
   * https://www.aliyunpds.com/sign/callback
   */
  redirectUri?: string;
  /**
   * @remarks
   * The format in which to return the response. Set the value to code.
   * 
   * This parameter is required.
   * 
   * @example
   * code
   */
  responseType?: string;
  /**
   * @remarks
   * The requested permissions. By default, all permissions are requested.
   */
  scope?: string[];
  /**
   * @remarks
   * The user-defined parameter to return in the callback URL after the requested permissions are granted.
   * 
   * @example
   * customdata
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'client_id',
      hideConsent: 'hide_consent',
      loginType: 'login_type',
      redirectUri: 'redirect_uri',
      responseType: 'response_type',
      scope: 'scope',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      hideConsent: 'boolean',
      loginType: 'string',
      redirectUri: 'string',
      responseType: 'string',
      scope: { 'type': 'array', 'itemType': 'string' },
      state: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scope)) {
      $dara.Model.validateArray(this.scope);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID returned when the application was created.
   * 
   * This parameter is required.
   * 
   * @example
   * 47eUHhrzgWBvlLWj
   */
  clientId?: string;
  /**
   * @remarks
   * Specifies whether to hide the consent page.
   * 
   * @example
   * true
   */
  hideConsent?: boolean;
  /**
   * @remarks
   * The authentication method. Valid values:
   * 
   * *   default: all logon methods that are integrated on the default logon page provided by Drive and Photo Service.
   * *   ding: logs on by scanning a DingTalk QR code.
   * *   ding_sns: logs on by entering a DingTalk account and its password.
   * *   ram: logs on as an Alibaba Cloud Resource Access Management (RAM) user.
   * *   wechat: logs on by scanning a WeCom QR code.
   * *   wechat_app: logs on without authentication in WeCom.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  loginType?: string;
  /**
   * @remarks
   * The callback URL specified when the application was created.
   * 
   * This parameter is required.
   * 
   * @example
   * https://www.aliyunpds.com/sign/callback
   */
  redirectUri?: string;
  /**
   * @remarks
   * The format in which to return the response. Set the value to code.
   * 
   * This parameter is required.
   * 
   * @example
   * code
   */
  responseType?: string;
  /**
   * @remarks
   * The requested permissions. By default, all permissions are requested.
   */
  scopeShrink?: string;
  /**
   * @remarks
   * The user-defined parameter to return in the callback URL after the requested permissions are granted.
   * 
   * @example
   * customdata
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'client_id',
      hideConsent: 'hide_consent',
      loginType: 'login_type',
      redirectUri: 'redirect_uri',
      responseType: 'response_type',
      scopeShrink: 'scope',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      hideConsent: 'boolean',
      loginType: 'string',
      redirectUri: 'string',
      responseType: 'string',
      scopeShrink: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRequest extends $dara.Model {
  /**
   * @remarks
   * The child requests.
   * 
   * The number of child requests. Valid value: 1 to 100.
   * 
   * This parameter is required.
   */
  requests?: BatchRequestRequests[];
  /**
   * @remarks
   * The type of the resource that you want to manage. Valid values:
   * 
   * *   file: a file.
   * *   drive: an individual drive or a team drive.
   * *   user: a user.
   * *   group: a group.
   * *   membership: a group member.
   * *   share_link: a share.
   * *   async_task: an asynchronous task.
   * 
   * This parameter is required.
   * 
   * @example
   * file
   */
  resource?: string;
  static names(): { [key: string]: string } {
    return {
      requests: 'requests',
      resource: 'resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requests: { 'type': 'array', 'itemType': BatchRequestRequests },
      resource: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.requests)) {
      $dara.Model.validateArray(this.requests);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchResponseBody extends $dara.Model {
  /**
   * @remarks
   * All responses of the child requests.
   */
  responses?: BatchResponseBodyResponses[];
  static names(): { [key: string]: string } {
    return {
      responses: 'responses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      responses: { 'type': 'array', 'itemType': BatchResponseBodyResponses },
    };
  }

  validate() {
    if(Array.isArray(this.responses)) {
      $dara.Model.validateArray(this.responses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAssignRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier. You can cancel only the role assigned to a user.
   * 
   * This parameter is required.
   */
  identity?: Identity;
  /**
   * @remarks
   * The ID of the resource that the role manages. Set the value to a group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 105***b82
   */
  manageResourceId?: string;
  /**
   * @remarks
   * The type of the resource that the role manages. Set the value to RT_Group, which specifies group.
   * 
   * This parameter is required.
   * 
   * @example
   * RT_Group
   */
  manageResourceType?: string;
  /**
   * @remarks
   * The ID of the role to be canceled. Set the value to SystemGroupAdmin, which is the ID of the group administrator role.
   * 
   * This parameter is required.
   * 
   * @example
   * SystemGroupAdmin
   */
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      identity: 'identity',
      manageResourceId: 'manage_resource_id',
      manageResourceType: 'manage_resource_type',
      roleId: 'role_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identity: Identity,
      manageResourceId: 'string',
      manageResourceType: 'string',
      roleId: 'string',
    };
  }

  validate() {
    if(this.identity && typeof (this.identity as any).validate === 'function') {
      (this.identity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAssignRoleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelShareLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The share ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7JQX1FswpQ8
   */
  shareId?: string;
  static names(): { [key: string]: string } {
    return {
      shareId: 'share_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shareId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelShareLinkResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearRecyclebinRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearRecyclebinResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * You can call the GetAsyncTask operation to query the information about the asynchronous task based on the task ID.
   * 
   * @example
   * 13ebd3a24dba4166b1527add676ef2866051b4d5dele16
   */
  asyncTaskId?: string;
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
   * The drive ID.
   * 
   * @example
   * 1
   */
  driveId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'async_task_id',
      domainId: 'domain_id',
      driveId: 'drive_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      domainId: 'string',
      driveId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearRecyclebinResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ClearRecyclebinResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ClearRecyclebinResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteFileRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9520943DC264
   */
  fileId?: string;
  /**
   * @remarks
   * The upload ID.
   * 
   * This parameter is required.
   * 
   * @example
   * C9DCFE5A82644AC7A02DB74C30C934A6
   */
  uploadId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      uploadId: 'upload_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      uploadId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteFileResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: File;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: File,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyFileRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically rename the file if the file name already exists in the destination folder. Default value: false.
   * 
   * @example
   * true
   */
  autoRename?: boolean;
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
   * The file ID or folder ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 4221bf6e6ab43c255edc4463bf3a6f5f5d317406
   */
  fileId?: string;
  /**
   * @remarks
   * The share ID. If you want to manage a file by using a share link, carry the `x-share-token` header for authentication in the request and specify share_id. In this case, `drive_id` is invalid. Otherwise, use an `AccessKey pair` or `access token` for authentication and specify `drive_id`. You must specify one of `share_id` and `drive_id`.
   * 
   * @example
   * 7JQX1FswpQ8
   */
  shareId?: string;
  /**
   * @remarks
   * The ID of the drive to which you want to copy the file or folder. Default value: the value of drive_id.
   * 
   * @example
   * 1
   */
  toDriveId?: string;
  /**
   * @remarks
   * The ID of the destination parent folder. If you want to copy the file or folder to a root directory, set this parameter to root.
   * 
   * This parameter is required.
   * 
   * @example
   * 6520943DC261
   */
  toParentFileId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRename: 'auto_rename',
      driveId: 'drive_id',
      fileId: 'file_id',
      shareId: 'share_id',
      toDriveId: 'to_drive_id',
      toParentFileId: 'to_parent_file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRename: 'boolean',
      driveId: 'string',
      fileId: 'string',
      shareId: 'string',
      toDriveId: 'string',
      toParentFileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * If a file is copied, this parameter is not returned. If a folder is copied, the folder is asynchronously copied in the background and this parameter is returned. You can call the GetAsyncTask operation to query the information about the asynchronous task based on the task ID.
   * 
   * @example
   * 000e89fb-cf8f-11e9-8ab4-b6e980803a3b
   */
  asyncTaskId?: string;
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
   * The drive ID.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The ID of the copied file or folder.
   * 
   * @example
   * 4221bf6e6ab43a255edc4463bffa6f5f5d317401
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'async_task_id',
      domainId: 'domain_id',
      driveId: 'drive_id',
      fileId: 'file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      domainId: 'string',
      driveId: 'string',
      fileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyFileResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CopyFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CopyFileResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomizedStoryRequest extends $dara.Model {
  /**
   * @deprecated
   */
  customLabels?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  storyCover?: CreateCustomizedStoryRequestStoryCover;
  /**
   * @remarks
   * This parameter is required.
   */
  storyFiles?: CreateCustomizedStoryRequestStoryFiles[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_name
   */
  storyName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user_created
   */
  storySubType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user_created
   */
  storyType?: string;
  static names(): { [key: string]: string } {
    return {
      customLabels: 'custom_labels',
      driveId: 'drive_id',
      storyCover: 'story_cover',
      storyFiles: 'story_files',
      storyName: 'story_name',
      storySubType: 'story_sub_type',
      storyType: 'story_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      driveId: 'string',
      storyCover: CreateCustomizedStoryRequestStoryCover,
      storyFiles: { 'type': 'array', 'itemType': CreateCustomizedStoryRequestStoryFiles },
      storyName: 'string',
      storySubType: 'string',
      storyType: 'string',
    };
  }

  validate() {
    if(this.customLabels) {
      $dara.Model.validateMap(this.customLabels);
    }
    if(this.storyCover && typeof (this.storyCover as any).validate === 'function') {
      (this.storyCover as any).validate();
    }
    if(Array.isArray(this.storyFiles)) {
      $dara.Model.validateArray(this.storyFiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomizedStoryResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @example
   * 9132e0d8-fe92-4e56-86c3-f5f112308003
   */
  storyId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      storyId: 'story_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      storyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomizedStoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCustomizedStoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCustomizedStoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainRequest extends $dara.Model {
  /**
   * @remarks
   * domain 描述
   * 
   * @example
   * 你好企业网盘开发环境
   */
  description?: string;
  /**
   * @remarks
   * If you want to perform secondary operations based on Drive and Photo Service and perform fine-grained control on your tenants, you can use the parent-child domain feature of Drive and Photo Service. For more information, join the DingTalk group whose ID is 23146118.
   * 
   * This parameter is required.
   * 
   * @example
   * 你好企业网盘
   */
  domainName?: string;
  /**
   * @remarks
   * https
   * 
   * @example
   * true
   */
  initDriveEnable?: boolean;
  /**
   * @remarks
   * http
   * 
   * @example
   * 1073741824
   */
  initDriveSize?: number;
  /**
   * @remarks
   * Create domain.
   * 
   * @example
   * bj1
   */
  parentDomainId?: string;
  /**
   * @remarks
   * The ID of the parent domain. If you want to create a child domain, specify parent_domain_id. In most cases, you do not need to create a child domain. If you want to perform secondary operations based on Drive and Photo Service, contact the customer service.
   * 
   * @example
   * 1099511627776
   */
  sizeQuota?: number;
  /**
   * @remarks
   * The information about the domain.
   * 
   * @example
   * 50
   */
  userCountQuota?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      domainName: 'domain_name',
      initDriveEnable: 'init_drive_enable',
      initDriveSize: 'init_drive_size',
      parentDomainId: 'parent_domain_id',
      sizeQuota: 'size_quota',
      userCountQuota: 'user_count_quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      domainName: 'string',
      initDriveEnable: 'boolean',
      initDriveSize: 'number',
      parentDomainId: 'string',
      sizeQuota: 'number',
      userCountQuota: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Domain;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Domain,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDriveRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the drive is the default drive. Default value: false.
   * 
   * @example
   * true
   */
  default?: boolean;
  /**
   * @remarks
   * The description of the drive. The description can be up to 1,024 characters in length.
   * 
   * @example
   * drive for test
   */
  description?: string;
  /**
   * @remarks
   * The name of the drive. The name can be up to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test_drive
   */
  driveName?: string;
  /**
   * @remarks
   * The type of the drive. Set the value to normal.
   * 
   * @example
   * normal
   */
  driveType?: string;
  /**
   * @remarks
   * The owner of the drive.
   * 
   * This parameter is required.
   * 
   * @example
   * 3b3d7245c159488da17d081ad6c64687
   */
  owner?: string;
  /**
   * @remarks
   * The type of the owner. Valid values:
   * 
   * user and group.
   * 
   * This parameter is required.
   * 
   * @example
   * user
   */
  ownerType?: string;
  /**
   * @remarks
   * The state of the drive. Valid values:
   * 
   * enabled and disabled.
   * 
   * Default value: enabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The total size of the drive. Unit: bytes. By default, the size is unlimited.
   * 
   * @example
   * 1024
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      default: 'default',
      description: 'description',
      driveName: 'drive_name',
      driveType: 'drive_type',
      owner: 'owner',
      ownerType: 'owner_type',
      status: 'status',
      totalSize: 'total_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      default: 'boolean',
      description: 'string',
      driveName: 'string',
      driveType: 'string',
      owner: 'string',
      ownerType: 'string',
      status: 'string',
      totalSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDriveResponseBody extends $dara.Model {
  createdAt?: string;
  creator?: string;
  description?: string;
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
   * The drive ID.
   * 
   * @example
   * 1
   */
  driveId?: string;
  driveName?: string;
  driveType?: string;
  owner?: string;
  ownerType?: string;
  status?: string;
  totalSize?: number;
  usedSize?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      creator: 'creator',
      description: 'description',
      domainId: 'domain_id',
      driveId: 'drive_id',
      driveName: 'drive_name',
      driveType: 'drive_type',
      owner: 'owner',
      ownerType: 'owner_type',
      status: 'status',
      totalSize: 'total_size',
      usedSize: 'used_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      creator: 'string',
      description: 'string',
      domainId: 'string',
      driveId: 'string',
      driveName: 'string',
      driveType: 'string',
      owner: 'string',
      ownerType: 'string',
      status: 'string',
      totalSize: 'number',
      usedSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDriveResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDriveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDriveResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class CreateFileResponseBody extends $dara.Model {
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
   * The drive ID.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * Indicates whether the file exists.
   * 
   * @example
   * false
   */
  exist?: boolean;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * fileid1
   */
  fileId?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * a.txt
   */
  fileName?: string;
  /**
   * @remarks
   * The ID of the parent directory.
   * 
   * @example
   * fileid5
   */
  parentFileId?: string;
  /**
   * @remarks
   * The information about the file parts.
   */
  partInfoList?: UploadPartInfo[];
  /**
   * @remarks
   * Indicates whether the file is instantly uploaded.
   * 
   * @example
   * true
   */
  rapidUpload?: boolean;
  /**
   * @remarks
   * The state of the file.
   * 
   * @example
   * uploading
   */
  status?: string;
  /**
   * @remarks
   * The type of the file.
   * 
   * @example
   * file
   */
  type?: string;
  /**
   * @remarks
   * The ID of the upload task.
   * 
   * @example
   * uploadid1
   */
  uploadId?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domain_id',
      driveId: 'drive_id',
      exist: 'exist',
      fileId: 'file_id',
      fileName: 'file_name',
      parentFileId: 'parent_file_id',
      partInfoList: 'part_info_list',
      rapidUpload: 'rapid_upload',
      status: 'status',
      type: 'type',
      uploadId: 'upload_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      driveId: 'string',
      exist: 'boolean',
      fileId: 'string',
      fileName: 'string',
      parentFileId: 'string',
      partInfoList: { 'type': 'array', 'itemType': UploadPartInfo },
      rapidUpload: 'boolean',
      status: 'string',
      type: 'string',
      uploadId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.partInfoList)) {
      $dara.Model.validateArray(this.partInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFileResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the group. The description can be up to 1,024 characters in length.
   * 
   * @example
   * test group description
   */
  description?: string;
  /**
   * @remarks
   * The name of the group. The name must be 1 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test group
   */
  groupName?: string;
  /**
   * @remarks
   * Specifies whether the group is a root group. A root group cannot be added to any other group. In most cases, a root group is the top-level organization in the organizational structure.
   * 
   * @example
   * false
   */
  isRoot?: boolean;
  /**
   * @remarks
   * The ID of the parent group to which the group is added. If this parameter is specified, the system automatically adds the group to the specified parent group after the group is created.
   * 
   * @example
   * 2e43ec8427dd45f19431b7504649a1b3
   */
  parentGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      groupName: 'group_name',
      isRoot: 'is_root',
      parentGroupId: 'parent_group_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupName: 'string',
      isRoot: 'boolean',
      parentGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Group;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Group,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdentityToBenefitPkgMappingRequest extends $dara.Model {
  /**
   * @remarks
   * The number of benefit packages.
   * 
   * This parameter takes effect only for the benefit packages of the resource type. Default value: 1.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The unique identifier of the benefit package.
   * 
   * This parameter is required.
   * 
   * @example
   * 40cb7794c9294
   */
  benefitPkgId?: string;
  /**
   * @remarks
   * The time when the benefit package expires. Set the value to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * By default, the benefit package never expires.
   * 
   * @example
   * 1633167071000
   */
  expireTime?: number;
  /**
   * @remarks
   * The unique identifier of the entity.
   * 
   * If you want to manage the benefits of a user, set this parameter to a user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * user123
   */
  identityId?: string;
  /**
   * @remarks
   * The type of the entity.
   * 
   * If you want to manage the benefits of a user, set this parameter to user.
   * 
   * This parameter is required.
   * 
   * @example
   * user
   */
  identityType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      benefitPkgId: 'benefit_pkg_id',
      expireTime: 'expire_time',
      identityId: 'identity_id',
      identityType: 'identity_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      benefitPkgId: 'string',
      expireTime: 'number',
      identityId: 'string',
      identityType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdentityToBenefitPkgMappingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderRequest extends $dara.Model {
  autoPay?: boolean;
  autoRenew?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  orderType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  package?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  period?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  periodUnit?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  totalSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'auto_pay',
      autoRenew: 'auto_renew',
      code: 'code',
      instanceId: 'instance_id',
      orderType: 'order_type',
      package: 'package',
      period: 'period',
      periodUnit: 'period_unit',
      totalSize: 'total_size',
      userCount: 'user_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      code: 'string',
      instanceId: 'string',
      orderType: 'string',
      package: 'string',
      period: 'number',
      periodUnit: 'string',
      totalSize: 'number',
      userCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponseBody extends $dara.Model {
  instanceId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instance_id',
      orderId: 'order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateOrderResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShareLinkRequest extends $dara.Model {
  creatable?: boolean;
  creatableFileIdList?: string[];
  /**
   * @remarks
   * The description of the share. The description must be 0 to 1,024 characters in length.
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to disable the download feature.
   * 
   * @example
   * false
   */
  disableDownload?: boolean;
  /**
   * @remarks
   * Specifies whether to disable the preview feature.
   * 
   * @example
   * false
   */
  disablePreview?: boolean;
  /**
   * @remarks
   * Specifies whether to disable the dump feature.
   * 
   * @example
   * false
   */
  disableSave?: boolean;
  /**
   * @remarks
   * The limit on the number of times that the shared files can be downloaded. The value of this parameter must be equal to or greater than 0. A value of 0 indicates no limit.
   * 
   * @example
   * 100
   */
  downloadLimit?: number;
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The time when the share URL expires. The value of this parameter follows the RFC 3339 standard. Example: "2020-06-28T11:33:00.000+08:00". If expiration is set to "", the share URL never expires.
   * 
   * @example
   * 2020-06-28T11:33:00.000+08:00
   */
  expiration?: string;
  /**
   * @remarks
   * The IDs of the files to share in the parent path. The number of files in the parent path ranges from 1 to 100. If share_all_files is set to true, this parameter does not take effect. Otherwise, you must specify this parameter.``
   * 
   * @example
   * ["520b217f13adf4fc24f2191991b1664ce045b393"]
   */
  fileIdList?: string[];
  officeEditable?: boolean;
  /**
   * @remarks
   * The limit on the number of times that the shared files can be previewed. The value of this parameter must be equal to or greater than 0. A value of 0 indicates no limit.
   * 
   * @example
   * 100
   */
  previewLimit?: number;
  requireLogin?: boolean;
  /**
   * @remarks
   * The limit on the number of times that the shared files can be dumped. The value of this parameter must be equal to or greater than 0. A value of 0 indicates no limit.
   * 
   * @example
   * 100
   */
  saveLimit?: number;
  /**
   * @remarks
   * Specifies whether to share all files in the drive.
   * 
   * @example
   * true
   */
  shareAllFiles?: boolean;
  /**
   * @remarks
   * The name of the share. If you leave this parameter empty, the file name that corresponds to the first ID in the file ID list is used. The name must be 0 to 128 characters in length.
   */
  shareName?: string;
  /**
   * @remarks
   * The access code. An access code must be 0 to 64 bytes in length. If you do not specify this parameter or leave this parameter empty, the files can be accessed without an access code. In this case, you do not need to specify the share_pwd parameter when you call an operation to query the share URL. The access code can contain only visible ASCII characters.
   * 
   * @example
   * abcF123x
   */
  sharePwd?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * u123
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      creatable: 'creatable',
      creatableFileIdList: 'creatable_file_id_list',
      description: 'description',
      disableDownload: 'disable_download',
      disablePreview: 'disable_preview',
      disableSave: 'disable_save',
      downloadLimit: 'download_limit',
      driveId: 'drive_id',
      expiration: 'expiration',
      fileIdList: 'file_id_list',
      officeEditable: 'office_editable',
      previewLimit: 'preview_limit',
      requireLogin: 'require_login',
      saveLimit: 'save_limit',
      shareAllFiles: 'share_all_files',
      shareName: 'share_name',
      sharePwd: 'share_pwd',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatable: 'boolean',
      creatableFileIdList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      disableDownload: 'boolean',
      disablePreview: 'boolean',
      disableSave: 'boolean',
      downloadLimit: 'number',
      driveId: 'string',
      expiration: 'string',
      fileIdList: { 'type': 'array', 'itemType': 'string' },
      officeEditable: 'boolean',
      previewLimit: 'number',
      requireLogin: 'boolean',
      saveLimit: 'number',
      shareAllFiles: 'boolean',
      shareName: 'string',
      sharePwd: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.creatableFileIdList)) {
      $dara.Model.validateArray(this.creatableFileIdList);
    }
    if(Array.isArray(this.fileIdList)) {
      $dara.Model.validateArray(this.fileIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShareLinkResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ShareLink;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ShareLink,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSimilarImageClusterTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  driveId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSimilarImageClusterTaskResponseBody extends $dara.Model {
  /**
   * @example
   * i:SimilarImageClustering-b67d53e7-2fe8-460f-9b95-1e93636923eb
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSimilarImageClusterTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSimilarImageClusterTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSimilarImageClusterTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStoryRequest extends $dara.Model {
  address?: Address;
  /**
   * @deprecated
   */
  customLabels?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @example
   * 30
   * 
   * **if can be null:**
   * true
   */
  maxImageCount?: number;
  /**
   * @example
   * 1
   * 
   * **if can be null:**
   * true
   */
  minImageCount?: number;
  /**
   * @example
   * 2022-12-30T16:00:00Z
   */
  storyEndTime?: string;
  /**
   * @example
   * 9132e0d8-fe92-4e56-86c3-f5f112308003
   */
  storyId?: string;
  storyName?: string;
  /**
   * @example
   * 2016-12-30T16:00:00Z
   */
  storyStartTime?: string;
  /**
   * @example
   * Food
   */
  storySubType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TagMemory
   */
  storyType?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      customLabels: 'custom_labels',
      driveId: 'drive_id',
      maxImageCount: 'max_image_count',
      minImageCount: 'min_image_count',
      storyEndTime: 'story_end_time',
      storyId: 'story_id',
      storyName: 'story_name',
      storyStartTime: 'story_start_time',
      storySubType: 'story_sub_type',
      storyType: 'story_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: Address,
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      driveId: 'string',
      maxImageCount: 'number',
      minImageCount: 'number',
      storyEndTime: 'string',
      storyId: 'string',
      storyName: 'string',
      storyStartTime: 'string',
      storySubType: 'string',
      storyType: 'string',
    };
  }

  validate() {
    if(this.address && typeof (this.address as any).validate === 'function') {
      (this.address as any).validate();
    }
    if(this.customLabels) {
      $dara.Model.validateMap(this.customLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStoryResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  driveId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateStoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateStoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequest extends $dara.Model {
  /**
   * @remarks
   * The URL of the profile picture.
   * 
   * If you specify the parameter in the HTTP URL format, the URL must start with http:// or https:// and can be up to 4 KB in size.
   * 
   * If you specify the parameter in the data URL format, the URL must start with data:// and be encoded in Base64. The URL can be up to 300 KB in size.
   * 
   * @example
   * http://a.b.c/pds.jpg
   */
  avatar?: string;
  /**
   * @remarks
   * The description of the user. The description can be up to 1,024 characters in length.
   * 
   * @example
   * The VIP user
   */
  description?: string;
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * 123@pds.com
   */
  email?: string;
  /**
   * @remarks
   * The information about the group.
   */
  groupInfoList?: CreateUserRequestGroupInfoList[];
  /**
   * @remarks
   * The nickname of the user. The nickname can be up to 128 characters in length.
   * 
   * @example
   * pdsuer
   */
  nickName?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 13900001111
   */
  phone?: string;
  /**
   * @remarks
   * The role of the user. Default value: user. Valid values:
   * 
   * *   superadmin
   * *   admin
   * *   user
   * 
   * If the domain can be divided into subdomains, the subdomain_super_admin and subdomain_admin roles are also supported.
   * 
   * Valid values:
   * 
   * *   subdomain_super_admin
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   subdomain_admin
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   superadmin
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   admin
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   user
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * The state of the user. Default value: enabled. Valid values:
   * 
   * *   enabled: The user is in a normal state.
   * *   disabled: The user is prohibited from logon.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The custom data. The data can be up to 1,024 characters in length.
   * 
   * @example
   * md
   */
  userData?: { [key: string]: any };
  /**
   * @remarks
   * The user ID. The ID can be up to 64 characters in length and cannot contain number signs (#).
   * 
   * This parameter is required.
   * 
   * @example
   * pdsuserid1
   */
  userId?: string;
  /**
   * @remarks
   * The username. The username can be up to 128 characters in length.
   * 
   * @example
   * pdsusername
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'avatar',
      description: 'description',
      email: 'email',
      groupInfoList: 'group_info_list',
      nickName: 'nick_name',
      phone: 'phone',
      role: 'role',
      status: 'status',
      userData: 'user_data',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      description: 'string',
      email: 'string',
      groupInfoList: { 'type': 'array', 'itemType': CreateUserRequestGroupInfoList },
      nickName: 'string',
      phone: 'string',
      role: 'string',
      status: 'string',
      userData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupInfoList)) {
      $dara.Model.validateArray(this.groupInfoList);
    }
    if(this.userData) {
      $dara.Model.validateMap(this.userData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The URL of the profile picture.
   * 
   * @example
   * http://aa.com/1.jpg
   */
  avatar?: string;
  /**
   * @remarks
   * The time when the user was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1639762579768
   */
  createdAt?: number;
  /**
   * @remarks
   * The user who created the user.
   * 
   * @example
   * user1
   */
  creator?: string;
  /**
   * @remarks
   * The ID of the default drive.
   * 
   * @example
   * 1
   */
  defaultDriveId?: string;
  /**
   * @remarks
   * The description of the user.
   * 
   * @example
   * vipuser
   */
  description?: string;
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
   * The email address.
   * 
   * @example
   * a@a.com
   */
  email?: string;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * 001
   */
  nickName?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 13900001111
   */
  phone?: string;
  /**
   * @remarks
   * The role of the user. Valid values:
   * 
   * *   superadmin
   * *   admin
   * *   user
   * 
   * @example
   * admin
   */
  role?: string;
  /**
   * @remarks
   * The state of the user. Valid values:
   * 
   * *   disabled: The user is prohibited from logon.
   * *   enabled: The user is in a normal state.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The time when the user was modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1639762579768
   */
  updatedAt?: number;
  /**
   * @remarks
   * The custom data.
   */
  userData?: { [key: string]: any };
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * dingding_abc001
   */
  userId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * pds
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'avatar',
      createdAt: 'created_at',
      creator: 'creator',
      defaultDriveId: 'default_drive_id',
      description: 'description',
      domainId: 'domain_id',
      email: 'email',
      nickName: 'nick_name',
      phone: 'phone',
      role: 'role',
      status: 'status',
      updatedAt: 'updated_at',
      userData: 'user_data',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      createdAt: 'number',
      creator: 'string',
      defaultDriveId: 'string',
      description: 'string',
      domainId: 'string',
      email: 'string',
      nickName: 'string',
      phone: 'string',
      role: 'string',
      status: 'string',
      updatedAt: 'number',
      userData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(this.userData) {
      $dara.Model.validateMap(this.userData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateUserResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CsiGetFileInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9520943DC264
   */
  fileId?: string;
  /**
   * @example
   * 100
   */
  urlExpireSec?: number;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      urlExpireSec: 'url_expire_sec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      urlExpireSec: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CsiGetFileInfoResponseBody extends $dara.Model {
  investigationInfo?: InvestigationInfo;
  /**
   * @example
   * https://data.aliyunpds.com/hz22%2F5d5b986facbec311ef844c25954f96821497b383%2F5d5b986f955410dd991646bb87c6b4e899eff525?Expires=xxx&OSSAccessKeyId=xxx&Signature=xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      investigationInfo: 'investigation_info',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      investigationInfo: InvestigationInfo,
      url: 'string',
    };
  }

  validate() {
    if(this.investigationInfo && typeof (this.investigationInfo as any).validate === 'function') {
      (this.investigationInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CsiGetFileInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CsiGetFileInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CsiGetFileInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The domain ID.
   * 
   * @example
   * bj1
   */
  domainId?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domain_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDriveRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDriveResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The file ID or folder ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9520943DC264
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task. This parameter is returned only in asynchronous processing scenarios. You can call the [GetAsyncTask](https://help.aliyun.com/document_detail/440456.html) operation to query the information about the asynchronous task based on the task ID.
   * 
   * @example
   * 000e89fb-cf8f-11e9-8ab4-b6e980803a3b
   */
  asyncTaskId?: string;
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
   * The drive ID.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 9520943DC264
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'async_task_id',
      domainId: 'domain_id',
      driveId: 'drive_id',
      fileId: 'file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      domainId: 'string',
      driveId: 'string',
      fileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFileResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * g123
   */
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'group_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRevisionRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9520943DC264
   */
  fileId?: string;
  /**
   * @remarks
   * The version ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 40CB7794C929
   */
  revisionId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      revisionId: 'revision_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      revisionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRevisionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStoryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9132e0d8-fe92-4e56-86c3-f5f112308003
   */
  storyId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      storyId: 'story_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      storyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStoryResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  driveId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteStoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteStoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserRequest extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c9b7a5aa04d14ae3867fdc886fa01da4
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeltaGetLastCursorRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The ID of the root file of the synced folder.
   * 
   * @example
   * 622fb09598ae66777c7040109a16f49381f6abe1
   */
  syncRootId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      syncRootId: 'sync_root_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      syncRootId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeltaGetLastCursorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The latest cursor of incremental information in the specified drive or synced folder.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  cursor?: string;
  static names(): { [key: string]: string } {
    return {
      cursor: 'cursor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursor: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeltaGetLastCursorResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeltaGetLastCursorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeltaGetLastCursorResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadFileRequest extends $dara.Model {
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
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9520943DC264
   */
  fileId?: string;
  /**
   * @remarks
   * The method used to generate the thumbnail of an image. If this parameter is specified, you are redirected to the URL of the generated thumbnail.
   * 
   * @example
   * image/resize,m_fill,h_128,w_128,limit_0
   */
  imageThumbnailProcess?: string;
  /**
   * @remarks
   * The method used to generate the thumbnail of a document. If this parameter is specified, you are redirected to the URL of the generated thumbnail.
   * 
   * @example
   * image/resize,w_200
   */
  officeThumbnailProcess?: string;
  /**
   * @remarks
   * The share ID. If you want to manage a file by using a share link, carry the `x-share-token` header for authentication in the request and specify share_id. In this case, `drive_id` is invalid. Otherwise, use an `AccessKey pair` or `access token` for authentication and specify `drive_id`. You must specify one of `share_id` and `drive_id`.
   * 
   * @example
   * 7JQX1FswpQ8
   */
  shareId?: string;
  /**
   * @remarks
   * The method used to generate the thumbnail of a video. If this parameter is specified, you are redirected to the URL of the generated thumbnail.
   * 
   * @example
   * video/snapshot,t_7000,f_jpg,w_800,h_600,m_fast
   */
  videoThumbnailProcess?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      imageThumbnailProcess: 'image_thumbnail_process',
      officeThumbnailProcess: 'office_thumbnail_process',
      shareId: 'share_id',
      videoThumbnailProcess: 'video_thumbnail_process',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      imageThumbnailProcess: 'string',
      officeThumbnailProcess: 'string',
      shareId: 'string',
      videoThumbnailProcess: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadFileResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileAddPermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The ID of the folder. If you want to authorize a user or group to access a team drive, set this parameter to root. If you want to authorize a user or group to access an individual drive, you cannot set this parameter to root.
   * 
   * This parameter is required.
   * 
   * @example
   * 4221bf6e6ab43c255edc4463bf3a6f5f5d317406
   */
  fileId?: string;
  /**
   * @remarks
   * The members that are authorized to access files.
   * 
   * This parameter is required.
   */
  memberList?: FilePermissionMember[];
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      memberList: 'member_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      memberList: { 'type': 'array', 'itemType': FilePermissionMember },
    };
  }

  validate() {
    if(Array.isArray(this.memberList)) {
      $dara.Model.validateArray(this.memberList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileAddPermissionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileDeleteUserTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9520943DC264
   */
  fileId?: string;
  /**
   * @remarks
   * The tags that you want to remove from a file. You cannot leave this parameter empty. You can specify up to 1,000 tags.
   * 
   * This parameter is required.
   */
  keyList?: string[];
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      keyList: 'key_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      keyList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.keyList)) {
      $dara.Model.validateArray(this.keyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileDeleteUserTagsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileListPermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 4221bf6e6ab43a255edc4463bffa6f5f5d317401
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileListPermissionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FilePermissionMember[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': FilePermissionMember },
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilePutUserTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9520943DC264
   */
  fileId?: string;
  /**
   * @remarks
   * The tags to be added to the file. You cannot leave this parameter empty. You can specify up to 1,000 tags. You cannot specify tags that have the same name.
   * 
   * This parameter is required.
   */
  userTags?: FilePutUserTagsRequestUserTags[];
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      userTags: 'user_tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      userTags: { 'type': 'array', 'itemType': FilePutUserTagsRequestUserTags },
    };
  }

  validate() {
    if(Array.isArray(this.userTags)) {
      $dara.Model.validateArray(this.userTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilePutUserTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9520943DC264
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilePutUserTagsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FilePutUserTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: FilePutUserTagsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileRemovePermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 4221bf6e6ab43c255edc4463bf3a6f5f5d317406
   */
  fileId?: string;
  /**
   * @remarks
   * The identities with whom the file is shared.
   * 
   * This parameter is required.
   */
  memberList?: FileRemovePermissionRequestMemberList[];
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      memberList: 'member_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      memberList: { 'type': 'array', 'itemType': FileRemovePermissionRequestMemberList },
    };
  }

  validate() {
    if(Array.isArray(this.memberList)) {
      $dara.Model.validateArray(this.memberList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileRemovePermissionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * This parameter is required.
   * 
   * @example
   * 000e89fb-cf8f-11e9-8ab4-b6e980803a3b
   */
  asyncTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'async_task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 000e89fb-cf8f-11e9-8ab4-b6e980803a3b
   */
  asyncTaskId?: string;
  /**
   * @remarks
   * The custom category of the task.
   * 
   * @example
   * album
   */
  category?: string;
  /**
   * @remarks
   * The total amount of work that is done in the asynchronous task, such as the number of files that are packaged for package download on the server.
   * 
   * @example
   * 100
   */
  consumedProcess?: number;
  /**
   * @remarks
   * The time when the task was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. Example: 2019-03-28T13:03:29.298Z.
   * 
   * @example
   * 2019-08-20T06:51:27.292Z
   */
  createdAt?: string;
  /**
   * @remarks
   * <warning>This parameter is no longer used. We recommend that you use error_code instead.</warning>
   * 
   * The error code returned if the asynchronous task failed.
   * 
   * @example
   * InternalError
   */
  errCode?: number;
  /**
   * @remarks
   * The error code returned if the asynchronous task failed.
   * 
   * @example
   * InternalError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the asynchronous task failed.
   * 
   * @example
   * The request has been failed due to some unknown error. Please try again later.
   */
  errorMessage?: string;
  failedProcess?: number;
  /**
   * @remarks
   * The time when the task was complete. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. Example: 2019-03-28T13:03:29.298Z.
   * 
   * @example
   * 2019-08-20T06:51:27.292Z
   */
  finishedAt?: string;
  /**
   * @remarks
   * <warning>This parameter is no longer used. We recommend that you use error_message instead.</warning>
   * 
   * The error message returned if the asynchronous task failed.
   * 
   * @example
   * The request has been failed due to some unknown error. Please try again later.
   */
  message?: string;
  skippedProcess?: number;
  /**
   * @remarks
   * The time when the task was started. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. Example: 2019-03-28T13:03:29.298Z.
   * 
   * @example
   * 2019-08-20T06:51:27.292Z
   */
  startedAt?: string;
  /**
   * @remarks
   * The state of the task. Valid values:
   * 
   * *   Failed
   * *   Running
   * *   PartialSucceed
   * *   Succeed
   * 
   * @example
   * Succeed
   */
  state?: string;
  /**
   * @remarks
   * <warning>This parameter is no longer used. We recommend that you use state instead.</warning>
   * 
   * The state of the task. Valid values:
   * 
   * *   Failed
   * *   Running
   * *   PartialSucceed
   * *   Succeed
   * 
   * @example
   * Succeed
   */
  status?: string;
  /**
   * @remarks
   * The total amount of work to be done in the asynchronous task, such as the number of files to be packaged for package download on the server.
   * 
   * @example
   * 1000
   */
  totalProcess?: number;
  /**
   * @remarks
   * The extracted files.
   */
  uncompressFileList?: UncompressedFileInfo[];
  /**
   * @remarks
   * The download URL of the data generated by the asynchronous task, such as the download URL of the packaged files generated by the task of package download on the server.
   * 
   * @example
   * https://data.aliyunpds.com/hz22%2F5d5b986facbec311ef844c25954f96821497b383%2F5d5b986f955410dd991646bb87c6b4e899eff525?Expires=xxx&OSSAccessKeyId=xxx&Signature=xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'async_task_id',
      category: 'category',
      consumedProcess: 'consumed_process',
      createdAt: 'created_at',
      errCode: 'err_code',
      errorCode: 'error_code',
      errorMessage: 'error_message',
      failedProcess: 'failed_process',
      finishedAt: 'finished_at',
      message: 'message',
      skippedProcess: 'skipped_process',
      startedAt: 'started_at',
      state: 'state',
      status: 'status',
      totalProcess: 'total_process',
      uncompressFileList: 'uncompress_file_list',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      category: 'string',
      consumedProcess: 'number',
      createdAt: 'string',
      errCode: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      failedProcess: 'number',
      finishedAt: 'string',
      message: 'string',
      skippedProcess: 'number',
      startedAt: 'string',
      state: 'string',
      status: 'string',
      totalProcess: 'number',
      uncompressFileList: { 'type': 'array', 'itemType': UncompressedFileInfo },
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.uncompressFileList)) {
      $dara.Model.validateArray(this.uncompressFileList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAsyncTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAsyncTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultDriveRequest extends $dara.Model {
  /**
   * @remarks
   * The user ID. If you use an AccessKey pair for authentication, you must specify this parameter. If you use an access token for authentication, this parameter is optional. By default, the user ID associated with the access token is used.
   * 
   * @example
   * c9b7a5aa04d14ae3867fdc886fa01da4
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultDriveResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Drive;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Drive,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the domain.
   * 
   * This parameter is required.
   * 
   * @example
   * bj1
   */
  domainId?: string;
  fields?: string;
  /**
   * @remarks
   * Specifies whether to return the used quota of the domain. Default value: false. If the quota of the domain is greater than 0 and you set this parameter to true, the used quota of the domain is returned.
   * 
   * @example
   * true
   */
  getQuotaUsed?: boolean;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domain_id',
      fields: 'fields',
      getQuotaUsed: 'get_quota_used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      fields: 'string',
      getQuotaUsed: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Domain;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Domain,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainQuotaResponseBody extends $dara.Model {
  sizeQuota?: number;
  sizeUsed?: number;
  userCountQuota?: number;
  userCountUsed?: number;
  static names(): { [key: string]: string } {
    return {
      sizeQuota: 'size_quota',
      sizeUsed: 'size_used',
      userCountQuota: 'user_count_quota',
      userCountUsed: 'user_count_used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sizeQuota: 'number',
      sizeUsed: 'number',
      userCountQuota: 'number',
      userCountUsed: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainQuotaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDomainQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDomainQuotaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDownloadUrlRequest extends $dara.Model {
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
   * The validity period of the download URL. Maximum value: 115200. Default value: 900. Unit: seconds.
   * 
   * @example
   * 100
   */
  expireSec?: number;
  /**
   * @remarks
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9520943DC264
   */
  fileId?: string;
  /**
   * @remarks
   * The name of the file. The name can be up to 1,024 characters in length.
   * 
   * @example
   * 1.txt
   */
  fileName?: string;
  /**
   * @example
   * video/mp4
   */
  responseContentType?: string;
  /**
   * @remarks
   * The share ID. If you want to manage a file by using a sharing link, carry the `x-share-token` header in the request and specify share_id. In this case, `drive_id` is invalid. Otherwise, use an `AccessKey pair` or `access token` for authentication and specify `drive_id`. You must specify at least either `share_id` or `drive_id`.
   * 
   * @example
   * 7JQX1FswpQ8
   */
  shareId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      expireSec: 'expire_sec',
      fileId: 'file_id',
      fileName: 'file_name',
      responseContentType: 'response_content_type',
      shareId: 'share_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      expireSec: 'number',
      fileId: 'string',
      fileName: 'string',
      responseContentType: 'string',
      shareId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDownloadUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The download URL of a file that is downloaded by using Alibaba Cloud CDN.
   * 
   * @example
   * https://data-cdn.aliyunpds.com/hz22%2F5d79219b0aa9a7c995a94a96993ba3205cd91c5a%2F5d79219bf3261a5d38744da0834ed489b677a27a?Expires=xxxOSSAccessKeyId=xxx&Signature=xxx&response-content-disposition=attachment%3Bfilename%3DtBiZAoJPC2c8b13450eda4292b7f5f8010618e078.txt
   */
  cdnUrl?: string;
  /**
   * @remarks
   * The hash value of the file content.
   * 
   * @example
   * EA4942AA8761213890A5C386F88E6464D2C31CA1
   */
  contentHash?: string;
  /**
   * @remarks
   * The name of the algorithm that is used to calculate the hash value of the file content.
   * 
   * @example
   * sha1
   */
  contentHashName?: string;
  /**
   * @remarks
   * The hash value calculated by using 64-bit cyclic redundancy check (CRC-64).
   * 
   * @example
   * 5498595269368962671
   */
  crc64Hash?: string;
  /**
   * @remarks
   * The time when the download URL expires.
   * 
   * @example
   * 2022-01-02T15:04:05.999Z07:00
   */
  expiration?: string;
  /**
   * @remarks
   * The download URL of a file that is downloaded over a virtual private cloud (VPC).
   * 
   * @example
   * https://data-vpc.aliyunpds.com/hz22%2F5d79219b0aa9a7c995a94a96993ba3205cd91c5a%2F5d79219bf3261a5d38744da0834ed489b677a27a?Expires=xxxOSSAccessKeyId=xxx&Signature=xxx&response-content-disposition=attachment%3Bfilename%3DtBiZAoJPC2c8b13450eda4292b7f5f8010618e078.txt
   */
  internalUrl?: string;
  /**
   * @remarks
   * The size of the file. Unit: bytes.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The download URL of a file that is downloaded over the Internet.
   * 
   * @example
   * https://data.aliyunpds.com/hz22%2F5d79219b0aa9a7c995a94a96993ba3205cd91c5a%2F5d79219bf3261a5d38744da0834ed489b677a27a?Expires=xxxOSSAccessKeyId=xxx&Signature=xxx&response-content-disposition=attachment%3Bfilename%3DtBiZAoJPC2c8b13450eda4292b7f5f8010618e078.txt
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      cdnUrl: 'cdn_url',
      contentHash: 'content_hash',
      contentHashName: 'content_hash_name',
      crc64Hash: 'crc64_hash',
      expiration: 'expiration',
      internalUrl: 'internal_url',
      size: 'size',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdnUrl: 'string',
      contentHash: 'string',
      contentHashName: 'string',
      crc64Hash: 'string',
      expiration: 'string',
      internalUrl: 'string',
      size: 'number',
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

export class GetDownloadUrlResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDownloadUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDownloadUrlResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDriveRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDriveResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Drive;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Drive,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileRequest extends $dara.Model {
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
   * The fields to return.
   * 
   * 1.  If this parameter is set to \\*, all fields of the file except the fields that must be specified are returned.
   * 2.  If only specific fields are required, you can specify the following fields: url, thumbnail, exif, cropping_suggestion, characteristic_hash, video_metadata, and video_preview_metadata. If multiple fields are required, separate them with commas (,). Example: url,thumbnail.
   * 3.  The investigation_info field is returned only if you specify this field.
   * 
   * By default, all fields except the fields that must be specified are returned.
   * 
   * @example
   * *
   */
  fields?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9520943DC264
   */
  fileId?: string;
  /**
   * @remarks
   * The share ID. If you want to manage a file by using a share link, carry the `x-share-token` header for authentication in the request and specify share_id. In this case, `drive_id` is invalid. Otherwise, use an `AccessKey pair` or `access token` for authentication and specify `drive_id`. You must specify one of `share_id` and `drive_id`.
   * 
   * @example
   * 7JQX1FswpQ8
   */
  shareId?: string;
  /**
   * @remarks
   * 缩略图配置，可一次性返回最多5个缩略图，map的key可以自定义，返回时按key返回对应的缩略图链接
   */
  thumbnailProcesses?: { [key: string]: ImageProcess };
  /**
   * @remarks
   * The time when the file expires. Unit: seconds. Valid values: 10 to 14400.
   * 
   * @example
   * 100
   */
  urlExpireSec?: number;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fields: 'fields',
      fileId: 'file_id',
      shareId: 'share_id',
      thumbnailProcesses: 'thumbnail_processes',
      urlExpireSec: 'url_expire_sec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fields: 'string',
      fileId: 'string',
      shareId: 'string',
      thumbnailProcesses: { 'type': 'map', 'keyType': 'string', 'valueType': ImageProcess },
      urlExpireSec: 'number',
    };
  }

  validate() {
    if(this.thumbnailProcesses) {
      $dara.Model.validateMap(this.thumbnailProcesses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: File;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: File,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2e43ec8427dd45f19431b7504649a1b1
   */
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'group_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Group;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Group,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityToBenefitPkgMappingRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the benefit package.
   * 
   * This parameter is required.
   * 
   * @example
   * 40cb7794c9294
   */
  benefitPkgId?: string;
  /**
   * @remarks
   * The unique identifier of the entity.
   * 
   * If you want to manage the benefits of a user, set this parameter to a user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * user123
   */
  identityId?: string;
  /**
   * @remarks
   * The type of the entity. If you want to manage the benefits of a user, set this parameter to user.
   * 
   * This parameter is required.
   * 
   * @example
   * user
   */
  identityType?: string;
  static names(): { [key: string]: string } {
    return {
      benefitPkgId: 'benefit_pkg_id',
      identityId: 'identity_id',
      identityType: 'identity_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      benefitPkgId: 'string',
      identityId: 'string',
      identityType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityToBenefitPkgMappingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: IdentityToBenefitPkgMapping;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: IdentityToBenefitPkgMapping,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLinkInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The additional information about the unique identifier of the account. For example, if type is set to mobile, set the value of extra to a country code.
   * 
   * @example
   * 1
   */
  extra?: string;
  /**
   * @remarks
   * The unique identifier of the account, such as a mobile number.
   * 
   * This parameter is required.
   * 
   * @example
   * 130***
   */
  identity?: string;
  /**
   * @remarks
   * The account type. Valid values:
   * 
   * *   mobile: a mobile number.
   * *   email: an email address.
   * *   ding: a DingTalk account.
   * *   ram: an Alibaba Cloud Resource Access Management (RAM) user.
   * *   wechat: a WeCom account.
   * *   ldap: a Lightweight Directory Access Protocol (LDAP) account.
   * *   custom: a custom account.
   * 
   * This parameter is required.
   * 
   * @example
   * mobile
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      extra: 'extra',
      identity: 'identity',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      identity: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLinkInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AccountLinkInfo;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AccountLinkInfo,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLinkInfoByUserIdRequest extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLinkInfoByUserIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the users.
   */
  items?: AccountLinkInfo[];
  static names(): { [key: string]: string } {
    return {
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': AccountLinkInfo },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLinkInfoByUserIdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLinkInfoByUserIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetLinkInfoByUserIdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRevisionRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * Specifies the returned fields.
   * 
   * By default, this parameter is left empty. If you set this parameter to \\*, all fields are returned. If you leave this parameter empty, the creator of the file is not returned.
   * 
   * @example
   * *
   */
  fields?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9520943DC264
   */
  fileId?: string;
  /**
   * @remarks
   * The version ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 40CB7794C929
   */
  revisionId?: string;
  /**
   * @remarks
   * The validity period of the file download or preview. Valid values: 10 to 86400.
   * 
   * Default value: 900. Unit: seconds.
   * 
   * @example
   * 900
   */
  urlExpireSec?: number;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fields: 'fields',
      fileId: 'file_id',
      revisionId: 'revision_id',
      urlExpireSec: 'url_expire_sec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fields: 'string',
      fileId: 'string',
      revisionId: 'string',
      urlExpireSec: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRevisionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Revision;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Revision,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShareLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The share ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7JQX1FswpQ8
   */
  shareId?: string;
  static names(): { [key: string]: string } {
    return {
      shareId: 'share_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shareId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShareLinkResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ShareLink;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ShareLink,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShareLinkByAnonymousRequest extends $dara.Model {
  /**
   * @remarks
   * The share ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7JQX1FswpQ8
   */
  shareId?: string;
  static names(): { [key: string]: string } {
    return {
      shareId: 'share_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shareId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShareLinkByAnonymousResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of times that the shared files are visited.
   * 
   * @example
   * 30
   */
  accessCount?: number;
  /**
   * @remarks
   * The profile picture of the user who created the share link.
   * 
   * @example
   * https://aliyunpds.com/a.jpg
   */
  avatar?: string;
  /**
   * @remarks
   * The ID of the user who created the share link.
   * 
   * @example
   * c9b7a5aa04d14ae3867fdc886fa01da4
   */
  creatorId?: string;
  /**
   * @remarks
   * The name of the user who created the share link. The value is masked.
   * 
   * @example
   * AB***CD
   */
  creatorName?: string;
  /**
   * @remarks
   * The mobile number of the user who created the share link. The value is masked.
   * 
   * @example
   * 136****00
   */
  creatorPhone?: string;
  /**
   * @remarks
   * Indicates whether the downloads of the shared files are prohibited.
   * 
   * @example
   * false
   */
  disableDownload?: boolean;
  /**
   * @remarks
   * Indicates whether the previews of the shared files are prohibited.
   * 
   * @example
   * false
   */
  disablePreview?: boolean;
  /**
   * @remarks
   * Indicates whether the saves of the shared files are prohibited.
   * 
   * @example
   * false
   */
  disableSave?: boolean;
  /**
   * @remarks
   * The number of times that the shared files are downloaded.
   * 
   * @example
   * 50
   */
  downloadCount?: number;
  /**
   * @remarks
   * The maximum number of times that the shared files can be downloaded.
   * 
   * @example
   * 100
   */
  downloadLimit?: number;
  /**
   * @remarks
   * The time when the share link expires.
   * 
   * @example
   * 2020-08-20T06:51:27.292Z
   */
  expiration?: string;
  /**
   * @remarks
   * The number of times that the shared files are previewed.
   * 
   * @example
   * 80
   */
  previewCount?: number;
  /**
   * @remarks
   * The maximum number of times that the shared files can be previewed.
   * 
   * @example
   * 100
   */
  previewLimit?: number;
  /**
   * @remarks
   * The number of times that the shared files are reported.
   * 
   * @example
   * 0
   */
  reportCount?: number;
  /**
   * @remarks
   * The number of times that the shared files are saved.
   * 
   * @example
   * 2
   */
  saveCount?: number;
  /**
   * @remarks
   * The maximum number of times that the shared files can be saved and downloaded.
   * 
   * @example
   * 200
   */
  saveDownloadLimit?: number;
  /**
   * @remarks
   * The maximum number of times that the shared files can be saved.
   * 
   * @example
   * 100
   */
  saveLimit?: number;
  /**
   * @remarks
   * The name of the share link.
   */
  shareName?: string;
  /**
   * @remarks
   * The time when the share link was last modified.
   * 
   * @example
   * 2019-08-20T06:51:27.292Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The number of times that the videos are previewed in the shared files.
   * 
   * @example
   * 5
   */
  videoPreviewCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessCount: 'access_count',
      avatar: 'avatar',
      creatorId: 'creator_id',
      creatorName: 'creator_name',
      creatorPhone: 'creator_phone',
      disableDownload: 'disable_download',
      disablePreview: 'disable_preview',
      disableSave: 'disable_save',
      downloadCount: 'download_count',
      downloadLimit: 'download_limit',
      expiration: 'expiration',
      previewCount: 'preview_count',
      previewLimit: 'preview_limit',
      reportCount: 'report_count',
      saveCount: 'save_count',
      saveDownloadLimit: 'save_download_limit',
      saveLimit: 'save_limit',
      shareName: 'share_name',
      updatedAt: 'updated_at',
      videoPreviewCount: 'video_preview_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessCount: 'number',
      avatar: 'string',
      creatorId: 'string',
      creatorName: 'string',
      creatorPhone: 'string',
      disableDownload: 'boolean',
      disablePreview: 'boolean',
      disableSave: 'boolean',
      downloadCount: 'number',
      downloadLimit: 'number',
      expiration: 'string',
      previewCount: 'number',
      previewLimit: 'number',
      reportCount: 'number',
      saveCount: 'number',
      saveDownloadLimit: 'number',
      saveLimit: 'number',
      shareName: 'string',
      updatedAt: 'string',
      videoPreviewCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShareLinkByAnonymousResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetShareLinkByAnonymousResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetShareLinkByAnonymousResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShareLinkTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The validity period of the token. Valid values: (0,7200]. Default value: 7200. Unit: seconds.
   * 
   * @example
   * 7200
   */
  expireSec?: number;
  /**
   * @remarks
   * The share ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7JQX1FswpQ8
   */
  shareId?: string;
  /**
   * @remarks
   * The access code.
   * 
   * @example
   * abcF123x
   */
  sharePwd?: string;
  static names(): { [key: string]: string } {
    return {
      expireSec: 'expire_sec',
      shareId: 'share_id',
      sharePwd: 'share_pwd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireSec: 'number',
      shareId: 'string',
      sharePwd: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShareLinkTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The validity period of the token. Unit: seconds. For example, a value of 7200 indicates two hours.
   * 
   * @example
   * 7200
   */
  expiresIn?: number;
  /**
   * @remarks
   * The JSON Web Token (JWT).
   * 
   * @example
   * eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjOWI3YTVhYTA0ZDE0YWUzODY3ZmRjODg2ZmEwMWRhNCIsImN1c3RvbUpzb24iOiJ7XCJjbGllbnRJZFwiOlwiMjVkelgzdmJZcWt0Vnh5WFwiLFwiZG9tYWluSWRcIjpcImJqMjlcIixcInNjb3BlXCI6W1wiRFJJVkUuQUxMXCIsXCJTSEFSRS5BTExcIixcIkZJTEUuQUxMXCIsXCJVU0VSLkFMTFwiLFwiVklFVy5BTExcIixcIlNUT1JBR0UuQUxMXCIsXCJTVE9SQUdFRklMRS5MSVNUXCIsXCJCQVRDSFwiLFwiT0FVVEguQUxMXCIsXCJJTUFHRS5BTExcIixcIklOVklURS5BTExcIixcIkFDQ09VTlQuQUxMXCJdLFwicm9sZVwiOlwidXNlclwiLFwicmVmXCI6XCJodHRwczovL3d3dy5hbGl5dW5kcml2ZS5jb20vXCIsXCJkZXZpY2VfaWRcIjpcImIyODIwNWU1YzU5NzRjY2JiODI3MDNiNjhkYjhjNDUxXCJ9IiwiZXhwIjoxNjQ4NjE0NDkzLCJpYXQiOjE2NDg2MDcyMzN9.d3HVLvv_LFw2QhPrhvjH_kICWQJX9sKKt7NjQEqI_xE2JO_b7D8rPsFTZz93PLvZ7MhCmudTjGImUpd-ehFnI4Go-1S7BGaKaHFILvP-sWy18Wpikowjxx9mSbzBM_cO6D1LI-kyYhXKWHgVdADfVIPniTDA7-ffhUpi7cAebEs
   */
  shareToken?: string;
  static names(): { [key: string]: string } {
    return {
      expiresIn: 'expires_in',
      shareToken: 'share_token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiresIn: 'number',
      shareToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShareLinkTokenResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetShareLinkTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetShareLinkTokenResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStoryRequest extends $dara.Model {
  /**
   * @example
   * image/resize,m_fill,h_128,w_128,limit_0/format,jpg
   * 
   * @deprecated
   */
  coverImageThumbnailProcess?: string;
  /**
   * @example
   * video/snapshot,t_1000,f_jpg,w_0,h_0,m_fast,ar_auto
   * 
   * @deprecated
   */
  coverVideoThumbnailProcess?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @example
   * image/resize,m_fill,h_128,w_128,limit_0/format,jpg
   * 
   * @deprecated
   */
  imageThumbnailProcess?: string;
  /**
   * @example
   * image/resize,m_fill,h_128,w_128,limit_0/format,jpg
   * 
   * @deprecated
   */
  imageUrlProcess?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9132e0d8-fe92-4e56-86c3-f5f112308003
   */
  storyId?: string;
  /**
   * @example
   * 900
   * 
   * @deprecated
   */
  urlExpireSec?: number;
  /**
   * @example
   * video/snapshot,t_1000,f_jpg,w_0,h_0,m_fast,ar_auto
   * 
   * @deprecated
   */
  videoThumbnailProcess?: string;
  static names(): { [key: string]: string } {
    return {
      coverImageThumbnailProcess: 'cover_image_thumbnail_process',
      coverVideoThumbnailProcess: 'cover_video_thumbnail_process',
      driveId: 'drive_id',
      imageThumbnailProcess: 'image_thumbnail_process',
      imageUrlProcess: 'image_url_process',
      storyId: 'story_id',
      urlExpireSec: 'url_expire_sec',
      videoThumbnailProcess: 'video_thumbnail_process',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverImageThumbnailProcess: 'string',
      coverVideoThumbnailProcess: 'string',
      driveId: 'string',
      imageThumbnailProcess: 'string',
      imageUrlProcess: 'string',
      storyId: 'string',
      urlExpireSec: 'number',
      videoThumbnailProcess: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Story;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Story,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * i:SimilarImageClustering-b67d53e7-2fe8-460f-9b95-1e93636923eb
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The state of the task.
   * 
   * Valid values:
   * 
   * *   running
   * 
   *     <!-- -->
   * 
   *     : The task is
   * 
   *     <!-- -->
   * 
   *     running
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   failed
   * 
   *     <!-- -->
   * 
   *     : The task
   * 
   *     <!-- -->
   * 
   *     fails
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   succeeded
   * 
   *     <!-- -->
   * 
   *     : The task is
   * 
   *     <!-- -->
   * 
   *     successful
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * @example
   * running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTaskStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 5d5b846942cf94fa72324c14a4bda34e81da635d
   */
  fileId?: string;
  /**
   * @remarks
   * The information about the file parts.
   * 
   * This parameter is required.
   */
  partInfoList?: GetUploadUrlRequestPartInfoList[];
  /**
   * @remarks
   * The share ID.
   * 
   * @example
   * 7JQX1FswpQ8
   */
  shareId?: string;
  /**
   * @remarks
   * The ID of the upload task.
   * 
   * This parameter is required.
   * 
   * @example
   * 10166D06127B413BA1EC8ABB1144D111
   */
  uploadId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      partInfoList: 'part_info_list',
      shareId: 'share_id',
      uploadId: 'upload_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      partInfoList: { 'type': 'array', 'itemType': GetUploadUrlRequestPartInfoList },
      shareId: 'string',
      uploadId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.partInfoList)) {
      $dara.Model.validateArray(this.partInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the upload task was created.
   * 
   * @example
   * 2019-09-11T16:34:36.977Z
   */
  createAt?: string;
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
   * The drive ID.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 5d5b846942cf94fa72324c14a4bda34e81da635d
   */
  fileId?: string;
  /**
   * @remarks
   * The information about the file parts.
   */
  partInfoList?: UploadPartInfo[];
  /**
   * @remarks
   * The ID of the upload task.
   * 
   * @example
   * 10166D06127B413BA1EC8ABB1144D111
   */
  uploadId?: string;
  static names(): { [key: string]: string } {
    return {
      createAt: 'create_at',
      domainId: 'domain_id',
      driveId: 'drive_id',
      fileId: 'file_id',
      partInfoList: 'part_info_list',
      uploadId: 'upload_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createAt: 'string',
      domainId: 'string',
      driveId: 'string',
      fileId: 'string',
      partInfoList: { 'type': 'array', 'itemType': UploadPartInfo },
      uploadId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.partInfoList)) {
      $dara.Model.validateArray(this.partInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadUrlResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUploadUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUploadUrlResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserRequest extends $dara.Model {
  /**
   * @remarks
   * The user ID. If you use an AccessKey pair to access Drive and Photo Service, you must specify this parameter. If you use an access token to access Drive and Photo Service, you do not need to specify this parameter, and Drive and Photo Service automatically finds the user ID contained in the access token.
   * 
   * @example
   * c9b7a5aa04d14ae3867fdc886fa01da4
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: User;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: User,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoPreviewPlayInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The preview type. You must enable the corresponding video transcoding feature. Valid values:
   * 
   * *   live_transcoding: previews a live stream while transcoding is in progress.
   * *   quick_video: previews a video while transcoding is in progress.
   * *   offline_audio: previews a piece of audio after the audio is transcoded offline.
   * *   offline_video: previews a video after the video is transcoded offline.
   * 
   * This parameter is required.
   * 
   * @example
   * live_transcoding
   */
  category?: string;
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
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9520943DC264
   */
  fileId?: string;
  getMasterUrl?: boolean;
  /**
   * @remarks
   * Specifies whether not to query the playback URL. If you set this parameter to true, only transcoding metadata is returned. The video is not transcoded in the TS format, and the playback URL is not returned. If you set this parameter to false, the playback URL is returned. If the video has not been transcoded by using the template specified by template_id, the transcoding process is triggered. You are charged for the value-added service fees generated for transcoding.
   * 
   * @example
   * true
   */
  getWithoutUrl?: boolean;
  reTranscode?: boolean;
  /**
   * @remarks
   * The share ID. If you want to manage a file by using a sharing link, carry the `x-share-token` header in the request and specify share_id. In this case, `drive_id` is invalid. Otherwise, use an `AccessKey pair` or `access token` for authentication and specify `drive_id`. You must specify at least either `share_id` or `drive_id`.
   * 
   * @example
   * 7JQX1FswpQ8
   */
  shareId?: string;
  /**
   * @remarks
   * The ID of the definition template. If you leave this parameter empty, all definition templates are available.
   * 
   * @example
   * 264_480p
   */
  templateId?: string;
  /**
   * @remarks
   * The validity period of the video preview. Unit: seconds. Default value: 900. Maximum value: 14400.
   * 
   * @example
   * 3600
   */
  urlExpireSec?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      driveId: 'drive_id',
      fileId: 'file_id',
      getMasterUrl: 'get_master_url',
      getWithoutUrl: 'get_without_url',
      reTranscode: 're_transcode',
      shareId: 'share_id',
      templateId: 'template_id',
      urlExpireSec: 'url_expire_sec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      driveId: 'string',
      fileId: 'string',
      getMasterUrl: 'boolean',
      getWithoutUrl: 'boolean',
      reTranscode: 'boolean',
      shareId: 'string',
      templateId: 'string',
      urlExpireSec: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoPreviewPlayInfoResponseBody extends $dara.Model {
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
   * The drive ID.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * fileid1
   */
  fileId?: string;
  /**
   * @remarks
   * The share ID.
   * 
   * @example
   * 7JQX1FswpQ8
   */
  shareId?: string;
  /**
   * @remarks
   * The information about video playback.
   */
  videoPreviewPlayInfo?: VideoPreviewPlayInfo;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domain_id',
      driveId: 'drive_id',
      fileId: 'file_id',
      shareId: 'share_id',
      videoPreviewPlayInfo: 'video_preview_play_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      driveId: 'string',
      fileId: 'string',
      shareId: 'string',
      videoPreviewPlayInfo: VideoPreviewPlayInfo,
    };
  }

  validate() {
    if(this.videoPreviewPlayInfo && typeof (this.videoPreviewPlayInfo as any).validate === 'function') {
      (this.videoPreviewPlayInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoPreviewPlayInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetVideoPreviewPlayInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVideoPreviewPlayInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoPreviewPlayMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The preview type. You must enable the corresponding video transcoding feature. Valid values:
   * 
   * *   live_transcoding: previews a live stream while transcoding is in progress.
   * *   quick_video: previews a video while transcoding is in progress.
   * *   offline_audio: previews a piece of audio after the audio is transcoded offline.
   * *   offline_video: previews a video after the video is transcoded offline.
   * 
   * This parameter is required.
   * 
   * @example
   * live_transcoding
   */
  category?: string;
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
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9520943DC264
   */
  fileId?: string;
  /**
   * @remarks
   * The share ID. If you want to manage a file by using a sharing link, carry the `x-share-token` header in the request and specify share_id. In this case, `drive_id` is invalid. Otherwise, use an `AccessKey pair` or `access token` for authentication and specify `drive_id`. You must specify at least either `share_id` or `drive_id`.
   * 
   * @example
   * 7JQX1FswpQ8
   */
  shareId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      driveId: 'drive_id',
      fileId: 'file_id',
      shareId: 'share_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      driveId: 'string',
      fileId: 'string',
      shareId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoPreviewPlayMetaResponseBody extends $dara.Model {
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
   * The drive ID.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * fileid1
   */
  fileId?: string;
  /**
   * @remarks
   * The share ID.
   * 
   * @example
   * 7JQX1FswpQ8
   */
  shareId?: string;
  /**
   * @remarks
   * The preview metadata of the video.
   */
  videoPreviewPlayMeta?: VideoPreviewPlayMeta;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domain_id',
      driveId: 'drive_id',
      fileId: 'file_id',
      shareId: 'share_id',
      videoPreviewPlayMeta: 'video_preview_play_meta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      driveId: 'string',
      fileId: 'string',
      shareId: 'string',
      videoPreviewPlayMeta: VideoPreviewPlayMeta,
    };
  }

  validate() {
    if(this.videoPreviewPlayMeta && typeof (this.videoPreviewPlayMeta as any).validate === 'function') {
      (this.videoPreviewPlayMeta as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoPreviewPlayMetaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetVideoPreviewPlayMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVideoPreviewPlayMetaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GroupUpdateNameRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  groupId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'group_id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GroupUpdateNameResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportUserRequest extends $dara.Model {
  /**
   * @remarks
   * The display name of the authentication type.
   * 
   * @example
   * 10000
   */
  authenticationDisplayName?: string;
  /**
   * @remarks
   * The authentication type. Valid values:
   * 
   * *   mobile: mobile number.
   * *   email: email address.
   * *   ding: DingTalk account.
   * *   ram: Alibaba Cloud Resource Access Management (RAM) user.
   * *   wechat: WeCom account.
   * *   ldap: Lightweight Directory Access Protocol (LDAP) account.
   * *   custom: custom account.
   * 
   * This parameter is required.
   * 
   * @example
   * mobile
   */
  authenticationType?: string;
  /**
   * @remarks
   * Specifies whether to automatically create a drive.
   * 
   * @example
   * false
   */
  autoCreateDrive?: boolean;
  /**
   * @remarks
   * The size of the drive. The value cannot be smaller than -1. A value of -1 specifies that the size is unlimited.
   * 
   * @example
   * 10240
   */
  driveTotalSize?: number;
  /**
   * @remarks
   * The additional information.
   * 
   * If authentication_type is set to mobile, set this parameter to a country code. If you do not specify this parameter, 86 is used by default.
   * 
   * @example
   * 1
   */
  extra?: string;
  /**
   * @remarks
   * The unique identifier.
   * 
   * This parameter is required.
   * 
   * @example
   * 130****
   */
  identity?: string;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * This parameter is required.
   * 
   * @example
   * pdsuer
   */
  nickName?: string;
  /**
   * @remarks
   * The ID of the group to which the user is added.
   * 
   * @example
   * g12
   */
  parentGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationDisplayName: 'authentication_display_name',
      authenticationType: 'authentication_type',
      autoCreateDrive: 'auto_create_drive',
      driveTotalSize: 'drive_total_size',
      extra: 'extra',
      identity: 'identity',
      nickName: 'nick_name',
      parentGroupId: 'parent_group_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationDisplayName: 'string',
      authenticationType: 'string',
      autoCreateDrive: 'boolean',
      driveTotalSize: 'number',
      extra: 'string',
      identity: 'string',
      nickName: 'string',
      parentGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportUserResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: User;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: User,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvestigateFileRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  driveFileIds?: InvestigateFileRequestDriveFileIds[];
  static names(): { [key: string]: string } {
    return {
      driveFileIds: 'drive_file_ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveFileIds: { 'type': 'array', 'itemType': InvestigateFileRequestDriveFileIds },
    };
  }

  validate() {
    if(Array.isArray(this.driveFileIds)) {
      $dara.Model.validateArray(this.driveFileIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvestigateFileResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LinkAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The additional information about the unique identifier of the account. For example, if type is set to mobile, set the value of extra to a country code. For example, a value of 86 specifies a mobile number in the Chinese mainland. If you do not specify this parameter, 86 is used by default.
   * 
   * @example
   * 86
   */
  extra?: string;
  /**
   * @remarks
   * The unique identifier of the account, such as a mobile number.
   * 
   * This parameter is required.
   * 
   * @example
   * eyy***
   */
  identity?: string;
  /**
   * @remarks
   * The account type. Valid values:
   * 
   * *   mobile: a mobile number.
   * *   email: an email address.
   * *   ding: a DingTalk account.
   * *   ram: an Alibaba Cloud Resource Access Management (RAM) user.
   * *   wechat: a WeCom account.
   * *   ldap: a Lightweight Directory Access Protocol (LDAP) account.
   * *   custom: a custom account.
   * 
   * This parameter is required.
   * 
   * @example
   * ding
   */
  type?: string;
  /**
   * @remarks
   * The ID of the user with which you want to associate an account.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      extra: 'extra',
      identity: 'identity',
      type: 'type',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      identity: 'string',
      type: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LinkAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Token;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Token,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddressGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The method that is used to generate a thumbnail of an image.
   * 
   * @example
   * image/resize,w_200
   */
  imageThumbnailProcess?: string;
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 100
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of marker. By default, this parameter is left empty.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  marker?: string;
  /**
   * @remarks
   * The method that is used to generate a thumbnail of a video.
   * 
   * @example
   * video_thumbnail_process
   */
  videoThumbnailProcess?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      imageThumbnailProcess: 'image_thumbnail_process',
      limit: 'limit',
      marker: 'marker',
      videoThumbnailProcess: 'video_thumbnail_process',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      imageThumbnailProcess: 'string',
      limit: 'number',
      marker: 'string',
      videoThumbnailProcess: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddressGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the location-based groups.
   */
  items?: AddressGroup[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If next_marker is empty, no next page exists.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': AddressGroup },
      nextMarker: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddressGroupsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAddressGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAddressGroupsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssignmentRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 1 to 100.
   * 
   * The number of returned results must be less than or equal to the specified number.
   * 
   * @example
   * 50
   */
  limit?: number;
  /**
   * @remarks
   * The ID of the managed resource, such as a group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 105***b82
   */
  manageResourceId?: string;
  /**
   * @remarks
   * The type of the managed resource. Set the value to RT_Group, which specifies that the administrators of a group are queried.
   * 
   * This parameter is required.
   * 
   * @example
   * RT_Group
   */
  manageResourceType?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of marker. By default, this parameter is empty.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  marker?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      manageResourceId: 'manage_resource_id',
      manageResourceType: 'manage_resource_type',
      marker: 'marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      manageResourceId: 'string',
      manageResourceType: 'string',
      marker: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssignmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The assigned roles.
   */
  assignmentList?: ListAssignmentResponseBodyAssignmentList[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If next_marker is empty, no next page exists.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      assignmentList: 'assignment_list',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignmentList: { 'type': 'array', 'itemType': ListAssignmentResponseBodyAssignmentList },
      nextMarker: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assignmentList)) {
      $dara.Model.validateArray(this.assignmentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssignmentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAssignmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAssignmentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeltaRequest extends $dara.Model {
  /**
   * @remarks
   * The cursor of the incremental information.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  cursor?: string;
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 0 to 100. Default value: 100.
   * 
   * The number of returned results must be less than or equal to the specified number.
   * 
   * @example
   * 50
   */
  limit?: number;
  /**
   * @remarks
   * The ID of the root file of the synced folder.
   * 
   * @example
   * 622fb09598ae66777c7040109a16f49381f6abe1
   */
  syncRootId?: string;
  static names(): { [key: string]: string } {
    return {
      cursor: 'cursor',
      driveId: 'drive_id',
      limit: 'limit',
      syncRootId: 'sync_root_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursor: 'string',
      driveId: 'string',
      limit: 'number',
      syncRootId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeltaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cursor of the incremental information.
   * 
   * @example
   * 1WQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  cursor?: string;
  /**
   * @remarks
   * Indicates whether more information is returned.
   * 
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The incremental information returned.
   */
  items?: ListDeltaResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      cursor: 'cursor',
      hasMore: 'has_more',
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursor: 'string',
      hasMore: 'boolean',
      items: { 'type': 'array', 'itemType': ListDeltaResponseBodyItems },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeltaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDeltaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDeltaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 1 to 100. Default value: 50.
   * 
   * @example
   * 60
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of marker.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  marker?: string;
  /**
   * @remarks
   * The ID of the parent domain.
   * 
   * @example
   * bj1
   */
  parentDomainId?: string;
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      marker: 'marker',
      parentDomainId: 'parent_domain_id',
      serviceCode: 'service_code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      marker: 'string',
      parentDomainId: 'string',
      serviceCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the domains.
   */
  items?: Domain[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If next_marker is empty, no next page exists.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': Domain },
      nextMarker: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDomainsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDriveRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 100
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of marker. By default, this parameter is empty.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  marker?: string;
  /**
   * @remarks
   * The owner of the drive. If this parameter is not specified, all drives are returned.
   * 
   * @example
   * c9b7a5aa04d14ae3867fdc886fa01da4
   */
  owner?: string;
  /**
   * @remarks
   * The type of the owner. Valid values:
   * 
   * user and group.
   * 
   * By default, drives of all owner types are returned.
   * 
   * @example
   * user
   */
  ownerType?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      marker: 'marker',
      owner: 'owner',
      ownerType: 'owner_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      marker: 'string',
      owner: 'string',
      ownerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDriveResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried drives.
   */
  items?: Drive[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If next_marker is empty, no next page exists.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': Drive },
      nextMarker: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDriveResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDriveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDriveResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFacegroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 100
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of marker. By default, this parameter is left empty.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  marker?: string;
  /**
   * @remarks
   * The filter condition that is used to query groups. The value can be up to 128 characters in length. An exact match is used.
   */
  remarks?: string;
  returnTotalCount?: boolean;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      limit: 'limit',
      marker: 'marker',
      remarks: 'remarks',
      returnTotalCount: 'return_total_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      limit: 'number',
      marker: 'string',
      remarks: 'string',
      returnTotalCount: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFacegroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the face-based groups.
   */
  items?: FaceGroup[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If next_marker is empty, no next page exists.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  nextMarker?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
      totalCount: 'total_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': FaceGroup },
      nextMarker: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFacegroupsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFacegroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFacegroupsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileRequest extends $dara.Model {
  /**
   * @remarks
   * The category of the file. Valid values:
   * 
   * app: installation package. zip: compressed package. image: image. doc: document. video: video. audio: audio. others: other files.
   * 
   * By default, files of all categories are returned.
   * 
   * @example
   * image
   */
  category?: string;
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
   * The fields to return.
   * 
   * 1.  If this parameter is set to \\*, all fields of the file except the fields that must be specified are returned.
   * 2.  If only specific fields are required, you can specify the following fields: url, exif, cropping_suggestion, characteristic_hash, video_metadata, and video_preview_metadata. If multiple fields are required, separate them with commas (,). Example: url,exif.
   * 3.  The investigation_info field is returned only if you specify this field.
   * 
   * By default, all fields except the fields that must be specified are returned.
   * 
   * @example
   * *
   */
  fields?: string;
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 1 to 100.
   * 
   * The number of returned results must be less than or equal to the specified number.
   * 
   * @example
   * 50
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of marker.\\
   * By default, this parameter is empty.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  marker?: string;
  /**
   * @remarks
   * The sorting field.
   * 
   * Default value: created_at.
   * 
   * Valid values:
   * 
   * *   updated_at
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     sorts the results based on the time when the file was last modified
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   size
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     sorts the results based on the size of the file
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   name
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     sorts the results based on the name of the file
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   created_at
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     sorts the results based on the time when the file was created
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * @example
   * updated_at
   */
  orderBy?: string;
  /**
   * @remarks
   * The sorting direction. Valid values:
   * 
   * ASC: ascending order. DESC: descending order.
   * 
   * Default value: ASC.
   * 
   * @example
   * ASC
   */
  orderDirection?: string;
  /**
   * @remarks
   * The ID of the parent folder. If the parent folder is a root directory, set this parameter to root.
   * 
   * This parameter is required.
   * 
   * @example
   * root
   */
  parentFileId?: string;
  /**
   * @remarks
   * The share ID. If you want to manage a file by using a share link, carry the `x-share-token` header for authentication in the request and specify share_id. In this case, `drive_id` is invalid. Otherwise, use an `AccessKey pair` or `access token` for authentication and specify `drive_id`. You must specify one of `share_id` and `drive_id`.
   * 
   * @example
   * 7JQX1FswpQ8
   */
  shareId?: string;
  /**
   * @remarks
   * The state of the file. Valid values:
   * 
   * available: Only normal files are returned. uploading: Only files that are being uploaded are returned.
   * 
   * By default, only files in the available state are returned.
   * 
   * @example
   * available
   */
  status?: string;
  /**
   * @remarks
   * The thumbnail configurations. Up to five thumbnails can be returned at a time. The value contains key-value pairs. You can customize the keys. The URL of a thumbnail is returned based on the key.
   */
  thumbnailProcesses?: { [key: string]: ImageProcess };
  /**
   * @remarks
   * The type of the file. Valid values:
   * 
   * file: Only files are returned. folder: Only folders are returned.
   * 
   * By default, files of all types are returned.
   * 
   * @example
   * file
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      driveId: 'drive_id',
      fields: 'fields',
      limit: 'limit',
      marker: 'marker',
      orderBy: 'order_by',
      orderDirection: 'order_direction',
      parentFileId: 'parent_file_id',
      shareId: 'share_id',
      status: 'status',
      thumbnailProcesses: 'thumbnail_processes',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      driveId: 'string',
      fields: 'string',
      limit: 'number',
      marker: 'string',
      orderBy: 'string',
      orderDirection: 'string',
      parentFileId: 'string',
      shareId: 'string',
      status: 'string',
      thumbnailProcesses: { 'type': 'map', 'keyType': 'string', 'valueType': ImageProcess },
      type: 'string',
    };
  }

  validate() {
    if(this.thumbnailProcesses) {
      $dara.Model.validateMap(this.thumbnailProcesses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried files.
   */
  items?: File[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If next_marker is empty, no next page exists.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': File },
      nextMarker: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFileResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 100
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of marker. By default, this parameter is left empty.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  marker?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      marker: 'marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      marker: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the groups.
   */
  items?: Group[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If next_marker is empty, no next page exists.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': Group },
      nextMarker: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the group of which you want to query members.
   * 
   * This parameter is required.
   * 
   * @example
   * 3e5***2c2
   */
  groupId?: string;
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 50
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of marker.\\
   * By default, this parameter is left empty.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  marker?: string;
  /**
   * @remarks
   * The member type. If you do not specify this parameter, both types of members are returned. Valid values:
   * 
   * *   user
   * *   group
   * 
   * Note: A group can be a member of only one group. It cannot be a member of multiple groups. A user can be a member of multiple groups.
   * 
   * @example
   * user
   */
  memberType?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'group_id',
      limit: 'limit',
      marker: 'marker',
      memberType: 'member_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      limit: 'number',
      marker: 'string',
      memberType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupMemberResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the groups.
   */
  groupItems?: Group[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If next_marker is empty, no next page exists.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhM1
   */
  nextMarker?: string;
  /**
   * @remarks
   * The information about the users.
   */
  userItems?: User[];
  static names(): { [key: string]: string } {
    return {
      groupItems: 'group_items',
      nextMarker: 'next_marker',
      userItems: 'user_items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupItems: { 'type': 'array', 'itemType': Group },
      nextMarker: 'string',
      userItems: { 'type': 'array', 'itemType': User },
    };
  }

  validate() {
    if(Array.isArray(this.groupItems)) {
      $dara.Model.validateArray(this.groupItems);
    }
    if(Array.isArray(this.userItems)) {
      $dara.Model.validateArray(this.userItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupMemberResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGroupMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGroupMemberResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdentityRoleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  identity?: Identity;
  static names(): { [key: string]: string } {
    return {
      identity: 'identity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identity: Identity,
    };
  }

  validate() {
    if(this.identity && typeof (this.identity as any).validate === 'function') {
      (this.identity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdentityRoleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BaseRoleMemberResponse;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BaseRoleMemberResponse,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdentityToBenefitPkgMappingRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the entity.
   * 
   * If you call this operation to manage the benefits of a user, set this parameter to the ID of the user.
   * 
   * This parameter is required.
   * 
   * @example
   * user123
   */
  identityId?: string;
  /**
   * @remarks
   * The type of the entity. If you call this operation to manage the benefits of a user, set this parameter to user.
   * 
   * This parameter is required.
   * 
   * @example
   * user
   */
  identityType?: string;
  /**
   * @remarks
   * Specifies whether to return the benefit packages that expire. Default value: false.
   * 
   * @example
   * false
   */
  includeExpired?: boolean;
  static names(): { [key: string]: string } {
    return {
      identityId: 'identity_id',
      identityType: 'identity_type',
      includeExpired: 'include_expired',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityId: 'string',
      identityType: 'string',
      includeExpired: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdentityToBenefitPkgMappingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the benefit packages that are associated with an entity.
   */
  items?: IdentityToBenefitPkgMapping[];
  static names(): { [key: string]: string } {
    return {
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': IdentityToBenefitPkgMapping },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdentityToBenefitPkgMappingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIdentityToBenefitPkgMappingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIdentityToBenefitPkgMappingResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyDrivesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return. Default value: 100. Valid values: 1 to 100.
   * 
   * @example
   * 100
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of marker. By default, this parameter is empty.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  marker?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      marker: 'marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      marker: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyDrivesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried drives.
   */
  items?: Drive[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If next_marker is empty, no next page exists.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': Drive },
      nextMarker: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyDrivesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMyDrivesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMyDrivesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyGroupDriveRequest extends $dara.Model {
  driveName?: string;
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 100
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of marker. By default, this parameter is left empty.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  marker?: string;
  static names(): { [key: string]: string } {
    return {
      driveName: 'drive_name',
      limit: 'limit',
      marker: 'marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveName: 'string',
      limit: 'number',
      marker: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyGroupDriveResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the team drives.
   */
  items?: Drive[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If next_marker is empty, no next page exists.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  nextMarker?: string;
  rootGroupDrive?: Drive;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
      rootGroupDrive: 'root_group_drive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': Drive },
      nextMarker: 'string',
      rootGroupDrive: Drive,
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    if(this.rootGroupDrive && typeof (this.rootGroupDrive as any).validate === 'function') {
      (this.rootGroupDrive as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMyGroupDriveResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMyGroupDriveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMyGroupDriveResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReceivedFileRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 100
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of marker. By default, this parameter is empty.
   * 
   * @example
   * eym***
   */
  marker?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      marker: 'marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      marker: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReceivedFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried files.
   */
  items?: File[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If next_marker is empty, no next page exists.
   * 
   * @example
   * eym***
   */
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': File },
      nextMarker: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReceivedFileResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListReceivedFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListReceivedFileResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecyclebinRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * Specifies the returned fields.
   * 
   * 1\\. If you set this parameter to \\*, all fields of the file are returned.
   * 
   * 2\\. If you set this parameter to a null value or leave this parameter empty, the fields, such as file creator, file modifier, and custom tags, are not returned.
   * 
   * The default value is a null value, which indicates that only some fields are returned.
   * 
   * @example
   * *
   */
  fields?: string;
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 1 to 200. Default value: 50.
   * 
   * The number of returned results must be less than or equal to the specified number.
   * 
   * @example
   * 50
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of marker. By default, this parameter is left empty.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  marker?: string;
  thumbnailProcesses?: { [key: string]: ImageProcess };
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fields: 'fields',
      limit: 'limit',
      marker: 'marker',
      thumbnailProcesses: 'thumbnail_processes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fields: 'string',
      limit: 'number',
      marker: 'string',
      thumbnailProcesses: { 'type': 'map', 'keyType': 'string', 'valueType': ImageProcess },
    };
  }

  validate() {
    if(this.thumbnailProcesses) {
      $dara.Model.validateMap(this.thumbnailProcesses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecyclebinResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the files and folders in the recycle bin.
   */
  items?: File[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If next_marker is empty, no next page exists.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhM1
   */
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': File },
      nextMarker: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecyclebinResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRecyclebinResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRecyclebinResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRevisionRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * Specifies the returned fields.
   * 
   * By default, this parameter is left empty. If you set this parameter to \\*, all fields are returned. If you leave this parameter empty, the creator of the file is not returned.
   * 
   * @example
   * *
   */
  fields?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9520943DC264
   */
  fileId?: string;
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 1 to 100.
   * 
   * Default value: 50.
   * 
   * The number of returned results must be less than or equal to the specified number.
   * 
   * @example
   * 100
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of marker.
   * 
   * By default, this parameter is left empty.
   * 
   * @example
   * 40CB7794C929
   */
  marker?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fields: 'fields',
      fileId: 'file_id',
      limit: 'limit',
      marker: 'marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fields: 'string',
      fileId: 'string',
      limit: 'number',
      marker: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRevisionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the versions.
   */
  items?: Revision[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If next_marker is empty, no next page exists.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': Revision },
      nextMarker: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRevisionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRevisionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRevisionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShareLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The creator of the share.
   * 
   * @example
   * c9b7a5aa04d14ae3867fdc886fa01da4
   */
  creator?: string;
  /**
   * @remarks
   * Specifies whether to return the shares that are canceled.
   * 
   * @example
   * true
   */
  includeCancelled?: boolean;
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 0 to 100.
   * 
   * The number of returned results must be less than or equal to the specified number.
   * 
   * @example
   * 50
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of marker.\\
   * By default, this parameter is left empty.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  marker?: string;
  /**
   * @remarks
   * The field by which to sort the returned results. Default value: created_at. Valid values:
   * 
   * *   share_name: sorts the results by the name of the share.
   * *   updated_at: sorts the results by the time when the share was modified.
   * *   description: sorts the results by the description of the share.
   * *   created_at: sorts the results by the time when the share was created.
   * 
   * @example
   * share_name
   */
  orderBy?: string;
  /**
   * @remarks
   * The order in which you want to sort the returned results. By default, order_direction is set to DESC if order_by is set to created_at or updated_at, and is set to ASC if order_by is set to other values. Valid values:
   * 
   * *   ASC: sorts the results in ascending order.
   * *   DESC: sorts the results in descending order.
   * 
   * @example
   * ASC
   */
  orderDirection?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'creator',
      includeCancelled: 'include_cancelled',
      limit: 'limit',
      marker: 'marker',
      orderBy: 'order_by',
      orderDirection: 'order_direction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      includeCancelled: 'boolean',
      limit: 'number',
      marker: 'string',
      orderBy: 'string',
      orderDirection: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShareLinkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the shares.
   */
  items?: ShareLink[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If next_marker is empty, no next page exists.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ShareLink },
      nextMarker: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShareLinkResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListShareLinkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListShareLinkResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The method that is used to generate the thumbnail of an image.
   * 
   * @example
   * image/resize,w_200
   */
  imageThumbnailProcess?: string;
  /**
   * @remarks
   * The method that is used to generate the thumbnail of a video.
   * 
   * @example
   * video/snapshot,t_7000,f_jpg,w_800,h_600,m_fast
   */
  videoThumbnailProcess?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      imageThumbnailProcess: 'image_thumbnail_process',
      videoThumbnailProcess: 'video_thumbnail_process',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      imageThumbnailProcess: 'string',
      videoThumbnailProcess: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the tags.
   */
  tags?: ImageTag[];
  static names(): { [key: string]: string } {
    return {
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: { 'type': 'array', 'itemType': ImageTag },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUploadedPartsRequest extends $dara.Model {
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
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 322fb07b975f4b0ae1b543fe8475eee4c19eb2b2
   */
  fileId?: string;
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 100
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of marker. By default, this parameter is left empty.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  partNumberMarker?: number;
  /**
   * @remarks
   * The share ID. This parameter is required if the file is uploaded by using the share URL of the file.
   * 
   * @example
   * 7JQX1FswpQ8
   */
  shareId?: string;
  /**
   * @remarks
   * The ID of the upload task.
   * 
   * This parameter is required.
   * 
   * @example
   * 00166D06127B413BA1EC8ABB1144D101
   */
  uploadId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      limit: 'limit',
      partNumberMarker: 'part_number_marker',
      shareId: 'share_id',
      uploadId: 'upload_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      limit: 'number',
      partNumberMarker: 'number',
      shareId: 'string',
      uploadId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUploadedPartsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 322fb07b975f4b0ae1b543fe8475eee4c19eb2b2
   */
  fileId?: string;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If next_marker is empty, no next page exists.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  nextPartNumberMarker?: string;
  /**
   * @remarks
   * Indicates whether the parallel upload feature is enabled.
   * 
   * @example
   * false
   */
  parallelUpload?: boolean;
  /**
   * @remarks
   * The ID of the upload task.
   * 
   * @example
   * 00166D06127B413BA1EC8ABB1144D101
   */
  uploadId?: string;
  /**
   * @remarks
   * The information about the file parts.
   */
  uploadedParts?: UploadPartInfo[];
  static names(): { [key: string]: string } {
    return {
      fileId: 'file_id',
      nextPartNumberMarker: 'next_part_number_marker',
      parallelUpload: 'parallel_upload',
      uploadId: 'upload_id',
      uploadedParts: 'uploaded_parts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      nextPartNumberMarker: 'string',
      parallelUpload: 'boolean',
      uploadId: 'string',
      uploadedParts: { 'type': 'array', 'itemType': UploadPartInfo },
    };
  }

  validate() {
    if(Array.isArray(this.uploadedParts)) {
      $dara.Model.validateArray(this.uploadedParts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUploadedPartsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUploadedPartsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUploadedPartsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 100
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of marker. By default, this parameter is left empty.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  marker?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      marker: 'marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      marker: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the users.
   */
  items?: User[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If next_marker is empty, no next page exists.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': User },
      nextMarker: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveFileRequest extends $dara.Model {
  /**
   * @remarks
   * The processing method that is used if the file that you want to move has the same name as an existing file in the destination directory. Valid values:
   * 
   * ignore: allows you to move the file by using the same name as an existing file in the destination directory.
   * 
   * auto_rename: automatically renames the file that has the same name exists in the destination directory. By default, the current point in time is added to the end of the file name. Example: xxx_20060102_150405.
   * 
   * refuse: does not move the file that you want to move but returns the information about the file that has the same name in the destination directory.
   * 
   * Default value: ignore.
   * 
   * @example
   * ignore
   */
  checkNameMode?: string;
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9520943DC264
   */
  fileId?: string;
  /**
   * @remarks
   * The ID of the destination parent directory to which you want to move a file or folder. If you want to move a file or folder to the root directory, set this parameter to root.
   * 
   * This parameter is required.
   * 
   * @example
   * 6520943DC261
   */
  toParentFileId?: string;
  static names(): { [key: string]: string } {
    return {
      checkNameMode: 'check_name_mode',
      driveId: 'drive_id',
      fileId: 'file_id',
      toParentFileId: 'to_parent_file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkNameMode: 'string',
      driveId: 'string',
      fileId: 'string',
      toParentFileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * If an empty string is returned, the file is moved.
   * 
   * If a non-empty string is returned, an asynchronous task is required. You can call the GetAsyncTask operation to obtain the information about an asynchronous task based on the task ID.
   * 
   * @example
   * 23ebd1a24dba4166b1527add476ef2866051b4d5del106
   */
  asyncTaskId?: string;
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
   * The drive ID.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * Indicates whether the file already exists in the destination directory.
   * 
   * @example
   * false
   */
  exist?: boolean;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * fileid1
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'async_task_id',
      domainId: 'domain_id',
      driveId: 'drive_id',
      exist: 'exist',
      fileId: 'file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      domainId: 'string',
      driveId: 'string',
      exist: 'boolean',
      fileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveFileResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MoveFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MoveFileResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderPriceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  orderType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  package?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  period?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  periodUnit?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  totalSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      instanceId: 'instance_id',
      orderType: 'order_type',
      package: 'package',
      period: 'period',
      periodUnit: 'period_unit',
      totalSize: 'total_size',
      userCount: 'user_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      orderType: 'string',
      package: 'string',
      period: 'number',
      periodUnit: 'string',
      totalSize: 'number',
      userCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderPriceResponseBody extends $dara.Model {
  discountPrice?: number;
  originalPrice?: number;
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      discountPrice: 'discount_price',
      originalPrice: 'original_price',
      tradePrice: 'trade_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountPrice: 'number',
      originalPrice: 'number',
      tradePrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderPriceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryOrderPriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryOrderPriceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFaceGroupFileRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  driveId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Cluster-abc
   */
  faceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abcd
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      faceGroupId: 'face_group_id',
      fileId: 'file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      faceGroupId: 'string',
      fileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFaceGroupFileResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the group from which you want to remove a member.
   * 
   * This parameter is required.
   * 
   * @example
   * 3e5***2c2
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the member. If member_type is set to user, set this parameter to the ID of the corresponding user.
   * 
   * This parameter is required.
   * 
   * @example
   * 2e4***1b1
   */
  memberId?: string;
  /**
   * @remarks
   * The type of the member that you want to remove from the group. Only common users can be removed. If you want to remove all members from a group, you can directly delete the group. Valid value:
   * 
   * *   user
   * 
   * Note: A group can be a member of only one group. It cannot be a member of multiple groups. A user can be a member of multiple groups.
   * 
   * This parameter is required.
   * 
   * @example
   * user
   */
  memberType?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'group_id',
      memberId: 'member_id',
      memberType: 'member_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      memberId: 'string',
      memberType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGroupMemberResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveStoryFilesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  files?: RemoveStoryFilesRequestFiles[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9132e0d8-fe92-4e56-86c3-f5f112308003
   */
  storyId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      files: 'files',
      storyId: 'story_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      files: { 'type': 'array', 'itemType': RemoveStoryFilesRequestFiles },
      storyId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveStoryFilesResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @example
   * 9132e0d8-fe92-4e56-86c3-f5f112308003
   */
  storyId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      storyId: 'story_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      storyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveStoryFilesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveStoryFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveStoryFilesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreFileRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The ID of the file or folder.
   * 
   * This parameter is required.
   * 
   * @example
   * 4221bf6e6ab43a255edc4463bffa6f5f5d317401
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * If an empty string is returned, the file or folder is restored.
   * 
   * If a non-empty string is returned, an asynchronous task is required. You can call the GetAsyncTask operation to obtain the information about an asynchronous task based on the task ID.
   * 
   * @example
   * 4221bf6e6ab43c255edc4463bf3a6f5f5d317406
   */
  asyncTaskId?: string;
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
   * The drive ID.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The ID of the file or folder.
   * 
   * @example
   * 4221bf6e6ab43a255edc4463bffa6f5f5d317401
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'async_task_id',
      domainId: 'domain_id',
      driveId: 'drive_id',
      fileId: 'file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      domainId: 'string',
      driveId: 'string',
      fileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreFileResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestoreFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RestoreFileResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreRevisionRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9520943DC264
   */
  fileId?: string;
  /**
   * @remarks
   * The version ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 40CB7794C929
   */
  revisionId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      revisionId: 'revision_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      revisionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreRevisionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Revision;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Revision,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanFileRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The file properties to return.
   * 
   * *   If you want to return all file properties, set this parameter to \\*.
   * *   By default, if you do not specify this parameter, the following properties of a file are returned: - file_id, - drive_id, - parent_file_id, - type, - created_at, - updated_at, - file_extention, - size, - starred, - status, - category, and - permissions.
   * *   You can also specify properties to return. Separate multiple properties with commas (,).
   * 
   * @example
   * *
   */
  fields?: string;
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 1 to 100.
   * 
   * The number of returned results must be less than or equal to the specified number.
   * 
   * @example
   * 50
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of marker.\\
   * By default, this parameter is left empty.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  marker?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fields: 'fields',
      limit: 'limit',
      marker: 'marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fields: 'string',
      limit: 'number',
      marker: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the files.
   */
  items?: File[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If next_marker is empty, no next page exists.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': File },
      nextMarker: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanFileResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ScanFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ScanFileResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAddressGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The level of the location.
   * 
   * Valid values:
   * 
   * *   country
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   province
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   city
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   district
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   township
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   */
  addressLevel?: string;
  /**
   * @remarks
   * The locations.
   */
  addressNames?: string[];
  /**
   * @remarks
   * The coordinates of the bottom right vertex of the rectangle. Set the value in the format of latitude,longitude.
   * 
   * @example
   * 40.121,105.2121
   */
  brGeoPoint?: string;
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The method used to generate the thumbnail of an image.
   * 
   * @example
   * image/resize,w_200
   */
  imageThumbnailProcess?: string;
  /**
   * @remarks
   * The coordinates of the top left vertex of the rectangle. Set the value in the format of latitude,longitude.
   * 
   * @example
   * 39.121,101.2121
   */
  tlGeoPoint?: string;
  /**
   * @remarks
   * The method used to generate the thumbnail of a video.
   * 
   * @example
   * video/snapshot,t_7000,f_jpg,w_800,h_600,m_fast
   */
  videoThumbnailProcess?: string;
  static names(): { [key: string]: string } {
    return {
      addressLevel: 'address_level',
      addressNames: 'address_names',
      brGeoPoint: 'br_geo_point',
      driveId: 'drive_id',
      imageThumbnailProcess: 'image_thumbnail_process',
      tlGeoPoint: 'tl_geo_point',
      videoThumbnailProcess: 'video_thumbnail_process',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressLevel: 'string',
      addressNames: { 'type': 'array', 'itemType': 'string' },
      brGeoPoint: 'string',
      driveId: 'string',
      imageThumbnailProcess: 'string',
      tlGeoPoint: 'string',
      videoThumbnailProcess: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addressNames)) {
      $dara.Model.validateArray(this.addressNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAddressGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The location-based groups.
   */
  items?: AddressGroup[];
  static names(): { [key: string]: string } {
    return {
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': AddressGroup },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAddressGroupsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchAddressGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchAddressGroupsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 1 to 100. Default value: 100.
   * 
   * The number of returned results must be less than or equal to the specified number.
   * 
   * @example
   * 50
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of marker.\\
   * By default, this parameter is empty.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  marker?: string;
  /**
   * @remarks
   * The name of the domain. Fuzzy search is supported.
   */
  name?: string;
  /**
   * @remarks
   * The sorting rule. Set the value to created_at, which specifies that the results are sorted based on the time when the domain was created.
   * 
   * @example
   * created_at
   */
  orderBy?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      marker: 'marker',
      name: 'name',
      orderBy: 'order_by',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      marker: 'string',
      name: 'string',
      orderBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried domains.
   */
  items?: Domain[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If next_marker is empty, no next page exists.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': Domain },
      nextMarker: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDomainsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchDomainsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDriveRequest extends $dara.Model {
  /**
   * @remarks
   * The drive name.
   */
  driveName?: string;
  /**
   * @remarks
   * The maximum number of asynchronous tasks to return. Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 100
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of marker.\\
   * By default, this parameter is left empty.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  marker?: string;
  /**
   * @remarks
   * The owner of the drive.
   * 
   * @example
   * c9b7a5aa04d14ae3867fdc886fa01da4
   */
  owner?: string;
  /**
   * @remarks
   * The type of the owner. Valid values:
   * 
   * user group
   * 
   * @example
   * user
   */
  ownerType?: string;
  static names(): { [key: string]: string } {
    return {
      driveName: 'drive_name',
      limit: 'limit',
      marker: 'marker',
      owner: 'owner',
      ownerType: 'owner_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveName: 'string',
      limit: 'number',
      marker: 'string',
      owner: 'string',
      ownerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDriveResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the drives.
   */
  items?: Drive[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If next_marker is empty, no next page exists.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': Drive },
      nextMarker: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDriveResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchDriveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchDriveResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFileRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @example
   * url,thumbnail
   * 
   * @deprecated
   */
  fields?: string;
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 1 to 100.
   * 
   * The number of returned results must be less than or equal to the specified number.
   * 
   * @example
   * 50
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of marker.\\
   * By default, this parameter is left empty.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  marker?: string;
  /**
   * @remarks
   * The field by which to sort the returned results. Default value: created_at. Valid values:
   * 
   * *   created_at: sorts the results by the time when the file was created.
   * *   updated_at: sorts the results by the time when the file was modified.
   * *   size: sorts the results by the size of the file.
   * *   name: sorts the results by the name of the file.
   * 
   * The order in which you want to sort the returned results. Valid values:
   * 
   * *   ASC: sorts the results in ascending order.
   * *   DESC: sorts the results in descending order.
   * 
   * You must specify this parameter in the \\<field name> \\<ASC or DESC> format. Separate multiple field names with commas (,). A preceding field has a higher priority than a following field. Examples:
   * 
   * *   If you want to sort the results based on the file name in ascending order, set this parameter to "name ASC".
   * *   If you want to sort the results based on the creation time in descending order, set this parameter to "created_at DESC".
   * *   If you want to sort the results based on the creation time in descending order first, and then sort the results based on the file name in ascending order if the creation time is the same, set this parameter to "created_at DESC,name ASC".
   * 
   * @example
   * name
   */
  orderBy?: string;
  /**
   * @remarks
   * The search condition. Fuzzy searches based on the file name or directory name are supported. The search condition can be up to 4,096 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * not name=123
   */
  query?: string;
  recursive?: boolean;
  /**
   * @remarks
   * Specifies whether to return the total number of retrieved files.
   * 
   * @example
   * true
   */
  returnTotalCount?: boolean;
  thumbnailProcesses?: { [key: string]: ImageProcess };
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fields: 'fields',
      limit: 'limit',
      marker: 'marker',
      orderBy: 'order_by',
      query: 'query',
      recursive: 'recursive',
      returnTotalCount: 'return_total_count',
      thumbnailProcesses: 'thumbnail_processes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fields: 'string',
      limit: 'number',
      marker: 'string',
      orderBy: 'string',
      query: 'string',
      recursive: 'boolean',
      returnTotalCount: 'boolean',
      thumbnailProcesses: { 'type': 'map', 'keyType': 'string', 'valueType': ImageProcess },
    };
  }

  validate() {
    if(this.thumbnailProcesses) {
      $dara.Model.validateMap(this.thumbnailProcesses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the files.
   */
  items?: File[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If next_marker is empty, no next page exists.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  nextMarker?: string;
  /**
   * @remarks
   * The total number of retrieved files.
   * 
   * @example
   * 1022
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
      totalCount: 'total_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': File },
      nextMarker: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFileResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchFileResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchShareLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The creators of shares. Set this parameter to a user ID. If you do not specify this parameter, Drive and Photo Service automatically queries shares based on your permissions. If you are a drive administrator or the super administrator, the shares created by all members are queried. If you are a team administrator, the shares created by all team members are queried. If you are a common user, only the shares created by yourself are queried.
   * 
   * If you specify this parameter, this parameter must be set to the ID of the super administrator, a drive administrator, or a team administrator.
   */
  creators?: string[];
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 1 to 100. Default value: 100.
   * 
   * The number of returned results must be less than or equal to the specified number.
   * 
   * @example
   * 50
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of marker.\\
   * By default, this parameter is left empty.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  marker?: string;
  /**
   * @remarks
   * The field by which to sort the returned results. Default value: created_at. Valid values:
   * 
   * *   share_name: sorts the results by the name of the share.
   * *   updated_at: sorts the results by the time when the share was modified.
   * *   description: sorts the results by the description of the share.
   * *   created_at: sorts the results by the time when the share was created.
   * 
   * @example
   * created_at
   */
  orderBy?: string;
  /**
   * @remarks
   * The order in which you want to sort the returned results. By default, order_direction is set to DESC if order_by is set to created_at or updated_at, and is set to ASC if order_by is set to other values. Valid values:
   * 
   * *   ASC: sorts the results in ascending order.
   * *   DESC: sorts the results in descending order.
   * 
   * @example
   * ASC
   */
  orderDirection?: string;
  /**
   * @remarks
   * The query condition that is used to search for share URLs. You can use the following fields to specify query conditions: created_at: queries a share URL based on the time when the share URL was created. updated_at: queries a share URL based on the time when the share URL was modified. share_name_for_fuzzy: queries a share URL based on the name of the share. A fuzzy match is supported. status: queries a share URL based on the status of the share. Valid values: enabled and disabled. A value of enabled indicates that the share is valid. A value of disabled indicates that the share is canceled. expired_time: queries a share URL based on the expiration time of the share. If the share never expires, set this field to 1970-01-01T00:00:00. Otherwise, set this field to 1970-01-02T00:00:00.
   * 
   * @example
   * created_at>=\\"2022-01-18T02:50:00\\" and created_at<\\"2022-01-19T09:45:28\\" and share_name_for_fuzzy match \\"HD.mp4\\" and status in [\\"enabled\\", \\"disabled\\"] and expired_time=\\"1970-01-01T00:00:00\\"
   */
  query?: string;
  /**
   * @remarks
   * Specifies whether to return the total number of returned results.
   * 
   * @example
   * false
   */
  returnTotalCount?: boolean;
  static names(): { [key: string]: string } {
    return {
      creators: 'creators',
      limit: 'limit',
      marker: 'marker',
      orderBy: 'order_by',
      orderDirection: 'order_direction',
      query: 'query',
      returnTotalCount: 'return_total_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creators: { 'type': 'array', 'itemType': 'string' },
      limit: 'number',
      marker: 'string',
      orderBy: 'string',
      orderDirection: 'string',
      query: 'string',
      returnTotalCount: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.creators)) {
      $dara.Model.validateArray(this.creators);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchShareLinkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The share URLs.
   */
  items?: ShareLink[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If next_marker is empty, no next page exists.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  nextMarker?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 101
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
      totalCount: 'total_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ShareLink },
      nextMarker: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchShareLinkResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchShareLinkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchShareLinkResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchSimilarImageClustersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @example
   * image/resize,m_fill,h_128,w_128,limit_0/format,jpg
   * 
   * @deprecated
   */
  imageThumbnailProcess?: string;
  /**
   * @example
   * 50
   */
  limit?: number;
  /**
   * @example
   * YWRzX3VzZXJfcHJvZmlsZV9je1bnQh***
   */
  marker?: string;
  /**
   * @example
   * desc
   */
  order?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      imageThumbnailProcess: 'image_thumbnail_process',
      limit: 'limit',
      marker: 'marker',
      order: 'order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      imageThumbnailProcess: 'string',
      limit: 'number',
      marker: 'string',
      order: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchSimilarImageClustersResponseBody extends $dara.Model {
  /**
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0***
   */
  nextMarker?: string;
  similarImageClusters?: SearchSimilarImageClustersResponseBodySimilarImageClusters[];
  static names(): { [key: string]: string } {
    return {
      nextMarker: 'next_marker',
      similarImageClusters: 'similar_image_clusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextMarker: 'string',
      similarImageClusters: { 'type': 'array', 'itemType': SearchSimilarImageClustersResponseBodySimilarImageClusters },
    };
  }

  validate() {
    if(Array.isArray(this.similarImageClusters)) {
      $dara.Model.validateArray(this.similarImageClusters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchSimilarImageClustersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchSimilarImageClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchSimilarImageClustersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchStoriesRequest extends $dara.Model {
  /**
   * @example
   * image/resize,m_fill,h_128,w_128,limit_0/format,jpg
   * 
   * @deprecated
   */
  coverImageThumbnailProcess?: string;
  /**
   * @example
   * video/snapshot,t_1000,f_jpg,w_0,h_0,m_fast,ar_auto
   * 
   * @deprecated
   */
  coverVideoThumbnailProcess?: string;
  /**
   * **if can be null:**
   * true
   */
  createTimeRange?: SearchStoriesRequestCreateTimeRange;
  /**
   * @example
   * key1=value1,key2!=value2
   * 
   * @deprecated
   */
  customLabels?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  faceGroupIds?: string[];
  /**
   * @example
   * 100
   */
  limit?: number;
  /**
   * @example
   * NWQ1Yjk4YmI1ZDODBhNDQ2Nzhl***
   */
  marker?: string;
  /**
   * @example
   * desc
   */
  order?: string;
  /**
   * @example
   * CreateTime
   */
  sort?: string;
  /**
   * **if can be null:**
   * true
   */
  storyEndTimeRange?: SearchStoriesRequestStoryEndTimeRange;
  /**
   * @example
   * 9132e0d8-fe92-4e56-86c3-f5f112308003
   */
  storyId?: string;
  storyName?: string;
  /**
   * **if can be null:**
   * true
   */
  storyStartTimeRange?: SearchStoriesRequestStoryStartTimeRange;
  /**
   * @example
   * PeopleMemory
   */
  storyType?: string;
  /**
   * @example
   * 900
   * 
   * @deprecated
   */
  urlExpireSec?: number;
  /**
   * @example
   * false
   * 
   * **if can be null:**
   * true
   */
  withEmptyStories?: boolean;
  static names(): { [key: string]: string } {
    return {
      coverImageThumbnailProcess: 'cover_image_thumbnail_process',
      coverVideoThumbnailProcess: 'cover_video_thumbnail_process',
      createTimeRange: 'create_time_range',
      customLabels: 'custom_labels',
      driveId: 'drive_id',
      faceGroupIds: 'face_group_ids',
      limit: 'limit',
      marker: 'marker',
      order: 'order',
      sort: 'sort',
      storyEndTimeRange: 'story_end_time_range',
      storyId: 'story_id',
      storyName: 'story_name',
      storyStartTimeRange: 'story_start_time_range',
      storyType: 'story_type',
      urlExpireSec: 'url_expire_sec',
      withEmptyStories: 'with_empty_stories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverImageThumbnailProcess: 'string',
      coverVideoThumbnailProcess: 'string',
      createTimeRange: SearchStoriesRequestCreateTimeRange,
      customLabels: 'string',
      driveId: 'string',
      faceGroupIds: { 'type': 'array', 'itemType': 'string' },
      limit: 'number',
      marker: 'string',
      order: 'string',
      sort: 'string',
      storyEndTimeRange: SearchStoriesRequestStoryEndTimeRange,
      storyId: 'string',
      storyName: 'string',
      storyStartTimeRange: SearchStoriesRequestStoryStartTimeRange,
      storyType: 'string',
      urlExpireSec: 'number',
      withEmptyStories: 'boolean',
    };
  }

  validate() {
    if(this.createTimeRange && typeof (this.createTimeRange as any).validate === 'function') {
      (this.createTimeRange as any).validate();
    }
    if(Array.isArray(this.faceGroupIds)) {
      $dara.Model.validateArray(this.faceGroupIds);
    }
    if(this.storyEndTimeRange && typeof (this.storyEndTimeRange as any).validate === 'function') {
      (this.storyEndTimeRange as any).validate();
    }
    if(this.storyStartTimeRange && typeof (this.storyStartTimeRange as any).validate === 'function') {
      (this.storyStartTimeRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchStoriesResponseBody extends $dara.Model {
  items?: Story[];
  /**
   * @example
   * Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJ***
   */
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': Story },
      nextMarker: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchStoriesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchStoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchStoriesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchUserRequest extends $dara.Model {
  /**
   * @remarks
   * The email address of the user.
   * 
   * @example
   * 123@pds.com
   */
  email?: string;
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 100
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of marker.\\
   * By default, this parameter is left empty.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  marker?: string;
  /**
   * @remarks
   * The nickname of the user. The nickname can be up to 128 characters in length.
   * 
   * @example
   * pdsuer
   */
  nickName?: string;
  /**
   * @remarks
   * The nickname used for fuzzy searches. The nickname can be up to 128 characters in length.
   * 
   * @example
   * la
   */
  nickNameForFuzzy?: string;
  /**
   * @remarks
   * The mobile number of the user.
   * 
   * @example
   * 13900001111
   */
  phone?: string;
  /**
   * @remarks
   * The role of the user. Valid values:
   * 
   * *   superadmin
   * *   admin
   * *   user
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * The state of the user. Valid values:
   * 
   * *   disabled: The user is prohibited from logon.
   * *   enabled: The user is in a normal state.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The name of the user. The name can be up to 128 characters in length.
   * 
   * @example
   * pds
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      limit: 'limit',
      marker: 'marker',
      nickName: 'nick_name',
      nickNameForFuzzy: 'nick_name_for_fuzzy',
      phone: 'phone',
      role: 'role',
      status: 'status',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      limit: 'number',
      marker: 'string',
      nickName: 'string',
      nickNameForFuzzy: 'string',
      phone: 'string',
      role: 'string',
      status: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the users.
   */
  items?: User[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If next_marker is empty, no next page exists.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': User },
      nextMarker: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchUserResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchUserResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TokenRequest extends $dara.Model {
  /**
   * @remarks
   * The JWT assertion that is signed by using the JWT private key. The JWT assertion contains the information about the user to be authorized and the authorization parameters. For more information about the structure of the JWT assertion, see JWTPayload. This parameter is required if grant_type is set to urn:ietf:params:oauth:grant-type:jwt-bearer.
   * 
   * @example
   * ey***asd
   */
  assertion?: string;
  /**
   * @remarks
   * The AppId of the application that is created in the Drive and Photo Service console.
   * 
   * This parameter is required.
   * 
   * @example
   * 1Zu***flH
   */
  clientId?: string;
  /**
   * @remarks
   * The AppSecret of the application that is created in the Drive and Photo Service console. This parameter is required if the application is of the WebServer type.
   * 
   * @example
   * 80D***3i5
   */
  clientSecret?: string;
  /**
   * @remarks
   * The authorization code in the redirect URI that is specified after the authorization process is complete. This parameter is required if grant_type is set to authorization_code.
   * 
   * @example
   * 0045157fa8e24f4f9a0d9e3ff158c1e0
   */
  code?: string;
  /**
   * @remarks
   * The method that is used to generate an access token. Valid values:
   * 
   * authorization_code: generates an access token by using the authorization code that is returned after the authorization process is complete.
   * 
   * refresh_token: generates an access token by using the refresh token that is returned after the authorization process is complete.
   * 
   * urn:ietf:params:oauth:grant-type:jwt-bearer: generates an access token by using a JWT assertion.
   * 
   * This parameter is required.
   * 
   * @example
   * refresh_token
   */
  grantType?: string;
  /**
   * @remarks
   * The redirect URI that is specified when you initiate the authorization request. This parameter is required if grant_type is set to authorization_code.
   * 
   * @example
   * https://aliyun.com/pds
   */
  redirectUri?: string;
  /**
   * @remarks
   * The refresh token that is used to refresh the access token. This parameter is required if grant_type is set to refresh_token.
   * 
   * @example
   * 399623e13353490391266c7d48a13ed1
   */
  refreshToken?: string;
  static names(): { [key: string]: string } {
    return {
      assertion: 'assertion',
      clientId: 'client_id',
      clientSecret: 'client_secret',
      code: 'code',
      grantType: 'grant_type',
      redirectUri: 'redirect_uri',
      refreshToken: 'refresh_token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assertion: 'string',
      clientId: 'string',
      clientSecret: 'string',
      code: 'string',
      grantType: 'string',
      redirectUri: 'string',
      refreshToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TokenResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Token;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Token,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrashFileRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The ID of the file or folder.
   * 
   * This parameter is required.
   * 
   * @example
   * 4221bf6e6ab43c255edc4463bf3a6f5f5d317406
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrashFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * If an empty string is returned, the file or folder is moved to the recycle bin.
   * 
   * If a non-empty string is returned, an asynchronous task is required. You can call the GetAsyncTask operation to obtain the information about an asynchronous task based on the task ID.
   * 
   * @example
   * 13ebd3a24dba4166b1527add676ef2866051b4d5dele16
   */
  asyncTaskId?: string;
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
   * The drive ID.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The ID of the file or folder.
   * 
   * @example
   * 4221bf6e6ab43c255edc4463bf3a6f5f5d317406
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'async_task_id',
      domainId: 'domain_id',
      driveId: 'drive_id',
      fileId: 'file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      domainId: 'string',
      driveId: 'string',
      fileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrashFileResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TrashFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TrashFileResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnLinkAccountRequest extends $dara.Model {
  /**
   * @remarks
   * Additional information for the unique account identifier. For example, when the account is a phone number, this field should be filled with the area code of the phone, such as 86 for Mainland China. If not provided, it defaults to 86.
   * 
   * @example
   * 1
   */
  extra?: string;
  /**
   * @remarks
   * Unique identifier of the account, such as a phone number
   * 
   * This parameter is required.
   * 
   * @example
   * 139****
   */
  identity?: string;
  /**
   * @remarks
   * Account type
   * 
   * mobile: Phone number
   * 
   * email: Email address
   * 
   * ding: DingTalk
   * 
   * ram: Alibaba Cloud RAM User
   * 
   * wechat: WeCom
   * 
   * ldap: LDAP account
   * 
   * custom: Custom account
   * 
   * This parameter is required.
   * 
   * @example
   * mobile
   */
  type?: string;
  /**
   * @remarks
   * User identifier
   * 
   * This parameter is required.
   * 
   * @example
   * uid1
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      extra: 'extra',
      identity: 'identity',
      type: 'type',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      identity: 'string',
      type: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnLinkAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the domain.
   */
  description?: string;
  /**
   * @remarks
   * The domain ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bj1
   */
  domainId?: string;
  /**
   * @remarks
   * The name of the domain.
   */
  domainName?: string;
  /**
   * @remarks
   * Specifies whether to enable the default drive feature. A value of true specifies that all users are assigned a drive by default on the first logon. Default value: false.
   * 
   * @example
   * true
   */
  initDriveEnable?: boolean;
  /**
   * @remarks
   * The size of the default drive. Unit: bytes. You must specify init_drive_size if you set init_drive_enable to true. Default value: 0. A value of 0 specifies that the size of the default drive is 0 bytes and you cannot upload files to the drive. To initialize the default drive, set init_drive_size to 0. A value of -1 specifies that the size is unlimited.
   * 
   * @example
   * 1073741824
   */
  initDriveSize?: number;
  /**
   * @remarks
   * The access policy of the application.
   */
  publishedAppAccessStrategy?: AppAccessStrategy;
  /**
   * @remarks
   * The total storage quota for all drives in the domain. A value of 0 specifies that the quota is unlimited.
   * 
   * @example
   * 1099511627776
   */
  sizeQuota?: number;
  /**
   * @remarks
   * The maximum number of users that can be created in the domain.
   * 
   * @example
   * 50
   */
  userCountQuota?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      domainId: 'domain_id',
      domainName: 'domain_name',
      initDriveEnable: 'init_drive_enable',
      initDriveSize: 'init_drive_size',
      publishedAppAccessStrategy: 'published_app_access_strategy',
      sizeQuota: 'size_quota',
      userCountQuota: 'user_count_quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      domainId: 'string',
      domainName: 'string',
      initDriveEnable: 'boolean',
      initDriveSize: 'number',
      publishedAppAccessStrategy: AppAccessStrategy,
      sizeQuota: 'number',
      userCountQuota: 'number',
    };
  }

  validate() {
    if(this.publishedAppAccessStrategy && typeof (this.publishedAppAccessStrategy as any).validate === 'function') {
      (this.publishedAppAccessStrategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Domain;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Domain,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDriveRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the drive. The description can be up to 1,024 characters in length.
   */
  description?: string;
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The name of the drive. The name can be up to 128 characters in length.
   * 
   * @example
   * my_drive
   */
  driveName?: string;
  /**
   * @remarks
   * The owner of the drive. Note: You can modify the owner of a personal drive only by using an AccessKey pair.
   * 
   * @example
   * user1
   */
  owner?: string;
  /**
   * @remarks
   * The state of the drive. Valid values:
   * 
   * enabled and disabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The total size of the drive. Unit: bytes. A value of -1 specifies that the size is unlimited.
   * 
   * @example
   * 10240
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      driveId: 'drive_id',
      driveName: 'drive_name',
      owner: 'owner',
      status: 'status',
      totalSize: 'total_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      driveId: 'string',
      driveName: 'string',
      owner: 'string',
      status: 'string',
      totalSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDriveResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Drive;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Drive,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFacegroupRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The face ID of the thumbnail of the face-based group. You can obtain the face ID from the **image_media_metadata** parameter in the returned results of the GetFile, ListFile, or SearchFile operation.
   * 
   * @example
   * face1
   */
  groupCoverFaceId?: string;
  /**
   * @remarks
   * The ID of the face-based group. You can call the ListFacegroups operation to query the group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * group-abc
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the face-based group. The name can be up to 128 characters in length.
   */
  groupName?: string;
  /**
   * @remarks
   * The remarks. The remarks can be up to 128 characters in length.
   */
  remarks?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      groupCoverFaceId: 'group_cover_face_id',
      groupId: 'group_id',
      groupName: 'group_name',
      remarks: 'remarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      groupCoverFaceId: 'string',
      groupId: 'string',
      groupName: 'string',
      remarks: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFacegroupResponseBody extends $dara.Model {
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
   * The group ID.
   * 
   * @example
   * group-abc
   */
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      groupId: 'group_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      groupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFacegroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateFacegroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateFacegroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFileRequest extends $dara.Model {
  /**
   * @remarks
   * The processing method that is used if the file that you want to modify has the same name as an existing file on the cloud. Valid values:
   * 
   * ignore: allows you to modify the file by using the same name as an existing file on the cloud.
   * 
   * auto_rename: automatically renames the file that has the same name on the cloud. By default, the current point in time is added to the end of the file name. Example: xxx_20060102_150405.
   * 
   * refuse: does not modify the file that you want to modify but returns the information about the file that has the same name on the cloud.
   * 
   * Default value: ignore.
   * 
   * @example
   * ignore
   */
  checkNameMode?: string;
  /**
   * @remarks
   * The description of the file. The description can be up to 1,024 characters in length.
   */
  description?: string;
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9520943DC264
   */
  fileId?: string;
  /**
   * @remarks
   * Specifies whether to hide the file.
   * 
   * @example
   * true
   */
  hidden?: boolean;
  /**
   * @remarks
   * The tags of the file. You can specify up to 100 tags.
   */
  labels?: string[];
  /**
   * @remarks
   * The local time when the file was modified. The time is in the yyyy-MM-ddTHH:mm:ssZ format based on the UTC+0 time zone.
   * 
   * @example
   * 2019-08-20T06:51:27.292Z
   */
  localModifiedAt?: string;
  /**
   * @remarks
   * The name of the file. The name can be up to 1,024 bytes in length based on the UTF-8 encoding rule.
   * 
   * @example
   * a.jpg
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to add the file to favorites.
   * 
   * @example
   * true
   */
  starred?: boolean;
  static names(): { [key: string]: string } {
    return {
      checkNameMode: 'check_name_mode',
      description: 'description',
      driveId: 'drive_id',
      fileId: 'file_id',
      hidden: 'hidden',
      labels: 'labels',
      localModifiedAt: 'local_modified_at',
      name: 'name',
      starred: 'starred',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkNameMode: 'string',
      description: 'string',
      driveId: 'string',
      fileId: 'string',
      hidden: 'boolean',
      labels: { 'type': 'array', 'itemType': 'string' },
      localModifiedAt: 'string',
      name: 'string',
      starred: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFileResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: File;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: File,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the group after modification.
   * 
   * @example
   * test group description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the group that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * 2e43ec8427dd45f19431b7504649a1b4
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the group after modification.
   * 
   * @example
   * test group
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      groupId: 'group_id',
      groupName: 'group_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupId: 'string',
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Group;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Group,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIdentityToBenefitPkgMappingRequest extends $dara.Model {
  /**
   * @remarks
   * The number of benefit packages.
   * 
   * This parameter specifies the number of benefit packages of the resource type. Default value: 1.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The unique identifier of the benefit package.
   * 
   * This parameter is required.
   * 
   * @example
   * 40cb7794c9294
   */
  benefitPkgId?: string;
  /**
   * @remarks
   * The expiration time of the benefit package. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * By default, the benefit package never expires.
   * 
   * @example
   * 1633167071000
   */
  expireTime?: number;
  /**
   * @remarks
   * The unique identifier of the entity.
   * 
   * If you call this operation to manage the benefits of a user, set this parameter to the ID of the user.
   * 
   * This parameter is required.
   * 
   * @example
   * user123
   */
  identityId?: string;
  /**
   * @remarks
   * The type of the entity. If you call this operation to manage the benefits of a user, set this parameter to user.
   * 
   * This parameter is required.
   * 
   * @example
   * user
   */
  identityType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      benefitPkgId: 'benefit_pkg_id',
      expireTime: 'expire_time',
      identityId: 'identity_id',
      identityType: 'identity_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      benefitPkgId: 'string',
      expireTime: 'number',
      identityId: 'string',
      identityType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIdentityToBenefitPkgMappingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRevisionRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9520943DC264
   */
  fileId?: string;
  /**
   * @remarks
   * Specifies whether to permanently retain a version.
   * 
   * By default, this parameter is not specified, which indicates that you do not modify the permanent retention configuration of the version.
   * 
   * @example
   * true
   */
  keepForever?: boolean;
  /**
   * @remarks
   * The description of the version. The description can be up to 1,024 characters in length.
   * 
   * By default, this parameter is not specified, which indicates that you do not modify the description of the version.
   * 
   * @example
   * aaa
   */
  revisionDescription?: string;
  /**
   * @remarks
   * The version ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 40CB7794C929
   */
  revisionId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      keepForever: 'keep_forever',
      revisionDescription: 'revision_description',
      revisionId: 'revision_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      keepForever: 'boolean',
      revisionDescription: 'string',
      revisionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRevisionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Revision;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Revision,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateShareLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the share link. The description can be up to 1,024 characters in length.
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to prohibit the downloads of the shared files.
   * 
   * @example
   * false
   */
  disableDownload?: boolean;
  /**
   * @remarks
   * Specifies whether to prohibit the previews of the shared files.
   * 
   * @example
   * false
   */
  disablePreview?: boolean;
  /**
   * @remarks
   * Specifies whether to prohibit the saves of the shared files.
   * 
   * @example
   * false
   */
  disableSave?: boolean;
  /**
   * @remarks
   * The number of times that the shared files are downloaded. The value must be greater than or equal to 0.
   * 
   * @example
   * 30
   */
  downloadCount?: number;
  /**
   * @remarks
   * The maximum number of times that the shared files can be downloaded. The value must be greater than or equal to 0. A value of 0 specifies that the number is unlimited.
   * 
   * @example
   * 100
   */
  downloadLimit?: number;
  /**
   * @remarks
   * The time when the share link expires. The time follows the RFC 3339 standard. Example: 2020-06-28T11:33:00.000+08:00. If you leave this parameter empty, the share link never expires.
   * 
   * @example
   * 2020-06-28T11:33:00.000+08:00
   */
  expiration?: string;
  officeEditable?: boolean;
  /**
   * @remarks
   * The number of times that the shared files are previewed. The value must be greater than or equal to 0.
   * 
   * @example
   * 3
   */
  previewCount?: number;
  /**
   * @remarks
   * The maximum number of times that the shared files can be previewed. The value must be greater than or equal to 0. A value of 0 specifies that the number is unlimited.
   * 
   * @example
   * 100
   */
  previewLimit?: number;
  /**
   * @remarks
   * The number of times that the shared files are reported. The value must be greater than or equal to 0.
   * 
   * @example
   * 1
   */
  reportCount?: number;
  /**
   * @remarks
   * The number of times that the shared files are saved. The value must be greater than or equal to 0.
   * 
   * @example
   * 5
   */
  saveCount?: number;
  /**
   * @remarks
   * The maximum number of times that the shared files can be saved. The value must be greater than or equal to 0. A value of 0 specifies that the number is unlimited.
   * 
   * @example
   * 100
   */
  saveLimit?: number;
  /**
   * @remarks
   * The share ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7JQX1FswpQ8
   */
  shareId?: string;
  /**
   * @remarks
   * The name of the share link. By default, the name of the first file is used. The name can be up to 128 characters in length.
   */
  shareName?: string;
  /**
   * @remarks
   * The access code. The access code can be up to 64 characters in length. A value of 0 specifies an empty string.
   * 
   * @example
   * abcF123x
   */
  sharePwd?: string;
  /**
   * @remarks
   * The state of the share link. Valid values:
   * 
   * *   disabled: The share link is canceled.
   * *   enabled: The share link is effective.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The number of times that the videos are previewed in the shared files. The value must be greater than or equal to 0.
   * 
   * @example
   * 100
   */
  videoPreviewCount?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      disableDownload: 'disable_download',
      disablePreview: 'disable_preview',
      disableSave: 'disable_save',
      downloadCount: 'download_count',
      downloadLimit: 'download_limit',
      expiration: 'expiration',
      officeEditable: 'office_editable',
      previewCount: 'preview_count',
      previewLimit: 'preview_limit',
      reportCount: 'report_count',
      saveCount: 'save_count',
      saveLimit: 'save_limit',
      shareId: 'share_id',
      shareName: 'share_name',
      sharePwd: 'share_pwd',
      status: 'status',
      videoPreviewCount: 'video_preview_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      disableDownload: 'boolean',
      disablePreview: 'boolean',
      disableSave: 'boolean',
      downloadCount: 'number',
      downloadLimit: 'number',
      expiration: 'string',
      officeEditable: 'boolean',
      previewCount: 'number',
      previewLimit: 'number',
      reportCount: 'number',
      saveCount: 'number',
      saveLimit: 'number',
      shareId: 'string',
      shareName: 'string',
      sharePwd: 'string',
      status: 'string',
      videoPreviewCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateShareLinkResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ShareLink;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ShareLink,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStoryRequest extends $dara.Model {
  /**
   * **if can be null:**
   * true
   */
  cover?: UpdateStoryRequestCover;
  /**
   * @deprecated
   */
  customLabels?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9132e0d8-fe92-4e56-86c3-f5f112308003
   */
  storyId?: string;
  /**
   * @example
   * name1
   * 
   * **if can be null:**
   * true
   */
  storyName?: string;
  static names(): { [key: string]: string } {
    return {
      cover: 'cover',
      customLabels: 'custom_labels',
      driveId: 'drive_id',
      storyId: 'story_id',
      storyName: 'story_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cover: UpdateStoryRequestCover,
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      driveId: 'string',
      storyId: 'string',
      storyName: 'string',
    };
  }

  validate() {
    if(this.cover && typeof (this.cover as any).validate === 'function') {
      (this.cover as any).validate();
    }
    if(this.customLabels) {
      $dara.Model.validateMap(this.customLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStoryResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @example
   * 9132e0d8-fe92-4e56-86c3-f5f112308003
   */
  storyId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      storyId: 'story_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      storyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateStoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateStoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserRequest extends $dara.Model {
  /**
   * @remarks
   * The URL of the profile picture.
   * 
   * If you specify the parameter in the HTTP URL format, the URL must start with http:// or https:// and can be up to 4 KB in size.
   * 
   * If you specify the parameter in the DATA URL format, the URL must start with data:// and be encoded in Base64. The URL can be up to 300 KB in size.
   * 
   * @example
   * http://a.b.c/pds.jpg
   */
  avatar?: string;
  /**
   * @remarks
   * The description of the user. The description can be up to 1,024 characters in length.
   */
  description?: string;
  /**
   * @remarks
   * The email address of the user.
   * 
   * @example
   * a@aliyunpds.com
   */
  email?: string;
  /**
   * @remarks
   * The information about the group.
   */
  groupInfoList?: UpdateUserRequestGroupInfoList[];
  /**
   * @remarks
   * The nickname of the user. The nickname can be up to 128 characters in length.
   * 
   * @example
   * pdsuer
   */
  nickName?: string;
  /**
   * @remarks
   * The mobile number of the user.
   * 
   * @example
   * 13900001111
   */
  phone?: string;
  /**
   * @remarks
   * The role of the user. Valid values:
   * 
   * *   superadmin
   * *   admin
   * *   user
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * The state of the user. Valid values:
   * 
   * *   disabled: The user is prohibited from logon.
   * *   enabled: The user is in a normal state.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The custom data. The data can be up to 1,024 characters in length.
   */
  userData?: { [key: string]: string };
  /**
   * @remarks
   * The user ID. The ID can be up to 64 characters in length and cannot contain a number sign (#).
   * 
   * This parameter is required.
   * 
   * @example
   * c9b7a5aa04d14ae3867fdc886fa01da4
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'avatar',
      description: 'description',
      email: 'email',
      groupInfoList: 'group_info_list',
      nickName: 'nick_name',
      phone: 'phone',
      role: 'role',
      status: 'status',
      userData: 'user_data',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      description: 'string',
      email: 'string',
      groupInfoList: { 'type': 'array', 'itemType': UpdateUserRequestGroupInfoList },
      nickName: 'string',
      phone: 'string',
      role: 'string',
      status: 'string',
      userData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupInfoList)) {
      $dara.Model.validateArray(this.groupInfoList);
    }
    if(this.userData) {
      $dara.Model.validateMap(this.userData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: User;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: User,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoDRMLicenseRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * widevine
   */
  drmType?: string;
  /**
   * @example
   * CAES6B8SQgpACioSENGxDhqCLIVwwCBOyPayyWoSENGxDhqCLIVwwCBOyPayyWpI88aJmwYQARoQdRV32
   */
  licenseRequest?: string;
  static names(): { [key: string]: string } {
    return {
      drmType: 'drmType',
      licenseRequest: 'licenseRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drmType: 'string',
      licenseRequest: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoDRMLicenseResponseBody extends $dara.Model {
  /**
   * @example
   * cb9swCy8P50H9KePsxET3jZ1tm41bDs9HTsxbWnsjf3bsf6QGdiS4kZPhDaskimbNyAfNjmhQRmWFt3AhwNF3
   */
  data?: string;
  /**
   * @example
   * ""
   */
  deviceInfo?: string;
  /**
   * @example
   * 0
   */
  states?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      deviceInfo: 'device_info',
      states: 'states',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      deviceInfo: 'string',
      states: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoDRMLicenseResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VideoDRMLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VideoDRMLicenseResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._productId = "pds";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._disableHttp2 = true;
    this._endpointRule = "";
  }


  /**
   * Adds a member to a group.
   * 
   * @param request - AddGroupMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddGroupMemberResponse
   */
  async addGroupMemberWithOptions(request: AddGroupMemberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<AddGroupMemberResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      body["group_id"] = request.groupId;
    }

    if (!$dara.isNull(request.memberId)) {
      body["member_id"] = request.memberId;
    }

    if (!$dara.isNull(request.memberType)) {
      body["member_type"] = request.memberType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddGroupMember",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/group/add_member`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<AddGroupMemberResponse>(await this.execute(params, req, runtime), new AddGroupMemberResponse({}));
  }

  /**
   * Adds a member to a group.
   * 
   * @param request - AddGroupMemberRequest
   * @returns AddGroupMemberResponse
   */
  async addGroupMember(request: AddGroupMemberRequest): Promise<AddGroupMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addGroupMemberWithOptions(request, headers, runtime);
  }

  /**
   * 故事添加文件
   * 
   * @param request - AddStoryFilesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddStoryFilesResponse
   */
  async addStoryFilesWithOptions(request: AddStoryFilesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<AddStoryFilesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.files)) {
      body["files"] = request.files;
    }

    if (!$dara.isNull(request.storyId)) {
      body["story_id"] = request.storyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddStoryFiles",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/add_story_files`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<AddStoryFilesResponse>(await this.execute(params, req, runtime), new AddStoryFilesResponse({}));
  }

  /**
   * 故事添加文件
   * 
   * @param request - AddStoryFilesRequest
   * @returns AddStoryFilesResponse
   */
  async addStoryFiles(request: AddStoryFilesRequest): Promise<AddStoryFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addStoryFilesWithOptions(request, headers, runtime);
  }

  /**
   * Assigns a group administrator role to a user.
   * 
   * @remarks
   * You can call this operation to assign a group administrator role to a user.
   * 
   * @param request - AssignRoleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssignRoleResponse
   */
  async assignRoleWithOptions(request: AssignRoleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<AssignRoleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identity)) {
      body["identity"] = request.identity;
    }

    if (!$dara.isNull(request.manageResourceId)) {
      body["manage_resource_id"] = request.manageResourceId;
    }

    if (!$dara.isNull(request.manageResourceType)) {
      body["manage_resource_type"] = request.manageResourceType;
    }

    if (!$dara.isNull(request.roleId)) {
      body["role_id"] = request.roleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssignRole",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/role/assign`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<AssignRoleResponse>(await this.execute(params, req, runtime), new AssignRoleResponse({}));
  }

  /**
   * Assigns a group administrator role to a user.
   * 
   * @remarks
   * You can call this operation to assign a group administrator role to a user.
   * 
   * @param request - AssignRoleRequest
   * @returns AssignRoleResponse
   */
  async assignRole(request: AssignRoleRequest): Promise<AssignRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.assignRoleWithOptions(request, headers, runtime);
  }

  /**
   * Requests permissions by using OAuth 2.0.
   * 
   * @remarks
   * For more information, see "OAuth 2.0 For Web Server Applications" at [OAuth 2.0 For Web Server Applications](https://www.alibabacloud.com/help/en/pds/drive-and-photo-service-dev/user-guide/oauth-2-0-access-process-for-web-server-applications) in User Guide.
   * 
   * @param tmpReq - AuthorizeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeResponse
   */
  async authorizeWithOptions(tmpReq: AuthorizeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<AuthorizeResponse> {
    tmpReq.validate();
    let request = new AuthorizeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.scope)) {
      request.scopeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scope, "scope", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      query["client_id"] = request.clientId;
    }

    if (!$dara.isNull(request.hideConsent)) {
      query["hide_consent"] = request.hideConsent;
    }

    if (!$dara.isNull(request.loginType)) {
      query["login_type"] = request.loginType;
    }

    if (!$dara.isNull(request.redirectUri)) {
      query["redirect_uri"] = request.redirectUri;
    }

    if (!$dara.isNull(request.responseType)) {
      query["response_type"] = request.responseType;
    }

    if (!$dara.isNull(request.scopeShrink)) {
      query["scope"] = request.scopeShrink;
    }

    if (!$dara.isNull(request.state)) {
      query["state"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Authorize",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/oauth/authorize`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "binary",
    });
    return $dara.cast<AuthorizeResponse>(await this.execute(params, req, runtime), new AuthorizeResponse({}));
  }

  /**
   * Requests permissions by using OAuth 2.0.
   * 
   * @remarks
   * For more information, see "OAuth 2.0 For Web Server Applications" at [OAuth 2.0 For Web Server Applications](https://www.alibabacloud.com/help/en/pds/drive-and-photo-service-dev/user-guide/oauth-2-0-access-process-for-web-server-applications) in User Guide.
   * 
   * @param request - AuthorizeRequest
   * @returns AuthorizeResponse
   */
  async authorize(request: AuthorizeRequest): Promise<AuthorizeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.authorizeWithOptions(request, headers, runtime);
  }

  /**
   * Calls multiple operations at a time to improve call efficiency.
   * 
   * @param request - BatchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchResponse
   */
  async batchWithOptions(request: BatchRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<BatchResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.requests)) {
      body["requests"] = request.requests;
    }

    if (!$dara.isNull(request.resource)) {
      body["resource"] = request.resource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Batch",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/batch`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<BatchResponse>(await this.execute(params, req, runtime), new BatchResponse({}));
  }

  /**
   * Calls multiple operations at a time to improve call efficiency.
   * 
   * @param request - BatchRequest
   * @returns BatchResponse
   */
  async batch(request: BatchRequest): Promise<BatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchWithOptions(request, headers, runtime);
  }

  /**
   * Cancels a role.
   * 
   * @remarks
   * You can cancel only the group administrator role.
   * 
   * @param request - CancelAssignRoleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelAssignRoleResponse
   */
  async cancelAssignRoleWithOptions(request: CancelAssignRoleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CancelAssignRoleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identity)) {
      body["identity"] = request.identity;
    }

    if (!$dara.isNull(request.manageResourceId)) {
      body["manage_resource_id"] = request.manageResourceId;
    }

    if (!$dara.isNull(request.manageResourceType)) {
      body["manage_resource_type"] = request.manageResourceType;
    }

    if (!$dara.isNull(request.roleId)) {
      body["role_id"] = request.roleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelAssignRole",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/role/cancel_assign`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CancelAssignRoleResponse>(await this.execute(params, req, runtime), new CancelAssignRoleResponse({}));
  }

  /**
   * Cancels a role.
   * 
   * @remarks
   * You can cancel only the group administrator role.
   * 
   * @param request - CancelAssignRoleRequest
   * @returns CancelAssignRoleResponse
   */
  async cancelAssignRole(request: CancelAssignRoleRequest): Promise<CancelAssignRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelAssignRoleWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a share link.
   * 
   * @param request - CancelShareLinkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelShareLinkResponse
   */
  async cancelShareLinkWithOptions(request: CancelShareLinkRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CancelShareLinkResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelShareLink",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/share_link/cancel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CancelShareLinkResponse>(await this.execute(params, req, runtime), new CancelShareLinkResponse({}));
  }

  /**
   * Deletes a share link.
   * 
   * @param request - CancelShareLinkRequest
   * @returns CancelShareLinkResponse
   */
  async cancelShareLink(request: CancelShareLinkRequest): Promise<CancelShareLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelShareLinkWithOptions(request, headers, runtime);
  }

  /**
   * Empties the recycle bin.
   * 
   * @param request - ClearRecyclebinRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClearRecyclebinResponse
   */
  async clearRecyclebinWithOptions(request: ClearRecyclebinRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ClearRecyclebinResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClearRecyclebin",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/recyclebin/clear`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ClearRecyclebinResponse>(await this.execute(params, req, runtime), new ClearRecyclebinResponse({}));
  }

  /**
   * Empties the recycle bin.
   * 
   * @param request - ClearRecyclebinRequest
   * @returns ClearRecyclebinResponse
   */
  async clearRecyclebin(request: ClearRecyclebinRequest): Promise<ClearRecyclebinResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.clearRecyclebinWithOptions(request, headers, runtime);
  }

  /**
   * Completes the upload of a file.
   * 
   * @param request - CompleteFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CompleteFileResponse
   */
  async completeFileWithOptions(request: CompleteFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CompleteFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.uploadId)) {
      body["upload_id"] = request.uploadId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CompleteFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/complete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CompleteFileResponse>(await this.execute(params, req, runtime), new CompleteFileResponse({}));
  }

  /**
   * Completes the upload of a file.
   * 
   * @param request - CompleteFileRequest
   * @returns CompleteFileResponse
   */
  async completeFile(request: CompleteFileRequest): Promise<CompleteFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.completeFileWithOptions(request, headers, runtime);
  }

  /**
   * Copies a file or folder.
   * 
   * @param request - CopyFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CopyFileResponse
   */
  async copyFileWithOptions(request: CopyFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CopyFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoRename)) {
      body["auto_rename"] = request.autoRename;
    }

    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    if (!$dara.isNull(request.toDriveId)) {
      body["to_drive_id"] = request.toDriveId;
    }

    if (!$dara.isNull(request.toParentFileId)) {
      body["to_parent_file_id"] = request.toParentFileId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CopyFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/copy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CopyFileResponse>(await this.execute(params, req, runtime), new CopyFileResponse({}));
  }

  /**
   * Copies a file or folder.
   * 
   * @param request - CopyFileRequest
   * @returns CopyFileResponse
   */
  async copyFile(request: CopyFileRequest): Promise<CopyFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.copyFileWithOptions(request, headers, runtime);
  }

  /**
   * 创建自定义故事
   * 
   * @param request - CreateCustomizedStoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomizedStoryResponse
   */
  async createCustomizedStoryWithOptions(request: CreateCustomizedStoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateCustomizedStoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.customLabels)) {
      body["custom_labels"] = request.customLabels;
    }

    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.storyCover)) {
      body["story_cover"] = request.storyCover;
    }

    if (!$dara.isNull(request.storyFiles)) {
      body["story_files"] = request.storyFiles;
    }

    if (!$dara.isNull(request.storyName)) {
      body["story_name"] = request.storyName;
    }

    if (!$dara.isNull(request.storySubType)) {
      body["story_sub_type"] = request.storySubType;
    }

    if (!$dara.isNull(request.storyType)) {
      body["story_type"] = request.storyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCustomizedStory",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/create_customized_story`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateCustomizedStoryResponse>(await this.execute(params, req, runtime), new CreateCustomizedStoryResponse({}));
  }

  /**
   * 创建自定义故事
   * 
   * @param request - CreateCustomizedStoryRequest
   * @returns CreateCustomizedStoryResponse
   */
  async createCustomizedStory(request: CreateCustomizedStoryRequest): Promise<CreateCustomizedStoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCustomizedStoryWithOptions(request, headers, runtime);
  }

  /**
   * test_domain
   * 
   * @remarks
   * The description of the domain.
   * 
   * @param request - CreateDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDomainResponse
   */
  async createDomainWithOptions(request: CreateDomainRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateDomainResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.domainName)) {
      body["domain_name"] = request.domainName;
    }

    if (!$dara.isNull(request.initDriveEnable)) {
      body["init_drive_enable"] = request.initDriveEnable;
    }

    if (!$dara.isNull(request.initDriveSize)) {
      body["init_drive_size"] = request.initDriveSize;
    }

    if (!$dara.isNull(request.parentDomainId)) {
      body["parent_domain_id"] = request.parentDomainId;
    }

    if (!$dara.isNull(request.sizeQuota)) {
      body["size_quota"] = request.sizeQuota;
    }

    if (!$dara.isNull(request.userCountQuota)) {
      body["user_count_quota"] = request.userCountQuota;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDomain",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/domain/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateDomainResponse>(await this.execute(params, req, runtime), new CreateDomainResponse({}));
  }

  /**
   * test_domain
   * 
   * @remarks
   * The description of the domain.
   * 
   * @param request - CreateDomainRequest
   * @returns CreateDomainResponse
   */
  async createDomain(request: CreateDomainRequest): Promise<CreateDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDomainWithOptions(request, headers, runtime);
  }

  /**
   * Creates a drive.
   * 
   * @param request - CreateDriveRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDriveResponse
   */
  async createDriveWithOptions(request: CreateDriveRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateDriveResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.default)) {
      body["default"] = request.default;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.driveName)) {
      body["drive_name"] = request.driveName;
    }

    if (!$dara.isNull(request.driveType)) {
      body["drive_type"] = request.driveType;
    }

    if (!$dara.isNull(request.owner)) {
      body["owner"] = request.owner;
    }

    if (!$dara.isNull(request.ownerType)) {
      body["owner_type"] = request.ownerType;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.totalSize)) {
      body["total_size"] = request.totalSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDrive",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/drive/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateDriveResponse>(await this.execute(params, req, runtime), new CreateDriveResponse({}));
  }

  /**
   * Creates a drive.
   * 
   * @param request - CreateDriveRequest
   * @returns CreateDriveResponse
   */
  async createDrive(request: CreateDriveRequest): Promise<CreateDriveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDriveWithOptions(request, headers, runtime);
  }

  /**
   * Creates a file or folder.
   * 
   * @param request - CreateFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFileResponse
   */
  async createFileWithOptions(request: CreateFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkNameMode)) {
      body["check_name_mode"] = request.checkNameMode;
    }

    if (!$dara.isNull(request.contentHash)) {
      body["content_hash"] = request.contentHash;
    }

    if (!$dara.isNull(request.contentHashName)) {
      body["content_hash_name"] = request.contentHashName;
    }

    if (!$dara.isNull(request.contentType)) {
      body["content_type"] = request.contentType;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.hidden)) {
      body["hidden"] = request.hidden;
    }

    if (!$dara.isNull(request.imageMediaMetadata)) {
      body["image_media_metadata"] = request.imageMediaMetadata;
    }

    if (!$dara.isNull(request.localCreatedAt)) {
      body["local_created_at"] = request.localCreatedAt;
    }

    if (!$dara.isNull(request.localModifiedAt)) {
      body["local_modified_at"] = request.localModifiedAt;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.parallelUpload)) {
      body["parallel_upload"] = request.parallelUpload;
    }

    if (!$dara.isNull(request.parentFileId)) {
      body["parent_file_id"] = request.parentFileId;
    }

    if (!$dara.isNull(request.partInfoList)) {
      body["part_info_list"] = request.partInfoList;
    }

    if (!$dara.isNull(request.preHash)) {
      body["pre_hash"] = request.preHash;
    }

    if (!$dara.isNull(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    if (!$dara.isNull(request.size)) {
      body["size"] = request.size;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    if (!$dara.isNull(request.userTags)) {
      body["user_tags"] = request.userTags;
    }

    if (!$dara.isNull(request.videoMediaMetadata)) {
      body["video_media_metadata"] = request.videoMediaMetadata;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateFileResponse>(await this.execute(params, req, runtime), new CreateFileResponse({}));
  }

  /**
   * Creates a file or folder.
   * 
   * @param request - CreateFileRequest
   * @returns CreateFileResponse
   */
  async createFile(request: CreateFileRequest): Promise<CreateFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFileWithOptions(request, headers, runtime);
  }

  /**
   * Creates a group.
   * 
   * @param request - CreateGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGroupResponse
   */
  async createGroupWithOptions(request: CreateGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.groupName)) {
      body["group_name"] = request.groupName;
    }

    if (!$dara.isNull(request.isRoot)) {
      body["is_root"] = request.isRoot;
    }

    if (!$dara.isNull(request.parentGroupId)) {
      body["parent_group_id"] = request.parentGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGroup",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/group/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateGroupResponse>(await this.execute(params, req, runtime), new CreateGroupResponse({}));
  }

  /**
   * Creates a group.
   * 
   * @param request - CreateGroupRequest
   * @returns CreateGroupResponse
   */
  async createGroup(request: CreateGroupRequest): Promise<CreateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGroupWithOptions(request, headers, runtime);
  }

  /**
   * Creates a mapping between an entity and a benefit package. You can call this operation to associate a benefit package with a user.
   * 
   * @remarks
   * If you need to manage a large number of users based on Drive and Photo Service, you can control the features and quotas that users can use based on the benefits to which they are entitled. For more information, join the DingTalk group (ID 23146118).
   * 
   * @param request - CreateIdentityToBenefitPkgMappingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIdentityToBenefitPkgMappingResponse
   */
  async createIdentityToBenefitPkgMappingWithOptions(request: CreateIdentityToBenefitPkgMappingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateIdentityToBenefitPkgMappingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.amount)) {
      body["amount"] = request.amount;
    }

    if (!$dara.isNull(request.benefitPkgId)) {
      body["benefit_pkg_id"] = request.benefitPkgId;
    }

    if (!$dara.isNull(request.expireTime)) {
      body["expire_time"] = request.expireTime;
    }

    if (!$dara.isNull(request.identityId)) {
      body["identity_id"] = request.identityId;
    }

    if (!$dara.isNull(request.identityType)) {
      body["identity_type"] = request.identityType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIdentityToBenefitPkgMapping",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/benefit/identity_to_benefit_pkg_mapping/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateIdentityToBenefitPkgMappingResponse>(await this.execute(params, req, runtime), new CreateIdentityToBenefitPkgMappingResponse({}));
  }

  /**
   * Creates a mapping between an entity and a benefit package. You can call this operation to associate a benefit package with a user.
   * 
   * @remarks
   * If you need to manage a large number of users based on Drive and Photo Service, you can control the features and quotas that users can use based on the benefits to which they are entitled. For more information, join the DingTalk group (ID 23146118).
   * 
   * @param request - CreateIdentityToBenefitPkgMappingRequest
   * @returns CreateIdentityToBenefitPkgMappingResponse
   */
  async createIdentityToBenefitPkgMapping(request: CreateIdentityToBenefitPkgMappingRequest): Promise<CreateIdentityToBenefitPkgMappingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIdentityToBenefitPkgMappingWithOptions(request, headers, runtime);
  }

  /**
   * 创建凌霄订单
   * 
   * @param request - CreateOrderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrderResponse
   */
  async createOrderWithOptions(request: CreateOrderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateOrderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoPay)) {
      body["auto_pay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      body["auto_renew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["instance_id"] = request.instanceId;
    }

    if (!$dara.isNull(request.orderType)) {
      body["order_type"] = request.orderType;
    }

    if (!$dara.isNull(request.package)) {
      body["package"] = request.package;
    }

    if (!$dara.isNull(request.period)) {
      body["period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      body["period_unit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.totalSize)) {
      body["total_size"] = request.totalSize;
    }

    if (!$dara.isNull(request.userCount)) {
      body["user_count"] = request.userCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOrder",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/domain/create_order`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateOrderResponse>(await this.execute(params, req, runtime), new CreateOrderResponse({}));
  }

  /**
   * 创建凌霄订单
   * 
   * @param request - CreateOrderRequest
   * @returns CreateOrderResponse
   */
  async createOrder(request: CreateOrderRequest): Promise<CreateOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createOrderWithOptions(request, headers, runtime);
  }

  /**
   * Creates a share URL.
   * 
   * @remarks
   * A share is a file view container. You can grant anonymous users the permissions to access files in the user drive by using the share URL. Anonymous users can access the files based on the granted permissions.
   * 
   * @param request - CreateShareLinkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateShareLinkResponse
   */
  async createShareLinkWithOptions(request: CreateShareLinkRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateShareLinkResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.creatable)) {
      body["creatable"] = request.creatable;
    }

    if (!$dara.isNull(request.creatableFileIdList)) {
      body["creatable_file_id_list"] = request.creatableFileIdList;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.disableDownload)) {
      body["disable_download"] = request.disableDownload;
    }

    if (!$dara.isNull(request.disablePreview)) {
      body["disable_preview"] = request.disablePreview;
    }

    if (!$dara.isNull(request.disableSave)) {
      body["disable_save"] = request.disableSave;
    }

    if (!$dara.isNull(request.downloadLimit)) {
      body["download_limit"] = request.downloadLimit;
    }

    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.expiration)) {
      body["expiration"] = request.expiration;
    }

    if (!$dara.isNull(request.fileIdList)) {
      body["file_id_list"] = request.fileIdList;
    }

    if (!$dara.isNull(request.officeEditable)) {
      body["office_editable"] = request.officeEditable;
    }

    if (!$dara.isNull(request.previewLimit)) {
      body["preview_limit"] = request.previewLimit;
    }

    if (!$dara.isNull(request.requireLogin)) {
      body["require_login"] = request.requireLogin;
    }

    if (!$dara.isNull(request.saveLimit)) {
      body["save_limit"] = request.saveLimit;
    }

    if (!$dara.isNull(request.shareAllFiles)) {
      body["share_all_files"] = request.shareAllFiles;
    }

    if (!$dara.isNull(request.shareName)) {
      body["share_name"] = request.shareName;
    }

    if (!$dara.isNull(request.sharePwd)) {
      body["share_pwd"] = request.sharePwd;
    }

    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateShareLink",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/share_link/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateShareLinkResponse>(await this.execute(params, req, runtime), new CreateShareLinkResponse({}));
  }

  /**
   * Creates a share URL.
   * 
   * @remarks
   * A share is a file view container. You can grant anonymous users the permissions to access files in the user drive by using the share URL. Anonymous users can access the files based on the granted permissions.
   * 
   * @param request - CreateShareLinkRequest
   * @returns CreateShareLinkResponse
   */
  async createShareLink(request: CreateShareLinkRequest): Promise<CreateShareLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createShareLinkWithOptions(request, headers, runtime);
  }

  /**
   * 创建相似图片聚类任务
   * 
   * @param request - CreateSimilarImageClusterTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSimilarImageClusterTaskResponse
   */
  async createSimilarImageClusterTaskWithOptions(request: CreateSimilarImageClusterTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateSimilarImageClusterTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSimilarImageClusterTask",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/create_similar_image_cluster_task`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateSimilarImageClusterTaskResponse>(await this.execute(params, req, runtime), new CreateSimilarImageClusterTaskResponse({}));
  }

  /**
   * 创建相似图片聚类任务
   * 
   * @param request - CreateSimilarImageClusterTaskRequest
   * @returns CreateSimilarImageClusterTaskResponse
   */
  async createSimilarImageClusterTask(request: CreateSimilarImageClusterTaskRequest): Promise<CreateSimilarImageClusterTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSimilarImageClusterTaskWithOptions(request, headers, runtime);
  }

  /**
   * 创建推荐故事
   * 
   * @param request - CreateStoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStoryResponse
   */
  async createStoryWithOptions(request: CreateStoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateStoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.address)) {
      body["address"] = request.address;
    }

    if (!$dara.isNull(request.customLabels)) {
      body["custom_labels"] = request.customLabels;
    }

    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.maxImageCount)) {
      body["max_image_count"] = request.maxImageCount;
    }

    if (!$dara.isNull(request.minImageCount)) {
      body["min_image_count"] = request.minImageCount;
    }

    if (!$dara.isNull(request.storyEndTime)) {
      body["story_end_time"] = request.storyEndTime;
    }

    if (!$dara.isNull(request.storyId)) {
      body["story_id"] = request.storyId;
    }

    if (!$dara.isNull(request.storyName)) {
      body["story_name"] = request.storyName;
    }

    if (!$dara.isNull(request.storyStartTime)) {
      body["story_start_time"] = request.storyStartTime;
    }

    if (!$dara.isNull(request.storySubType)) {
      body["story_sub_type"] = request.storySubType;
    }

    if (!$dara.isNull(request.storyType)) {
      body["story_type"] = request.storyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateStory",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/create_story`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateStoryResponse>(await this.execute(params, req, runtime), new CreateStoryResponse({}));
  }

  /**
   * 创建推荐故事
   * 
   * @param request - CreateStoryRequest
   * @returns CreateStoryResponse
   */
  async createStory(request: CreateStoryRequest): Promise<CreateStoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createStoryWithOptions(request, headers, runtime);
  }

  /**
   * Creates a user.
   * 
   * @param request - CreateUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserResponse
   */
  async createUserWithOptions(request: CreateUserRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.avatar)) {
      body["avatar"] = request.avatar;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.email)) {
      body["email"] = request.email;
    }

    if (!$dara.isNull(request.groupInfoList)) {
      body["group_info_list"] = request.groupInfoList;
    }

    if (!$dara.isNull(request.nickName)) {
      body["nick_name"] = request.nickName;
    }

    if (!$dara.isNull(request.phone)) {
      body["phone"] = request.phone;
    }

    if (!$dara.isNull(request.role)) {
      body["role"] = request.role;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.userData)) {
      body["user_data"] = request.userData;
    }

    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    if (!$dara.isNull(request.userName)) {
      body["user_name"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUser",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/user/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateUserResponse>(await this.execute(params, req, runtime), new CreateUserResponse({}));
  }

  /**
   * Creates a user.
   * 
   * @param request - CreateUserRequest
   * @returns CreateUserResponse
   */
  async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createUserWithOptions(request, headers, runtime);
  }

  /**
   * 获取文件内容安全信息
   * 
   * @param request - CsiGetFileInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CsiGetFileInfoResponse
   */
  async csiGetFileInfoWithOptions(request: CsiGetFileInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CsiGetFileInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.urlExpireSec)) {
      body["url_expire_sec"] = request.urlExpireSec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CsiGetFileInfo",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/csi/get_file_info`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CsiGetFileInfoResponse>(await this.execute(params, req, runtime), new CsiGetFileInfoResponse({}));
  }

  /**
   * 获取文件内容安全信息
   * 
   * @param request - CsiGetFileInfoRequest
   * @returns CsiGetFileInfoResponse
   */
  async csiGetFileInfo(request: CsiGetFileInfoRequest): Promise<CsiGetFileInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.csiGetFileInfoWithOptions(request, headers, runtime);
  }

  /**
   * Delete the domain
   * 
   * @param request - DeleteDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainResponse
   */
  async deleteDomainWithOptions(request: DeleteDomainRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteDomainResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.domainId)) {
      body["domain_id"] = request.domainId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDomain",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/domain/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteDomainResponse>(await this.execute(params, req, runtime), new DeleteDomainResponse({}));
  }

  /**
   * Delete the domain
   * 
   * @param request - DeleteDomainRequest
   * @returns DeleteDomainResponse
   */
  async deleteDomain(request: DeleteDomainRequest): Promise<DeleteDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDomainWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a drive.
   * 
   * @param request - DeleteDriveRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDriveResponse
   */
  async deleteDriveWithOptions(request: DeleteDriveRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteDriveResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDrive",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/drive/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteDriveResponse>(await this.execute(params, req, runtime), new DeleteDriveResponse({}));
  }

  /**
   * Deletes a drive.
   * 
   * @param request - DeleteDriveRequest
   * @returns DeleteDriveResponse
   */
  async deleteDrive(request: DeleteDriveRequest): Promise<DeleteDriveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDriveWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a file or folder.
   * 
   * @param request - DeleteFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFileResponse
   */
  async deleteFileWithOptions(request: DeleteFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteFileResponse>(await this.execute(params, req, runtime), new DeleteFileResponse({}));
  }

  /**
   * Deletes a file or folder.
   * 
   * @param request - DeleteFileRequest
   * @returns DeleteFileResponse
   */
  async deleteFile(request: DeleteFileRequest): Promise<DeleteFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFileWithOptions(request, headers, runtime);
  }

  /**
   * Deletes groups. Before you delete a group, make sure that no other groups or users exist in the group. Otherwise, the group fails to be deleted.
   * 
   * @param request - DeleteGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGroupResponse
   */
  async deleteGroupWithOptions(request: DeleteGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      body["group_id"] = request.groupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGroup",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/group/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteGroupResponse>(await this.execute(params, req, runtime), new DeleteGroupResponse({}));
  }

  /**
   * Deletes groups. Before you delete a group, make sure that no other groups or users exist in the group. Otherwise, the group fails to be deleted.
   * 
   * @param request - DeleteGroupRequest
   * @returns DeleteGroupResponse
   */
  async deleteGroup(request: DeleteGroupRequest): Promise<DeleteGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGroupWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a historical version of a file. You cannot delete the latest version of a file.
   * 
   * @param request - DeleteRevisionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRevisionResponse
   */
  async deleteRevisionWithOptions(request: DeleteRevisionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteRevisionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.revisionId)) {
      body["revision_id"] = request.revisionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRevision",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/revision/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteRevisionResponse>(await this.execute(params, req, runtime), new DeleteRevisionResponse({}));
  }

  /**
   * Deletes a historical version of a file. You cannot delete the latest version of a file.
   * 
   * @param request - DeleteRevisionRequest
   * @returns DeleteRevisionResponse
   */
  async deleteRevision(request: DeleteRevisionRequest): Promise<DeleteRevisionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRevisionWithOptions(request, headers, runtime);
  }

  /**
   * 删除故事
   * 
   * @param request - DeleteStoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStoryResponse
   */
  async deleteStoryWithOptions(request: DeleteStoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteStoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.storyId)) {
      body["story_id"] = request.storyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteStory",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/delete_story`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteStoryResponse>(await this.execute(params, req, runtime), new DeleteStoryResponse({}));
  }

  /**
   * 删除故事
   * 
   * @param request - DeleteStoryRequest
   * @returns DeleteStoryResponse
   */
  async deleteStory(request: DeleteStoryRequest): Promise<DeleteStoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteStoryWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a user.
   * 
   * @param request - DeleteUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserResponse
   */
  async deleteUserWithOptions(request: DeleteUserRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUser",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/user/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteUserResponse>(await this.execute(params, req, runtime), new DeleteUserResponse({}));
  }

  /**
   * Deletes a user.
   * 
   * @param request - DeleteUserRequest
   * @returns DeleteUserResponse
   */
  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteUserWithOptions(request, headers, runtime);
  }

  /**
   * Queries the cursor of incremental information.
   * 
   * @param request - DeltaGetLastCursorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeltaGetLastCursorResponse
   */
  async deltaGetLastCursorWithOptions(request: DeltaGetLastCursorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeltaGetLastCursorResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.syncRootId)) {
      body["sync_root_id"] = request.syncRootId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeltaGetLastCursor",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/get_last_cursor`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeltaGetLastCursorResponse>(await this.execute(params, req, runtime), new DeltaGetLastCursorResponse({}));
  }

  /**
   * Queries the cursor of incremental information.
   * 
   * @param request - DeltaGetLastCursorRequest
   * @returns DeltaGetLastCursorResponse
   */
  async deltaGetLastCursor(request: DeltaGetLastCursorRequest): Promise<DeltaGetLastCursorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deltaGetLastCursorWithOptions(request, headers, runtime);
  }

  /**
   * Downloads a file.
   * 
   * @remarks
   * For information about best practices for downloading a file.
   * 
   * @param request - DownloadFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DownloadFileResponse
   */
  async downloadFileWithOptions(request: DownloadFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DownloadFileResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      query["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      query["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.imageThumbnailProcess)) {
      query["image_thumbnail_process"] = request.imageThumbnailProcess;
    }

    if (!$dara.isNull(request.officeThumbnailProcess)) {
      query["office_thumbnail_process"] = request.officeThumbnailProcess;
    }

    if (!$dara.isNull(request.shareId)) {
      query["share_id"] = request.shareId;
    }

    if (!$dara.isNull(request.videoThumbnailProcess)) {
      query["video_thumbnail_process"] = request.videoThumbnailProcess;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DownloadFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/download`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "binary",
    });
    return $dara.cast<DownloadFileResponse>(await this.execute(params, req, runtime), new DownloadFileResponse({}));
  }

  /**
   * Downloads a file.
   * 
   * @remarks
   * For information about best practices for downloading a file.
   * 
   * @param request - DownloadFileRequest
   * @returns DownloadFileResponse
   */
  async downloadFile(request: DownloadFileRequest): Promise<DownloadFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.downloadFileWithOptions(request, headers, runtime);
  }

  /**
   * Grants permissions to access files to a user or group.
   * 
   * @param request - FileAddPermissionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FileAddPermissionResponse
   */
  async fileAddPermissionWithOptions(request: FileAddPermissionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<FileAddPermissionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.memberList)) {
      body["member_list"] = request.memberList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FileAddPermission",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/add_permission`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<FileAddPermissionResponse>(await this.execute(params, req, runtime), new FileAddPermissionResponse({}));
  }

  /**
   * Grants permissions to access files to a user or group.
   * 
   * @param request - FileAddPermissionRequest
   * @returns FileAddPermissionResponse
   */
  async fileAddPermission(request: FileAddPermissionRequest): Promise<FileAddPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.fileAddPermissionWithOptions(request, headers, runtime);
  }

  /**
   * Removes custom tags from a file.
   * 
   * @param request - FileDeleteUserTagsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FileDeleteUserTagsResponse
   */
  async fileDeleteUserTagsWithOptions(request: FileDeleteUserTagsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<FileDeleteUserTagsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.keyList)) {
      body["key_list"] = request.keyList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FileDeleteUserTags",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/delete_usertags`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<FileDeleteUserTagsResponse>(await this.execute(params, req, runtime), new FileDeleteUserTagsResponse({}));
  }

  /**
   * Removes custom tags from a file.
   * 
   * @param request - FileDeleteUserTagsRequest
   * @returns FileDeleteUserTagsResponse
   */
  async fileDeleteUserTags(request: FileDeleteUserTagsRequest): Promise<FileDeleteUserTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.fileDeleteUserTagsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the sharing authorization records of a file.
   * 
   * @param request - FileListPermissionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FileListPermissionResponse
   */
  async fileListPermissionWithOptions(request: FileListPermissionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<FileListPermissionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FileListPermission",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/list_permission`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $dara.cast<FileListPermissionResponse>(await this.execute(params, req, runtime), new FileListPermissionResponse({}));
  }

  /**
   * Queries the sharing authorization records of a file.
   * 
   * @param request - FileListPermissionRequest
   * @returns FileListPermissionResponse
   */
  async fileListPermission(request: FileListPermissionRequest): Promise<FileListPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.fileListPermissionWithOptions(request, headers, runtime);
  }

  /**
   * Adds custom tags to a file.
   * 
   * @remarks
   * This operation is an incremental update operation. Take note of the following items:
   * *   If a tag name specified in the request is the same as an existing tag name, the existing tag is overwritten.
   * *   If a tag name specified in the request is different from the existing tag names, the specified tag is added.
   * *   The existing tags with unique names are not affected.
   * 
   * @param request - FilePutUserTagsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FilePutUserTagsResponse
   */
  async filePutUserTagsWithOptions(request: FilePutUserTagsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<FilePutUserTagsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.userTags)) {
      body["user_tags"] = request.userTags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FilePutUserTags",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/put_usertags`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<FilePutUserTagsResponse>(await this.execute(params, req, runtime), new FilePutUserTagsResponse({}));
  }

  /**
   * Adds custom tags to a file.
   * 
   * @remarks
   * This operation is an incremental update operation. Take note of the following items:
   * *   If a tag name specified in the request is the same as an existing tag name, the existing tag is overwritten.
   * *   If a tag name specified in the request is different from the existing tag names, the specified tag is added.
   * *   The existing tags with unique names are not affected.
   * 
   * @param request - FilePutUserTagsRequest
   * @returns FilePutUserTagsResponse
   */
  async filePutUserTags(request: FilePutUserTagsRequest): Promise<FilePutUserTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.filePutUserTagsWithOptions(request, headers, runtime);
  }

  /**
   * Cancels the permissions on a shared file.
   * 
   * @param request - FileRemovePermissionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FileRemovePermissionResponse
   */
  async fileRemovePermissionWithOptions(request: FileRemovePermissionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<FileRemovePermissionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.memberList)) {
      body["member_list"] = request.memberList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FileRemovePermission",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/remove_permission`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<FileRemovePermissionResponse>(await this.execute(params, req, runtime), new FileRemovePermissionResponse({}));
  }

  /**
   * Cancels the permissions on a shared file.
   * 
   * @param request - FileRemovePermissionRequest
   * @returns FileRemovePermissionResponse
   */
  async fileRemovePermission(request: FileRemovePermissionRequest): Promise<FileRemovePermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.fileRemovePermissionWithOptions(request, headers, runtime);
  }

  /**
   * Queries the information about an asynchronous task.
   * 
   * @param request - GetAsyncTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAsyncTaskResponse
   */
  async getAsyncTaskWithOptions(request: GetAsyncTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetAsyncTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.asyncTaskId)) {
      body["async_task_id"] = request.asyncTaskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAsyncTask",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/async_task/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetAsyncTaskResponse>(await this.execute(params, req, runtime), new GetAsyncTaskResponse({}));
  }

  /**
   * Queries the information about an asynchronous task.
   * 
   * @param request - GetAsyncTaskRequest
   * @returns GetAsyncTaskResponse
   */
  async getAsyncTask(request: GetAsyncTaskRequest): Promise<GetAsyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAsyncTaskWithOptions(request, headers, runtime);
  }

  /**
   * Queries the default drive of a user.
   * 
   * @param request - GetDefaultDriveRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDefaultDriveResponse
   */
  async getDefaultDriveWithOptions(request: GetDefaultDriveRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetDefaultDriveResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDefaultDrive",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/drive/get_default_drive`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetDefaultDriveResponse>(await this.execute(params, req, runtime), new GetDefaultDriveResponse({}));
  }

  /**
   * Queries the default drive of a user.
   * 
   * @param request - GetDefaultDriveRequest
   * @returns GetDefaultDriveResponse
   */
  async getDefaultDrive(request: GetDefaultDriveRequest): Promise<GetDefaultDriveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDefaultDriveWithOptions(request, headers, runtime);
  }

  /**
   * Get domain information.
   * 
   * @param request - GetDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDomainResponse
   */
  async getDomainWithOptions(request: GetDomainRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetDomainResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.domainId)) {
      body["domain_id"] = request.domainId;
    }

    if (!$dara.isNull(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!$dara.isNull(request.getQuotaUsed)) {
      body["get_quota_used"] = request.getQuotaUsed;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDomain",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/domain/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetDomainResponse>(await this.execute(params, req, runtime), new GetDomainResponse({}));
  }

  /**
   * Get domain information.
   * 
   * @param request - GetDomainRequest
   * @returns GetDomainResponse
   */
  async getDomain(request: GetDomainRequest): Promise<GetDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDomainWithOptions(request, headers, runtime);
  }

  /**
   * 获取domain限额
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDomainQuotaResponse
   */
  async getDomainQuotaWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetDomainQuotaResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDomainQuota",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/domain/get_quota`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetDomainQuotaResponse>(await this.execute(params, req, runtime), new GetDomainQuotaResponse({}));
  }

  /**
   * 获取domain限额
   * @returns GetDomainQuotaResponse
   */
  async getDomainQuota(): Promise<GetDomainQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDomainQuotaWithOptions(headers, runtime);
  }

  /**
   * Queries the download URL of a file. For more information about best practices, visit https://help.aliyun.com/document_detail/175889.html.
   * 
   * @param request - GetDownloadUrlRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDownloadUrlResponse
   */
  async getDownloadUrlWithOptions(request: GetDownloadUrlRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetDownloadUrlResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.expireSec)) {
      body["expire_sec"] = request.expireSec;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.fileName)) {
      body["file_name"] = request.fileName;
    }

    if (!$dara.isNull(request.responseContentType)) {
      body["response_content_type"] = request.responseContentType;
    }

    if (!$dara.isNull(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDownloadUrl",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/get_download_url`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetDownloadUrlResponse>(await this.execute(params, req, runtime), new GetDownloadUrlResponse({}));
  }

  /**
   * Queries the download URL of a file. For more information about best practices, visit https://help.aliyun.com/document_detail/175889.html.
   * 
   * @param request - GetDownloadUrlRequest
   * @returns GetDownloadUrlResponse
   */
  async getDownloadUrl(request: GetDownloadUrlRequest): Promise<GetDownloadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDownloadUrlWithOptions(request, headers, runtime);
  }

  /**
   * Queries the information about a drive.
   * 
   * @param request - GetDriveRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDriveResponse
   */
  async getDriveWithOptions(request: GetDriveRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetDriveResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDrive",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/drive/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetDriveResponse>(await this.execute(params, req, runtime), new GetDriveResponse({}));
  }

  /**
   * Queries the information about a drive.
   * 
   * @param request - GetDriveRequest
   * @returns GetDriveResponse
   */
  async getDrive(request: GetDriveRequest): Promise<GetDriveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDriveWithOptions(request, headers, runtime);
  }

  /**
   * Queries the information about a file.
   * 
   * @param request - GetFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFileResponse
   */
  async getFileWithOptions(request: GetFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    if (!$dara.isNull(request.thumbnailProcesses)) {
      body["thumbnail_processes"] = request.thumbnailProcesses;
    }

    if (!$dara.isNull(request.urlExpireSec)) {
      body["url_expire_sec"] = request.urlExpireSec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetFileResponse>(await this.execute(params, req, runtime), new GetFileResponse({}));
  }

  /**
   * Queries the information about a file.
   * 
   * @param request - GetFileRequest
   * @returns GetFileResponse
   */
  async getFile(request: GetFileRequest): Promise<GetFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFileWithOptions(request, headers, runtime);
  }

  /**
   * Queries the information about a group.
   * 
   * @param request - GetGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGroupResponse
   */
  async getGroupWithOptions(request: GetGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      body["group_id"] = request.groupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGroup",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/group/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetGroupResponse>(await this.execute(params, req, runtime), new GetGroupResponse({}));
  }

  /**
   * Queries the information about a group.
   * 
   * @param request - GetGroupRequest
   * @returns GetGroupResponse
   */
  async getGroup(request: GetGroupRequest): Promise<GetGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGroupWithOptions(request, headers, runtime);
  }

  /**
   * Queries the mapping between an entity and a benefit package. You can call this operation to query the benefit package that is associated with a user.
   * 
   * @param request - GetIdentityToBenefitPkgMappingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIdentityToBenefitPkgMappingResponse
   */
  async getIdentityToBenefitPkgMappingWithOptions(request: GetIdentityToBenefitPkgMappingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetIdentityToBenefitPkgMappingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.benefitPkgId)) {
      body["benefit_pkg_id"] = request.benefitPkgId;
    }

    if (!$dara.isNull(request.identityId)) {
      body["identity_id"] = request.identityId;
    }

    if (!$dara.isNull(request.identityType)) {
      body["identity_type"] = request.identityType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIdentityToBenefitPkgMapping",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/benefit/identity_to_benefit_pkg_mapping/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetIdentityToBenefitPkgMappingResponse>(await this.execute(params, req, runtime), new GetIdentityToBenefitPkgMappingResponse({}));
  }

  /**
   * Queries the mapping between an entity and a benefit package. You can call this operation to query the benefit package that is associated with a user.
   * 
   * @param request - GetIdentityToBenefitPkgMappingRequest
   * @returns GetIdentityToBenefitPkgMappingResponse
   */
  async getIdentityToBenefitPkgMapping(request: GetIdentityToBenefitPkgMappingRequest): Promise<GetIdentityToBenefitPkgMappingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIdentityToBenefitPkgMappingWithOptions(request, headers, runtime);
  }

  /**
   * Queries the information about an account.
   * 
   * @param request - GetLinkInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLinkInfoResponse
   */
  async getLinkInfoWithOptions(request: GetLinkInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetLinkInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.extra)) {
      body["extra"] = request.extra;
    }

    if (!$dara.isNull(request.identity)) {
      body["identity"] = request.identity;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLinkInfo",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/account/get_link_info`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetLinkInfoResponse>(await this.execute(params, req, runtime), new GetLinkInfoResponse({}));
  }

  /**
   * Queries the information about an account.
   * 
   * @param request - GetLinkInfoRequest
   * @returns GetLinkInfoResponse
   */
  async getLinkInfo(request: GetLinkInfoRequest): Promise<GetLinkInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLinkInfoWithOptions(request, headers, runtime);
  }

  /**
   * Queries the information about a user based on the user ID.
   * 
   * @param request - GetLinkInfoByUserIdRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLinkInfoByUserIdResponse
   */
  async getLinkInfoByUserIdWithOptions(request: GetLinkInfoByUserIdRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetLinkInfoByUserIdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLinkInfoByUserId",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/account/get_link_info_by_user_id`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetLinkInfoByUserIdResponse>(await this.execute(params, req, runtime), new GetLinkInfoByUserIdResponse({}));
  }

  /**
   * Queries the information about a user based on the user ID.
   * 
   * @param request - GetLinkInfoByUserIdRequest
   * @returns GetLinkInfoByUserIdResponse
   */
  async getLinkInfoByUserId(request: GetLinkInfoByUserIdRequest): Promise<GetLinkInfoByUserIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLinkInfoByUserIdWithOptions(request, headers, runtime);
  }

  /**
   * Queries the information about a version.
   * 
   * @param request - GetRevisionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRevisionResponse
   */
  async getRevisionWithOptions(request: GetRevisionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetRevisionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.revisionId)) {
      body["revision_id"] = request.revisionId;
    }

    if (!$dara.isNull(request.urlExpireSec)) {
      body["url_expire_sec"] = request.urlExpireSec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRevision",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/revision/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetRevisionResponse>(await this.execute(params, req, runtime), new GetRevisionResponse({}));
  }

  /**
   * Queries the information about a version.
   * 
   * @param request - GetRevisionRequest
   * @returns GetRevisionResponse
   */
  async getRevision(request: GetRevisionRequest): Promise<GetRevisionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRevisionWithOptions(request, headers, runtime);
  }

  /**
   * Queries the share URL of a file.
   * 
   * @param request - GetShareLinkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetShareLinkResponse
   */
  async getShareLinkWithOptions(request: GetShareLinkRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetShareLinkResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetShareLink",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/share_link/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetShareLinkResponse>(await this.execute(params, req, runtime), new GetShareLinkResponse({}));
  }

  /**
   * Queries the share URL of a file.
   * 
   * @param request - GetShareLinkRequest
   * @returns GetShareLinkResponse
   */
  async getShareLink(request: GetShareLinkRequest): Promise<GetShareLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getShareLinkWithOptions(request, headers, runtime);
  }

  /**
   * Queries the information about a share link anonymously.
   * 
   * @param request - GetShareLinkByAnonymousRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetShareLinkByAnonymousResponse
   */
  async getShareLinkByAnonymousWithOptions(request: GetShareLinkByAnonymousRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetShareLinkByAnonymousResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetShareLinkByAnonymous",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/share_link/get_by_anonymous`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetShareLinkByAnonymousResponse>(await this.execute(params, req, runtime), new GetShareLinkByAnonymousResponse({}));
  }

  /**
   * Queries the information about a share link anonymously.
   * 
   * @param request - GetShareLinkByAnonymousRequest
   * @returns GetShareLinkByAnonymousResponse
   */
  async getShareLinkByAnonymous(request: GetShareLinkByAnonymousRequest): Promise<GetShareLinkByAnonymousResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getShareLinkByAnonymousWithOptions(request, headers, runtime);
  }

  /**
   * Queries a share token anonymously.
   * 
   * @remarks
   * To access a file by using a share link, you must first obtain a share token, even if the value of share_pwd of this share is an empty string, which specifies that the share is not private.
   * 
   * @param request - GetShareLinkTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetShareLinkTokenResponse
   */
  async getShareLinkTokenWithOptions(request: GetShareLinkTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetShareLinkTokenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.expireSec)) {
      body["expire_sec"] = request.expireSec;
    }

    if (!$dara.isNull(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    if (!$dara.isNull(request.sharePwd)) {
      body["share_pwd"] = request.sharePwd;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetShareLinkToken",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/share_link/get_share_token`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetShareLinkTokenResponse>(await this.execute(params, req, runtime), new GetShareLinkTokenResponse({}));
  }

  /**
   * Queries a share token anonymously.
   * 
   * @remarks
   * To access a file by using a share link, you must first obtain a share token, even if the value of share_pwd of this share is an empty string, which specifies that the share is not private.
   * 
   * @param request - GetShareLinkTokenRequest
   * @returns GetShareLinkTokenResponse
   */
  async getShareLinkToken(request: GetShareLinkTokenRequest): Promise<GetShareLinkTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getShareLinkTokenWithOptions(request, headers, runtime);
  }

  /**
   * 获取故事详情
   * 
   * @param request - GetStoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStoryResponse
   */
  async getStoryWithOptions(request: GetStoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetStoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.coverImageThumbnailProcess)) {
      body["cover_image_thumbnail_process"] = request.coverImageThumbnailProcess;
    }

    if (!$dara.isNull(request.coverVideoThumbnailProcess)) {
      body["cover_video_thumbnail_process"] = request.coverVideoThumbnailProcess;
    }

    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.imageThumbnailProcess)) {
      body["image_thumbnail_process"] = request.imageThumbnailProcess;
    }

    if (!$dara.isNull(request.imageUrlProcess)) {
      body["image_url_process"] = request.imageUrlProcess;
    }

    if (!$dara.isNull(request.storyId)) {
      body["story_id"] = request.storyId;
    }

    if (!$dara.isNull(request.urlExpireSec)) {
      body["url_expire_sec"] = request.urlExpireSec;
    }

    if (!$dara.isNull(request.videoThumbnailProcess)) {
      body["video_thumbnail_process"] = request.videoThumbnailProcess;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStory",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/get_story`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetStoryResponse>(await this.execute(params, req, runtime), new GetStoryResponse({}));
  }

  /**
   * 获取故事详情
   * 
   * @param request - GetStoryRequest
   * @returns GetStoryResponse
   */
  async getStory(request: GetStoryRequest): Promise<GetStoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getStoryWithOptions(request, headers, runtime);
  }

  /**
   * Queries the execution status of a value-added asynchronous task. You can call this operation to query the execution status of an asynchronous task that is created by calling the CreateSimilarImageClusterTask operation.
   * 
   * @remarks
   * *Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/425220.html) of Drive and Photo Service**.
   * To call this operation, make sure that the value-added image processing feature is enabled.
   * Before you call this operation, a value-added asynchronous task must be created. For example, you can call the CreateSimilarImageClusterTask operation to create an asynchronous task. Then, you can call this operation to query the execution status of the asynchronous task based on the task ID.
   * 
   * @param request - GetTaskStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskStatusResponse
   */
  async getTaskStatusWithOptions(request: GetTaskStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTaskStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.taskId)) {
      body["task_id"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTaskStatus",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/get_task_status`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetTaskStatusResponse>(await this.execute(params, req, runtime), new GetTaskStatusResponse({}));
  }

  /**
   * Queries the execution status of a value-added asynchronous task. You can call this operation to query the execution status of an asynchronous task that is created by calling the CreateSimilarImageClusterTask operation.
   * 
   * @remarks
   * *Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/425220.html) of Drive and Photo Service**.
   * To call this operation, make sure that the value-added image processing feature is enabled.
   * Before you call this operation, a value-added asynchronous task must be created. For example, you can call the CreateSimilarImageClusterTask operation to create an asynchronous task. Then, you can call this operation to query the execution status of the asynchronous task based on the task ID.
   * 
   * @param request - GetTaskStatusRequest
   * @returns GetTaskStatusResponse
   */
  async getTaskStatus(request: GetTaskStatusRequest): Promise<GetTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskStatusWithOptions(request, headers, runtime);
  }

  /**
   * Queries the upload URL of a file.
   * 
   * @param request - GetUploadUrlRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUploadUrlResponse
   */
  async getUploadUrlWithOptions(request: GetUploadUrlRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetUploadUrlResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.partInfoList)) {
      body["part_info_list"] = request.partInfoList;
    }

    if (!$dara.isNull(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    if (!$dara.isNull(request.uploadId)) {
      body["upload_id"] = request.uploadId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUploadUrl",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/get_upload_url`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetUploadUrlResponse>(await this.execute(params, req, runtime), new GetUploadUrlResponse({}));
  }

  /**
   * Queries the upload URL of a file.
   * 
   * @param request - GetUploadUrlRequest
   * @returns GetUploadUrlResponse
   */
  async getUploadUrl(request: GetUploadUrlRequest): Promise<GetUploadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUploadUrlWithOptions(request, headers, runtime);
  }

  /**
   * Queries the information about a user.
   * 
   * @param request - GetUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserResponse
   */
  async getUserWithOptions(request: GetUserRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUser",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/user/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetUserResponse>(await this.execute(params, req, runtime), new GetUserResponse({}));
  }

  /**
   * Queries the information about a user.
   * 
   * @param request - GetUserRequest
   * @returns GetUserResponse
   */
  async getUser(request: GetUserRequest): Promise<GetUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserWithOptions(request, headers, runtime);
  }

  /**
   * Queries the information about video playback.
   * 
   * @remarks
   * For more information about best practices, see [Preview videos online](https://help.aliyun.com/document_detail/427477.html).
   * 
   * @param request - GetVideoPreviewPlayInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVideoPreviewPlayInfoResponse
   */
  async getVideoPreviewPlayInfoWithOptions(request: GetVideoPreviewPlayInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetVideoPreviewPlayInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.category)) {
      body["category"] = request.category;
    }

    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.getMasterUrl)) {
      body["get_master_url"] = request.getMasterUrl;
    }

    if (!$dara.isNull(request.getWithoutUrl)) {
      body["get_without_url"] = request.getWithoutUrl;
    }

    if (!$dara.isNull(request.reTranscode)) {
      body["re_transcode"] = request.reTranscode;
    }

    if (!$dara.isNull(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    if (!$dara.isNull(request.templateId)) {
      body["template_id"] = request.templateId;
    }

    if (!$dara.isNull(request.urlExpireSec)) {
      body["url_expire_sec"] = request.urlExpireSec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVideoPreviewPlayInfo",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/get_video_preview_play_info`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetVideoPreviewPlayInfoResponse>(await this.execute(params, req, runtime), new GetVideoPreviewPlayInfoResponse({}));
  }

  /**
   * Queries the information about video playback.
   * 
   * @remarks
   * For more information about best practices, see [Preview videos online](https://help.aliyun.com/document_detail/427477.html).
   * 
   * @param request - GetVideoPreviewPlayInfoRequest
   * @returns GetVideoPreviewPlayInfoResponse
   */
  async getVideoPreviewPlayInfo(request: GetVideoPreviewPlayInfoRequest): Promise<GetVideoPreviewPlayInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getVideoPreviewPlayInfoWithOptions(request, headers, runtime);
  }

  /**
   * Queries the preview metadata of a video.
   * 
   * @remarks
   * For more information about best practices, see [Preview videos online](https://help.aliyun.com/document_detail/427477.html).
   * 
   * @param request - GetVideoPreviewPlayMetaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVideoPreviewPlayMetaResponse
   */
  async getVideoPreviewPlayMetaWithOptions(request: GetVideoPreviewPlayMetaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetVideoPreviewPlayMetaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.category)) {
      body["category"] = request.category;
    }

    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVideoPreviewPlayMeta",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/get_video_preview_play_meta`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetVideoPreviewPlayMetaResponse>(await this.execute(params, req, runtime), new GetVideoPreviewPlayMetaResponse({}));
  }

  /**
   * Queries the preview metadata of a video.
   * 
   * @remarks
   * For more information about best practices, see [Preview videos online](https://help.aliyun.com/document_detail/427477.html).
   * 
   * @param request - GetVideoPreviewPlayMetaRequest
   * @returns GetVideoPreviewPlayMetaResponse
   */
  async getVideoPreviewPlayMeta(request: GetVideoPreviewPlayMetaRequest): Promise<GetVideoPreviewPlayMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getVideoPreviewPlayMetaWithOptions(request, headers, runtime);
  }

  /**
   * 更新用户组名字
   * 
   * @param request - GroupUpdateNameRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GroupUpdateNameResponse
   */
  async groupUpdateNameWithOptions(request: GroupUpdateNameRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GroupUpdateNameResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      body["group_id"] = request.groupId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GroupUpdateName",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/group/update_name`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GroupUpdateNameResponse>(await this.execute(params, req, runtime), new GroupUpdateNameResponse({}));
  }

  /**
   * 更新用户组名字
   * 
   * @param request - GroupUpdateNameRequest
   * @returns GroupUpdateNameResponse
   */
  async groupUpdateName(request: GroupUpdateNameRequest): Promise<GroupUpdateNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.groupUpdateNameWithOptions(request, headers, runtime);
  }

  /**
   * Imports a user.
   * 
   * @param request - ImportUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportUserResponse
   */
  async importUserWithOptions(request: ImportUserRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ImportUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authenticationDisplayName)) {
      body["authentication_display_name"] = request.authenticationDisplayName;
    }

    if (!$dara.isNull(request.authenticationType)) {
      body["authentication_type"] = request.authenticationType;
    }

    if (!$dara.isNull(request.autoCreateDrive)) {
      body["auto_create_drive"] = request.autoCreateDrive;
    }

    if (!$dara.isNull(request.driveTotalSize)) {
      body["drive_total_size"] = request.driveTotalSize;
    }

    if (!$dara.isNull(request.extra)) {
      body["extra"] = request.extra;
    }

    if (!$dara.isNull(request.identity)) {
      body["identity"] = request.identity;
    }

    if (!$dara.isNull(request.nickName)) {
      body["nick_name"] = request.nickName;
    }

    if (!$dara.isNull(request.parentGroupId)) {
      body["parent_group_id"] = request.parentGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportUser",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/user/import`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ImportUserResponse>(await this.execute(params, req, runtime), new ImportUserResponse({}));
  }

  /**
   * Imports a user.
   * 
   * @param request - ImportUserRequest
   * @returns ImportUserResponse
   */
  async importUser(request: ImportUserRequest): Promise<ImportUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.importUserWithOptions(request, headers, runtime);
  }

  /**
   * 送审文件
   * 
   * @param request - InvestigateFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvestigateFileResponse
   */
  async investigateFileWithOptions(request: InvestigateFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<InvestigateFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveFileIds)) {
      body["drive_file_ids"] = request.driveFileIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InvestigateFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/csi/investigate_file`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<InvestigateFileResponse>(await this.execute(params, req, runtime), new InvestigateFileResponse({}));
  }

  /**
   * 送审文件
   * 
   * @param request - InvestigateFileRequest
   * @returns InvestigateFileResponse
   */
  async investigateFile(request: InvestigateFileRequest): Promise<InvestigateFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.investigateFileWithOptions(request, headers, runtime);
  }

  /**
   * Associates an account with a user.
   * 
   * @param request - LinkAccountRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LinkAccountResponse
   */
  async linkAccountWithOptions(request: LinkAccountRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<LinkAccountResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.extra)) {
      body["extra"] = request.extra;
    }

    if (!$dara.isNull(request.identity)) {
      body["identity"] = request.identity;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "LinkAccount",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/account/link`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<LinkAccountResponse>(await this.execute(params, req, runtime), new LinkAccountResponse({}));
  }

  /**
   * Associates an account with a user.
   * 
   * @param request - LinkAccountRequest
   * @returns LinkAccountResponse
   */
  async linkAccount(request: LinkAccountRequest): Promise<LinkAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.linkAccountWithOptions(request, headers, runtime);
  }

  /**
   * Queries location-based groups.
   * 
   * @param request - ListAddressGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAddressGroupsResponse
   */
  async listAddressGroupsWithOptions(request: ListAddressGroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListAddressGroupsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.imageThumbnailProcess)) {
      body["image_thumbnail_process"] = request.imageThumbnailProcess;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!$dara.isNull(request.videoThumbnailProcess)) {
      body["video_thumbnail_process"] = request.videoThumbnailProcess;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAddressGroups",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/list_address_groups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListAddressGroupsResponse>(await this.execute(params, req, runtime), new ListAddressGroupsResponse({}));
  }

  /**
   * Queries location-based groups.
   * 
   * @param request - ListAddressGroupsRequest
   * @returns ListAddressGroupsResponse
   */
  async listAddressGroups(request: ListAddressGroupsRequest): Promise<ListAddressGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAddressGroupsWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of assigned roles. For example, you can query the administrators of a group by group ID.
   * 
   * @param request - ListAssignmentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAssignmentResponse
   */
  async listAssignmentWithOptions(request: ListAssignmentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListAssignmentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.manageResourceId)) {
      body["manage_resource_id"] = request.manageResourceId;
    }

    if (!$dara.isNull(request.manageResourceType)) {
      body["manage_resource_type"] = request.manageResourceType;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAssignment",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/role/list_assignment`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListAssignmentResponse>(await this.execute(params, req, runtime), new ListAssignmentResponse({}));
  }

  /**
   * Queries a list of assigned roles. For example, you can query the administrators of a group by group ID.
   * 
   * @param request - ListAssignmentRequest
   * @returns ListAssignmentResponse
   */
  async listAssignment(request: ListAssignmentRequest): Promise<ListAssignmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAssignmentWithOptions(request, headers, runtime);
  }

  /**
   * Queries incremental information.
   * 
   * @param request - ListDeltaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeltaResponse
   */
  async listDeltaWithOptions(request: ListDeltaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListDeltaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cursor)) {
      body["cursor"] = request.cursor;
    }

    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.syncRootId)) {
      body["sync_root_id"] = request.syncRootId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDelta",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/list_delta`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListDeltaResponse>(await this.execute(params, req, runtime), new ListDeltaResponse({}));
  }

  /**
   * Queries incremental information.
   * 
   * @param request - ListDeltaRequest
   * @returns ListDeltaResponse
   */
  async listDelta(request: ListDeltaRequest): Promise<ListDeltaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDeltaWithOptions(request, headers, runtime);
  }

  /**
   * 列举 domain
   * 
   * @param request - ListDomainsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDomainsResponse
   */
  async listDomainsWithOptions(request: ListDomainsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListDomainsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!$dara.isNull(request.parentDomainId)) {
      body["parent_domain_id"] = request.parentDomainId;
    }

    if (!$dara.isNull(request.serviceCode)) {
      body["service_code"] = request.serviceCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDomains",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/domain/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListDomainsResponse>(await this.execute(params, req, runtime), new ListDomainsResponse({}));
  }

  /**
   * 列举 domain
   * 
   * @param request - ListDomainsRequest
   * @returns ListDomainsResponse
   */
  async listDomains(request: ListDomainsRequest): Promise<ListDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDomainsWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of drives.
   * 
   * @param request - ListDriveRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDriveResponse
   */
  async listDriveWithOptions(request: ListDriveRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListDriveResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!$dara.isNull(request.owner)) {
      body["owner"] = request.owner;
    }

    if (!$dara.isNull(request.ownerType)) {
      body["owner_type"] = request.ownerType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDrive",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/drive/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListDriveResponse>(await this.execute(params, req, runtime), new ListDriveResponse({}));
  }

  /**
   * Queries a list of drives.
   * 
   * @param request - ListDriveRequest
   * @returns ListDriveResponse
   */
  async listDrive(request: ListDriveRequest): Promise<ListDriveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDriveWithOptions(request, headers, runtime);
  }

  /**
   * Queries face-based groups.
   * 
   * @param request - ListFacegroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFacegroupsResponse
   */
  async listFacegroupsWithOptions(request: ListFacegroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListFacegroupsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!$dara.isNull(request.remarks)) {
      body["remarks"] = request.remarks;
    }

    if (!$dara.isNull(request.returnTotalCount)) {
      body["return_total_count"] = request.returnTotalCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFacegroups",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/list_facegroups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListFacegroupsResponse>(await this.execute(params, req, runtime), new ListFacegroupsResponse({}));
  }

  /**
   * Queries face-based groups.
   * 
   * @param request - ListFacegroupsRequest
   * @returns ListFacegroupsResponse
   */
  async listFacegroups(request: ListFacegroupsRequest): Promise<ListFacegroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFacegroupsWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of files and folders.
   * 
   * @param request - ListFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFileResponse
   */
  async listFileWithOptions(request: ListFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.category)) {
      body["category"] = request.category;
    }

    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!$dara.isNull(request.orderBy)) {
      body["order_by"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      body["order_direction"] = request.orderDirection;
    }

    if (!$dara.isNull(request.parentFileId)) {
      body["parent_file_id"] = request.parentFileId;
    }

    if (!$dara.isNull(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.thumbnailProcesses)) {
      body["thumbnail_processes"] = request.thumbnailProcesses;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListFileResponse>(await this.execute(params, req, runtime), new ListFileResponse({}));
  }

  /**
   * Queries a list of files and folders.
   * 
   * @param request - ListFileRequest
   * @returns ListFileResponse
   */
  async listFile(request: ListFileRequest): Promise<ListFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFileWithOptions(request, headers, runtime);
  }

  /**
   * Queries groups.
   * 
   * @param request - ListGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupResponse
   */
  async listGroupWithOptions(request: ListGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGroup",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/group/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListGroupResponse>(await this.execute(params, req, runtime), new ListGroupResponse({}));
  }

  /**
   * Queries groups.
   * 
   * @param request - ListGroupRequest
   * @returns ListGroupResponse
   */
  async listGroup(request: ListGroupRequest): Promise<ListGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGroupWithOptions(request, headers, runtime);
  }

  /**
   * Queries the members of a group.
   * 
   * @param request - ListGroupMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupMemberResponse
   */
  async listGroupMemberWithOptions(request: ListGroupMemberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListGroupMemberResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      body["group_id"] = request.groupId;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!$dara.isNull(request.memberType)) {
      body["member_type"] = request.memberType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGroupMember",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/group/list_member`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListGroupMemberResponse>(await this.execute(params, req, runtime), new ListGroupMemberResponse({}));
  }

  /**
   * Queries the members of a group.
   * 
   * @param request - ListGroupMemberRequest
   * @returns ListGroupMemberResponse
   */
  async listGroupMember(request: ListGroupMemberRequest): Promise<ListGroupMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGroupMemberWithOptions(request, headers, runtime);
  }

  /**
   * 列举用户或团队已分配的角色列表
   * 
   * @param request - ListIdentityRoleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIdentityRoleResponse
   */
  async listIdentityRoleWithOptions(request: ListIdentityRoleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListIdentityRoleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identity)) {
      body["identity"] = request.identity;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIdentityRole",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/role/list_identity_role`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListIdentityRoleResponse>(await this.execute(params, req, runtime), new ListIdentityRoleResponse({}));
  }

  /**
   * 列举用户或团队已分配的角色列表
   * 
   * @param request - ListIdentityRoleRequest
   * @returns ListIdentityRoleResponse
   */
  async listIdentityRole(request: ListIdentityRoleRequest): Promise<ListIdentityRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIdentityRoleWithOptions(request, headers, runtime);
  }

  /**
   * Queries the mappings between entities and benefit packages. You can call this operation to query the benefit packages that are associated with a user.
   * 
   * @param request - ListIdentityToBenefitPkgMappingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIdentityToBenefitPkgMappingResponse
   */
  async listIdentityToBenefitPkgMappingWithOptions(request: ListIdentityToBenefitPkgMappingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListIdentityToBenefitPkgMappingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identityId)) {
      body["identity_id"] = request.identityId;
    }

    if (!$dara.isNull(request.identityType)) {
      body["identity_type"] = request.identityType;
    }

    if (!$dara.isNull(request.includeExpired)) {
      body["include_expired"] = request.includeExpired;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIdentityToBenefitPkgMapping",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/benefit/identity_to_benefit_pkg_mapping/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListIdentityToBenefitPkgMappingResponse>(await this.execute(params, req, runtime), new ListIdentityToBenefitPkgMappingResponse({}));
  }

  /**
   * Queries the mappings between entities and benefit packages. You can call this operation to query the benefit packages that are associated with a user.
   * 
   * @param request - ListIdentityToBenefitPkgMappingRequest
   * @returns ListIdentityToBenefitPkgMappingResponse
   */
  async listIdentityToBenefitPkgMapping(request: ListIdentityToBenefitPkgMappingRequest): Promise<ListIdentityToBenefitPkgMappingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIdentityToBenefitPkgMappingWithOptions(request, headers, runtime);
  }

  /**
   * Queries the drives of the current user.
   * 
   * @param request - ListMyDrivesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMyDrivesResponse
   */
  async listMyDrivesWithOptions(request: ListMyDrivesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListMyDrivesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMyDrives",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/drive/list_my_drives`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListMyDrivesResponse>(await this.execute(params, req, runtime), new ListMyDrivesResponse({}));
  }

  /**
   * Queries the drives of the current user.
   * 
   * @param request - ListMyDrivesRequest
   * @returns ListMyDrivesResponse
   */
  async listMyDrives(request: ListMyDrivesRequest): Promise<ListMyDrivesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMyDrivesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the team drives that can be accessed by the authorized users.
   * 
   * @param request - ListMyGroupDriveRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMyGroupDriveResponse
   */
  async listMyGroupDriveWithOptions(request: ListMyGroupDriveRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListMyGroupDriveResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveName)) {
      body["drive_name"] = request.driveName;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMyGroupDrive",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/drive/list_my_group_drive`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListMyGroupDriveResponse>(await this.execute(params, req, runtime), new ListMyGroupDriveResponse({}));
  }

  /**
   * Queries the team drives that can be accessed by the authorized users.
   * 
   * @param request - ListMyGroupDriveRequest
   * @returns ListMyGroupDriveResponse
   */
  async listMyGroupDrive(request: ListMyGroupDriveRequest): Promise<ListMyGroupDriveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMyGroupDriveWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of files that are shared with a user. You can call this operation to query a list of files in a personal drive on which a user is granted permissions.
   * 
   * @param request - ListReceivedFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListReceivedFileResponse
   */
  async listReceivedFileWithOptions(request: ListReceivedFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListReceivedFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListReceivedFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/list_received_file`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListReceivedFileResponse>(await this.execute(params, req, runtime), new ListReceivedFileResponse({}));
  }

  /**
   * Queries a list of files that are shared with a user. You can call this operation to query a list of files in a personal drive on which a user is granted permissions.
   * 
   * @param request - ListReceivedFileRequest
   * @returns ListReceivedFileResponse
   */
  async listReceivedFile(request: ListReceivedFileRequest): Promise<ListReceivedFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listReceivedFileWithOptions(request, headers, runtime);
  }

  /**
   * Queries the information about files and folders in the recycle bin.
   * 
   * @param request - ListRecyclebinRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRecyclebinResponse
   */
  async listRecyclebinWithOptions(request: ListRecyclebinRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListRecyclebinResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!$dara.isNull(request.thumbnailProcesses)) {
      body["thumbnail_processes"] = request.thumbnailProcesses;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRecyclebin",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/recyclebin/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListRecyclebinResponse>(await this.execute(params, req, runtime), new ListRecyclebinResponse({}));
  }

  /**
   * Queries the information about files and folders in the recycle bin.
   * 
   * @param request - ListRecyclebinRequest
   * @returns ListRecyclebinResponse
   */
  async listRecyclebin(request: ListRecyclebinRequest): Promise<ListRecyclebinResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRecyclebinWithOptions(request, headers, runtime);
  }

  /**
   * Queries the versions of a file.
   * 
   * @param request - ListRevisionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRevisionResponse
   */
  async listRevisionWithOptions(request: ListRevisionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListRevisionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRevision",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/revision/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListRevisionResponse>(await this.execute(params, req, runtime), new ListRevisionResponse({}));
  }

  /**
   * Queries the versions of a file.
   * 
   * @param request - ListRevisionRequest
   * @returns ListRevisionResponse
   */
  async listRevision(request: ListRevisionRequest): Promise<ListRevisionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRevisionWithOptions(request, headers, runtime);
  }

  /**
   * Queries shares.
   * 
   * @remarks
   * This operation is discontinued. To query shares, you can call the SearchShareLink operation.
   * 
   * @param request - ListShareLinkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListShareLinkResponse
   */
  async listShareLinkWithOptions(request: ListShareLinkRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListShareLinkResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.creator)) {
      body["creator"] = request.creator;
    }

    if (!$dara.isNull(request.includeCancelled)) {
      body["include_cancelled"] = request.includeCancelled;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!$dara.isNull(request.orderBy)) {
      body["order_by"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      body["order_direction"] = request.orderDirection;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListShareLink",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/share_link/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListShareLinkResponse>(await this.execute(params, req, runtime), new ListShareLinkResponse({}));
  }

  /**
   * Queries shares.
   * 
   * @remarks
   * This operation is discontinued. To query shares, you can call the SearchShareLink operation.
   * 
   * @param request - ListShareLinkRequest
   * @returns ListShareLinkResponse
   */
  async listShareLink(request: ListShareLinkRequest): Promise<ListShareLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listShareLinkWithOptions(request, headers, runtime);
  }

  /**
   * Queries tags.
   * 
   * @remarks
   * You can call this operation to query the tags within the specified drive at a time. The top 2,000 tags of the images are returned.
   * 
   * @param request - ListTagsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagsResponse
   */
  async listTagsWithOptions(request: ListTagsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTagsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.imageThumbnailProcess)) {
      body["image_thumbnail_process"] = request.imageThumbnailProcess;
    }

    if (!$dara.isNull(request.videoThumbnailProcess)) {
      body["video_thumbnail_process"] = request.videoThumbnailProcess;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTags",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/list_tags`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListTagsResponse>(await this.execute(params, req, runtime), new ListTagsResponse({}));
  }

  /**
   * Queries tags.
   * 
   * @remarks
   * You can call this operation to query the tags within the specified drive at a time. The top 2,000 tags of the images are returned.
   * 
   * @param request - ListTagsRequest
   * @returns ListTagsResponse
   */
  async listTags(request: ListTagsRequest): Promise<ListTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTagsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the file parts that are uploaded.
   * 
   * @param request - ListUploadedPartsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUploadedPartsResponse
   */
  async listUploadedPartsWithOptions(request: ListUploadedPartsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListUploadedPartsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.partNumberMarker)) {
      body["part_number_marker"] = request.partNumberMarker;
    }

    if (!$dara.isNull(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    if (!$dara.isNull(request.uploadId)) {
      body["upload_id"] = request.uploadId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUploadedParts",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/list_uploaded_parts`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListUploadedPartsResponse>(await this.execute(params, req, runtime), new ListUploadedPartsResponse({}));
  }

  /**
   * Queries the file parts that are uploaded.
   * 
   * @param request - ListUploadedPartsRequest
   * @returns ListUploadedPartsResponse
   */
  async listUploadedParts(request: ListUploadedPartsRequest): Promise<ListUploadedPartsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUploadedPartsWithOptions(request, headers, runtime);
  }

  /**
   * Queries users.
   * 
   * @param request - ListUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserResponse
   */
  async listUserWithOptions(request: ListUserRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUser",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/user/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListUserResponse>(await this.execute(params, req, runtime), new ListUserResponse({}));
  }

  /**
   * Queries users.
   * 
   * @param request - ListUserRequest
   * @returns ListUserResponse
   */
  async listUser(request: ListUserRequest): Promise<ListUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUserWithOptions(request, headers, runtime);
  }

  /**
   * Moves files or folders.
   * 
   * @param request - MoveFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveFileResponse
   */
  async moveFileWithOptions(request: MoveFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<MoveFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkNameMode)) {
      body["check_name_mode"] = request.checkNameMode;
    }

    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.toParentFileId)) {
      body["to_parent_file_id"] = request.toParentFileId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/move`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<MoveFileResponse>(await this.execute(params, req, runtime), new MoveFileResponse({}));
  }

  /**
   * Moves files or folders.
   * 
   * @param request - MoveFileRequest
   * @returns MoveFileResponse
   */
  async moveFile(request: MoveFileRequest): Promise<MoveFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.moveFileWithOptions(request, headers, runtime);
  }

  /**
   * 查询凌霄订单价格
   * 
   * @param request - QueryOrderPriceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryOrderPriceResponse
   */
  async queryOrderPriceWithOptions(request: QueryOrderPriceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<QueryOrderPriceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["instance_id"] = request.instanceId;
    }

    if (!$dara.isNull(request.orderType)) {
      body["order_type"] = request.orderType;
    }

    if (!$dara.isNull(request.package)) {
      body["package"] = request.package;
    }

    if (!$dara.isNull(request.period)) {
      body["period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      body["period_unit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.totalSize)) {
      body["total_size"] = request.totalSize;
    }

    if (!$dara.isNull(request.userCount)) {
      body["user_count"] = request.userCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryOrderPrice",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/domain/query_order_price`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<QueryOrderPriceResponse>(await this.execute(params, req, runtime), new QueryOrderPriceResponse({}));
  }

  /**
   * 查询凌霄订单价格
   * 
   * @param request - QueryOrderPriceRequest
   * @returns QueryOrderPriceResponse
   */
  async queryOrderPrice(request: QueryOrderPriceRequest): Promise<QueryOrderPriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryOrderPriceWithOptions(request, headers, runtime);
  }

  /**
   * 从人脸分组中的移除指定的文件
   * 
   * @param request - RemoveFaceGroupFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveFaceGroupFileResponse
   */
  async removeFaceGroupFileWithOptions(request: RemoveFaceGroupFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RemoveFaceGroupFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.faceGroupId)) {
      body["face_group_id"] = request.faceGroupId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveFaceGroupFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/albums/unassign_facegroup_item`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<RemoveFaceGroupFileResponse>(await this.execute(params, req, runtime), new RemoveFaceGroupFileResponse({}));
  }

  /**
   * 从人脸分组中的移除指定的文件
   * 
   * @param request - RemoveFaceGroupFileRequest
   * @returns RemoveFaceGroupFileResponse
   */
  async removeFaceGroupFile(request: RemoveFaceGroupFileRequest): Promise<RemoveFaceGroupFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeFaceGroupFileWithOptions(request, headers, runtime);
  }

  /**
   * Removes a member from a group.
   * 
   * @param request - RemoveGroupMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveGroupMemberResponse
   */
  async removeGroupMemberWithOptions(request: RemoveGroupMemberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RemoveGroupMemberResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      body["group_id"] = request.groupId;
    }

    if (!$dara.isNull(request.memberId)) {
      body["member_id"] = request.memberId;
    }

    if (!$dara.isNull(request.memberType)) {
      body["member_type"] = request.memberType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveGroupMember",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/group/remove_member`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<RemoveGroupMemberResponse>(await this.execute(params, req, runtime), new RemoveGroupMemberResponse({}));
  }

  /**
   * Removes a member from a group.
   * 
   * @param request - RemoveGroupMemberRequest
   * @returns RemoveGroupMemberResponse
   */
  async removeGroupMember(request: RemoveGroupMemberRequest): Promise<RemoveGroupMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeGroupMemberWithOptions(request, headers, runtime);
  }

  /**
   * 故事移除文件
   * 
   * @param request - RemoveStoryFilesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveStoryFilesResponse
   */
  async removeStoryFilesWithOptions(request: RemoveStoryFilesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RemoveStoryFilesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.files)) {
      body["files"] = request.files;
    }

    if (!$dara.isNull(request.storyId)) {
      body["story_id"] = request.storyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveStoryFiles",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/remove_story_files`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<RemoveStoryFilesResponse>(await this.execute(params, req, runtime), new RemoveStoryFilesResponse({}));
  }

  /**
   * 故事移除文件
   * 
   * @param request - RemoveStoryFilesRequest
   * @returns RemoveStoryFilesResponse
   */
  async removeStoryFiles(request: RemoveStoryFilesRequest): Promise<RemoveStoryFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeStoryFilesWithOptions(request, headers, runtime);
  }

  /**
   * Restores a file or folder from the recycle bin.
   * 
   * @param request - RestoreFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestoreFileResponse
   */
  async restoreFileWithOptions(request: RestoreFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RestoreFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestoreFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/recyclebin/restore`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<RestoreFileResponse>(await this.execute(params, req, runtime), new RestoreFileResponse({}));
  }

  /**
   * Restores a file or folder from the recycle bin.
   * 
   * @param request - RestoreFileRequest
   * @returns RestoreFileResponse
   */
  async restoreFile(request: RestoreFileRequest): Promise<RestoreFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restoreFileWithOptions(request, headers, runtime);
  }

  /**
   * Restores a historical version of a file. You cannot restore the latest version of a file.
   * 
   * @param request - RestoreRevisionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestoreRevisionResponse
   */
  async restoreRevisionWithOptions(request: RestoreRevisionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RestoreRevisionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.revisionId)) {
      body["revision_id"] = request.revisionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestoreRevision",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/revision/restore`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<RestoreRevisionResponse>(await this.execute(params, req, runtime), new RestoreRevisionResponse({}));
  }

  /**
   * Restores a historical version of a file. You cannot restore the latest version of a file.
   * 
   * @param request - RestoreRevisionRequest
   * @returns RestoreRevisionResponse
   */
  async restoreRevision(request: RestoreRevisionRequest): Promise<RestoreRevisionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restoreRevisionWithOptions(request, headers, runtime);
  }

  /**
   * Scans files.
   * 
   * @param request - ScanFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScanFileResponse
   */
  async scanFileWithOptions(request: ScanFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ScanFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ScanFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/scan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ScanFileResponse>(await this.execute(params, req, runtime), new ScanFileResponse({}));
  }

  /**
   * Scans files.
   * 
   * @param request - ScanFileRequest
   * @returns ScanFileResponse
   */
  async scanFile(request: ScanFileRequest): Promise<ScanFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scanFileWithOptions(request, headers, runtime);
  }

  /**
   * Queries location-based groups based on specific locations.
   * 
   * @param request - SearchAddressGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchAddressGroupsResponse
   */
  async searchAddressGroupsWithOptions(request: SearchAddressGroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<SearchAddressGroupsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addressLevel)) {
      body["address_level"] = request.addressLevel;
    }

    if (!$dara.isNull(request.addressNames)) {
      body["address_names"] = request.addressNames;
    }

    if (!$dara.isNull(request.brGeoPoint)) {
      body["br_geo_point"] = request.brGeoPoint;
    }

    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.imageThumbnailProcess)) {
      body["image_thumbnail_process"] = request.imageThumbnailProcess;
    }

    if (!$dara.isNull(request.tlGeoPoint)) {
      body["tl_geo_point"] = request.tlGeoPoint;
    }

    if (!$dara.isNull(request.videoThumbnailProcess)) {
      body["video_thumbnail_process"] = request.videoThumbnailProcess;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchAddressGroups",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/search_address_groups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<SearchAddressGroupsResponse>(await this.execute(params, req, runtime), new SearchAddressGroupsResponse({}));
  }

  /**
   * Queries location-based groups based on specific locations.
   * 
   * @param request - SearchAddressGroupsRequest
   * @returns SearchAddressGroupsResponse
   */
  async searchAddressGroups(request: SearchAddressGroupsRequest): Promise<SearchAddressGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchAddressGroupsWithOptions(request, headers, runtime);
  }

  /**
   * Search domain with specified attributes
   * 
   * @param request - SearchDomainsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchDomainsResponse
   */
  async searchDomainsWithOptions(request: SearchDomainsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<SearchDomainsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.orderBy)) {
      body["order_by"] = request.orderBy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchDomains",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/domain/search`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<SearchDomainsResponse>(await this.execute(params, req, runtime), new SearchDomainsResponse({}));
  }

  /**
   * Search domain with specified attributes
   * 
   * @param request - SearchDomainsRequest
   * @returns SearchDomainsResponse
   */
  async searchDomains(request: SearchDomainsRequest): Promise<SearchDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchDomainsWithOptions(request, headers, runtime);
  }

  /**
   * Queries drives.
   * 
   * @param request - SearchDriveRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchDriveResponse
   */
  async searchDriveWithOptions(request: SearchDriveRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<SearchDriveResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveName)) {
      body["drive_name"] = request.driveName;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!$dara.isNull(request.owner)) {
      body["owner"] = request.owner;
    }

    if (!$dara.isNull(request.ownerType)) {
      body["owner_type"] = request.ownerType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchDrive",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/drive/search`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<SearchDriveResponse>(await this.execute(params, req, runtime), new SearchDriveResponse({}));
  }

  /**
   * Queries drives.
   * 
   * @param request - SearchDriveRequest
   * @returns SearchDriveResponse
   */
  async searchDrive(request: SearchDriveRequest): Promise<SearchDriveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchDriveWithOptions(request, headers, runtime);
  }

  /**
   * Queries files. For more information about best practices, visit https://help.aliyun.com/document_detail/175890.html.
   * 
   * @param request - SearchFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchFileResponse
   */
  async searchFileWithOptions(request: SearchFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<SearchFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!$dara.isNull(request.orderBy)) {
      body["order_by"] = request.orderBy;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    if (!$dara.isNull(request.recursive)) {
      body["recursive"] = request.recursive;
    }

    if (!$dara.isNull(request.returnTotalCount)) {
      body["return_total_count"] = request.returnTotalCount;
    }

    if (!$dara.isNull(request.thumbnailProcesses)) {
      body["thumbnail_processes"] = request.thumbnailProcesses;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/search`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<SearchFileResponse>(await this.execute(params, req, runtime), new SearchFileResponse({}));
  }

  /**
   * Queries files. For more information about best practices, visit https://help.aliyun.com/document_detail/175890.html.
   * 
   * @param request - SearchFileRequest
   * @returns SearchFileResponse
   */
  async searchFile(request: SearchFileRequest): Promise<SearchFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchFileWithOptions(request, headers, runtime);
  }

  /**
   * Queries share URLs.
   * 
   * @param request - SearchShareLinkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchShareLinkResponse
   */
  async searchShareLinkWithOptions(request: SearchShareLinkRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<SearchShareLinkResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.creators)) {
      body["creators"] = request.creators;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!$dara.isNull(request.orderBy)) {
      body["order_by"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      body["order_direction"] = request.orderDirection;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    if (!$dara.isNull(request.returnTotalCount)) {
      body["return_total_count"] = request.returnTotalCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchShareLink",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/share_link/search`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<SearchShareLinkResponse>(await this.execute(params, req, runtime), new SearchShareLinkResponse({}));
  }

  /**
   * Queries share URLs.
   * 
   * @param request - SearchShareLinkRequest
   * @returns SearchShareLinkResponse
   */
  async searchShareLink(request: SearchShareLinkRequest): Promise<SearchShareLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchShareLinkWithOptions(request, headers, runtime);
  }

  /**
   * 获取相似图片聚类结果
   * 
   * @param request - SearchSimilarImageClustersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchSimilarImageClustersResponse
   */
  async searchSimilarImageClustersWithOptions(request: SearchSimilarImageClustersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<SearchSimilarImageClustersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.imageThumbnailProcess)) {
      body["image_thumbnail_process"] = request.imageThumbnailProcess;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!$dara.isNull(request.order)) {
      body["order"] = request.order;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchSimilarImageClusters",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/query_similar_image_clusters`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<SearchSimilarImageClustersResponse>(await this.execute(params, req, runtime), new SearchSimilarImageClustersResponse({}));
  }

  /**
   * 获取相似图片聚类结果
   * 
   * @param request - SearchSimilarImageClustersRequest
   * @returns SearchSimilarImageClustersResponse
   */
  async searchSimilarImageClusters(request: SearchSimilarImageClustersRequest): Promise<SearchSimilarImageClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchSimilarImageClustersWithOptions(request, headers, runtime);
  }

  /**
   * 查询故事列表
   * 
   * @param request - SearchStoriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchStoriesResponse
   */
  async searchStoriesWithOptions(request: SearchStoriesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<SearchStoriesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.coverImageThumbnailProcess)) {
      body["cover_image_thumbnail_process"] = request.coverImageThumbnailProcess;
    }

    if (!$dara.isNull(request.coverVideoThumbnailProcess)) {
      body["cover_video_thumbnail_process"] = request.coverVideoThumbnailProcess;
    }

    if (!$dara.isNull(request.createTimeRange)) {
      body["create_time_range"] = request.createTimeRange;
    }

    if (!$dara.isNull(request.customLabels)) {
      body["custom_labels"] = request.customLabels;
    }

    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.faceGroupIds)) {
      body["face_group_ids"] = request.faceGroupIds;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!$dara.isNull(request.order)) {
      body["order"] = request.order;
    }

    if (!$dara.isNull(request.sort)) {
      body["sort"] = request.sort;
    }

    if (!$dara.isNull(request.storyEndTimeRange)) {
      body["story_end_time_range"] = request.storyEndTimeRange;
    }

    if (!$dara.isNull(request.storyId)) {
      body["story_id"] = request.storyId;
    }

    if (!$dara.isNull(request.storyName)) {
      body["story_name"] = request.storyName;
    }

    if (!$dara.isNull(request.storyStartTimeRange)) {
      body["story_start_time_range"] = request.storyStartTimeRange;
    }

    if (!$dara.isNull(request.storyType)) {
      body["story_type"] = request.storyType;
    }

    if (!$dara.isNull(request.urlExpireSec)) {
      body["url_expire_sec"] = request.urlExpireSec;
    }

    if (!$dara.isNull(request.withEmptyStories)) {
      body["with_empty_stories"] = request.withEmptyStories;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchStories",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/find_stories`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<SearchStoriesResponse>(await this.execute(params, req, runtime), new SearchStoriesResponse({}));
  }

  /**
   * 查询故事列表
   * 
   * @param request - SearchStoriesRequest
   * @returns SearchStoriesResponse
   */
  async searchStories(request: SearchStoriesRequest): Promise<SearchStoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchStoriesWithOptions(request, headers, runtime);
  }

  /**
   * Searches for users.
   * 
   * @param request - SearchUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchUserResponse
   */
  async searchUserWithOptions(request: SearchUserRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<SearchUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.email)) {
      body["email"] = request.email;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!$dara.isNull(request.nickName)) {
      body["nick_name"] = request.nickName;
    }

    if (!$dara.isNull(request.nickNameForFuzzy)) {
      body["nick_name_for_fuzzy"] = request.nickNameForFuzzy;
    }

    if (!$dara.isNull(request.phone)) {
      body["phone"] = request.phone;
    }

    if (!$dara.isNull(request.role)) {
      body["role"] = request.role;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.userName)) {
      body["user_name"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchUser",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/user/search`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<SearchUserResponse>(await this.execute(params, req, runtime), new SearchUserResponse({}));
  }

  /**
   * Searches for users.
   * 
   * @param request - SearchUserRequest
   * @returns SearchUserResponse
   */
  async searchUser(request: SearchUserRequest): Promise<SearchUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchUserWithOptions(request, headers, runtime);
  }

  /**
   * Generates an access token based on Open Authorization (OAuth) 2.0.
   * 
   * @remarks
   * For more information about how to access Drive and Photo Service from a web server application by using OAuth 2.0, visit [OAuth 2.0 For Web Server Applications](https://www.alibabacloud.com/help/zh/pds/drive-and-photo-service-dev/user-guide/oauth-2-0-access-process-for-web-server-applications).
   * For more information about how to access Drive and Photo Service by using a JSON Web Token (JWT) application, visit [Access process for JWT applications](https://www.alibabacloud.com/help/zh/pds/drive-and-photo-service-dev/user-guide/access-process-for-jwt-applications).
   * 
   * @param request - TokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TokenResponse
   */
  async tokenWithOptions(request: TokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<TokenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assertion)) {
      body["assertion"] = request.assertion;
    }

    if (!$dara.isNull(request.clientId)) {
      body["client_id"] = request.clientId;
    }

    if (!$dara.isNull(request.clientSecret)) {
      body["client_secret"] = request.clientSecret;
    }

    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.grantType)) {
      body["grant_type"] = request.grantType;
    }

    if (!$dara.isNull(request.redirectUri)) {
      body["redirect_uri"] = request.redirectUri;
    }

    if (!$dara.isNull(request.refreshToken)) {
      body["refresh_token"] = request.refreshToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Token",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/oauth/token`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<TokenResponse>(await this.execute(params, req, runtime), new TokenResponse({}));
  }

  /**
   * Generates an access token based on Open Authorization (OAuth) 2.0.
   * 
   * @remarks
   * For more information about how to access Drive and Photo Service from a web server application by using OAuth 2.0, visit [OAuth 2.0 For Web Server Applications](https://www.alibabacloud.com/help/zh/pds/drive-and-photo-service-dev/user-guide/oauth-2-0-access-process-for-web-server-applications).
   * For more information about how to access Drive and Photo Service by using a JSON Web Token (JWT) application, visit [Access process for JWT applications](https://www.alibabacloud.com/help/zh/pds/drive-and-photo-service-dev/user-guide/access-process-for-jwt-applications).
   * 
   * @param request - TokenRequest
   * @returns TokenResponse
   */
  async token(request: TokenRequest): Promise<TokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.tokenWithOptions(request, headers, runtime);
  }

  /**
   * Moves a file or folder to the recycle bin.
   * 
   * @param request - TrashFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TrashFileResponse
   */
  async trashFileWithOptions(request: TrashFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<TrashFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TrashFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/recyclebin/trash`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<TrashFileResponse>(await this.execute(params, req, runtime), new TrashFileResponse({}));
  }

  /**
   * Moves a file or folder to the recycle bin.
   * 
   * @param request - TrashFileRequest
   * @returns TrashFileResponse
   */
  async trashFile(request: TrashFileRequest): Promise<TrashFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.trashFileWithOptions(request, headers, runtime);
  }

  /**
   * Unlink Account Binding
   * 
   * @param request - UnLinkAccountRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnLinkAccountResponse
   */
  async unLinkAccountWithOptions(request: UnLinkAccountRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UnLinkAccountResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.extra)) {
      body["extra"] = request.extra;
    }

    if (!$dara.isNull(request.identity)) {
      body["identity"] = request.identity;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnLinkAccount",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/account/unlink`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UnLinkAccountResponse>(await this.execute(params, req, runtime), new UnLinkAccountResponse({}));
  }

  /**
   * Unlink Account Binding
   * 
   * @param request - UnLinkAccountRequest
   * @returns UnLinkAccountResponse
   */
  async unLinkAccount(request: UnLinkAccountRequest): Promise<UnLinkAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unLinkAccountWithOptions(request, headers, runtime);
  }

  /**
   * Update domain information.
   * 
   * @param request - UpdateDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDomainResponse
   */
  async updateDomainWithOptions(request: UpdateDomainRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateDomainResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.domainId)) {
      body["domain_id"] = request.domainId;
    }

    if (!$dara.isNull(request.domainName)) {
      body["domain_name"] = request.domainName;
    }

    if (!$dara.isNull(request.initDriveEnable)) {
      body["init_drive_enable"] = request.initDriveEnable;
    }

    if (!$dara.isNull(request.initDriveSize)) {
      body["init_drive_size"] = request.initDriveSize;
    }

    if (!$dara.isNull(request.publishedAppAccessStrategy)) {
      body["published_app_access_strategy"] = request.publishedAppAccessStrategy;
    }

    if (!$dara.isNull(request.sizeQuota)) {
      body["size_quota"] = request.sizeQuota;
    }

    if (!$dara.isNull(request.userCountQuota)) {
      body["user_count_quota"] = request.userCountQuota;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDomain",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/domain/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateDomainResponse>(await this.execute(params, req, runtime), new UpdateDomainResponse({}));
  }

  /**
   * Update domain information.
   * 
   * @param request - UpdateDomainRequest
   * @returns UpdateDomainResponse
   */
  async updateDomain(request: UpdateDomainRequest): Promise<UpdateDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDomainWithOptions(request, headers, runtime);
  }

  /**
   * Modifies a drive.
   * 
   * @param request - UpdateDriveRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDriveResponse
   */
  async updateDriveWithOptions(request: UpdateDriveRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateDriveResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.driveName)) {
      body["drive_name"] = request.driveName;
    }

    if (!$dara.isNull(request.owner)) {
      body["owner"] = request.owner;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.totalSize)) {
      body["total_size"] = request.totalSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDrive",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/drive/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateDriveResponse>(await this.execute(params, req, runtime), new UpdateDriveResponse({}));
  }

  /**
   * Modifies a drive.
   * 
   * @param request - UpdateDriveRequest
   * @returns UpdateDriveResponse
   */
  async updateDrive(request: UpdateDriveRequest): Promise<UpdateDriveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDriveWithOptions(request, headers, runtime);
  }

  /**
   * Updates a face-based group.
   * 
   * @param request - UpdateFacegroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFacegroupResponse
   */
  async updateFacegroupWithOptions(request: UpdateFacegroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateFacegroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.groupCoverFaceId)) {
      body["group_cover_face_id"] = request.groupCoverFaceId;
    }

    if (!$dara.isNull(request.groupId)) {
      body["group_id"] = request.groupId;
    }

    if (!$dara.isNull(request.groupName)) {
      body["group_name"] = request.groupName;
    }

    if (!$dara.isNull(request.remarks)) {
      body["remarks"] = request.remarks;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFacegroup",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/update_facegroup_info`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateFacegroupResponse>(await this.execute(params, req, runtime), new UpdateFacegroupResponse({}));
  }

  /**
   * Updates a face-based group.
   * 
   * @param request - UpdateFacegroupRequest
   * @returns UpdateFacegroupResponse
   */
  async updateFacegroup(request: UpdateFacegroupRequest): Promise<UpdateFacegroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFacegroupWithOptions(request, headers, runtime);
  }

  /**
   * Modifies the information about a file instead of the file data.
   * 
   * @param request - UpdateFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFileResponse
   */
  async updateFileWithOptions(request: UpdateFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkNameMode)) {
      body["check_name_mode"] = request.checkNameMode;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.hidden)) {
      body["hidden"] = request.hidden;
    }

    if (!$dara.isNull(request.labels)) {
      body["labels"] = request.labels;
    }

    if (!$dara.isNull(request.localModifiedAt)) {
      body["local_modified_at"] = request.localModifiedAt;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.starred)) {
      body["starred"] = request.starred;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateFileResponse>(await this.execute(params, req, runtime), new UpdateFileResponse({}));
  }

  /**
   * Modifies the information about a file instead of the file data.
   * 
   * @param request - UpdateFileRequest
   * @returns UpdateFileResponse
   */
  async updateFile(request: UpdateFileRequest): Promise<UpdateFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFileWithOptions(request, headers, runtime);
  }

  /**
   * Modifies the information about a group.
   * 
   * @param request - UpdateGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGroupResponse
   */
  async updateGroupWithOptions(request: UpdateGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.groupId)) {
      body["group_id"] = request.groupId;
    }

    if (!$dara.isNull(request.groupName)) {
      body["group_name"] = request.groupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGroup",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/group/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateGroupResponse>(await this.execute(params, req, runtime), new UpdateGroupResponse({}));
  }

  /**
   * Modifies the information about a group.
   * 
   * @param request - UpdateGroupRequest
   * @returns UpdateGroupResponse
   */
  async updateGroup(request: UpdateGroupRequest): Promise<UpdateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateGroupWithOptions(request, headers, runtime);
  }

  /**
   * Updates the mapping between an entity and a benefit package. You can call this operation to associate a benefit package with a user.
   * 
   * @param request - UpdateIdentityToBenefitPkgMappingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIdentityToBenefitPkgMappingResponse
   */
  async updateIdentityToBenefitPkgMappingWithOptions(request: UpdateIdentityToBenefitPkgMappingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateIdentityToBenefitPkgMappingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.amount)) {
      body["amount"] = request.amount;
    }

    if (!$dara.isNull(request.benefitPkgId)) {
      body["benefit_pkg_id"] = request.benefitPkgId;
    }

    if (!$dara.isNull(request.expireTime)) {
      body["expire_time"] = request.expireTime;
    }

    if (!$dara.isNull(request.identityId)) {
      body["identity_id"] = request.identityId;
    }

    if (!$dara.isNull(request.identityType)) {
      body["identity_type"] = request.identityType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIdentityToBenefitPkgMapping",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/benefit/identity_to_benefit_pkg_mapping/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateIdentityToBenefitPkgMappingResponse>(await this.execute(params, req, runtime), new UpdateIdentityToBenefitPkgMappingResponse({}));
  }

  /**
   * Updates the mapping between an entity and a benefit package. You can call this operation to associate a benefit package with a user.
   * 
   * @param request - UpdateIdentityToBenefitPkgMappingRequest
   * @returns UpdateIdentityToBenefitPkgMappingResponse
   */
  async updateIdentityToBenefitPkgMapping(request: UpdateIdentityToBenefitPkgMappingRequest): Promise<UpdateIdentityToBenefitPkgMappingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateIdentityToBenefitPkgMappingWithOptions(request, headers, runtime);
  }

  /**
   * Updates the version information. You can call this operation to permanently retain a version or modify the description of a version. You can permanently retain up to 50 versions of a file.
   * 
   * @param request - UpdateRevisionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRevisionResponse
   */
  async updateRevisionWithOptions(request: UpdateRevisionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateRevisionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.keepForever)) {
      body["keep_forever"] = request.keepForever;
    }

    if (!$dara.isNull(request.revisionDescription)) {
      body["revision_description"] = request.revisionDescription;
    }

    if (!$dara.isNull(request.revisionId)) {
      body["revision_id"] = request.revisionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRevision",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/revision/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateRevisionResponse>(await this.execute(params, req, runtime), new UpdateRevisionResponse({}));
  }

  /**
   * Updates the version information. You can call this operation to permanently retain a version or modify the description of a version. You can permanently retain up to 50 versions of a file.
   * 
   * @param request - UpdateRevisionRequest
   * @returns UpdateRevisionResponse
   */
  async updateRevision(request: UpdateRevisionRequest): Promise<UpdateRevisionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRevisionWithOptions(request, headers, runtime);
  }

  /**
   * Modifies a share link.
   * 
   * @param request - UpdateShareLinkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateShareLinkResponse
   */
  async updateShareLinkWithOptions(request: UpdateShareLinkRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateShareLinkResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.disableDownload)) {
      body["disable_download"] = request.disableDownload;
    }

    if (!$dara.isNull(request.disablePreview)) {
      body["disable_preview"] = request.disablePreview;
    }

    if (!$dara.isNull(request.disableSave)) {
      body["disable_save"] = request.disableSave;
    }

    if (!$dara.isNull(request.downloadCount)) {
      body["download_count"] = request.downloadCount;
    }

    if (!$dara.isNull(request.downloadLimit)) {
      body["download_limit"] = request.downloadLimit;
    }

    if (!$dara.isNull(request.expiration)) {
      body["expiration"] = request.expiration;
    }

    if (!$dara.isNull(request.officeEditable)) {
      body["office_editable"] = request.officeEditable;
    }

    if (!$dara.isNull(request.previewCount)) {
      body["preview_count"] = request.previewCount;
    }

    if (!$dara.isNull(request.previewLimit)) {
      body["preview_limit"] = request.previewLimit;
    }

    if (!$dara.isNull(request.reportCount)) {
      body["report_count"] = request.reportCount;
    }

    if (!$dara.isNull(request.saveCount)) {
      body["save_count"] = request.saveCount;
    }

    if (!$dara.isNull(request.saveLimit)) {
      body["save_limit"] = request.saveLimit;
    }

    if (!$dara.isNull(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    if (!$dara.isNull(request.shareName)) {
      body["share_name"] = request.shareName;
    }

    if (!$dara.isNull(request.sharePwd)) {
      body["share_pwd"] = request.sharePwd;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.videoPreviewCount)) {
      body["video_preview_count"] = request.videoPreviewCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateShareLink",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/share_link/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateShareLinkResponse>(await this.execute(params, req, runtime), new UpdateShareLinkResponse({}));
  }

  /**
   * Modifies a share link.
   * 
   * @param request - UpdateShareLinkRequest
   * @returns UpdateShareLinkResponse
   */
  async updateShareLink(request: UpdateShareLinkRequest): Promise<UpdateShareLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateShareLinkWithOptions(request, headers, runtime);
  }

  /**
   * 更新故事
   * 
   * @param request - UpdateStoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateStoryResponse
   */
  async updateStoryWithOptions(request: UpdateStoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateStoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cover)) {
      body["cover"] = request.cover;
    }

    if (!$dara.isNull(request.customLabels)) {
      body["custom_labels"] = request.customLabels;
    }

    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.storyId)) {
      body["story_id"] = request.storyId;
    }

    if (!$dara.isNull(request.storyName)) {
      body["story_name"] = request.storyName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateStory",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/update_story`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateStoryResponse>(await this.execute(params, req, runtime), new UpdateStoryResponse({}));
  }

  /**
   * 更新故事
   * 
   * @param request - UpdateStoryRequest
   * @returns UpdateStoryResponse
   */
  async updateStory(request: UpdateStoryRequest): Promise<UpdateStoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateStoryWithOptions(request, headers, runtime);
  }

  /**
   * Modifies the information about a user.
   * 
   * @param request - UpdateUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserResponse
   */
  async updateUserWithOptions(request: UpdateUserRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.avatar)) {
      body["avatar"] = request.avatar;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.email)) {
      body["email"] = request.email;
    }

    if (!$dara.isNull(request.groupInfoList)) {
      body["group_info_list"] = request.groupInfoList;
    }

    if (!$dara.isNull(request.nickName)) {
      body["nick_name"] = request.nickName;
    }

    if (!$dara.isNull(request.phone)) {
      body["phone"] = request.phone;
    }

    if (!$dara.isNull(request.role)) {
      body["role"] = request.role;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.userData)) {
      body["user_data"] = request.userData;
    }

    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUser",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/user/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateUserResponse>(await this.execute(params, req, runtime), new UpdateUserResponse({}));
  }

  /**
   * Modifies the information about a user.
   * 
   * @param request - UpdateUserRequest
   * @returns UpdateUserResponse
   */
  async updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateUserWithOptions(request, headers, runtime);
  }

  /**
   * 获取视频的DRM License
   * 
   * @param request - VideoDRMLicenseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VideoDRMLicenseResponse
   */
  async videoDRMLicenseWithOptions(request: VideoDRMLicenseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<VideoDRMLicenseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.drmType)) {
      body["drmType"] = request.drmType;
    }

    if (!$dara.isNull(request.licenseRequest)) {
      body["licenseRequest"] = request.licenseRequest;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "VideoDRMLicense",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/video_drm_license`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<VideoDRMLicenseResponse>(await this.execute(params, req, runtime), new VideoDRMLicenseResponse({}));
  }

  /**
   * 获取视频的DRM License
   * 
   * @param request - VideoDRMLicenseRequest
   * @returns VideoDRMLicenseResponse
   */
  async videoDRMLicense(request: VideoDRMLicenseRequest): Promise<VideoDRMLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.videoDRMLicenseWithOptions(request, headers, runtime);
  }

}
