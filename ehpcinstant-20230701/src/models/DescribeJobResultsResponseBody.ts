// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The exit code of the command.
   * 
   * - For Linux instances, this is the exit code of the shell command.
   * 
   * - For Windows instances, this is the exit code of the batch or PowerShell command.
   * 
   * @example
   * 0
   */
  exitCode?: number;
  /**
   * @remarks
   * The output of the command. If ContentEncoding is set to PlainText, the original output is returned. If ContentEncoding is set to Base64, the Base64-encoded output is returned.
   * 
   * @example
   * MTU6MzA6MDEK
   */
  output?: string;
  /**
   * @remarks
   * The ID of the request.
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

