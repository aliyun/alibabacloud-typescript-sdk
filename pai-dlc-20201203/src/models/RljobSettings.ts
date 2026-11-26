// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLJobSettings extends $dara.Model {
  /**
   * @remarks
   * 沿用 DLC 的高级设置键值约定；运行时值须为字符串且键不能为空，具体选项是否生效取决于运行环境支持。
   * 
   * @example
   * {"EnableDinD":"true"}
   */
  advancedSettings?: { [key: string]: any };
  /**
   * @remarks
   * 作业关联用户 ID，沿用 DLC 的受信调用方规则。
   * 
   * @example
   * 166924
   */
  businessUserId?: string;
  /**
   * @remarks
   * 调用方标识，与 DLC Settings.Caller 一致。
   * 
   * @example
   * pai-cli
   */
  caller?: string;
  /**
   * @remarks
   * 沿用 DLC 的 RDMA 配置，是否生效取决于配额和运行环境。
   * 
   * @example
   * true
   */
  enableRDMA?: boolean;
  /**
   * @remarks
   * 工作流 ID，与 DLC Settings.PipelineId 一致。
   * 
   * @example
   * pid-123456
   */
  pipelineId?: string;
  /**
   * @remarks
   * DLC 作业标签，场景使用 rls.scene。
   * 
   * @example
   * {"rls.scene":"code-rl"}
   */
  tags?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      advancedSettings: 'AdvancedSettings',
      businessUserId: 'BusinessUserId',
      caller: 'Caller',
      enableRDMA: 'EnableRDMA',
      pipelineId: 'PipelineId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedSettings: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      businessUserId: 'string',
      caller: 'string',
      enableRDMA: 'boolean',
      pipelineId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.advancedSettings) {
      $dara.Model.validateMap(this.advancedSettings);
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

