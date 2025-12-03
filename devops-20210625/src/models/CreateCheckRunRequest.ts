// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCheckRunRequestAnnotations extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * notice
   */
  annotationLevel?: string;
  /**
   * @example
   * 5
   */
  endColumn?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  endLine?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  message?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
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
   * @remarks
   * This parameter is required.
   * 
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

export class CreateCheckRunRequestOutputImages extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
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
   * @remarks
   * This parameter is required.
   * 
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

export class CreateCheckRunRequestOutput extends $dara.Model {
  images?: CreateCheckRunRequestOutputImages[];
  /**
   * @remarks
   * This parameter is required.
   */
  summary?: string;
  text?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
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
      images: { 'type': 'array', 'itemType': CreateCheckRunRequestOutputImages },
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

export class CreateCheckRunRequest extends $dara.Model {
  /**
   * @example
   * f0b1e61db5961df5975a93f9129d2513
   */
  accessToken?: string;
  annotations?: CreateCheckRunRequestAnnotations[];
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
   * xxx
   */
  detailsUrl?: string;
  /**
   * @example
   * 42
   */
  externalId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 40f4ccfe019cdd4a62d4acb0c57130106fc7e1be
   */
  headSha?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-check-ci
   */
  name?: string;
  output?: CreateCheckRunRequestOutput;
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5ebbc0228123212b59xxxxx
   */
  organizationId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  repositoryIdentity?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      annotations: 'annotations',
      completedAt: 'completedAt',
      conclusion: 'conclusion',
      detailsUrl: 'detailsUrl',
      externalId: 'externalId',
      headSha: 'headSha',
      name: 'name',
      output: 'output',
      startedAt: 'startedAt',
      status: 'status',
      organizationId: 'organizationId',
      repositoryIdentity: 'repositoryIdentity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      annotations: { 'type': 'array', 'itemType': CreateCheckRunRequestAnnotations },
      completedAt: 'string',
      conclusion: 'string',
      detailsUrl: 'string',
      externalId: 'string',
      headSha: 'string',
      name: 'string',
      output: CreateCheckRunRequestOutput,
      startedAt: 'string',
      status: 'string',
      organizationId: 'string',
      repositoryIdentity: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.annotations)) {
      $dara.Model.validateArray(this.annotations);
    }
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

