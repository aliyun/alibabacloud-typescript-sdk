// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutBucketLifecycleRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow overlapped prefixes. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  allowSameActionOverlap?: string;
  /**
   * @remarks
   * The name of the bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  bucketName?: string;
  /**
   * @remarks
   * The expiration time. EOS executes a lifecycle rule for objects that were last updated before the expiration time.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * >  ExpirationDays and CreateBeforeDate are mutually exclusive.
   * 
   * @example
   * 2023-10-12T05:45:00Z
   */
  createdBeforeDate?: string;
  /**
   * @remarks
   * The number of days from when the objects were last modified to when the lifecycle rule takes effect. The value must be a positive integer that is greater than 0.
   * 
   * >  ExpirationDays and CreateBeforeDate are mutually exclusive.
   * 
   * @example
   * 5
   */
  expirationDays?: number;
  /**
   * @remarks
   * The prefix of a object name. The prefix must be unique.
   * 
   * *   If you specify a prefix, the rule applies only to objects in the bucket that match the prefix.
   * *   If you do not specify a prefix, the rule applies to all objects in the bucket.
   * 
   * @example
   * image
   */
  prefix?: string;
  /**
   * @remarks
   * The unique ID of the rule. The ID of a lifecycle rule can be up to 255 bytes in length.
   * 
   * *   You do not need to configure this parameter when you create a rule. The system automatically generates a unique ID.
   * *   When you update a rule, you need to specify this parameter. Make sure that the rule specified by RuleId exists. Otherwise, an error occurs.
   * 
   * @example
   * 1
   */
  ruleId?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * *   **Enabled**
   * *   **Disabled**
   * 
   * This parameter is required.
   * 
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      allowSameActionOverlap: 'AllowSameActionOverlap',
      bucketName: 'BucketName',
      createdBeforeDate: 'CreatedBeforeDate',
      expirationDays: 'ExpirationDays',
      prefix: 'Prefix',
      ruleId: 'RuleId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowSameActionOverlap: 'string',
      bucketName: 'string',
      createdBeforeDate: 'string',
      expirationDays: 'number',
      prefix: 'string',
      ruleId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

