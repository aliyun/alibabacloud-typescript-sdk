// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SetPolicyProtocolConfigRequestProtocolConfig } from "./SetPolicyProtocolConfigRequestProtocolConfig";


export class SetPolicyProtocolConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The bastion host ID.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the bastion host ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the control policy that you want to modify.
   * 
   * > You can call the [ListPolicies](https://help.aliyun.com/document_detail/2758876.html) operation to query the control policy ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 61
   */
  policyId?: string;
  /**
   * @remarks
   * The protocol control settings.
   * 
   * This parameter is required.
   */
  protocolConfig?: SetPolicyProtocolConfigRequestProtocolConfig;
  /**
   * @remarks
   * The region ID of the bastion host.
   * 
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      policyId: 'PolicyId',
      protocolConfig: 'ProtocolConfig',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      policyId: 'string',
      protocolConfig: SetPolicyProtocolConfigRequestProtocolConfig,
      regionId: 'string',
    };
  }

  validate() {
    if(this.protocolConfig && typeof (this.protocolConfig as any).validate === 'function') {
      (this.protocolConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

