// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEdgeMachineActiveProcessResponseBody extends $dara.Model {
  /**
   * @remarks
   * The activation progress list.
   * 
   * @example
   * [{\"content\":\"步骤 \"颁发激活凭证\" 执行开始\",\"id\":0,\"level\":3,\"timestamp\":1625994913000},{\"content\":\"步骤 \"颁发激活凭证\" 执行成功\",\"id\":1,\"level\":3,\"timestamp\":1625994914000},{\"content\":\"步骤 \"初始化主机配置\" 执行开始\",\"id\":2,\"level\":3,\"timestamp\":1625994975000},{\"content\":\"步骤 \"初始化主机配置\" 执行成功\",\"id\":3,\"level\":3,\"timestamp\":1625994975000}]
   */
  logs?: string;
  /**
   * @remarks
   * The activation progress.
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * b62796a8-c5a6-4d3f-beb2-7650e4309cb1
   */
  requestId?: string;
  /**
   * @remarks
   * The activation status.
   * 
   * @example
   * ACTIVATED
   */
  state?: string;
  /**
   * @remarks
   * The activation step.
   * 
   * @example
   * 步骤 \"初始化主机配置\" 执行成功
   */
  step?: string;
  static names(): { [key: string]: string } {
    return {
      logs: 'logs',
      progress: 'progress',
      requestId: 'request_id',
      state: 'state',
      step: 'step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: 'string',
      progress: 'number',
      requestId: 'string',
      state: 'string',
      step: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

