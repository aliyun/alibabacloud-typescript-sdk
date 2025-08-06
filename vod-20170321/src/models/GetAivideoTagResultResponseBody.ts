// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAIVideoTagResultResponseBodyVideoTagResultCategory extends $dara.Model {
  /**
   * @remarks
   * The tag string.
   * 
   * @example
   * Retouching
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIVideoTagResultResponseBodyVideoTagResultKeyword extends $dara.Model {
  /**
   * @remarks
   * The tag string.
   * 
   * @example
   * Cushion
   */
  tag?: string;
  /**
   * @remarks
   * The points in time when the tags are displayed. Unit: milliseconds.
   */
  times?: string[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: 'string',
      times: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.times)) {
      $dara.Model.validateArray(this.times);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIVideoTagResultResponseBodyVideoTagResultLocation extends $dara.Model {
  /**
   * @remarks
   * The tag string.
   * 
   * @example
   * Asia
   */
  tag?: string;
  /**
   * @remarks
   * The points in time when the tags are displayed. Unit: milliseconds.
   */
  times?: string[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: 'string',
      times: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.times)) {
      $dara.Model.validateArray(this.times);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIVideoTagResultResponseBodyVideoTagResultPerson extends $dara.Model {
  /**
   * @remarks
   * The URL of the profile photo.
   * 
   * > This parameter is returned only when a figure tag was used.
   * 
   * @example
   * http://example.com/aivideotag/8829B4DB-AFD9-4F*****F6-12965DBFFA14/Index_****.jpg
   */
  faceUrl?: string;
  /**
   * @remarks
   * The tag string.
   * 
   * @example
   * John
   */
  tag?: string;
  /**
   * @remarks
   * The points in time when the tags are displayed. Unit: milliseconds.
   */
  times?: string[];
  static names(): { [key: string]: string } {
    return {
      faceUrl: 'FaceUrl',
      tag: 'Tag',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceUrl: 'string',
      tag: 'string',
      times: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.times)) {
      $dara.Model.validateArray(this.times);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIVideoTagResultResponseBodyVideoTagResultTime extends $dara.Model {
  /**
   * @remarks
   * The tag string.
   * 
   * @example
   * Milliseconds
   */
  tag?: string;
  /**
   * @remarks
   * The points in time when the tags are displayed. Unit: milliseconds.
   */
  times?: string[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: 'string',
      times: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.times)) {
      $dara.Model.validateArray(this.times);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIVideoTagResultResponseBodyVideoTagResult extends $dara.Model {
  /**
   * @remarks
   * The video categories.
   */
  category?: GetAIVideoTagResultResponseBodyVideoTagResultCategory[];
  /**
   * @remarks
   * The keyword tags.
   */
  keyword?: GetAIVideoTagResultResponseBodyVideoTagResultKeyword[];
  /**
   * @remarks
   * The location tags.
   */
  location?: GetAIVideoTagResultResponseBodyVideoTagResultLocation[];
  /**
   * @remarks
   * The figure tags.
   */
  person?: GetAIVideoTagResultResponseBodyVideoTagResultPerson[];
  /**
   * @remarks
   * The time tags.
   */
  time?: GetAIVideoTagResultResponseBodyVideoTagResultTime[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      keyword: 'Keyword',
      location: 'Location',
      person: 'Person',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: { 'type': 'array', 'itemType': GetAIVideoTagResultResponseBodyVideoTagResultCategory },
      keyword: { 'type': 'array', 'itemType': GetAIVideoTagResultResponseBodyVideoTagResultKeyword },
      location: { 'type': 'array', 'itemType': GetAIVideoTagResultResponseBodyVideoTagResultLocation },
      person: { 'type': 'array', 'itemType': GetAIVideoTagResultResponseBodyVideoTagResultPerson },
      time: { 'type': 'array', 'itemType': GetAIVideoTagResultResponseBodyVideoTagResultTime },
    };
  }

  validate() {
    if(Array.isArray(this.category)) {
      $dara.Model.validateArray(this.category);
    }
    if(Array.isArray(this.keyword)) {
      $dara.Model.validateArray(this.keyword);
    }
    if(Array.isArray(this.location)) {
      $dara.Model.validateArray(this.location);
    }
    if(Array.isArray(this.person)) {
      $dara.Model.validateArray(this.person);
    }
    if(Array.isArray(this.time)) {
      $dara.Model.validateArray(this.time);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIVideoTagResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8829B4DB-AFD9-4FF6-12965DBFFA14****
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  videoTagResult?: GetAIVideoTagResultResponseBodyVideoTagResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      videoTagResult: 'VideoTagResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      videoTagResult: GetAIVideoTagResultResponseBodyVideoTagResult,
    };
  }

  validate() {
    if(this.videoTagResult && typeof (this.videoTagResult as any).validate === 'function') {
      (this.videoTagResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

