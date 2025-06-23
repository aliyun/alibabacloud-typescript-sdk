// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigLayer4RuleBakModeRequest extends $dara.Model {
  /**
   * @remarks
   * The mode that you want to use to forward service traffic. Valid values:
   * 
   * *   **0**: the default mode. In this mode, Anti-DDoS Pro or Anti-DDoS Premium forwards service traffic to the origin IP address that you specified when you created the port forwarding rule. You can call the [CreateNetworkRules](https://help.aliyun.com/document_detail/157482.html) operation to create a port forwarding rule.
   * *   **1**: the origin redundancy mode. In this mode, Anti-DDoS Pro or Anti-DDoS Premium forwards service traffic to the IP addresses of the primary or secondary origin servers. You can call the [ConfigLayer4RulePolicy](https://help.aliyun.com/document_detail/312684.html) operation to configure IP addresses.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  bakMode?: string;
  /**
   * @remarks
   * The port forwarding rule that you want to manage.
   * 
   * This parameter is a string that consists of JSON arrays. Each element in a JSON array indicates a port forwarding rule. You can perform this operation only on one port forwarding rule at a time.
   * 
   * > You can call the [DescribeNetworkRules](https://help.aliyun.com/document_detail/157484.html) to query existing port forwarding rules.
   * 
   * Each port forwarding rule contains the following fields:
   * 
   * *   **InstanceId**: the ID of the instance. This field is required and must be of the STRING type.
   * *   **Protocol**: the forwarding protocol. This field is required and must be of the STRING type. Valid values: **tcp** and **udp**.
   * *   **FrontendPort**: the forwarding port. This field is required and must be of the INTEGER type.
   * 
   * This parameter is required.
   * 
   * @example
   * [{\\"InstanceId\\":\\"ddosDip-sg-4hr2b3l****\\",\\"FrontendPort\\":2020,\\"Protocol\\":\\"udp\\"}]
   */
  listeners?: string;
  static names(): { [key: string]: string } {
    return {
      bakMode: 'BakMode',
      listeners: 'Listeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bakMode: 'string',
      listeners: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

