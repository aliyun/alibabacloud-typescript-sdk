// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAclEntriesResponseBodyAclEntries extends $dara.Model {
  /**
   * @remarks
   * The ACL type.
   * 
   * Valid values:
   * 
   * *   allow: whitelist
   * *   disable: blacklist
   * 
   * @example
   * allow
   */
  policy?: string;
  /**
   * @remarks
   * The ID of the instance to which the ACL applies. You can specify an office network ID or a cloud computer ID.
   * 
   * @example
   * ecd-fsafeweh***
   */
  sourceId?: string;
  /**
   * @remarks
   * The granularity of the ACL.
   * 
   * Valid values:
   * 
   * *   desktop: cloud computer
   * *   vpc: office network
   * 
   * @example
   * desktop
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: 'string',
      sourceId: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ACL entries.
   */
  aclEntries?: DescribeAclEntriesResponseBodyAclEntries[];
  /**
   * @remarks
   * The token that is used to start the next query. If the value of this parameter is empty, all results are returned.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aclEntries: 'AclEntries',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntries: { 'type': 'array', 'itemType': DescribeAclEntriesResponseBodyAclEntries },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aclEntries)) {
      $dara.Model.validateArray(this.aclEntries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

