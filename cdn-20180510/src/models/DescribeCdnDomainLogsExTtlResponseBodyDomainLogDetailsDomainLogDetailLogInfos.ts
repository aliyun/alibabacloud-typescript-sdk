// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail } from "./DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail";


export class DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetailsDomainLogDetailLogInfos extends $dara.Model {
  logInfoDetail?: DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail[];
  static names(): { [key: string]: string } {
    return {
      logInfoDetail: 'LogInfoDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logInfoDetail: { 'type': 'array', 'itemType': DescribeCdnDomainLogsExTtlResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail },
    };
  }

  validate() {
    if(Array.isArray(this.logInfoDetail)) {
      $dara.Model.validateArray(this.logInfoDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

