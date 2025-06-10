// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GenerateReportResponseBodyData } from "./GenerateReportResponseBodyData";


export class GenerateReportResponseBody extends $dara.Model {
  data?: GenerateReportResponseBodyData[];
  /**
   * @example
   * imageUrl download failed
   */
  message?: string;
  /**
   * @example
   * 528B54D4-3AAB-47CF-B6CE-0C2A2FB4C7C2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GenerateReportResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

