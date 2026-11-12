// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFirewallRulesShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key that is specified for the firewall rule. Valid values of N: 1 to 20.
   * 
   * The tag key cannot be an empty string. It can be up to 64 characters in length, cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value that is specified for the firewall rule. Valid values of N: 1 to 20.
   * 
   * The tag value can be an empty string. It can be up to 64 characters in length and cannot contain http:// or https://.
   * 
   * @example
   * TestValue
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

export class CreateFirewallRulesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The array of firewall rules.
   */
  firewallRulesShrink?: string;
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
   * The region ID. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the regions where simple application servers are available.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of tags. The list can contain up to 20 tags.
   */
  tag?: CreateFirewallRulesShrinkRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      firewallRulesShrink: 'FirewallRules',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      firewallRulesShrink: 'string',
      instanceId: 'string',
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': CreateFirewallRulesShrinkRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

