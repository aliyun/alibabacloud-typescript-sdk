// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetBucketLifecycleResponseBodyRuleExpiration } from "./GetBucketLifecycleResponseBodyRuleExpiration";


export class GetBucketLifecycleResponseBodyRule extends $dara.Model {
  /**
   * @remarks
   * The expiration time.
   */
  expiration?: GetBucketLifecycleResponseBodyRuleExpiration;
  /**
   * @remarks
   * The unique ID of the rule.
   * 
   * @example
   * 1
   */
  ID?: string;
  /**
   * @remarks
   * The prefix that is applied to the rule.
   * 
   * @example
   * image
   */
  prefix?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * *   **Enabled**: The rule is periodically executed.
   * *   **Disabled**: The rule is ignored.
   * 
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      expiration: 'Expiration',
      ID: 'ID',
      prefix: 'Prefix',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiration: GetBucketLifecycleResponseBodyRuleExpiration,
      ID: 'string',
      prefix: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.expiration && typeof (this.expiration as any).validate === 'function') {
      (this.expiration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

