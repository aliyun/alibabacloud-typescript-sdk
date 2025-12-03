// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCheckRunsResponseBodyResultAnnotations extends $dara.Model {
  /**
   * @example
   * warning
   */
  annotationLevel?: string;
  /**
   * @example
   * 5
   */
  endColumn?: number;
  /**
   * @example
   * 2
   */
  endLine?: number;
  /**
   * @example
   * 11806
   */
  id?: number;
  message?: string;
  /**
   * @example
   * demo/test.txt
   */
  path?: string;
  rawDetails?: string;
  /**
   * @example
   * 3
   */
  startColumn?: number;
  /**
   * @example
   * 1
   */
  startLine?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      annotationLevel: 'annotationLevel',
      endColumn: 'endColumn',
      endLine: 'endLine',
      id: 'id',
      message: 'message',
      path: 'path',
      rawDetails: 'rawDetails',
      startColumn: 'startColumn',
      startLine: 'startLine',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotationLevel: 'string',
      endColumn: 'number',
      endLine: 'number',
      id: 'number',
      message: 'string',
      path: 'string',
      rawDetails: 'string',
      startColumn: 'number',
      startLine: 'number',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCheckRunsResponseBodyResultCheckSuite extends $dara.Model {
  /**
   * @example
   * 1
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCheckRunsResponseBodyResultOutputImages extends $dara.Model {
  /**
   * @example
   * test-image-alt
   */
  alt?: string;
  /**
   * @example
   * test
   */
  caption?: string;
  /**
   * @example
   * xxx
   */
  imageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      alt: 'alt',
      caption: 'caption',
      imageUrl: 'imageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alt: 'string',
      caption: 'string',
      imageUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCheckRunsResponseBodyResultOutput extends $dara.Model {
  images?: ListCheckRunsResponseBodyResultOutputImages[];
  summary?: string;
  text?: string;
  /**
   * @example
   * Mighty Readme report
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'images',
      summary: 'summary',
      text: 'text',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': ListCheckRunsResponseBodyResultOutputImages },
      summary: 'string',
      text: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCheckRunsResponseBodyResultWriter extends $dara.Model {
  /**
   * @example
   * xxx
   */
  id?: string;
  /**
   * @example
   * xxx
   */
  logoUrl?: string;
  /**
   * @example
   * test-codeup
   */
  name?: string;
  /**
   * @example
   * test-codeup
   */
  slug?: string;
  /**
   * @example
   * User
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      logoUrl: 'logoUrl',
      name: 'name',
      slug: 'slug',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      logoUrl: 'string',
      name: 'string',
      slug: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCheckRunsResponseBodyResult extends $dara.Model {
  annotations?: ListCheckRunsResponseBodyResultAnnotations[];
  checkSuite?: ListCheckRunsResponseBodyResultCheckSuite;
  /**
   * @example
   * 2023-03-15T08:00:00Z
   */
  completedAt?: string;
  /**
   * @example
   * success
   */
  conclusion?: string;
  /**
   * @example
   * 2022-01-14T21:08:26+08:00
   */
  createdAt?: string;
  /**
   * @example
   * xxx
   */
  detailsUrl?: string;
  /**
   * @example
   * 42
   */
  externalId?: string;
  /**
   * @example
   * 40f4ccfe019cdd4a62d4acb0c57130106fc7e1be
   */
  headSha?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * my-check-ci
   */
  name?: string;
  output?: ListCheckRunsResponseBodyResultOutput;
  /**
   * @example
   * 2023-03-15T08:00:00Z
   */
  startedAt?: string;
  /**
   * @example
   * completed
   */
  status?: string;
  /**
   * @example
   * 2022-01-14T21:08:26+08:00
   */
  updatedAt?: string;
  writer?: ListCheckRunsResponseBodyResultWriter;
  static names(): { [key: string]: string } {
    return {
      annotations: 'annotations',
      checkSuite: 'checkSuite',
      completedAt: 'completedAt',
      conclusion: 'conclusion',
      createdAt: 'createdAt',
      detailsUrl: 'detailsUrl',
      externalId: 'externalId',
      headSha: 'headSha',
      id: 'id',
      name: 'name',
      output: 'output',
      startedAt: 'startedAt',
      status: 'status',
      updatedAt: 'updatedAt',
      writer: 'writer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: { 'type': 'array', 'itemType': ListCheckRunsResponseBodyResultAnnotations },
      checkSuite: ListCheckRunsResponseBodyResultCheckSuite,
      completedAt: 'string',
      conclusion: 'string',
      createdAt: 'string',
      detailsUrl: 'string',
      externalId: 'string',
      headSha: 'string',
      id: 'number',
      name: 'string',
      output: ListCheckRunsResponseBodyResultOutput,
      startedAt: 'string',
      status: 'string',
      updatedAt: 'string',
      writer: ListCheckRunsResponseBodyResultWriter,
    };
  }

  validate() {
    if(Array.isArray(this.annotations)) {
      $dara.Model.validateArray(this.annotations);
    }
    if(this.checkSuite && typeof (this.checkSuite as any).validate === 'function') {
      (this.checkSuite as any).validate();
    }
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    if(this.writer && typeof (this.writer as any).validate === 'function') {
      (this.writer as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCheckRunsResponseBody extends $dara.Model {
  /**
   * @example
   * SYSTEM_UNKNOWN_ERROR
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  result?: ListCheckRunsResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListCheckRunsResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

