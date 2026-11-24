// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEduProblemSolveRequestQueryImage extends $dara.Model {
  /**
   * @remarks
   * The Base64 encoding of the image.
   * 
   * @example
   * /9j/4AAQSkZJRgABAQAASABIAAD/4QCMRXhpZgAATU0AK...
   */
  base64?: string;
  /**
   * @remarks
   * The image format. Valid values: jpg, jpeg, and png. The value must match the actual file format.
   * 
   * @example
   * jpg
   */
  format?: string;
  /**
   * @remarks
   * The image URL.
   * 
   * @example
   * https://xxx/xxx.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      base64: 'base64',
      format: 'format',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      base64: 'string',
      format: 'string',
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

export class CreateEduProblemSolveRequestQuery extends $dara.Model {
  /**
   * @remarks
   * The query image.
   */
  image?: CreateEduProblemSolveRequestQueryImage;
  static names(): { [key: string]: string } {
    return {
      image: 'image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: CreateEduProblemSolveRequestQueryImage,
    };
  }

  validate() {
    if(this.image && typeof (this.image as any).validate === 'function') {
      (this.image as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEduProblemSolveRequest extends $dara.Model {
  /**
   * @remarks
   * The query information.
   */
  query?: CreateEduProblemSolveRequestQuery;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019F593F-D6EE-5F44-819A-6CDA127D1637
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      query: 'query',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: CreateEduProblemSolveRequestQuery,
      requestId: 'string',
    };
  }

  validate() {
    if(this.query && typeof (this.query as any).validate === 'function') {
      (this.query as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

