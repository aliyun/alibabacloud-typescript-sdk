// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCustomDomainSampleRateResponseBodyContentDomainContent } from "./DescribeCustomDomainSampleRateResponseBodyContentDomainContent";


export class DescribeCustomDomainSampleRateResponseBodyContent extends $dara.Model {
  domainContent?: DescribeCustomDomainSampleRateResponseBodyContentDomainContent[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainContent: 'DomainContent',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainContent: { 'type': 'array', 'itemType': DescribeCustomDomainSampleRateResponseBodyContentDomainContent },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.domainContent)) {
      $dara.Model.validateArray(this.domainContent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

