// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HighCodeDeployRequest extends $dara.Model {
  /**
   * @example
   * 智能客服agent
   */
  agentDesc?: string;
  /**
   * @example
   * 2000013
   */
  agentId?: string;
  /**
   * @example
   * mma_test_02
   */
  agentName?: string;
  /**
   * @example
   * xxxxx.whl
   */
  sourceCodeName?: string;
  /**
   * @example
   * https://bailian-application-developer-code.oss-cn-beijing.aliyuncs.com/xxxxx.whl
   */
  sourceCodeOssUrl?: string;
  /**
   * @example
   * 0
   */
  telemetryEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      agentDesc: 'agentDesc',
      agentId: 'agentId',
      agentName: 'agentName',
      sourceCodeName: 'sourceCodeName',
      sourceCodeOssUrl: 'sourceCodeOssUrl',
      telemetryEnabled: 'telemetryEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentDesc: 'string',
      agentId: 'string',
      agentName: 'string',
      sourceCodeName: 'string',
      sourceCodeOssUrl: 'string',
      telemetryEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

