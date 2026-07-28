// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTerraformPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency token. Format: [0-9a-zA-Z-]{1,64}. We recommend that you use a UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @remarks
   * The Terraform code to execute. If the execution content has not changed, you can specify only stateId.
   * 
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
   * @remarks
   * The ID of the state file. If this parameter is specified, the Plan command continues to run based on the existing state file.
   * 
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

