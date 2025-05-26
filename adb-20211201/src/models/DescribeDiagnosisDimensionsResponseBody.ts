// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosisDimensionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried source IP addresses.
   */
  clientIps?: string[];
  /**
   * @remarks
   * The queried database names.
   */
  databases?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DEA97C6B-D7A4-5E69-9EFC-D7F88737CED5
   */
  requestId?: string;
  /**
   * @remarks
   * The queried resource group names.
   */
  resourceGroups?: string[];
  /**
   * @remarks
   * The queried usernames.
   */
  userNames?: string[];
  static names(): { [key: string]: string } {
    return {
      clientIps: 'ClientIps',
      databases: 'Databases',
      requestId: 'RequestId',
      resourceGroups: 'ResourceGroups',
      userNames: 'UserNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIps: { 'type': 'array', 'itemType': 'string' },
      databases: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      resourceGroups: { 'type': 'array', 'itemType': 'string' },
      userNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.clientIps)) {
      $dara.Model.validateArray(this.clientIps);
    }
    if(Array.isArray(this.databases)) {
      $dara.Model.validateArray(this.databases);
    }
    if(Array.isArray(this.resourceGroups)) {
      $dara.Model.validateArray(this.resourceGroups);
    }
    if(Array.isArray(this.userNames)) {
      $dara.Model.validateArray(this.userNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

