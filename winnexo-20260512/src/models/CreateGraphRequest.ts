// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGraphRequest extends $dara.Model {
  /**
   * @remarks
   * 业务说明（可选）
   * 
   * @example
   * 客户域语义图谱
   */
  businessProfile?: string;
  /**
   * @remarks
   * 绑定的数据源 ID（控制台已创建的 RDB 类数据源）
   * 
   * This parameter is required.
   * 
   * @example
   * 198001
   */
  dataSourceId?: number;
  /**
   * @remarks
   * 图谱展示名（可选，租户内大小写不敏感唯一，最多200字）
   * 
   * @example
   * CRM 图谱
   */
  displayName?: string;
  /**
   * @remarks
   * 图谱名称，字母开头+字母/数字/下划线，长度不超过64，租户内唯一
   * 
   * This parameter is required.
   * 
   * @example
   * crm_graph
   */
  graphName?: string;
  /**
   * @remarks
   * 租户ID，公共参数，缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      businessProfile: 'businessProfile',
      dataSourceId: 'dataSourceId',
      displayName: 'displayName',
      graphName: 'graphName',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessProfile: 'string',
      dataSourceId: 'number',
      displayName: 'string',
      graphName: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

