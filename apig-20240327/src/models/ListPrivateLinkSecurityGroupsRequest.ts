// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrivateLinkSecurityGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The next token.
   * 
   * @example
   * next-token-xxxxxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the VPC owned by the currently authorized user. The candidate security groups must belong to this VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-xxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

