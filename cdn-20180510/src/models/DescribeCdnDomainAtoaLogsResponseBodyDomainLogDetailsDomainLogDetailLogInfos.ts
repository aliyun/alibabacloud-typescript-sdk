// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnDomainAtoaLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail } from "./DescribeCdnDomainAtoaLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail";


export class DescribeCdnDomainAtoaLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfos extends $dara.Model {
  logInfoDetail?: DescribeCdnDomainAtoaLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail[];
  static names(): { [key: string]: string } {
    return {
      logInfoDetail: 'LogInfoDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logInfoDetail: { 'type': 'array', 'itemType': DescribeCdnDomainAtoaLogsResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail },
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

