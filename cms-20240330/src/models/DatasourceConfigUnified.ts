// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatasourceConfigUnified extends $dara.Model {
  /**
   * @remarks
   * Prometheus 实例 ID（type=PROMETHEUS 时使用）
   */
  instanceId?: string;
  /**
   * @remarks
   * 地域 ID（各类型可选，缺省与规则/网关一致）
   */
  regionId?: string;
  /**
   * @remarks
   * 数据源类型
   * 
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      regionId: 'regionId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

