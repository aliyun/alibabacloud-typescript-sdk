// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateChunksRequestBodyChunks extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  chunkSeq?: number;
  /**
   * @remarks
   * 原样回传查询返回的 chunkToken，请求开始已过期返回 Chunk.VersionConflict。
   * 
   * This parameter is required.
   * 
   * @example
   * ct-0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef
   */
  chunkToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      chunkSeq: 'chunkSeq',
      chunkToken: 'chunkToken',
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkSeq: 'number',
      chunkToken: 'string',
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateChunksRequestBody extends $dara.Model {
  /**
   * @remarks
   * 1 至 100 项，chunkSeq 不得重复。按请求开始读取的已发布结果校验所有令牌并固定写入目标。
   * 
   * This parameter is required.
   */
  chunks?: UpdateChunksRequestBodyChunks[];
  static names(): { [key: string]: string } {
    return {
      chunks: 'chunks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunks: { 'type': 'array', 'itemType': UpdateChunksRequestBodyChunks },
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

export class UpdateChunksRequest extends $dara.Model {
  /**
   * @remarks
   * 同一资产内最多 100 条。
   * 
   * This parameter is required.
   */
  body?: UpdateChunksRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateChunksRequestBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

