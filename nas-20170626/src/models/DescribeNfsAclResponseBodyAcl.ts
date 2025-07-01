// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNfsAclResponseBodyAcl extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the NFS ACL feature is enabled.
   * 
   * *   true: The NFS ACL feature is enabled.
   * *   false: The NFS ACL feature is disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

