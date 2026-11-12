// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFirewallRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID of the specified simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The port range.
   * - TCP/UDP: Valid values: 1 to 65535. Use a forward slash (/) to separate the start port and the end port. For example, 1024/1055 indicates the port range from 1024 to 1055.
   * - ICMP: -1/-1. This value indicates all ports.
   * 
   * This parameter is required.
   * 
   * @example
   * 3306/3306
   */
  port?: string;
  /**
   * @remarks
   * The region ID of the specified simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remark for the firewall rule.
   * 
   * @example
   * TEST
   */
  remark?: string;
  /**
   * @remarks
   * The transport layer protocol. Valid values:
   * 
   * - TCP: TCP
   * - UDP: UDP
   * - TCP+UDP: TCP and UDP
   * - ICMP: ICMP
   * 
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  ruleProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      port: 'Port',
      regionId: 'RegionId',
      remark: 'Remark',
      ruleProtocol: 'RuleProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      port: 'string',
      regionId: 'string',
      remark: 'string',
      ruleProtocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

