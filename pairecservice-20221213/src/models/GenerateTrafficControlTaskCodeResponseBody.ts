// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateTrafficControlTaskCodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The generated Flink code.
   * 
   * @example
   * Create Table xxx.......
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the engine configuration for the pre-release environment is incomplete.
   * 
   * @example
   * False
   */
  preNeedConfig?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      preNeedConfig: 'PreNeedConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      preNeedConfig: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

