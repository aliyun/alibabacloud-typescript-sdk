// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBucketLifecycleResponseBodyRuleExpiration extends $dara.Model {
  /**
   * @remarks
   * The expiration date.
   * 
   * @example
   * yyy-MM-DDThh:mm:ssZ
   */
  createdBeforeDate?: string;
  /**
   * @remarks
   * The validity period, in days.
   * 
   * @example
   * 5
   */
  days?: string;
  static names(): { [key: string]: string } {
    return {
      createdBeforeDate: 'CreatedBeforeDate',
      days: 'Days',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBeforeDate: 'string',
      days: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetBucketLifecycleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A2583E8B-B930-4F59-ADC0-0E209A90C46E
   */
  requestId?: string;
  /**
   * @remarks
   * The detailed information about the rule.
   */
  rule?: GetBucketLifecycleResponseBodyRule[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rule: { 'type': 'array', 'itemType': GetBucketLifecycleResponseBodyRule },
    };
  }

  validate() {
    if(Array.isArray(this.rule)) {
      $dara.Model.validateArray(this.rule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

