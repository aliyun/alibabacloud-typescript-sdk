// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserAnalyzerRequest extends $dara.Model {
  /**
   * @remarks
   * The Associated information,output properties based on hierarchy.
   * * **all**: Outputs associated app information
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

