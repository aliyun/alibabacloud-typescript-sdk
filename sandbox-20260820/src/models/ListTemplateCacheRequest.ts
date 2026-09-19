// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplateCacheRequest extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  status?: string;
  teamID?: string;
  templateID?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      status: 'status',
      teamID: 'teamID',
      templateID: 'templateID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      status: 'string',
      teamID: 'string',
      templateID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

