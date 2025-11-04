// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateChunkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the text chunk to be modified. You can find it in the Node.Metadata._id field returned by **ListChunks**.
   * 
   * This parameter is required.
   * 
   * @example
   * llm-5ip55o1zrzxx_09fe52x_table_033b551e10024029992e79767b151fxx_10024xx_0
   */
  chunkId?: string;
  /**
   * @remarks
   * The file ID, which is the `FileId` returned by **AddFile**. You can also go to the [Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center) page. Click the ID icon next to your file to get its ID.
   * 
   * This parameter is required.
   * 
   * @example
   * doc_c134aa2073204a5d936d870bf960f56axxxxxxxx
   */
  dataId?: string;
  /**
   * @remarks
   * Specifies whether this text chunk participates in knowledge base retrieval. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: true.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  isDisplayedChunkContent?: boolean;
  /**
   * @remarks
   * The knowledge base ID, which is the `Data.Id` returned by **CreateIndex**. You can also get it on the [Knowledge Base](https://modelstudio.console.alibabacloud.com/?tab=app#/knowledge-base) page.
   * 
   * This parameter is required.
   * 
   * @example
   * 79c0alxxxx
   */
  pipelineId?: string;
  /**
   * @remarks
   * The new content of the chunk. The content must be between 10 and 6,000 characters in length and cannot exceed the maximum chunk length set when the knowledge base was created.
   * 
   * This parameter is required.
   */
  content?: string;
  /**
   * @remarks
   * The new title of the chunk. The title must be 0 to 50 characters in length and can be an empty string. If you specify an empty string, the existing title is cleared. If you do not pass this parameter, the original title remains unchanged.
   */
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

