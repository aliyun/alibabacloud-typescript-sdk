// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudGtmInstanceConfigAlertResponseBodyAlertConfig } from "./DescribeCloudGtmInstanceConfigAlertResponseBodyAlertConfig";
import { DescribeCloudGtmInstanceConfigAlertResponseBodyAlertGroup } from "./DescribeCloudGtmInstanceConfigAlertResponseBodyAlertGroup";


export class DescribeCloudGtmInstanceConfigAlertResponseBody extends $dara.Model {
  /**
   * @remarks
   * The alert configurations.
   */
  alertConfig?: DescribeCloudGtmInstanceConfigAlertResponseBodyAlertConfig;
  /**
   * @remarks
   * The alert contact groups.
   */
  alertGroup?: DescribeCloudGtmInstanceConfigAlertResponseBodyAlertGroup;
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
   * The configuration ID of the access domain name. Two configuration IDs exist when the access domain name is bound to the same GTM instance but an A record and an AAAA record are configured for the access domain name. The configuration ID uniquely identifies a configuration.
   * 
   * @example
   * Config-000**11
   */
  configId?: string;
  /**
   * @remarks
   * The ID of the GTM 3.0 instance.
   * 
   * @example
   * gtm-cn-wwo3a3hbz**
   */
  instanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0F32959D-417B-4D66-8463-68606605E3E2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
      alertGroup: 'AlertGroup',
      alertMode: 'AlertMode',
      configId: 'ConfigId',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: DescribeCloudGtmInstanceConfigAlertResponseBodyAlertConfig,
      alertGroup: DescribeCloudGtmInstanceConfigAlertResponseBodyAlertGroup,
      alertMode: 'string',
      configId: 'string',
      instanceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.alertConfig && typeof (this.alertConfig as any).validate === 'function') {
      (this.alertConfig as any).validate();
    }
    if(this.alertGroup && typeof (this.alertGroup as any).validate === 'function') {
      (this.alertGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

