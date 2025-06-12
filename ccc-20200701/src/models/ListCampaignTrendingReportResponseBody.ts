// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCampaignTrendingReportResponseBodyData } from "./ListCampaignTrendingReportResponseBodyData";


export class ListCampaignTrendingReportResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListCampaignTrendingReportResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * 6CCEF32F-8614-535F-A1D9-D85B8C0DC4F0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListCampaignTrendingReportResponseBodyData },
      httpStatusCode: 'number',
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

