// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBiddingDocInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Bidding document content
   * 
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @remarks
   * Format
   * 
   * @example
   * markdown
   * html
   */
  contentFormat?: string;
  /**
   * @remarks
   * File type.
   * 
   * @example
   * outline
   * bidding
   */
  contentType?: string;
  /**
   * @remarks
   * Task status
   * 
   * @example
   * 0-waiting、1-running、2-success、3-pause、4-fail
   */
  status?: number;
  /**
   * @remarks
   * Current status
   * 
   * @example
   * analysis
   * writing
   */
  step?: string;
  /**
   * @remarks
   * Task ID
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @remarks
   * Tender document URL
   * 
   * @example
   * http://xxx
   */
  tenderDocUrl?: string;
  /**
   * @remarks
   * Tender document file type
   * 
   * @example
   * pdf
   * docx
   */
  tenderFileType?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentFormat: 'ContentFormat',
      contentType: 'ContentType',
      status: 'Status',
      step: 'Step',
      taskId: 'TaskId',
      tenderDocUrl: 'TenderDocUrl',
      tenderFileType: 'TenderFileType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentFormat: 'string',
      contentType: 'string',
      status: 'number',
      step: 'string',
      taskId: 'string',
      tenderDocUrl: 'string',
      tenderFileType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBiddingDocInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * successful
   */
  code?: string;
  /**
   * @remarks
   * Business data
   */
  data?: GetBiddingDocInfoResponseBodyData;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error description
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F2F366D6-E9FE-1006-BB70-2C650896AAB5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetBiddingDocInfoResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

