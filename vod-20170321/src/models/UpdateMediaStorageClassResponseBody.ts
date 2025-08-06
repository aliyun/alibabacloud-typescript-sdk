// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMediaStorageClassResponseBodyForbiddenListMediaForbiddenReasonDTO extends $dara.Model {
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * 19e231ee6e3e417fbf2e92ec2680****
   */
  mediaId?: string;
  /**
   * @remarks
   * The reason for the failure.
   * 
   * @example
   * TargetStorageClassInconsistent
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaStorageClassResponseBodyForbiddenList extends $dara.Model {
  mediaForbiddenReasonDTO?: UpdateMediaStorageClassResponseBodyForbiddenListMediaForbiddenReasonDTO[];
  static names(): { [key: string]: string } {
    return {
      mediaForbiddenReasonDTO: 'MediaForbiddenReasonDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaForbiddenReasonDTO: { 'type': 'array', 'itemType': UpdateMediaStorageClassResponseBodyForbiddenListMediaForbiddenReasonDTO },
    };
  }

  validate() {
    if(Array.isArray(this.mediaForbiddenReasonDTO)) {
      $dara.Model.validateArray(this.mediaForbiddenReasonDTO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaStorageClassResponseBodyIgnoredList extends $dara.Model {
  mediaId?: string[];
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.mediaId)) {
      $dara.Model.validateArray(this.mediaId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaStorageClassResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the media assets that failed to be processed.
   */
  forbiddenList?: UpdateMediaStorageClassResponseBodyForbiddenList;
  /**
   * @remarks
   * The IDs of the media assets that failed to be obtained.
   */
  ignoredList?: UpdateMediaStorageClassResponseBodyIgnoredList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 30FA0B7C-3A81-5449-93CD-ACA149E6****
   */
  requestId?: string;
  /**
   * @remarks
   * The state of the task. Valid values:
   * 
   * *   **Processing**
   * *   **Failed**
   * 
   * @example
   * Processing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      forbiddenList: 'ForbiddenList',
      ignoredList: 'IgnoredList',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forbiddenList: UpdateMediaStorageClassResponseBodyForbiddenList,
      ignoredList: UpdateMediaStorageClassResponseBodyIgnoredList,
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.forbiddenList && typeof (this.forbiddenList as any).validate === 'function') {
      (this.forbiddenList as any).validate();
    }
    if(this.ignoredList && typeof (this.ignoredList as any).validate === 'function') {
      (this.ignoredList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

