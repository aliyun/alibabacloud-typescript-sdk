// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBiddingDocInfoResponseBodyData extends $dara.Model {
  content?: string;
  /**
   * @example
   * markdown
   * html
   */
  contentFormat?: string;
  /**
   * @example
   * outline
   * bidding
   */
  contentType?: string;
  /**
   * @example
   * 0-waiting、1-running、2-success、3-pause、4-fail
   */
  status?: number;
  /**
   * @example
   * analysis
   * writing
   */
  step?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @example
   * http://xxx
   */
  tenderDocUrl?: string;
  /**
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
   * @example
   * successful
   */
  code?: string;
  data?: GetBiddingDocInfoResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
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

