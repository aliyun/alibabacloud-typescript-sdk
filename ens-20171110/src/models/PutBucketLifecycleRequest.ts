// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutBucketLifecycleRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to allow overlapping prefixes. Valid values:
   * 
   * - **true**: Overlapping prefixes are allowed.
   * 
   * - **false** (default): Overlapping prefixes are not allowed.
   * 
   * @example
   * false
   */
  allowSameActionOverlap?: boolean;
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
   * The date before which objects expire. The system applies the lifecycle rule to objects last modified before this date.
   * 
   * Use ISO 8601 format and UTC time. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * > ExpirationDays and CreatedBeforeDate are mutually exclusive. Specify one.
   * 
   * @example
   * 2023-10-12T05:45:00Z
   */
  createdBeforeDate?: string;
  /**
   * @remarks
   * The number of days after an object\\"s last modification when the lifecycle rule takes effect. Must be a positive integer greater than zero.
   * 
   * > ExpirationDays and CreatedBeforeDate are mutually exclusive. Specify one.
   * 
   * @example
   * 5
   */
  expirationDays?: number;
  /**
   * @remarks
   * The prefix that the rule applies to. You cannot set duplicate prefixes.
   * 
   * - If you specify a prefix, the rule applies only to objects in the bucket whose names start with that prefix.
   * 
   * - If you leave Prefix empty, the rule applies to all objects in the bucket.
   * 
   * @example
   * image
   */
  prefix?: string;
  /**
   * @remarks
   * A unique ID that identifies the rule. Maximum length is 255 bytes.
   * 
   * - Omit this parameter when creating a new rule. The system generates a unique ID automatically.
   * 
   * - Specify RuleId when updating an existing rule. The rule must exist. Otherwise, the call fails.
   * 
   * @example
   * b8f93xxxxx4881xxxxxc71d991
   */
  ruleId?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * - **Enabled**: The system runs the rule on schedule.
   * 
   * - **Disabled**: The system ignores the rule.
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
      allowSameActionOverlap: 'boolean',
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

