// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEduProblemSolveRequestQueryImage extends $dara.Model {
  base64?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  format?: string;
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
   * This parameter is required.
   */
  query?: CreateEduProblemSolveRequestQuery;
  /**
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

