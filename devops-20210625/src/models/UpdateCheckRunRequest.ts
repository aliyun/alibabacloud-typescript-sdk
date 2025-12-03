// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCheckRunRequestAnnotations extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * failure
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

export class UpdateCheckRunRequestOutputImages extends $dara.Model {
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

export class UpdateCheckRunRequestOutput extends $dara.Model {
  images?: UpdateCheckRunRequestOutputImages[];
  /**
   * @remarks
   * This parameter is required.
   */
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
      images: { 'type': 'array', 'itemType': UpdateCheckRunRequestOutputImages },
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

export class UpdateCheckRunRequest extends $dara.Model {
  /**
   * @example
   * f0b1e61db5961df5975a93f9129d2513
   */
  accessToken?: string;
  annotations?: UpdateCheckRunRequestAnnotations[];
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
   * xx
   */
  detailsUrl?: string;
  /**
   * @example
   * 42
   */
  externalId?: string;
  /**
   * @example
   * my-check-ci
   */
  name?: string;
  output?: UpdateCheckRunRequestOutput;
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
   * 2
   */
  checkRunId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 60de7a6852743a5162b5f957
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
      name: 'name',
      output: 'output',
      startedAt: 'startedAt',
      status: 'status',
      checkRunId: 'checkRunId',
      organizationId: 'organizationId',
      repositoryIdentity: 'repositoryIdentity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      annotations: { 'type': 'array', 'itemType': UpdateCheckRunRequestAnnotations },
      completedAt: 'string',
      conclusion: 'string',
      detailsUrl: 'string',
      externalId: 'string',
      name: 'string',
      output: UpdateCheckRunRequestOutput,
      startedAt: 'string',
      status: 'string',
      checkRunId: 'number',
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

