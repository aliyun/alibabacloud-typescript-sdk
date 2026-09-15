// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KnowledgeBaseChunk extends $dara.Model {
  /**
   * @remarks
   * The sequence number of the chunk within the document, starting from 1 and numbered consecutively.
   * 
   * @example
   * 12
   */
  chunkSeq?: number;
  /**
   * @remarks
   * The number of characters in the chunk content, measured in UTF-16 code units, consistent with MaxChunkSize. You can use this value to evaluate chunk saturation against the chunking configuration.
   * 
   * @example
   * 128
   */
  chunkSize?: number;
  /**
   * @remarks
   * The content of the chunk.
   * 
   * @example
   * EventBridge supports routing events to multiple target services
   */
  content?: string;
  /**
   * @remarks
   * The time when the chunk was created.
   * 
   * @example
   * 2026-08-24T10:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The ID of the document to which the chunk belongs.
   * 
   * @example
   * doc-bp1xxxxxxxxxxxx
   */
  documentId?: string;
  /**
   * @remarks
   * Indicates whether the chunk is enabled. Disabled chunks are excluded from retrieval.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The file name of the document to which the chunk belongs. This value is from the same source as the FileName returned by GetDocument.
   * 
   * @example
   * product-handbook.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The location of the chunk in the original document. The format varies by document type: for PDF, the value is p.PageNumber (such as p.3). For PPT/PPTX, the value is s.SlideNumber (such as s.2). For XLS/XLSX, the value is the sheet name. For other formats (such as txt, md, html, doc, or docx), this field is not returned if no source location is available.
   * 
   * @example
   * p.3
   */
  sourceLocation?: string;
  /**
   * @remarks
   * The hierarchical title path of the chunk, connected by >. If no recognizable title exists in the original document, the value falls back to a summary of the first paragraph content (such as CONTENT). This field is for display purposes only.
   * 
   * @example
   * Installation Guide>Prerequisites
   */
  titlePath?: string;
  /**
   * @remarks
   * The time when the chunk was last updated.
   * 
   * @example
   * 2026-08-24T10:00:00Z
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      chunkSeq: 'ChunkSeq',
      chunkSize: 'ChunkSize',
      content: 'Content',
      createdAt: 'CreatedAt',
      documentId: 'DocumentId',
      enabled: 'Enabled',
      fileName: 'FileName',
      sourceLocation: 'SourceLocation',
      titlePath: 'TitlePath',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkSeq: 'number',
      chunkSize: 'number',
      content: 'string',
      createdAt: 'string',
      documentId: 'string',
      enabled: 'boolean',
      fileName: 'string',
      sourceLocation: 'string',
      titlePath: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

