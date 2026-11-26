// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateChunkRequestBody extends $dara.Model {
  /**
   * @remarks
   * Pass back the chunkToken returned by GetChunk, ListChunks, or SearchKnowledgeBase as is. Do not parse or generate it yourself. If the token has expired at the beginning of the request, Chunk.VersionConflict is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * ct-0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef
   */
  chunkToken?: string;
  /**
   * @remarks
   * Replaces the chunk content. The maximum length is 32,768 characters. Affected vectors are regenerated before the new generation is published. If omitted, the original content is retained.
   * 
   * @example
   * Welcome to the product
   */
  content?: string;
  /**
   * @remarks
   * Specifies whether the chunk is enabled. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * Enabling or disabling only modifies the published result determined at the beginning of the request, and does not follow new results during the process. Indexes are synchronized asynchronously, which may cause a brief delay in retrieval. If omitted, the original enabled status is retained.
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      chunkToken: 'chunkToken',
      content: 'content',
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkToken: 'string',
      content: 'string',
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

export class UpdateChunkRequest extends $dara.Model {
  /**
   * @remarks
   * You must provide the chunkToken and at least one of the content or enabled parameters.
   * 
   * This parameter is required.
   */
  body?: UpdateChunkRequestBody;
  /**
   * @remarks
   * Required when modifying the content. Used for idempotent retries of asynchronous edits. This parameter is not used as a query parameter for GetAsset. If the same token is used with different parameters, IdempotencyConflict is returned. This parameter can be omitted when only modifying the enabled status, and no asynchronous receipt is created.
   * 
   * @example
   * chunk-update-001
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateChunkRequestBody,
      clientToken: 'string',
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

