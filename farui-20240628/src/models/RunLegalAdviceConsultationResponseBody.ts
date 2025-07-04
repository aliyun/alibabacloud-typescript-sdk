// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunLegalAdviceConsultationResponseBodyUsage } from "./RunLegalAdviceConsultationResponseBodyUsage";


export class RunLegalAdviceConsultationResponseBody extends $dara.Model {
  /**
   * @example
   * Request.Signature.Error
   */
  code?: string;
  message?: string;
  /**
   * @example
   * 744419D0-671A-5997-9840-E8AE48356194
   */
  requestId?: string;
  responseMarkdown?: string;
  /**
   * @example
   * 1
   */
  round?: number;
  status?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  usage?: RunLegalAdviceConsultationResponseBodyUsage;
  contents?: string;
  extra?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      responseMarkdown: 'ResponseMarkdown',
      round: 'Round',
      status: 'Status',
      success: 'Success',
      usage: 'Usage',
      contents: 'contents',
      extra: 'extra',
      httpStatusCode: 'httpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      responseMarkdown: 'string',
      round: 'number',
      status: 'string',
      success: 'boolean',
      usage: RunLegalAdviceConsultationResponseBodyUsage,
      contents: 'string',
      extra: 'string',
      httpStatusCode: 'string',
    };
  }

  validate() {
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

