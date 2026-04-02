// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlertRuleV2 } from "./AlertRuleV2";


export class ManageAlertRulesResult extends $dara.Model {
  alertRule?: AlertRuleV2;
  /**
   * @remarks
   * 成功删除的规则数量
   */
  deletedCount?: number;
  /**
   * @remarks
   * 成功删除的规则 UUID 列表
   */
  deletedUuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      alertRule: 'alertRule',
      deletedCount: 'deletedCount',
      deletedUuidList: 'deletedUuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertRule: AlertRuleV2,
      deletedCount: 'number',
      deletedUuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.alertRule && typeof (this.alertRule as any).validate === 'function') {
      (this.alertRule as any).validate();
    }
    if(Array.isArray(this.deletedUuidList)) {
      $dara.Model.validateArray(this.deletedUuidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

