// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGraphInfoRequest extends $dara.Model {
  /**
   * @remarks
   * 业务说明（可选；传空串表示清空；与 displayName 至少传其一）
   * 
   * @example
   * 客户域语义图谱
   */
  businessProfile?: string;
  /**
   * @remarks
   * 图谱展示名（可选，最多200字；传空串或纯空白会被拒绝；与 businessProfile 至少传其一）
   * 
   * @example
   * CRM 图谱
   */
  displayName?: string;
  /**
   * @remarks
   * 图谱名称
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
      displayName: 'displayName',
      graphName: 'graphName',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessProfile: 'string',
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

