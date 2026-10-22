// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BrandKnowledgeDocument extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the content is sufficient to be considered for plan summary candidates.
   */
  contentSufficient?: boolean;
  /**
   * @remarks
   * The MIME type of the file.
   * 
   * @example
   * application/pdf
   */
  contentType?: string;
  /**
   * @remarks
   * The creation time in Unix milliseconds.
   * 
   * @example
   * 1735660800000
   */
  createdAt?: number;
  /**
   * @remarks
   * Specifies whether deletion is currently allowed.
   */
  deletable?: boolean;
  /**
   * @remarks
   * The display title.
   * 
   * @example
   * Wanxiaozhi product introduction
   */
  displayTitle?: string;
  /**
   * @remarks
   * The document category.
   * 
   * @example
   * PRODUCT
   */
  docCategory?: string;
  /**
   * @remarks
   * The ID of the brand knowledge document.
   * 
   * @example
   * bkd_3f7a1c2e9b7d4a5f8c0e1d2b3a4c5d6e
   */
  documentId?: string;
  /**
   * @remarks
   * The stable error code for main processing failures.
   * 
   * @example
   * BRAND_KNOWLEDGE_PARSE_FAILED
   */
  errorCode?: string;
  /**
   * @remarks
   * The desensitized error message for main processing failures.
   * 
   * @example
   * Document parsing failed. Please re-upload
   */
  errorMessage?: string;
  /**
   * @remarks
   * The file size in bytes.
   * 
   * @example
   * 1048576
   */
  fileSize?: number;
  /**
   * @remarks
   * The summary keywords.
   */
  keyTopics?: string[];
  /**
   * @remarks
   * The one-line summary, which is used only to construct search queries and cannot be used as factual evidence.
   * 
   * @example
   * Introduces the product positioning and core capabilities of the Wanxiaozhi AI website building platform. It can be used as a reference for content topic selection
   */
  oneLineSummary?: string;
  /**
   * @remarks
   * The original file name.
   * 
   * @example
   * Wanxiaozhi product introduction.pdf
   */
  originalName?: string;
  /**
   * @remarks
   * The ID of the business workspace. For GEO business workspaces of the brand marketing type, this is the appWorkspaceId.
   * 
   * @example
   * d4e5f60718293a4b5c6d7e8f90a1b2c3
   */
  projectId?: string;
  /**
   * @remarks
   * The time when the document is ready for reference, in Unix milliseconds.
   * 
   * @example
   * 1735660900000
   */
  readyAt?: number;
  /**
   * @remarks
   * The document processing status.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * The message displayed on the status page.
   * 
   * @example
   * Parsing completed and available for content plans
   */
  statusMessage?: string;
  /**
   * @remarks
   * The stable error code for summary failures.
   * 
   * @example
   * BRAND_KNOWLEDGE_SUMMARY_TIMEOUT
   */
  summaryErrorCode?: string;
  /**
   * @remarks
   * The summary status.
   * 
   * @example
   * SUCCEEDED
   */
  summaryStatus?: string;
  /**
   * @remarks
   * The last update time in Unix milliseconds.
   * 
   * @example
   * 1735660900000
   */
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      contentSufficient: 'ContentSufficient',
      contentType: 'ContentType',
      createdAt: 'CreatedAt',
      deletable: 'Deletable',
      displayTitle: 'DisplayTitle',
      docCategory: 'DocCategory',
      documentId: 'DocumentId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      fileSize: 'FileSize',
      keyTopics: 'KeyTopics',
      oneLineSummary: 'OneLineSummary',
      originalName: 'OriginalName',
      projectId: 'ProjectId',
      readyAt: 'ReadyAt',
      status: 'Status',
      statusMessage: 'StatusMessage',
      summaryErrorCode: 'SummaryErrorCode',
      summaryStatus: 'SummaryStatus',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentSufficient: 'boolean',
      contentType: 'string',
      createdAt: 'number',
      deletable: 'boolean',
      displayTitle: 'string',
      docCategory: 'string',
      documentId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      fileSize: 'number',
      keyTopics: { 'type': 'array', 'itemType': 'string' },
      oneLineSummary: 'string',
      originalName: 'string',
      projectId: 'string',
      readyAt: 'number',
      status: 'string',
      statusMessage: 'string',
      summaryErrorCode: 'string',
      summaryStatus: 'string',
      updatedAt: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.keyTopics)) {
      $dara.Model.validateArray(this.keyTopics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

