// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySqlLogConfigRequestFilters extends $dara.Model {
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  key?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySqlLogConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable DAS Enterprise Edition. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * > This parameter is required when you enable DAS Enterprise Edition. By default, the latest supported version is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Specifies whether to enable security auditing.
   * 
   * @example
   * true
   */
  enableAudit?: boolean;
  /**
   * @remarks
   * A reserved parameter.
   */
  filters?: ModifySqlLogConfigRequestFilters[];
  /**
   * @remarks
   * The hot data storage duration. Unit: days. The value is an integer in the range of [1, 7].
   * 
   * > This parameter is required only when you enable DAS Enterprise Edition V3.
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
   * rr-2ze770smbq3tp****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable SQL Explorer. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * > This parameter is required only when you enable DAS Enterprise Edition V3.
   * 
   * @example
   * true
   */
  requestEnable?: boolean;
  /**
   * @remarks
   * The total data storage duration. Unit: days. Valid values:
   * 
   * - 7
   * - 30
   * - 180
   * - 365
   * 
   * > When you enable DAS Enterprise Edition V3, the value of this parameter must be greater than or equal to 30.
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

