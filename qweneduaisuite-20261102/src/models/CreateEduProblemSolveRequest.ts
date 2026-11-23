// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEduProblemSolveRequestQueryImage extends $dara.Model {
  /**
   * @remarks
   * **The Base64-encoded image**. If both this parameter and the URL are provided, this parameter takes precedence.
   * 
   * @example
   * iVBORw0KGgoAAAANSUhEUgAAAAUA...
   */
  base64?: string;
  /**
   * @remarks
   * **The image format**: jpg, jpeg, or png. The value must match the actual file format.
   * 
   * This parameter is required.
   * 
   * @example
   * jpg
   */
  format?: string;
  /**
   * @remarks
   * The URL of a single question image.
   * 
   * @example
   * https://your-cdn.example.com/question.jpg
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
   * **The image information.**
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
   * **The question image container.**
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

