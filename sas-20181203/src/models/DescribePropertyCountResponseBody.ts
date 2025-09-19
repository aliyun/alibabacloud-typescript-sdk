// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertyCountResponseBody extends $dara.Model {
  agentlessLlmService?: number;
  agentlessScaAiComponent?: number;
  /**
   * @remarks
   * The number of startup items.
   * 
   * @example
   * 3
   */
  autorun?: number;
  /**
   * @remarks
   * The number of scheduled tasks.
   * 
   * @example
   * 123
   */
  cron?: number;
  /**
   * @remarks
   * The number of databases.
   * 
   * @example
   * 2
   */
  database?: number;
  /**
   * @remarks
   * The number of kernel modules.
   * 
   * @example
   * 4
   */
  lkm?: number;
  /**
   * @remarks
   * The number of ports.
   * 
   * @example
   * 22
   */
  port?: number;
  /**
   * @remarks
   * The number of processes.
   * 
   * @example
   * 367
   */
  process?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 7E0618A9-D5EF-4220-9471-C42B5E92719F
   */
  requestId?: string;
  /**
   * @remarks
   * The number of middleware assets.
   * 
   * @example
   * 112
   */
  sca?: number;
  /**
   * @remarks
   * The number of software assets.
   * 
   * @example
   * 111
   */
  software?: number;
  /**
   * @remarks
   * The number of accounts.
   * 
   * @example
   * 214
   */
  user?: number;
  /**
   * @remarks
   * The number of websites.
   * 
   * @example
   * 65
   */
  web?: number;
  /**
   * @remarks
   * The number of web services.
   * 
   * @example
   * 8
   */
  webserver?: number;
  static names(): { [key: string]: string } {
    return {
      agentlessLlmService: 'AgentlessLlmService',
      agentlessScaAiComponent: 'AgentlessScaAiComponent',
      autorun: 'Autorun',
      cron: 'Cron',
      database: 'Database',
      lkm: 'Lkm',
      port: 'Port',
      process: 'Process',
      requestId: 'RequestId',
      sca: 'Sca',
      software: 'Software',
      user: 'User',
      web: 'Web',
      webserver: 'Webserver',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentlessLlmService: 'number',
      agentlessScaAiComponent: 'number',
      autorun: 'number',
      cron: 'number',
      database: 'number',
      lkm: 'number',
      port: 'number',
      process: 'number',
      requestId: 'string',
      sca: 'number',
      software: 'number',
      user: 'number',
      web: 'number',
      webserver: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

