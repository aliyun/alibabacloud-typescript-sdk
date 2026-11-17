// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewOutputFileResponseBodySlides extends $dara.Model {
  /**
   * @remarks
   * The display text of the slide.
   * 
   * @example
   * Market Overview
   */
  displayText?: string;
  /**
   * @remarks
   * Specifies the detail level of the image. Valid values: low, high, and auto. Default value: auto.
   * 
   * @example
   * https://example.com/slide/1
   */
  imageUrl?: string;
  /**
   * @remarks
   * The slide ID.
   * 
   * @example
   * exampleSlideId
   */
  slideId?: string;
  /**
   * @remarks
   * The slide order.
   * 
   * @example
   * 1
   */
  slideIndex?: number;
  /**
   * @remarks
   * The signing status. Valid values:
   * - CREATED: created but not signed
   * - SUCCESS: signed successfully
   * - STOP: terminated
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      displayText: 'displayText',
      imageUrl: 'imageUrl',
      slideId: 'slideId',
      slideIndex: 'slideIndex',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayText: 'string',
      imageUrl: 'string',
      slideId: 'string',
      slideIndex: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewOutputFileResponseBodyVersionCapabilities extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the version can be opened in a browser.
   * 
   * @example
   * true
   */
  canBrowserOpen?: boolean;
  /**
   * @remarks
   * Indicates whether the version can be downloaded.
   * 
   * @example
   * true
   */
  canDownload?: boolean;
  /**
   * @remarks
   * Indicates whether the course can be edited or deleted.
   * 
   * @example
   * false
   */
  canEdit?: boolean;
  /**
   * @remarks
   * Indicates whether the version can be restored to the latest version.
   * 
   * @example
   * false
   */
  canRestore?: boolean;
  /**
   * @remarks
   * Indicates whether the version can be saved as knowledge.
   * 
   * @example
   * true
   */
  canSaveAsKnowledge?: boolean;
  /**
   * @remarks
   * Indicates whether the version can be shared.
   * 
   * @example
   * true
   */
  canShare?: boolean;
  static names(): { [key: string]: string } {
    return {
      canBrowserOpen: 'canBrowserOpen',
      canDownload: 'canDownload',
      canEdit: 'canEdit',
      canRestore: 'canRestore',
      canSaveAsKnowledge: 'canSaveAsKnowledge',
      canShare: 'canShare',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canBrowserOpen: 'boolean',
      canDownload: 'boolean',
      canEdit: 'boolean',
      canRestore: 'boolean',
      canSaveAsKnowledge: 'boolean',
      canShare: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewOutputFileResponseBodyVersion extends $dara.Model {
  /**
   * @remarks
   * The number of remaining seats.
   * 
   * @example
   * AVAILABLE
   */
  availability?: string;
  /**
   * @remarks
   * Specifies whether the model supports multiple tool calls in a single response.
   */
  capabilities?: PreviewOutputFileResponseBodyVersionCapabilities;
  /**
   * @remarks
   * The content revision number.
   * 
   * @example
   * 1
   */
  contentRevision?: number;
  /**
   * @remarks
   * Indicates whether the version is the latest version.
   * 
   * @example
   * true
   */
  isLatest?: boolean;
  /**
   * @remarks
   * The ID of the current latest version.
   * 
   * @example
   * exampleLatestVersionId
   */
  latestVersionId?: string;
  /**
   * @remarks
   * The read state of the version.
   * 
   * @example
   * AVAILABLE
   */
  readState?: string;
  /**
   * @remarks
   * The ID of the version that is actually read.
   * 
   * @example
   * exampleVersionId
   */
  selectedVersionId?: string;
  /**
   * @remarks
   * The ID of the message that generated this version.
   * 
   * @example
   * exampleMessageId
   */
  sourceMessageId?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2026-11-16T13:00:00+00:00
   */
  updatedAt?: string;
  /**
   * @remarks
   * The version serial number.
   * 
   * @example
   * 2
   */
  versionNo?: number;
  static names(): { [key: string]: string } {
    return {
      availability: 'availability',
      capabilities: 'capabilities',
      contentRevision: 'contentRevision',
      isLatest: 'isLatest',
      latestVersionId: 'latestVersionId',
      readState: 'readState',
      selectedVersionId: 'selectedVersionId',
      sourceMessageId: 'sourceMessageId',
      updatedAt: 'updatedAt',
      versionNo: 'versionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availability: 'string',
      capabilities: PreviewOutputFileResponseBodyVersionCapabilities,
      contentRevision: 'number',
      isLatest: 'boolean',
      latestVersionId: 'string',
      readState: 'string',
      selectedVersionId: 'string',
      sourceMessageId: 'string',
      updatedAt: 'string',
      versionNo: 'number',
    };
  }

  validate() {
    if(this.capabilities && typeof (this.capabilities as any).validate === 'function') {
      (this.capabilities as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewOutputFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The text content. This parameter is used for the CONTENT type.
   * 
   * @example
   * # Quarterly Review
   */
  content?: string;
  /**
   * @remarks
   * Indicates whether the preview is degraded to a download. A value of true indicates that the preview is degraded to a download and cannot be opened in an online previewer.
   * 
   * @example
   * false
   */
  degraded?: boolean;
  /**
   * @remarks
   * The expiration time of the download ticket.
   * 
   * @example
   * 2026-11-16T14:00:00+00:00
   */
  downloadExpiresAt?: string;
  /**
   * @remarks
   * The short-term signed download URL for the output. You can send a GET request to this URL before it expires.
   * 
   * @example
   * https://example.com/download/file
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The file name extension. This parameter is used for the OSS_IMM type.
   * 
   * @example
   * pptx
   */
  fileExt?: string;
  /**
   * @remarks
   * The modification time in ISO8601 format.
   * 
   * @example
   * 2026-11-16T13:00:00+00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The output name.
   * 
   * @example
   * Quarterly_Review.pptx
   */
  itemName?: string;
  /**
   * @remarks
   * The output item type. Valid values: ppt, html, document, picture, slides, video, audio, email, and others.
   * 
   * @example
   * ppt
   */
  itemType?: string;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * Invalid request parameters
   */
  message?: string;
  /**
   * @remarks
   * The output item ID.
   * 
   * @example
   * exampleOutputItemId
   */
  outputItemId?: string;
  /**
   * @remarks
   * The expiration time of the preview ticket.
   * 
   * @example
   * 2026-11-16T14:00:00+00:00
   */
  previewExpiresAt?: string;
  /**
   * @remarks
   * The preview type. Valid values: OSS_IMM, IMAGE, AUDIO, VIDEO, HTML, DING_TALK, VOICE_MEETING, and CONTENT.
   * 
   * @example
   * OSS_IMM
   */
  previewType?: string;
  /**
   * @remarks
   * The preview URL. This parameter is used for OSS_IMM, DING_TALK, and VOICE_MEETING.
   * 
   * @example
   * https://example.com/preview/document
   */
  previewUrl?: string;
  /**
   * @remarks
   * The read state. Valid values: AVAILABLE, PRUNED, PENDING, and UNVERSIONED.
   * 
   * @example
   * AVAILABLE
   */
  readState?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The list of slides for the slide deck output.
   * 
   * @example
   * []
   */
  slides?: PreviewOutputFileResponseBodySlides[];
  /**
   * @remarks
   * The reason why the content is unavailable.
   * 
   * @example
   * The output content is still being generated
   */
  unavailableReason?: string;
  /**
   * @remarks
   * The optimistic version number.
   */
  version?: PreviewOutputFileResponseBodyVersion;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      content: 'content',
      degraded: 'degraded',
      downloadExpiresAt: 'downloadExpiresAt',
      downloadUrl: 'downloadUrl',
      fileExt: 'fileExt',
      gmtModified: 'gmtModified',
      itemName: 'itemName',
      itemType: 'itemType',
      message: 'message',
      outputItemId: 'outputItemId',
      previewExpiresAt: 'previewExpiresAt',
      previewType: 'previewType',
      previewUrl: 'previewUrl',
      readState: 'readState',
      requestId: 'requestId',
      slides: 'slides',
      unavailableReason: 'unavailableReason',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      content: 'string',
      degraded: 'boolean',
      downloadExpiresAt: 'string',
      downloadUrl: 'string',
      fileExt: 'string',
      gmtModified: 'string',
      itemName: 'string',
      itemType: 'string',
      message: 'string',
      outputItemId: 'string',
      previewExpiresAt: 'string',
      previewType: 'string',
      previewUrl: 'string',
      readState: 'string',
      requestId: 'string',
      slides: { 'type': 'array', 'itemType': PreviewOutputFileResponseBodySlides },
      unavailableReason: 'string',
      version: PreviewOutputFileResponseBodyVersion,
    };
  }

  validate() {
    if(Array.isArray(this.slides)) {
      $dara.Model.validateArray(this.slides);
    }
    if(this.version && typeof (this.version as any).validate === 'function') {
      (this.version as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

