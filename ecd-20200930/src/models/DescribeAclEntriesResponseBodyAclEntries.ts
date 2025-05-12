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

