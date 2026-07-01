// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JobDiagnosisSymptom extends $dara.Model {
  /**
   * @remarks
   * The diagnostic result.
   * 
   * @example
   * JM资源配置过低导致作业启动慢
   */
  description?: string;
  /**
   * @remarks
   * The diagnostic task name.
   * 
   * @example
   * 启动速度分析
   */
  name?: string;
  /**
   * @remarks
   * The fixing suggestions.
   * 
   * @example
   * 将 JOBManager 内存从 1Gi 改为 4Gi
   */
  recommendation?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      recommendation: 'recommendation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      recommendation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

