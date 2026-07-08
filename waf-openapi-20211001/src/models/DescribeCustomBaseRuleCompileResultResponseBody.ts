// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomBaseRuleCompileResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 58FDF266-3D56-5DE8-91E0-96A26BAB****
   */
  requestId?: string;
  /**
   * @remarks
   * The compilation result. Valid values:
   * 
   * - **success**: The rule is successfully compiled.
   * 
   * - **compiling**: The rule is being compiled.
   * 
   * - **failed**: The rule failed to be compiled.
   * 
   * @example
   * success
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

