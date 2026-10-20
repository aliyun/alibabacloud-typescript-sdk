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
   * The file ID, which is the `FileId` returned by the **AddFile** operation. You can also obtain it from the <props="china">[application data](https://bailian.console.aliyun.com/?tab=app#/data-center)-Files<props="intl">[application data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center)-Files tab in the Alibaba Cloud Model Studio console by clicking the ID icon next to the corresponding file.
   * 
   * This parameter is required.
   * 
   * @example
   * doc_c134aa2073204a5d936d870bf960f56axxxxxxxx
   */
  dataId?: string;
  /**
   * @remarks
   * Specifies whether the text chunk participates in knowledge base retrieval. Valid values:
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
   * The knowledge base ID, which is the `Data.Id` returned when you call the **CreateIndex** operation, or retrieved from the <props="china">[knowledge base](https://bailian.console.aliyun.com/?tab=app#/knowledge-base)<props="intl">[knowledge base](https://modelstudio.console.alibabacloud.com/?tab=app#/knowledge-base) page.
   * 
   * This parameter is required.
   * 
   * @example
   * 79c0alxxxx
   */
  pipelineId?: string;
  /**
   * @remarks
   * The new content of the text chunk. The content length must be between 10 and 6,000 characters, and must not exceed the maximum segment length set when the knowledge base was created.
   * 
   * This parameter is required.
   * 
   * @example
   * The type of certainty obtained in philosophy is not scientific certainty (that is, certainty that is the same for every rational mind), but a kind of personal conviction that can only be obtained in the overall nature of humanity. Every form of philosophy differs from science in that no philosophy has received universal acceptance..
   */
  content?: string;
  /**
   * @remarks
   * The new title of the text chunk. The length limit is 0–50 characters. An empty string is allowed. If you pass an empty string, the existing title is cleared. If you do not pass this parameter, the original title is retained.
   * 
   * @example
   * What is philosophy
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

