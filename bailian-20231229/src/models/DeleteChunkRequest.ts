// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteChunkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  chunkIds?: string[];
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
      chunkIds: 'ChunkIds',
      pipelineId: 'PipelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkIds: { 'type': 'array', 'itemType': 'string' },
      pipelineId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chunkIds)) {
      $dara.Model.validateArray(this.chunkIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

