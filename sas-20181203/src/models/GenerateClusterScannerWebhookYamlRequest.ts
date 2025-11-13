// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateClusterScannerWebhookYamlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c3aaf6c8085f84791882eef200cd2****
   */
  clusterId?: string;
  /**
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

