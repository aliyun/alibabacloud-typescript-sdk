// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SelectImageTaskResponseBodyImageInfos extends $dara.Model {
  customImageUrl?: string;
  gmtCreate?: string;
  imageH?: string;
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
  errorMessage?: string;
  failed?: string;
  generationSource?: string;
  gmtCreate?: string;
  imageInfos?: SelectImageTaskResponseBodyImageInfos[];
  requestId?: string;
  scene?: string;
  status?: string;
  subtaskProcessing?: string;
  success?: string;
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

