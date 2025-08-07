// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteChunkShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  chunkIdsShrink?: string;
  /**
   * @remarks
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

