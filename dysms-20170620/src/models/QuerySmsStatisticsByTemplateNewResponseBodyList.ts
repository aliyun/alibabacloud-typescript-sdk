// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySmsStatisticsByTemplateNewResponseBodyListSmsStatisticsResponse } from "./QuerySmsStatisticsByTemplateNewResponseBodyListSmsStatisticsResponse";


export class QuerySmsStatisticsByTemplateNewResponseBodyList extends $dara.Model {
  smsStatisticsResponse?: QuerySmsStatisticsByTemplateNewResponseBodyListSmsStatisticsResponse[];
  static names(): { [key: string]: string } {
    return {
      smsStatisticsResponse: 'SmsStatisticsResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      smsStatisticsResponse: { 'type': 'array', 'itemType': QuerySmsStatisticsByTemplateNewResponseBodyListSmsStatisticsResponse },
    };
  }

  validate() {
    if(Array.isArray(this.smsStatisticsResponse)) {
      $dara.Model.validateArray(this.smsStatisticsResponse);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

