// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateCloudGtmInstanceConfigAlertRequestAlertConfig } from "./UpdateCloudGtmInstanceConfigAlertRequestAlertConfig";


export class UpdateCloudGtmInstanceConfigAlertRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh-CN: Chinese
   * *   en-US: English
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The alert configurations.
   */
  alertConfig?: UpdateCloudGtmInstanceConfigAlertRequestAlertConfig[];
  /**
   * @remarks
   * The alert contact groups.
   */
  alertGroup?: string[];
  /**
   * @remarks
   * The alert configuration mode of the instance. Valid values:
   * 
   * *   global: global alert configuration
   * *   instance_config: custom alert configuration
   * 
   * @example
   * global
   */
  alertMode?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24**22
   */
  clientToken?: string;
  /**
   * @remarks
   * The configuration ID of the access domain name. Two configuration IDs exist when an A record and an AAAA record are configured for the access domain name that is bound to the GTM instance. This ID uniquely identifies a configuration.
   * 
   * @example
   * Config-000**11
   */
  configId?: string;
  /**
   * @remarks
   * The ID of the Global Traffic Manager (GTM) 3.0 instance.
   * 
   * @example
   * gtm-cn-zz11t58**0s
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      alertConfig: 'AlertConfig',
      alertGroup: 'AlertGroup',
      alertMode: 'AlertMode',
      clientToken: 'ClientToken',
      configId: 'ConfigId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      alertConfig: { 'type': 'array', 'itemType': UpdateCloudGtmInstanceConfigAlertRequestAlertConfig },
      alertGroup: { 'type': 'array', 'itemType': 'string' },
      alertMode: 'string',
      clientToken: 'string',
      configId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alertConfig)) {
      $dara.Model.validateArray(this.alertConfig);
    }
    if(Array.isArray(this.alertGroup)) {
      $dara.Model.validateArray(this.alertGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

