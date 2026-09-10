// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlertRuleV2 } from "./AlertRuleV2";


export class ManageAlertRulesResult extends $dara.Model {
  /**
   * @remarks
   * The alert rule V2.
   */
  alertRule?: AlertRuleV2;
  /**
   * @remarks
   * The number of rules that were successfully deleted.
   * 
   * @example
   * 1
   */
  deletedCount?: number;
  /**
   * @remarks
   * The list of UUIDs of rules that were successfully deleted.
   */
  deletedUuidList?: string[];
  /**
   * @remarks
   * The number of rules that were successfully enabled or disabled.
   * 
   * @example
   * 1
   */
  updatedCount?: number;
  /**
   * @remarks
   * The list of UUIDs of rules that were successfully enabled or disabled.
   */
  updatedUuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      alertRule: 'alertRule',
      deletedCount: 'deletedCount',
      deletedUuidList: 'deletedUuidList',
      updatedCount: 'updatedCount',
      updatedUuidList: 'updatedUuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertRule: AlertRuleV2,
      deletedCount: 'number',
      deletedUuidList: { 'type': 'array', 'itemType': 'string' },
      updatedCount: 'number',
      updatedUuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.alertRule && typeof (this.alertRule as any).validate === 'function') {
      (this.alertRule as any).validate();
    }
    if(Array.isArray(this.deletedUuidList)) {
      $dara.Model.validateArray(this.deletedUuidList);
    }
    if(Array.isArray(this.updatedUuidList)) {
      $dara.Model.validateArray(this.updatedUuidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

