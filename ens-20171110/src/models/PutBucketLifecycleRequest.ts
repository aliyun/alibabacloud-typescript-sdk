// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutBucketLifecycleRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow overlapping prefixes. Valid values:
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
   * The bucket name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  bucketName?: string;
  /**
   * @remarks
   * The expiration date. The system performs lifecycle operations on objects that were last modified before this date.
   * 
   * The date must be specified in the ISO 8601 standard and in UTC. The format is yyyy-MM-ddTHH:mm:ssZ.
   * 
   * >ExpirationDays and CreatedBeforeDate are mutually exclusive. You must specify one of them.
   * 
   * @example
   * 2023-10-12T05:45:00Z
   */
  createdBeforeDate?: string;
  /**
   * @remarks
   * The number of days after the last modification time of an object before the lifecycle rule takes effect. The value must be a positive integer greater than 0.
   * 
   * >ExpirationDays and CreatedBeforeDate are mutually exclusive. You must specify one of them.
   * 
   * @example
   * 5
   */
  expirationDays?: number;
  /**
   * @remarks
   * The prefix to which the rule applies. You cannot specify the same prefix for multiple rules.
   * 
   * - If you specify a prefix, the rule applies only to objects whose names match the prefix in the bucket.
   * 
   * - If you leave the prefix empty, the rule applies to all objects in the bucket.
   * 
   * @example
   * image
   */
  prefix?: string;
  /**
   * @remarks
   * The unique ID that identifies the rule. The ID can be up to 255 bytes in length.
   * 
   * - You do not need to specify this parameter when you create a rule. The system automatically generates a unique ID.
   * 
   * - You must specify the RuleId when you update an existing rule. The rule corresponding to the RuleId must exist. Otherwise, an error is returned.
   * 
   * @example
   * b8f93xxxxx4881xxxxxc71d991
   */
  ruleId?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * - **Enabled**: The rule is executed periodically.
   * 
   * - **Disabled**: The rule is ignored.
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

