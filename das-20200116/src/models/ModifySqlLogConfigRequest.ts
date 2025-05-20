// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifySqlLogConfigRequestFilters } from "./ModifySqlLogConfigRequestFilters";


export class ModifySqlLogConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable DAS Enterprise Edition. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  This parameter is required if you want to enable DAS Enterprise Edition. By default, the latest version of DAS Enterprise Edition that supports the database instance is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  enableAudit?: boolean;
  /**
   * @remarks
   * A reserved parameter.
   */
  filters?: ModifySqlLogConfigRequestFilters[];
  /**
   * @remarks
   * The number of days for which the SQL Explorer and Audit data is stored in hot storage. Valid values: 1 to 7.
   * 
   * >  This parameter is required if only DAS Enterprise Edition V3 can be enabled for the database instance.
   * 
   * @example
   * 1
   */
  hotRetention?: number;
  /**
   * @remarks
   * The ID of the database instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rr-2ze770smbq3tpr2o9
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable the SQL Explorer feature. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  This parameter is required if only DAS Enterprise Edition V3 can be enabled for the database instance.
   * 
   * @example
   * true
   */
  requestEnable?: boolean;
  /**
   * @remarks
   * The total storage duration of the SQL Explorer and Audit data. Unit: day. Valid values:
   * 
   * *   7
   * *   30
   * *   180
   * *   365
   * 
   * >  If you want to enable DAS Enterprise Edition V3, the value of this parameter must be greater than or equal to 30.
   * 
   * @example
   * 30
   */
  retention?: number;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      enableAudit: 'EnableAudit',
      filters: 'Filters',
      hotRetention: 'HotRetention',
      instanceId: 'InstanceId',
      requestEnable: 'RequestEnable',
      retention: 'Retention',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      enableAudit: 'boolean',
      filters: { 'type': 'array', 'itemType': ModifySqlLogConfigRequestFilters },
      hotRetention: 'number',
      instanceId: 'string',
      requestEnable: 'boolean',
      retention: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

