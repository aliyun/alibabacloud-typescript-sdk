// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InvestigationInfo } from "./InvestigationInfo";


export class CsiGetFileInfoResponseBody extends $dara.Model {
  investigationInfo?: InvestigationInfo;
  /**
   * @example
   * https://data.aliyunpds.com/hz22%2F5d5b986facbec311ef844c25954f96821497b383%2F5d5b986f955410dd991646bb87c6b4e899eff525?Expires=xxx&OSSAccessKeyId=xxx&Signature=xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      investigationInfo: 'investigation_info',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      investigationInfo: InvestigationInfo,
      url: 'string',
    };
  }

  validate() {
    if(this.investigationInfo && typeof (this.investigationInfo as any).validate === 'function') {
      (this.investigationInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

