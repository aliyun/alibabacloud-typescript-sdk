// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateChunkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-5ip55o1zrzxx_09fe52x_table_033b551e10024029992e79767b151fxx_10024xx_0
   */
  chunkId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * doc_c134aa2073204a5d936d870bf960f56axxxxxxxx
   */
  dataId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  isDisplayedChunkContent?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 79c0alxxxx
   */
  pipelineId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      chunkId: 'ChunkId',
      dataId: 'DataId',
      isDisplayedChunkContent: 'IsDisplayedChunkContent',
      pipelineId: 'PipelineId',
      content: 'content',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkId: 'string',
      dataId: 'string',
      isDisplayedChunkContent: 'boolean',
      pipelineId: 'string',
      content: 'string',
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

