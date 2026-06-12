// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConsumeProcessorConfiguration } from "./ConsumeProcessorConfiguration";


export class ConsumeProcessor extends $dara.Model {
  /**
   * @remarks
   * Processor配置
   * 
   * This parameter is required.
   */
  configuration?: ConsumeProcessorConfiguration;
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 1717171200
   */
  createTime?: number;
  /**
   * @remarks
   * Processor描述
   * 
   * @example
   * 过滤content字段
   */
  description?: string;
  /**
   * @remarks
   * Processor名称
   * 
   * This parameter is required.
   * 
   * @example
   * 字段过滤处理
   */
  displayName?: string;
  /**
   * @remarks
   * Processor ID
   * 
   * This parameter is required.
   * 
   * @example
   * consume-processor-1
   */
  processorName?: string;
  /**
   * @remarks
   * 更新时间
   * 
   * @example
   * 1717171200
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      createTime: 'createTime',
      description: 'description',
      displayName: 'displayName',
      processorName: 'processorName',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: ConsumeProcessorConfiguration,
      createTime: 'number',
      description: 'string',
      displayName: 'string',
      processorName: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(this.configuration && typeof (this.configuration as any).validate === 'function') {
      (this.configuration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

