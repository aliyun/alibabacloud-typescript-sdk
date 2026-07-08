// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsyncUploadVideoRequestReferenceVideo extends $dara.Model {
  /**
   * @remarks
   * Additional information for video understanding.
   * 
   * @example
   * 手机cpu采用3纳米技术
   */
  videoExtraInfo?: string;
  /**
   * @remarks
   * The name of the reference video.
   * 
   * @example
   * refvideo.mp4
   */
  videoName?: string;
  /**
   * @remarks
   * The URL of the video.
   * 
   * @example
   * http://viapi-customer-pop.oss-cn-shanghai.aliyuncs.com/d71e_208334498220521996_51298e0a909d457693166eb883768c7a
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      videoExtraInfo: 'VideoExtraInfo',
      videoName: 'VideoName',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoExtraInfo: 'string',
      videoName: 'string',
      videoUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsyncUploadVideoRequestSourceVideos extends $dara.Model {
  /**
   * @remarks
   * Additional description of the video.
   * 
   * @example
   * 视频中有一个房子
   */
  videoExtraInfo?: string;
  /**
   * @remarks
   * The name of the video.
   * 
   * This parameter is required.
   * 
   * @example
   * 123.mp4
   */
  videoName?: string;
  /**
   * @remarks
   * The URL of the video.
   * 
   * This parameter is required.
   * 
   * @example
   * http://123.mp4
   * 目前该接口只进行视频理解额和分析，并没有对文件进行转存。请保证视频地址在任务执行期间有效。
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      videoExtraInfo: 'VideoExtraInfo',
      videoName: 'VideoName',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoExtraInfo: 'string',
      videoName: 'string',
      videoUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsyncUploadVideoRequestVideoRolesRoleUrls extends $dara.Model {
  /**
   * @remarks
   * The file name of the role\\"s facial image.
   * 
   * @example
   * 王小明.jpeg
   */
  roleFileName?: string;
  /**
   * @remarks
   * The public URL of the role\\"s facial image.
   * 
   * @example
   * http://xxx/xxx.jpeg
   */
  roleFileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      roleFileName: 'RoleFileName',
      roleFileUrl: 'RoleFileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleFileName: 'string',
      roleFileUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsyncUploadVideoRequestVideoRoles extends $dara.Model {
  /**
   * @remarks
   * Information about the role.
   * 
   * @example
   * 李晓明是一位警察
   */
  roleInfo?: string;
  /**
   * @remarks
   * The name of the role.
   * 
   * @example
   * 李晓明
   */
  roleName?: string;
  /**
   * @remarks
   * The URLs of the role photos.
   */
  roleUrls?: AsyncUploadVideoRequestVideoRolesRoleUrls[];
  static names(): { [key: string]: string } {
    return {
      roleInfo: 'RoleInfo',
      roleName: 'RoleName',
      roleUrls: 'RoleUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleInfo: 'string',
      roleName: 'string',
      roleUrls: { 'type': 'array', 'itemType': AsyncUploadVideoRequestVideoRolesRoleUrls },
    };
  }

  validate() {
    if(Array.isArray(this.roleUrls)) {
      $dara.Model.validateArray(this.roleUrls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsyncUploadVideoRequest extends $dara.Model {
  /**
   * @remarks
   * Shot segmentation threshold. A smaller value increases sensitivity. Valid range is 1 to 10. Default value is 3.
   * 
   * @example
   * 3.0
   */
  adaptiveThreshold?: number;
  /**
   * @remarks
   * The prompt for video understanding.
   * 
   * @example
   * 重点理解视频中的风景信息
   */
  anlysisPrompt?: string;
  /**
   * @remarks
   * The similarity threshold for character recognition.
   * 
   * @example
   * 0.7
   */
  faceIdentitySimilarityMinScore?: number;
  /**
   * @remarks
   * Information about the reference video.
   */
  referenceVideo?: AsyncUploadVideoRequestReferenceVideo;
  /**
   * @remarks
   * Removes captions from the material.
   */
  removeSubtitle?: boolean;
  /**
   * @remarks
   * The structure of the video editing materials.
   * 
   * This parameter is required.
   */
  sourceVideos?: AsyncUploadVideoRequestSourceVideos[];
  /**
   * @remarks
   * The time interval for video understanding shots.
   * 
   * @example
   * 默认1
   */
  splitInterval?: number;
  /**
   * @remarks
   * Job name
   * 
   * @example
   * task001
   */
  taskName?: string;
  /**
   * @remarks
   * Task Type
   * 
   * @example
   * type001
   */
  taskType?: string;
  /**
   * @remarks
   * Face information of the roles.
   */
  videoRoles?: AsyncUploadVideoRequestVideoRoles[];
  /**
   * @remarks
   * The number of frames sampled from a single shot for character matching.
   * 
   * @example
   * 2
   */
  videoShotFaceIdentityCount?: number;
  /**
   * @remarks
   * [The ID of the Alibaba Cloud Model Studio workspace.](https://help.aliyun.com/document_detail/2782167.html)
   * 
   * This parameter is required.
   * 
   * @example
   * llm-xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      adaptiveThreshold: 'AdaptiveThreshold',
      anlysisPrompt: 'AnlysisPrompt',
      faceIdentitySimilarityMinScore: 'FaceIdentitySimilarityMinScore',
      referenceVideo: 'ReferenceVideo',
      removeSubtitle: 'RemoveSubtitle',
      sourceVideos: 'SourceVideos',
      splitInterval: 'SplitInterval',
      taskName: 'TaskName',
      taskType: 'TaskType',
      videoRoles: 'VideoRoles',
      videoShotFaceIdentityCount: 'VideoShotFaceIdentityCount',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptiveThreshold: 'number',
      anlysisPrompt: 'string',
      faceIdentitySimilarityMinScore: 'number',
      referenceVideo: AsyncUploadVideoRequestReferenceVideo,
      removeSubtitle: 'boolean',
      sourceVideos: { 'type': 'array', 'itemType': AsyncUploadVideoRequestSourceVideos },
      splitInterval: 'number',
      taskName: 'string',
      taskType: 'string',
      videoRoles: { 'type': 'array', 'itemType': AsyncUploadVideoRequestVideoRoles },
      videoShotFaceIdentityCount: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.referenceVideo && typeof (this.referenceVideo as any).validate === 'function') {
      (this.referenceVideo as any).validate();
    }
    if(Array.isArray(this.sourceVideos)) {
      $dara.Model.validateArray(this.sourceVideos);
    }
    if(Array.isArray(this.videoRoles)) {
      $dara.Model.validateArray(this.videoRoles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

