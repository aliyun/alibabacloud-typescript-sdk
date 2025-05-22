// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMfaDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * The domain of the Active Directory (AD) workspace.
   * 
   * @example
   * cn.misumi.pri
   */
  adDomain?: string;
  /**
   * @remarks
   * The usernames of the convenience users.
   * 
   * @example
   * test
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: 1 to 500.\\
   * Default value: 100.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Set the value to the token that is obtained from the previous query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The serial numbers of the virtual MFA devices.
   * 
   * @example
   * c2d9ae94-a64b-4a0d-8024-9519ca50****
   */
  serialNumbers?: string[];
  static names(): { [key: string]: string } {
    return {
      adDomain: 'AdDomain',
      endUserIds: 'EndUserIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      serialNumbers: 'SerialNumbers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDomain: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
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

