// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageObjectDetectionRequestImage extends $dara.Model {
  content?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageObjectDetectionRequest extends $dara.Model {
  image?: GetImageObjectDetectionRequestImage;
  options?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      image: 'image',
      options: 'options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: GetImageObjectDetectionRequestImage,
      options: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.image && typeof (this.image as any).validate === 'function') {
      (this.image as any).validate();
    }
    if(this.options) {
      $dara.Model.validateMap(this.options);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

