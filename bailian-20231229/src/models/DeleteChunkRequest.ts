// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteChunkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of text chunks to delete. A maximum of 10 text chunk IDs can be specified in a single request.
   * 
   * This parameter is required.
   */
  chunkIds?: string[];
  /**
   * @remarks
   * The knowledge base ID, which is the `Data.Id` returned by the **CreateIndex** operation.
   * 
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

