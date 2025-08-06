// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFileIdPlayStatisByOriginResponseBodyFilePlayStatisList extends $dara.Model {
  fileId?: string;
  flux?: number;
  playCount?: number;
  requestCount?: number;
  statisTime?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      flux: 'Flux',
      playCount: 'PlayCount',
      requestCount: 'RequestCount',
      statisTime: 'StatisTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      flux: 'number',
      playCount: 'number',
      requestCount: 'number',
      statisTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileIdPlayStatisByOriginResponseBody extends $dara.Model {
  filePlayStatisList?: DescribeFileIdPlayStatisByOriginResponseBodyFilePlayStatisList[];
  hasNext?: boolean;
  requestId?: string;
  scrollToken?: string;
  static names(): { [key: string]: string } {
    return {
      filePlayStatisList: 'FilePlayStatisList',
      hasNext: 'HasNext',
      requestId: 'RequestId',
      scrollToken: 'ScrollToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePlayStatisList: { 'type': 'array', 'itemType': DescribeFileIdPlayStatisByOriginResponseBodyFilePlayStatisList },
      hasNext: 'boolean',
      requestId: 'string',
      scrollToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filePlayStatisList)) {
      $dara.Model.validateArray(this.filePlayStatisList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

