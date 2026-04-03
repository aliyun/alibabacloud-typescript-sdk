// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChunksResponseBodyChunksChunksVector extends $dara.Model {
  vector?: number[];
  static names(): { [key: string]: string } {
    return {
      vector: 'vector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vector: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.vector)) {
      $dara.Model.validateArray(this.vector);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChunksResponseBodyChunksChunks extends $dara.Model {
  content?: string;
  fileName?: string;
  id?: string;
  loaderMetadata?: string;
  metadata?: { [key: string]: any };
  pageIndex?: number;
  vector?: ListChunksResponseBodyChunksChunksVector;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      fileName: 'FileName',
      id: 'Id',
      loaderMetadata: 'LoaderMetadata',
      metadata: 'Metadata',
      pageIndex: 'PageIndex',
      vector: 'Vector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      fileName: 'string',
      id: 'string',
      loaderMetadata: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      pageIndex: 'number',
      vector: ListChunksResponseBodyChunksChunksVector,
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(this.vector && typeof (this.vector as any).validate === 'function') {
      (this.vector as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChunksResponseBodyChunks extends $dara.Model {
  chunks?: ListChunksResponseBodyChunksChunks[];
  static names(): { [key: string]: string } {
    return {
      chunks: 'chunks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunks: { 'type': 'array', 'itemType': ListChunksResponseBodyChunksChunks },
    };
  }

  validate() {
    if(Array.isArray(this.chunks)) {
      $dara.Model.validateArray(this.chunks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChunksResponseBody extends $dara.Model {
  chunks?: ListChunksResponseBodyChunks;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageRecordCount?: number;
  /**
   * @example
   * 34b32a0a-08ef-4a87-b6be-cdd9f56fc3ad
   */
  requestId?: string;
  /**
   * @example
   * 30
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      chunks: 'Chunks',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunks: ListChunksResponseBodyChunks,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.chunks && typeof (this.chunks as any).validate === 'function') {
      (this.chunks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

