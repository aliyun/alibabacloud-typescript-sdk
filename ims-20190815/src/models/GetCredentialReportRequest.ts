// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCredentialReportRequest extends $dara.Model {
  maxItems?: string;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxItems: 'MaxItems',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxItems: 'string',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

