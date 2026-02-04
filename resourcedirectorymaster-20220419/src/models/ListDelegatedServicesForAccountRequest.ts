// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDelegatedServicesForAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member.
   * 
   * This parameter is required.
   * 
   * @example
   * 138660628348****
   */
  accountId?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      maxResults: 'number',
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

