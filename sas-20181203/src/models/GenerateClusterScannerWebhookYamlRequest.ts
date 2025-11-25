// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateClusterScannerWebhookYamlRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the container cluster.
   * > You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) API to obtain this parameter from the ClusterId field.
   * 
   * This parameter is required.
   * 
   * @example
   * c3aaf6c8085f84791882eef200cd2****
   */
  clusterId?: string;
  /**
   * @remarks
   * Indicates whether the incremental scan switch is enabled. Values:
   * - **0**: Not enabled
   * - **1**: Enabled
   * 
   * @example
   * 1
   */
  webhookOpen?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      webhookOpen: 'WebhookOpen',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      webhookOpen: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

