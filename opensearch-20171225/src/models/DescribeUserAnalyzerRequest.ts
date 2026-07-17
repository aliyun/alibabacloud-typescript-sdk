// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserAnalyzerRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies related information to return. The properties are returned based on the specified level.
   * 
   * - all: Returns information about the associated application.
   * 
   * @example
   * all
   */
  with?: string;
  static names(): { [key: string]: string } {
    return {
      with: 'with',
    };
  }

  static types(): { [key: string]: any } {
    return {
      with: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

