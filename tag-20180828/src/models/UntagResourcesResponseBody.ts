// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesResponseBodyFailedResourcesFailedResourceResult extends $dara.Model {
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

export class UntagResourcesResponseBodyFailedResourcesFailedResource extends $dara.Model {
  resourceARN?: string;
  result?: UntagResourcesResponseBodyFailedResourcesFailedResourceResult;
  static names(): { [key: string]: string } {
    return {
      resourceARN: 'ResourceARN',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceARN: 'string',
      result: UntagResourcesResponseBodyFailedResourcesFailedResourceResult,
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

export class UntagResourcesResponseBodyFailedResources extends $dara.Model {
  failedResource?: UntagResourcesResponseBodyFailedResourcesFailedResource[];
  static names(): { [key: string]: string } {
    return {
      failedResource: 'FailedResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResource: { 'type': 'array', 'itemType': UntagResourcesResponseBodyFailedResourcesFailedResource },
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

export class UntagResourcesResponseBody extends $dara.Model {
  failedResources?: UntagResourcesResponseBodyFailedResources;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 43D12436-B10F-4469-8136-FD1C5D2B2083
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
      failedResources: UntagResourcesResponseBodyFailedResources,
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

