// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsyncUploadVideoRequestReferenceVideo extends $dara.Model {
  videoExtraInfo?: string;
  videoName?: string;
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
  videoExtraInfo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123.mp4
   */
  videoName?: string;
  /**
   * @remarks
   * This parameter is required.
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
   * @example
   * 王小明.jpeg
   */
  roleFileName?: string;
  /**
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
   * @example
   * 李晓明是一位警察
   */
  roleInfo?: string;
  /**
   * @example
   * 李晓明
   */
  roleName?: string;
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
  anlysisPrompt?: string;
  /**
   * @example
   * 0.7
   */
  faceIdentitySimilarityMinScore?: number;
  referenceVideo?: AsyncUploadVideoRequestReferenceVideo;
  removeSubtitle?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  sourceVideos?: AsyncUploadVideoRequestSourceVideos[];
  splitInterval?: number;
  videoRoles?: AsyncUploadVideoRequestVideoRoles[];
  /**
   * @example
   * 2
   */
  videoShotFaceIdentityCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      anlysisPrompt: 'AnlysisPrompt',
      faceIdentitySimilarityMinScore: 'FaceIdentitySimilarityMinScore',
      referenceVideo: 'ReferenceVideo',
      removeSubtitle: 'RemoveSubtitle',
      sourceVideos: 'SourceVideos',
      splitInterval: 'SplitInterval',
      videoRoles: 'VideoRoles',
      videoShotFaceIdentityCount: 'VideoShotFaceIdentityCount',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anlysisPrompt: 'string',
      faceIdentitySimilarityMinScore: 'number',
      referenceVideo: AsyncUploadVideoRequestReferenceVideo,
      removeSubtitle: 'boolean',
      sourceVideos: { 'type': 'array', 'itemType': AsyncUploadVideoRequestSourceVideos },
      splitInterval: 'number',
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

