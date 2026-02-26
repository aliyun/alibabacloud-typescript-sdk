// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InputOSS extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * test-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * The match expressions.
   */
  matchExpressions?: string[];
  /**
   * @remarks
   * The object key prefix.
   * 
   * @example
   * test-object
   */
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      matchExpressions: 'MatchExpressions',
      prefix: 'Prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      matchExpressions: { 'type': 'array', 'itemType': 'string' },
      prefix: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.matchExpressions)) {
      $dara.Model.validateArray(this.matchExpressions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

