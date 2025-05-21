// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSiteLogsResponseBodySiteLogDetails } from "./DescribeSiteLogsResponseBodySiteLogDetails";


export class DescribeSiteLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  siteLogDetails?: DescribeSiteLogsResponseBodySiteLogDetails[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      siteLogDetails: 'SiteLogDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      siteLogDetails: { 'type': 'array', 'itemType': DescribeSiteLogsResponseBodySiteLogDetails },
    };
  }

  validate() {
    if(Array.isArray(this.siteLogDetails)) {
      $dara.Model.validateArray(this.siteLogDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

