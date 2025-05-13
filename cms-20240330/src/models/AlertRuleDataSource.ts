// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlertRuleDataSourceDsList } from "./AlertRuleDataSourceDsList";


export class AlertRuleDataSource extends $dara.Model {
  appType?: string;
  dsList?: AlertRuleDataSourceDsList[];
  /**
   * @remarks
   * 实例id，当type=PROMETHEUS_DS/ENTERPRISE_DS时必填，为prometheus实例的clusterId或指标仓库名称
   */
  instanceId?: string;
  namespace?: string;
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
      appType: 'appType',
      dsList: 'dsList',
      instanceId: 'instanceId',
      namespace: 'namespace',
      regionId: 'regionId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      dsList: { 'type': 'array', 'itemType': AlertRuleDataSourceDsList },
      instanceId: 'string',
      namespace: 'string',
      regionId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dsList)) {
      $dara.Model.validateArray(this.dsList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

