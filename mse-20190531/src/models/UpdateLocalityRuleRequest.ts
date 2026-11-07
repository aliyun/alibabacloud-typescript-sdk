// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLocalityRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values: zh (default): Chinese. en: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * hkhon1po62@c3df23522******
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * example-app
   */
  appName?: string;
  /**
   * @remarks
   * Specifies whether to enable zone affinity.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The name of the MSE namespace.
   * 
   * @example
   * myNamespace
   */
  namespace?: string;
  /**
   * @remarks
   * The region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The reserved parameter. This parameter is not used.
   * 
   * @example
   * No input required
   */
  rules?: string;
  /**
   * @remarks
   * The source of the rule.
   * 
   * @example
   * edasmsc
   */
  source?: string;
  /**
   * @remarks
   * The threshold for zone affinity to take effect. The zone affinity routing feature is enabled for a zone only when the proportion of instances of the current application deployed in the zone exceeds this threshold. That is, when a consumer sends a request to the application, the request is preferentially routed to an instance in the same zone as the consumer.
   * 
   * @example
   * 0.2
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appId: 'AppId',
      appName: 'AppName',
      enable: 'Enable',
      namespace: 'Namespace',
      region: 'Region',
      rules: 'Rules',
      source: 'Source',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appId: 'string',
      appName: 'string',
      enable: 'boolean',
      namespace: 'string',
      region: 'string',
      rules: 'string',
      source: 'string',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

