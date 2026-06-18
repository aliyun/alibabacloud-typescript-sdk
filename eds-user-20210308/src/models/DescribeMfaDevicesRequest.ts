// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMfaDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * The AD domain name.
   * 
   * @example
   * cn.misumi.pri
   */
  adDomain?: string;
  /**
   * @remarks
   * The business channel.
   * 
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @remarks
   * An array of end user usernames.
   * 
   * @example
   * test
   */
  endUserIds?: string[];
  filter?: string;
  /**
   * @remarks
   * The maximum number of results to return per page. Valid range: 1–500.<br>Default value: 100.<br>
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of results. This value is the `NextToken` returned from a previous call.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * An array of serial numbers for virtual MFA devices.
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

