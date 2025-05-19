// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHybridDoubleWriteRequest extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      sourceNamespace: 'SourceNamespace',
      sourceUserId: 'SourceUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceNamespace: 'string',
      sourceUserId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

