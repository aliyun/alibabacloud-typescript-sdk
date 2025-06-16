// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFullNatEntriesResponseBodyFullNatEntries } from "./ListFullNatEntriesResponseBodyFullNatEntries";


export class ListFullNatEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the FULLNAT entries that are queried.
   */
  fullNatEntries?: ListFullNatEntriesResponseBodyFullNatEntries[];
  /**
   * @remarks
   * The ID of the FULLNAT table to which the queried FULLNAT entries belong.
   * 
   * @example
   * fullnat-gw8fz23jezpbblf1j****
   */
  fullNatTableId?: string;
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The ID of the VPC NAT gateway.
   * 
   * @example
   * ngw-gw8054kn57y3hq3bv****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * Indicates whether the token for the next query exists. Valid values:
   * 
   * *   If the value of **NextToken** is empty, no next queries are sent.
   * *   If the value of **NextToken** is returned, the value indicates the token that is used for the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F03E41F6-1A74-311F-8D98-124EEE9F37B8
   */
  requestId?: string;
  /**
   * @remarks
   * The number of FULLNAT entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      fullNatEntries: 'FullNatEntries',
      fullNatTableId: 'FullNatTableId',
      maxResults: 'MaxResults',
      natGatewayId: 'NatGatewayId',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullNatEntries: { 'type': 'array', 'itemType': ListFullNatEntriesResponseBodyFullNatEntries },
      fullNatTableId: 'string',
      maxResults: 'number',
      natGatewayId: 'string',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.fullNatEntries)) {
      $dara.Model.validateArray(this.fullNatEntries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

