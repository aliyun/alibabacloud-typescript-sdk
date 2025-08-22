// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTerraformProviderVersionsRequest extends $dara.Model {
  keyword?: string;
  maxResults?: number;
  nextToken?: string;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      usage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

