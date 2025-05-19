// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridDoubleWriteResponseBodyResult extends $dara.Model {
  /**
   * @example
   * test-target
   */
  namespace?: string;
  /**
   * @example
   * test-source
   */
  sourceNamespace?: string;
  /**
   * @example
   * 12706766**********
   */
  sourceUserId?: number;
  /**
   * @example
   * 11234766**********
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      sourceNamespace: 'SourceNamespace',
      sourceUserId: 'SourceUserId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      sourceNamespace: 'string',
      sourceUserId: 'number',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

