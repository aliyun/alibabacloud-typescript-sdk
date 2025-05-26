// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InputOSS extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bucket?: string;
  matchExpressions?: string[];
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

