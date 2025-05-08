// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBucketLifecycleRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * tese
   */
  bucketName?: string;
  /**
   * @remarks
   * The ID of the rule that you want to query. If this parameter is not specified, all rules are returned.
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

