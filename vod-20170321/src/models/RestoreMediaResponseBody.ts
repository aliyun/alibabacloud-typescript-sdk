// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreMediaResponseBodyForbiddenListMediaForbiddenReasonDTO extends $dara.Model {
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * fa10ee70898671edb99f6eb3690d****
   */
  mediaId?: string;
  /**
   * @remarks
   * The reason for the failure.
   * 
   * @example
   * Forbidden.RestoreMedia
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

export class RestoreMediaResponseBodyForbiddenList extends $dara.Model {
  mediaForbiddenReasonDTO?: RestoreMediaResponseBodyForbiddenListMediaForbiddenReasonDTO[];
  static names(): { [key: string]: string } {
    return {
      mediaForbiddenReasonDTO: 'MediaForbiddenReasonDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaForbiddenReasonDTO: { 'type': 'array', 'itemType': RestoreMediaResponseBodyForbiddenListMediaForbiddenReasonDTO },
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

export class RestoreMediaResponseBodyIgnoredList extends $dara.Model {
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

export class RestoreMediaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the media asset that failed to be processed.
   */
  forbiddenList?: RestoreMediaResponseBodyForbiddenList;
  /**
   * @remarks
   * The IDs of the media assets that failed to be obtained.
   */
  ignoredList?: RestoreMediaResponseBodyIgnoredList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8E70E3F8-E2EE-47BC-4677-379D6F28****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      forbiddenList: 'ForbiddenList',
      ignoredList: 'IgnoredList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forbiddenList: RestoreMediaResponseBodyForbiddenList,
      ignoredList: RestoreMediaResponseBodyIgnoredList,
      requestId: 'string',
      success: 'boolean',
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

