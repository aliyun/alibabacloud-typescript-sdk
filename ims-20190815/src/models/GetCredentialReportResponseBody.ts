// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCredentialReportResponseBody extends $dara.Model {
  content?: string;
  generatedTime?: string;
  isTruncated?: string;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      generatedTime: 'GeneratedTime',
      isTruncated: 'IsTruncated',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      generatedTime: 'string',
      isTruncated: 'string',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

