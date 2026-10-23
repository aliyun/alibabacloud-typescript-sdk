// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkItemArtifactsResponseBodyItemsRef extends $dara.Model {
  /**
   * @remarks
   * The artifact ID.
   * 
   * @example
   * example
   */
  id?: string;
  /**
   * @remarks
   * The reference data type.
   * 
   * @example
   * WORK_ITEM_ARTIFACT
   */
  kind?: string;
  /**
   * @remarks
   * The OpenAPI artifact access endpoint.
   * 
   * @example
   * example
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      kind: 'kind',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      kind: 'string',
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

export class ListWorkItemArtifactsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The artifact ID.
   * 
   * @example
   * example
   */
  artifactId?: string;
  /**
   * @remarks
   * The artifact key.
   * 
   * @example
   * example
   */
  artifactKey?: string;
  /**
   * @remarks
   * The node attempt sequence number.
   * 
   * @example
   * 1
   */
  attemptSeq?: number;
  /**
   * @remarks
   * The content type.
   * 
   * @example
   * example
   */
  contentType?: string;
  /**
   * @remarks
   * The creation time in ISO 8601 format.
   * 
   * @example
   * example
   */
  createdAt?: string;
  /**
   * @remarks
   * The node key.
   * 
   * @example
   * example
   */
  nodeKey?: string;
  /**
   * @remarks
   * The plan ID.
   * 
   * @example
   * example
   */
  planId?: string;
  /**
   * @remarks
   * The reference information.
   * 
   * @example
   * example
   */
  ref?: ListWorkItemArtifactsResponseBodyItemsRef;
  /**
   * @remarks
   * The run ID.
   * 
   * @example
   * example
   */
  runId?: string;
  /**
   * @remarks
   * The SHA-256 hash of the content.
   * 
   * @example
   * example
   */
  sha256?: string;
  /**
   * @remarks
   * The artifact size in bytes.
   * 
   * @example
   * 1
   */
  sizeBytes?: number;
  /**
   * @remarks
   * The artifact summary.
   * 
   * @example
   * example
   */
  summary?: string;
  /**
   * @remarks
   * The artifact title.
   * 
   * @example
   * example
   */
  title?: string;
  /**
   * @remarks
   * The session turn sequence number.
   * 
   * @example
   * 1
   */
  turnSeq?: number;
  /**
   * @remarks
   * The artifact type.
   * 
   * @example
   * example
   */
  type?: string;
  /**
   * @remarks
   * The work item ID.
   * 
   * @example
   * example
   */
  workItemId?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'artifactId',
      artifactKey: 'artifactKey',
      attemptSeq: 'attemptSeq',
      contentType: 'contentType',
      createdAt: 'createdAt',
      nodeKey: 'nodeKey',
      planId: 'planId',
      ref: 'ref',
      runId: 'runId',
      sha256: 'sha256',
      sizeBytes: 'sizeBytes',
      summary: 'summary',
      title: 'title',
      turnSeq: 'turnSeq',
      type: 'type',
      workItemId: 'workItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactKey: 'string',
      attemptSeq: 'number',
      contentType: 'string',
      createdAt: 'string',
      nodeKey: 'string',
      planId: 'string',
      ref: ListWorkItemArtifactsResponseBodyItemsRef,
      runId: 'string',
      sha256: 'string',
      sizeBytes: 'number',
      summary: 'string',
      title: 'string',
      turnSeq: 'number',
      type: 'string',
      workItemId: 'string',
    };
  }

  validate() {
    if(this.ref && typeof (this.ref as any).validate === 'function') {
      (this.ref as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkItemArtifactsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of historical artifacts.
   * 
   * @example
   * example
   */
  items?: ListWorkItemArtifactsResponseBodyItems[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The request trace ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned artifacts.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      items: 'items',
      message: 'message',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': ListWorkItemArtifactsResponseBodyItems },
      message: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

