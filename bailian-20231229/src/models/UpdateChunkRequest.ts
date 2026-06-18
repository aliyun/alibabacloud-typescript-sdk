// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateChunkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the text chunk to modify. You can obtain this value by calling the **ListChunks** operation. The value is in the Node.Metadata._id field of the response.
   * 
   * This parameter is required.
   * 
   * @example
   * llm-5ip55o1zrzxx_09fe52x_xxxxx_033b551e10024029992e79767b151fxx_10024xx_0
   */
  chunkId?: string;
  /**
   * @remarks
   * The file ID. This is the `FileId` returned by the **AddFile** operation. You can also obtain it from the <props="china">[Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center) - Files<props="intl">[Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center) - Files tab in the Model Studio console by clicking the ID icon next to the corresponding file.
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
   * - true: Participates.
   * - false: Does not participate.
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
   * The knowledge base ID. This is the `Data.Id` returned by the **CreateIndex** operation, or you can obtain it from the <props="china">[Knowledge Base](https://bailian.console.aliyun.com/?tab=app#/knowledge-base)<props="intl">[Knowledge Base](https://modelstudio.console.alibabacloud.com/?tab=app#/knowledge-base) page.
   * 
   * This parameter is required.
   * 
   * @example
   * 79c0alxxxx
   */
  pipelineId?: string;
  /**
   * @remarks
   * The new content of the text chunk. The content length must be between 10 and 6000 characters and cannot exceed the maximum segment length specified when the knowledge base was created.
   * 
   * This parameter is required.
   * 
   * @example
   * 在哲学中所获得的确定性类型不是科学的确定性(即对每个人的理智来说都一样的确定性)，而是一种要在人类的整体本质中才能获得的亲证。哲学的每一形态都不同于科学，因为所有的哲学都没有得到一致的认可...
   */
  content?: string;
  /**
   * @remarks
   * The new title of the text chunk. The length is limited to 0 to 50 characters. An empty string is allowed. If you pass an empty string, the existing title is cleared. If you do not pass this parameter, the original title is retained.
   * 
   * @example
   * 什么是哲学
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

