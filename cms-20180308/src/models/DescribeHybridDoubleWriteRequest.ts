// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridDoubleWriteRequest extends $dara.Model {
  /**
   * @example
   * test-source
   */
  sourceNamespace?: string;
  /**
   * @example
   * 12706766**********
   */
  sourceUserId?: string;
  targetNamespace?: string;
  targetUserId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceNamespace: 'SourceNamespace',
      sourceUserId: 'SourceUserId',
      targetNamespace: 'TargetNamespace',
      targetUserId: 'TargetUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceNamespace: 'string',
      sourceUserId: 'string',
      targetNamespace: 'string',
      targetUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

