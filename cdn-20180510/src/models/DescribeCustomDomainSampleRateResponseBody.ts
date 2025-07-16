// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomDomainSampleRateResponseBodyContentDomainContent extends $dara.Model {
  domainName?: string;
  sampleRate?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      sampleRate: 'SampleRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      sampleRate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeCustomDomainSampleRateResponseBody extends $dara.Model {
  content?: DescribeCustomDomainSampleRateResponseBodyContent;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: DescribeCustomDomainSampleRateResponseBodyContent,
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

