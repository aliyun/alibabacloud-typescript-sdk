// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteChunkShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of text chunks to be deleted. You can specify up to 10 chunk IDs at a time.
   * 
   * This parameter is required.
   */
  chunkIdsShrink?: string;
  /**
   * @remarks
   * The knowledge base ID, which is the `Data.Id` parameter returned by **CreateIndex**.
   * 
   * This parameter is required.
   * 
   * @example
   * 79c0alxxxx
   */
  pipelineId?: string;
  static names(): { [key: string]: string } {
    return {
      chunkIdsShrink: 'ChunkIds',
      pipelineId: 'PipelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkIdsShrink: 'string',
      pipelineId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

