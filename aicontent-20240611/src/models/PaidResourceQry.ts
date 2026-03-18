// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PaidResourceQry extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  resourceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      resourceStatus: 'resourceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

