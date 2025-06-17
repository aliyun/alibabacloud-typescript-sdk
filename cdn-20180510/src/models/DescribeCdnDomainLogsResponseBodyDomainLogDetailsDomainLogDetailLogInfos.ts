// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail } from "./DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail";


export class DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfos extends $dara.Model {
  logInfoDetail?: DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail[];
  static names(): { [key: string]: string } {
    return {
      logInfoDetail: 'LogInfoDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logInfoDetail: { 'type': 'array', 'itemType': DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail },
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

