// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiKeysRequest extends $dara.Model {
  apiKeyId?: string;
  description?: string;
  maxResults?: number;
  nextToken?: string;
  skip?: number;
  uid?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'apiKeyId',
      description: 'description',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      skip: 'skip',
      uid: 'uid',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'string',
      description: 'string',
      maxResults: 'number',
      nextToken: 'string',
      skip: 'number',
      uid: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

