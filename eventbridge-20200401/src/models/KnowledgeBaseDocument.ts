// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KnowledgeBaseDocumentChunkConfigurationPreprocessRules extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove URLs and email addresses during parsing.
   * 
   * @example
   * false
   */
  removeUrlsAndEmails?: boolean;
  /**
   * @remarks
   * Specifies whether to replace consecutive whitespace characters (spaces, line breaks, and tab characters) with a single space.
   * 
   * @example
   * true
   */
  replaceConsecutiveWhitespace?: boolean;
  static names(): { [key: string]: string } {
    return {
      removeUrlsAndEmails: 'RemoveUrlsAndEmails',
      replaceConsecutiveWhitespace: 'ReplaceConsecutiveWhitespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      removeUrlsAndEmails: 'boolean',
      replaceConsecutiveWhitespace: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KnowledgeBaseDocumentChunkConfiguration extends $dara.Model {
  /**
   * @remarks
   * The heading level (1 to 6) used for splitting in the BY_HEADING strategy. Headings at or above this level serve as split boundaries. Deeper-level headings are retained in the chunk body.
   * 
   * @example
   * 2
   */
  headingLevel?: number;
  /**
   * @remarks
   * The maximum character length of a single chunk. Starting from revision 22, this value is character-based. Valid values: 1 to 6000.
   * 
   * @example
   * 600
   */
  maxChunkSize?: number;
  /**
   * @remarks
   * The overlap character length between adjacent chunks. This parameter takes effect only for the BY_LENGTH strategy. If the value is greater than 0, the beginning of the next chunk repeats the content from the end of the previous chunk within this window. The overlap does not cause a chunk to exceed MaxChunkSize. A value of 0 indicates no overlap.
   * 
   * @example
   * 40
   */
  overlapSize?: number;
  /**
   * @remarks
   * The snapshot of preprocessing rules.
   */
  preprocessRules?: KnowledgeBaseDocumentChunkConfigurationPreprocessRules;
  /**
   * @remarks
   * The separator used in the BY_SEPARATOR strategy. The separator is matched as a literal string (not a regular expression). The maximum length is 32 characters.
   * 
   * @example
   * \\\\n\\\\n
   */
  separator?: string;
  /**
   * @remarks
   * The chunking strategy. Valid values:
   * - AUTO: intelligent splitting (heading-aware + paragraph packing).
   * - BY_LENGTH: sliding window splitting by length. You can specify OverlapSize.
   * - BY_SEPARATOR: splitting by separator. You must specify Separator.
   * - BY_HEADING: splitting by heading level. You must specify HeadingLevel.
   * 
   * @example
   * BY_SEPARATOR
   */
  strategy?: string;
  static names(): { [key: string]: string } {
    return {
      headingLevel: 'HeadingLevel',
      maxChunkSize: 'MaxChunkSize',
      overlapSize: 'OverlapSize',
      preprocessRules: 'PreprocessRules',
      separator: 'Separator',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headingLevel: 'number',
      maxChunkSize: 'number',
      overlapSize: 'number',
      preprocessRules: KnowledgeBaseDocumentChunkConfigurationPreprocessRules,
      separator: 'string',
      strategy: 'string',
    };
  }

  validate() {
    if(this.preprocessRules && typeof (this.preprocessRules as any).validate === 'function') {
      (this.preprocessRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KnowledgeBaseDocumentMetadata extends $dara.Model {
  /**
   * @remarks
   * The metadata field name.
   * 
   * @example
   * department
   */
  key?: string;
  /**
   * @remarks
   * The metadata field value.
   * 
   * @example
   * R&D
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KnowledgeBaseDocument extends $dara.Model {
  /**
   * @remarks
   * The snapshot of the document-level chunking policy actually used for this document. This field is returned only if ChunkConfiguration was explicitly specified during upload (BeginUpload) or update (UpdateDocument). If not specified, the document is chunked based on the knowledge base-level default configurations, and this field is not returned. The knowledge base-level configuration is not echoed back to avoid misleading users about the actual chunking basis for this document when the knowledge base-level configuration is subsequently changed.
   */
  chunkConfiguration?: KnowledgeBaseDocumentChunkConfiguration;
  /**
   * @remarks
   * The number of chunks generated after processing is complete.
   * 
   * @example
   * 120
   */
  chunkCount?: number;
  /**
   * @remarks
   * The time when the document was created.
   * 
   * @example
   * 2026-08-24T10:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The unique identifier of the document.
   * 
   * @example
   * doc-bp1xxxxxxxxxxxx
   */
  documentId?: string;
  /**
   * @remarks
   * The stable error code returned when processing fails.
   * 
   * @example
   * FILE_CORRUPTED
   */
  errorCode?: string;
  /**
   * @remarks
   * The desensitized error message returned when processing fails.
   * 
   * @example
   * parse pdf failed
   */
  errorMessage?: string;
  /**
   * @remarks
   * The file name of the document.
   * 
   * @example
   * manual.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The file size of the document, in bytes.
   * 
   * @example
   * 1048576
   */
  fileSize?: number;
  /**
   * @remarks
   * The document-level metadata key-value pairs, including constant field values and system variable values. This field is not returned if no metadata is specified.
   * 
   * @example
   * [{"Key":"department","Value":"R&D"}]
   */
  metadata?: KnowledgeBaseDocumentMetadata[];
  /**
   * @remarks
   * The last modification time in the upstream source system, in epoch milliseconds. This field is empty if no source information is available.
   * 
   * @example
   * 1788000000000
   */
  sourceModifiedTime?: number;
  /**
   * @remarks
   * The delivery channel through which the document entered the knowledge base. This value is written by the system and cannot be specified by users. Valid values:
   * - UPLOAD: manually uploaded through the console or API.
   * - OSS: imported through an OSS event stream.
   * 
   * New values may be added when new channels are supported. The values are not restricted to a fixed enumeration.
   * 
   * @example
   * UPLOAD
   */
  sourceType?: string;
  /**
   * @remarks
   * The original source address of the document, such as oss://bucket/path/file.md. This field may be empty for manually uploaded documents.
   * 
   * @example
   * oss://my-bucket/docs/handbook.pdf
   */
  sourceUri?: string;
  /**
   * @remarks
   * The processing status of the document. Valid values:
   * - UPLOADING: uploading in progress.
   * - PENDING: upload complete and queued for processing. This is typically a transitional state that lasts for seconds.
   * - PROCESSING: parsing and processing in progress.
   * - COMPLETED: processing complete and searchable.
   * - FAILED: processing failed.
   * - DELETING: deletion in progress.
   * 
   * @example
   * COMPLETED
   */
  status?: string;
  /**
   * @remarks
   * The time when the document was last updated.
   * 
   * @example
   * 2026-08-24T10:00:00Z
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      chunkConfiguration: 'ChunkConfiguration',
      chunkCount: 'ChunkCount',
      createdAt: 'CreatedAt',
      documentId: 'DocumentId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      fileName: 'FileName',
      fileSize: 'FileSize',
      metadata: 'Metadata',
      sourceModifiedTime: 'SourceModifiedTime',
      sourceType: 'SourceType',
      sourceUri: 'SourceUri',
      status: 'Status',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkConfiguration: KnowledgeBaseDocumentChunkConfiguration,
      chunkCount: 'number',
      createdAt: 'string',
      documentId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      fileName: 'string',
      fileSize: 'number',
      metadata: { 'type': 'array', 'itemType': KnowledgeBaseDocumentMetadata },
      sourceModifiedTime: 'number',
      sourceType: 'string',
      sourceUri: 'string',
      status: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    if(this.chunkConfiguration && typeof (this.chunkConfiguration as any).validate === 'function') {
      (this.chunkConfiguration as any).validate();
    }
    if(Array.isArray(this.metadata)) {
      $dara.Model.validateArray(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

