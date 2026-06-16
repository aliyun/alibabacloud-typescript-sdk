// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CodeInterpreterSessionConfig extends $dara.Model {
  /**
   * @remarks
   * The environment variables for the session, specified as key-value pairs.
   * 
   * @example
   * PYTHONPATH=/app,DEBUG=true
   */
  environment?: { [key: string]: string };
  /**
   * @remarks
   * The timeout for the session, in seconds.
   * 
   * @example
   * 3600
   */
  timeout?: number;
  /**
   * @remarks
   * The working directory path for the session.
   * 
   * @example
   * /app
   */
  workingDirectory?: string;
  static names(): { [key: string]: string } {
    return {
      environment: 'environment',
      timeout: 'timeout',
      workingDirectory: 'workingDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      timeout: 'number',
      workingDirectory: 'string',
    };
  }

  validate() {
    if(this.environment) {
      $dara.Model.validateMap(this.environment);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

