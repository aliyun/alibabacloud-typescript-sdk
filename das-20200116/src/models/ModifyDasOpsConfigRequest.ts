// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDasOpsConfigRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The filter parameter.
   * 
   * > For supported filter parameters and their values, see **Supplementary description of request parameters**.
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
   * select
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

export class ModifyDasOpsConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable DAS Alibaba Cloud Managed Services. Valid values:
   * 
   * - **true**: Enable.
   * - **false**: Disable. Shutdown only turns off the feature but does not unsubscribe from the service. To unsubscribe, go to the unsubscription management page.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * A reserved parameter.
   */
  filters?: ModifyDasOpsConfigRequestFilters[];
  /**
   * @remarks
   * The database instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-uf6079bda570****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      filters: 'Filters',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      filters: { 'type': 'array', 'itemType': ModifyDasOpsConfigRequestFilters },
      instanceId: 'string',
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

