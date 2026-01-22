// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobResultsResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  exitCode?: number;
  /**
   * @example
   * MTU6MzA6MDEK
   */
  output?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BABC742E-04D7-5BA5-8A5F-7D9461D37B19
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exitCode: 'ExitCode',
      output: 'Output',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exitCode: 'number',
      output: 'string',
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

