// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IngestProcessorConfiguration } from "./IngestProcessorConfiguration";


export class IngestProcessor extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configuration?: IngestProcessorConfiguration;
  /**
   * @example
   * 1717171200
   */
  createTime?: number;
  /**
   * @example
   * 过滤content字段
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 字段过滤处理
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ingest-processor-1
   */
  processorName?: string;
  /**
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
      configuration: IngestProcessorConfiguration,
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

