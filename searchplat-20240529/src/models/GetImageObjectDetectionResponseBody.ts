// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageObjectDetectionResponseBodyResultObjectsLocation extends $dara.Model {
  x?: number;
  y?: number;
  height?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
      height: 'height',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
      height: 'number',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageObjectDetectionResponseBodyResultObjects extends $dara.Model {
  confidence?: string;
  location?: GetImageObjectDetectionResponseBodyResultObjectsLocation;
  static names(): { [key: string]: string } {
    return {
      confidence: 'confidence',
      location: 'location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'string',
      location: GetImageObjectDetectionResponseBodyResultObjectsLocation,
    };
  }

  validate() {
    if(this.location && typeof (this.location as any).validate === 'function') {
      (this.location as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageObjectDetectionResponseBodyResult extends $dara.Model {
  objects?: GetImageObjectDetectionResponseBodyResultObjects[];
  static names(): { [key: string]: string } {
    return {
      objects: 'objects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objects: { 'type': 'array', 'itemType': GetImageObjectDetectionResponseBodyResultObjects },
    };
  }

  validate() {
    if(Array.isArray(this.objects)) {
      $dara.Model.validateArray(this.objects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageObjectDetectionResponseBodyUsage extends $dara.Model {
  image?: number;
  static names(): { [key: string]: string } {
    return {
      image: 'image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageObjectDetectionResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: GetImageObjectDetectionResponseBodyResult;
  usage?: GetImageObjectDetectionResponseBodyUsage;
  static names(): { [key: string]: string } {
    return {
      latency: 'latency',
      requestId: 'request_id',
      result: 'result',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latency: 'number',
      requestId: 'string',
      result: GetImageObjectDetectionResponseBodyResult,
      usage: GetImageObjectDetectionResponseBodyUsage,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

