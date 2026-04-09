// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApiMcpServerValidateHclRequest extends $dara.Model {
  /**
   * @example
   * variable "name" {
   *   default = "terraform-example"
   * }
   * 
   * provider "alicloud" {
   *   region = "cn-beijing"
   * }
   * 
   * resource "alicloud_vpc" "default" {
   *   ipv6_isp    = "BGP"
   *   description = "test"
   *   cidr_block  = "10.0.0.0/8"
   *   vpc_name    = var.name
   *   enable_ipv6 = true
   * }
   */
  code?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

