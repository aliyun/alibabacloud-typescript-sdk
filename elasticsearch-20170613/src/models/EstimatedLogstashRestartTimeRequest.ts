// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EstimatedLogstashRestartTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The restart parameters, including the restart type, target nodes, blue-green deployment options, and concurrency settings.
   * 
   * @example
   * {"restartType":"nodeIp","nodes":["172.16.xx.xx"],"blueGreenDep":true}
   */
  body?: string;
  /**
   * @remarks
   * Specifies whether to forcibly restart the instance. Default value: false.
   * 
   * @example
   * false
   */
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      force: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

