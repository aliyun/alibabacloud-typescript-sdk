// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Token for the next query, an empty nextToken indicates there is no next page.
   * 
   * @example
   * BBBAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

