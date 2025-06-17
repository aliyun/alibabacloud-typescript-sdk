// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnDomainLogsResponseBodyDomainLogDetails } from "./DescribeCdnDomainLogsResponseBodyDomainLogDetails";


export class DescribeCdnDomainLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A set of DomainLogDetail data.
   */
  domainLogDetails?: DescribeCdnDomainLogsResponseBodyDomainLogDetails;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainLogDetails: 'DomainLogDetails',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainLogDetails: DescribeCdnDomainLogsResponseBodyDomainLogDetails,
      requestId: 'string',
    };
  }

  validate() {
    if(this.domainLogDetails && typeof (this.domainLogDetails as any).validate === 'function') {
      (this.domainLogDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

