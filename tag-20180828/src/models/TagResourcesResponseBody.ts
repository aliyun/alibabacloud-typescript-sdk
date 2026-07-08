// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesResponseBodyFailedResourcesFailedResourceResult extends $dara.Model {
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBodyFailedResourcesFailedResource extends $dara.Model {
  resourceARN?: string;
  result?: TagResourcesResponseBodyFailedResourcesFailedResourceResult;
  static names(): { [key: string]: string } {
    return {
      resourceARN: 'ResourceARN',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceARN: 'string',
      result: TagResourcesResponseBodyFailedResourcesFailedResourceResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBodyFailedResources extends $dara.Model {
  failedResource?: TagResourcesResponseBodyFailedResourcesFailedResource[];
  static names(): { [key: string]: string } {
    return {
      failedResource: 'FailedResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResource: { 'type': 'array', 'itemType': TagResourcesResponseBodyFailedResourcesFailedResource },
    };
  }

  validate() {
    if(Array.isArray(this.failedResource)) {
      $dara.Model.validateArray(this.failedResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $dara.Model {
  failedResources?: TagResourcesResponseBodyFailedResources;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 72086426-9F8C-4A60-852B-864048FD1199
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failedResources: 'FailedResources',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResources: TagResourcesResponseBodyFailedResources,
      requestId: 'string',
    };
  }

  validate() {
    if(this.failedResources && typeof (this.failedResources as any).validate === 'function') {
      (this.failedResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

