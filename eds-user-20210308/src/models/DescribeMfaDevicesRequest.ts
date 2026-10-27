// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMfaDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * The address of the AD office network.
   * 
   * @example
   * cn.misumi.pri
   */
  adDomain?: string;
  /**
   * @remarks
   * The channel.
   * 
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @remarks
   * The list of usernames of the convenience accounts.
   * 
   * @example
   * test
   */
  endUserIds?: string[];
  /**
   * @remarks
   * Filters the virtual MFA devices by convenience account username.
   * 
   * @example
   * alice
   */
  filter?: string;
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 1 to 500. Default value: 100.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token. Set the value to the NextToken value returned from the previous API call.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of serial numbers of the virtual MFA devices.
   * 
   * @example
   * c2d9ae94-a64b-4a0d-8024-9519ca50****
   */
  serialNumbers?: string[];
  static names(): { [key: string]: string } {
    return {
      adDomain: 'AdDomain',
      businessChannel: 'BusinessChannel',
      endUserIds: 'EndUserIds',
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      serialNumbers: 'SerialNumbers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDomain: 'string',
      businessChannel: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      filter: 'string',
      maxResults: 'number',
      nextToken: 'string',
      serialNumbers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.endUserIds)) {
      $dara.Model.validateArray(this.endUserIds);
    }
    if(Array.isArray(this.serialNumbers)) {
      $dara.Model.validateArray(this.serialNumbers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

