// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAIAnalysisRequest extends $dara.Model {
  analysisTool?: string;
  /**
   * @example
   * ecs_sysom
   */
  channel?: string;
  /**
   * @example
   * python_test
   */
  comms?: string;
  /**
   * @example
   * i-wz9dej066kii4goqxxxx
   */
  instance?: string;
  /**
   * @example
   * 2421,36547,10043
   */
  pids?: string;
  /**
   * @example
   * cn-shenzhen
   */
  region?: string;
  /**
   * @example
   * 2000
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      analysisTool: 'analysisTool',
      channel: 'channel',
      comms: 'comms',
      instance: 'instance',
      pids: 'pids',
      region: 'region',
      timeout: 'timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisTool: 'string',
      channel: 'string',
      comms: 'string',
      instance: 'string',
      pids: 'string',
      region: 'string',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

