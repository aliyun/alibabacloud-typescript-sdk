// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudAssistantSettingsResponseBodySlsDeliveryConfigsSlsDeliveryConfig extends $dara.Model {
  /**
   * @remarks
   * The type of items to be delivered. Valid values:
   * 
   * *   SessionManager: session records.
   * *   Invocation: task execution records.
   * 
   * @example
   * SessionManager
   */
  deliveryType?: string;
  /**
   * @remarks
   * Indicates whether to deliver the specified items to Simple Log Service.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * @example
   * example-logstore
   */
  logstoreName?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project.
   * 
   * @example
   * example-project
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryType: 'DeliveryType',
      enabled: 'Enabled',
      logstoreName: 'LogstoreName',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryType: 'string',
      enabled: 'boolean',
      logstoreName: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

