// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHybridDoubleWriteRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-target
   */
  namespace?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-source
   */
  sourceNamespace?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12706766********
   */
  sourceUserId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12706766********
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

