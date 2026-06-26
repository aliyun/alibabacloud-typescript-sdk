// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserPoolClientsRequest extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  userPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      userPoolName: 'UserPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      userPoolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

