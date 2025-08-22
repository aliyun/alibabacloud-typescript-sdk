// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTerraformApplyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @example
   * terraform {
   *   required_providers {
   *     alicloud = {
   *       source   = "aliyun/alicloud"
   *       version  = "1.254.0"
   *     }
   *   }
   * }
   * 
   * resource "alicloud_vpc" "default" {
   *   is_default                                  = false
   *   enable_ipv6                                 = false
   *   classic_link_enabled                        = false
   *   force_delete                                = false
   *   system_route_table_route_propagation_enable = false
   *   dry_run                                     = false
   * }
   */
  code?: string;
  /**
   * @example
   * task-xxx
   */
  stateId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      code: 'code',
      stateId: 'stateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      code: 'string',
      stateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

