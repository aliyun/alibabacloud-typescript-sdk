// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddChunkRequest extends $dara.Model {
  /**
   * @remarks
   * The knowledge base ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 79c0alxxxx
   */
  pipelineId?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * doc_xxx
   */
  dataId?: string;
  /**
   * @remarks
   * The chunk content to insert, passed as key-value pairs. For document search knowledge bases, use the following fixed key list:
   * - content (**String**): **Required**. The body content of the chunk.
   * - title (**String**): **Optional**. The title of the chunk.
   * - image_urls (**Array**): **Optional**. Image URLs contained in the chunk. A maximum of 10 images are supported.
   * 
   * For data query and image Q&A knowledge bases, the keys are not fixed and are determined by the data source spreadsheet of the knowledge base. The key is the Excel column header, and the value is the corresponding column value.
   * 
   * @example
   * {
   *   "content": "The Bailian platform supports parsing multiple document formats including PDF, Word, and PPT.",
   *   "title": "Document Parsing and Chunking",
   *   "image_urls": [
   * "https://example.com/images/chunk-flow.png",
   *   "https://example.com/images/parsing-result.png"
   *   ]
   * }
   */
  field?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
      dataId: 'dataId',
      field: 'field',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      dataId: 'string',
      field: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.field) {
      $dara.Model.validateMap(this.field);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

