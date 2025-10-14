// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SelectImageTaskResponseBodyImageInfos extends $dara.Model {
  /**
   * @example
   * www.ali.com
   */
  customImageUrl?: string;
  /**
   * @example
   * 1
   */
  gmtCreate?: string;
  /**
   * @example
   * 500
   */
  imageH?: string;
  /**
   * @example
   * 500
   */
  imageW?: string;
  static names(): { [key: string]: string } {
    return {
      customImageUrl: 'customImageUrl',
      gmtCreate: 'gmtCreate',
      imageH: 'imageH',
      imageW: 'imageW',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customImageUrl: 'string',
      gmtCreate: 'string',
      imageH: 'string',
      imageW: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectImageTaskResponseBody extends $dara.Model {
  /**
   * @example
   * Failed to proxy flink ui request, message: An error occurred: Invalid UUID string: jobsn
   */
  errorMessage?: string;
  /**
   * @example
   * 1
   */
  failed?: string;
  /**
   * @example
   * PLATFORM
   */
  generationSource?: string;
  /**
   * @example
   * 1
   */
  gmtCreate?: string;
  imageInfos?: SelectImageTaskResponseBodyImageInfos[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0E8B1746-AE35-5C4B-A3A8-345B274AE32C
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  scene?: string;
  /**
   * @example
   * Successed
   */
  status?: string;
  /**
   * @example
   * 1
   */
  subtaskProcessing?: string;
  /**
   * @example
   * 1
   */
  success?: string;
  /**
   * @example
   * 10
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      failed: 'failed',
      generationSource: 'generationSource',
      gmtCreate: 'gmtCreate',
      imageInfos: 'imageInfos',
      requestId: 'requestId',
      scene: 'scene',
      status: 'status',
      subtaskProcessing: 'subtaskProcessing',
      success: 'success',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      failed: 'string',
      generationSource: 'string',
      gmtCreate: 'string',
      imageInfos: { 'type': 'array', 'itemType': SelectImageTaskResponseBodyImageInfos },
      requestId: 'string',
      scene: 'string',
      status: 'string',
      subtaskProcessing: 'string',
      success: 'string',
      total: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageInfos)) {
      $dara.Model.validateArray(this.imageInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

