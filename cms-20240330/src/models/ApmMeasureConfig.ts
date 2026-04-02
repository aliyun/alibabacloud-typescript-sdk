// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApmMeasureConfig extends $dara.Model {
  /**
   * @remarks
   * 分组维度
   */
  groupBy?: string[];
  /**
   * @remarks
   * 指标代码
   * 
   * This parameter is required.
   */
  measureCode?: string;
  /**
   * @remarks
   * 查询时间窗口（秒）
   * 
   * This parameter is required.
   */
  windowSecs?: number;
  static names(): { [key: string]: string } {
    return {
      groupBy: 'groupBy',
      measureCode: 'measureCode',
      windowSecs: 'windowSecs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupBy: { 'type': 'array', 'itemType': 'string' },
      measureCode: 'string',
      windowSecs: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groupBy)) {
      $dara.Model.validateArray(this.groupBy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

