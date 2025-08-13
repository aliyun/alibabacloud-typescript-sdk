// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesResponseBodyFailedResourcesFailedResourceResult extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidResourceId.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified ResourceIds are not found in our records.
   */
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
  /**
   * @remarks
   * The ARN of the resource.
   * 
   * @example
   * arn:acs:ecs:cn-hangzhou:123456789****:instance/i-xxxxxxxxxx1
   */
  resourceARN?: string;
  /**
   * @remarks
   * The information about the error.
   */
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
  /**
   * @remarks
   * The information about the resources from which tags fail to be removed.
   * 
   * > 
   * 
   * *   If tags are removed from all resources, the value of FailedResources is empty.
   * 
   * *   If tags fail to be removed from some or all resources, the value of FailedResources contains the detailed information about the resources.
   */
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

