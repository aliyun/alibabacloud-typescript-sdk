// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLoadBalancersResponseBodyLoadBalancersDeletionProtectionConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether deletion protection is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The time when deletion protection is enabled.
   * 
   * @example
   * 2022-08-02T02:49:05Z
   */
  enabledTime?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      enabledTime: 'EnabledTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      enabledTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

