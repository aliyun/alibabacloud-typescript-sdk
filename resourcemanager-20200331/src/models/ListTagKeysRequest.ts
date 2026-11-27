// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagKeysRequest extends $dara.Model {
  /**
   * @remarks
   * The tag key for fuzzy match.
   * 
   * @example
   * team
   */
  keyFilter?: string;
  /**
   * @remarks
   * The maximum number of entries to return for a single request. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource type. Valid value: Account, which indicates a member of the resource directory.
   * 
   * This parameter is required.
   * 
   * @example
   * Account
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      keyFilter: 'KeyFilter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyFilter: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

