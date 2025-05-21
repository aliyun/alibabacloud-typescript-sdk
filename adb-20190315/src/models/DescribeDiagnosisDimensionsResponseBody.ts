// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosisDimensionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The source IP addresses.
   */
  clientIps?: string[];
  /**
   * @remarks
   * The databases.
   */
  databases?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E0B56BCD-1BED-30EC-8CAF-1D1E5F******
   */
  requestId?: string;
  /**
   * @remarks
   * The resource groups.
   */
  resourceGroups?: string[];
  /**
   * @remarks
   * The usernames.
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

