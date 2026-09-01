// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNodeParamTagsResponseBodyParamReferredPaths extends $dara.Model {
  /**
   * @remarks
   * The name of the ancestor node.
   * 
   * @example
   * DataFormat_1
   */
  paramName?: string;
  /**
   * @remarks
   * An array of paths.
   */
  referredPath?: string[];
  static names(): { [key: string]: string } {
    return {
      paramName: 'ParamName',
      referredPath: 'ReferredPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramName: 'string',
      referredPath: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.referredPath)) {
      $dara.Model.validateArray(this.referredPath);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeParamTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The recommended path configurations.
   */
  paramReferredPaths?: DescribeNodeParamTagsResponseBodyParamReferredPaths[];
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates this unique ID for each request. Use this ID to troubleshoot issues.
   * 
   * @example
   * 6BE94351-712A-505D-A40A-BC77CC8254A9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      paramReferredPaths: 'ParamReferredPaths',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramReferredPaths: { 'type': 'array', 'itemType': DescribeNodeParamTagsResponseBodyParamReferredPaths },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.paramReferredPaths)) {
      $dara.Model.validateArray(this.paramReferredPaths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

