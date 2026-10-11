// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEgressProxyConfigurationRequestDefaultRulePhaseActions extends $dara.Model {
  /**
   * @remarks
   * The default action to be performed in the PostResponse phase (after the response is returned) when traffic does not match any rules. This phase supports only the **Allow** value (default), which allows the traffic to pass through.
   * 
   * @example
   * Allow
   */
  postResponse?: string;
  /**
   * @remarks
   * The default action to be performed in the PreDns phase (before DNS resolution) when traffic does not match any rules. Valid values:
   * 
   * - **Allow** (default): allows the traffic to pass through.
   * 
   * - **Deny**: denies the traffic.
   * 
   * @example
   * Allow
   */
  preDns?: string;
  /**
   * @remarks
   * The default action to be performed in the PreRequest phase (before the request is forwarded) when traffic does not match any rules. Valid values:
   * 
   * - **Allow** (default): allows the traffic to pass through.
   * 
   * - **Deny**: denies the traffic.
   * 
   * @example
   * Allow
   */
  preRequest?: string;
  static names(): { [key: string]: string } {
    return {
      postResponse: 'PostResponse',
      preDns: 'PreDns',
      preRequest: 'PreRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postResponse: 'string',
      preDns: 'string',
      preRequest: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEgressProxyConfigurationRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. The key can be up to 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * testKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The value can be up to 256 characters in length, and cannot contain `http://` or `https://`.
   * 
   * @example
   * testValue
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

export class CreateEgressProxyConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > Note If you do not specify this parameter, the system automatically uses the RequestId of the API request as the client token. The RequestId of each API request is different.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B******
   */
  clientToken?: string;
  /**
   * @remarks
   * The default actions to be performed in each effective phase (PreDns, PreRequest, and PostResponse) when traffic does not match any rules.
   */
  defaultRulePhaseActions?: CreateEgressProxyConfigurationRequestDefaultRulePhaseActions;
  /**
   * @remarks
   * The description of the egress proxy configuration. The description must be 2 to 256 characters in length, and can contain Chinese characters, letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
   * 
   * @example
   * testEpg
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run of the request. Valid values:
   * 
   * - **true**: performs a dry run and does not create the egress proxy configuration. The system checks whether the required parameters are specified, the request format is valid, and the service limits are met. If the request fails the dry run, the corresponding error code is returned. If the request passes the dry run, the DryRunOperation error code is returned.
   * 
   * - **false** (default): sends a normal request. If the request passes the check, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The name of the egress proxy configuration. The name must be 2 to 128 characters in length, and must start with a letter or a Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * testEpg
   */
  egressProxyConfigurationName?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm4jcyx5e****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: CreateEgressProxyConfigurationRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      defaultRulePhaseActions: 'DefaultRulePhaseActions',
      description: 'Description',
      dryRun: 'DryRun',
      egressProxyConfigurationName: 'EgressProxyConfigurationName',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      defaultRulePhaseActions: CreateEgressProxyConfigurationRequestDefaultRulePhaseActions,
      description: 'string',
      dryRun: 'boolean',
      egressProxyConfigurationName: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateEgressProxyConfigurationRequestTag },
    };
  }

  validate() {
    if(this.defaultRulePhaseActions && typeof (this.defaultRulePhaseActions as any).validate === 'function') {
      (this.defaultRulePhaseActions as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

