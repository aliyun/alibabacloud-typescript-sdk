// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBucketLifecycleRequest extends $dara.Model {
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
   * The ID of the rule. If this parameter is not specified, all rules are removed.
   * 
   * @example
   * 1
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

