// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMockRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the returned information. Valid values:
   * 
   * - zh: Chinese
   * - en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The IDs of the custom applications.
   * 
   * This parameter is required.
   * 
   * @example
   * [{\\"appName\\":\\"provide\\",\\"appId\\":\\"bst8l6o735@f6d8aaf6e56e67d\\"}]
   */
  consumerAppIds?: string;
  /**
   * @remarks
   * The items in the recycle bin.
   * 
   * This parameter is required.
   * 
   * @example
   * []
   */
  dubboMockItems?: string;
  /**
   * @remarks
   * Specifies whether the alert rule is enabled. Valid values:
   * 
   * - `true`: Enabled.
   * - `false`: Disabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The description.
   * 
   * This parameter is required.
   * 
   * @example
   * {}
   */
  extraJson?: string;
  /**
   * @remarks
   * The response time (RT) for slow calls. Valid values:
   * 
   * - 15: 15 ms
   * - 30: 30 ms
   * - 60: 60 ms
   * - 120: 120 ms
   * 
   * @example
   * 1
   */
  mockType?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * agent-auto-test-sc
   */
  name?: string;
  /**
   * @remarks
   * The ID of the service provider application.
   * 
   * @example
   * dcqtkuhnc4@66e5235415****
   */
  providerAppId?: string;
  /**
   * @remarks
   * The name of the service provider application.
   * 
   * @example
   * demo-cartservice
   */
  providerAppName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The input parameters. JSON format is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * []
   */
  scMockItems?: string;
  /**
   * @remarks
   * The source of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * edasmsc
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      consumerAppIds: 'ConsumerAppIds',
      dubboMockItems: 'DubboMockItems',
      enable: 'Enable',
      extraJson: 'ExtraJson',
      mockType: 'MockType',
      name: 'Name',
      providerAppId: 'ProviderAppId',
      providerAppName: 'ProviderAppName',
      region: 'Region',
      scMockItems: 'ScMockItems',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      consumerAppIds: 'string',
      dubboMockItems: 'string',
      enable: 'boolean',
      extraJson: 'string',
      mockType: 'number',
      name: 'string',
      providerAppId: 'string',
      providerAppName: 'string',
      region: 'string',
      scMockItems: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

