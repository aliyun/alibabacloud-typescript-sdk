// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SenderStatisticsDetailByParamResponseBodyDataMailDetail } from "./SenderStatisticsDetailByParamResponseBodyDataMailDetail";


export class SenderStatisticsDetailByParamResponseBodyData extends $dara.Model {
  mailDetail?: SenderStatisticsDetailByParamResponseBodyDataMailDetail[];
  static names(): { [key: string]: string } {
    return {
      mailDetail: 'mailDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mailDetail: { 'type': 'array', 'itemType': SenderStatisticsDetailByParamResponseBodyDataMailDetail },
    };
  }

  validate() {
    if(Array.isArray(this.mailDetail)) {
      $dara.Model.validateArray(this.mailDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

