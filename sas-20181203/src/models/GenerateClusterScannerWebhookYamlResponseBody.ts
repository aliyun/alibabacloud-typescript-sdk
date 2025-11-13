// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateClusterScannerWebhookYamlResponseBody extends $dara.Model {
  /**
   * @example
   * c471f0f61b9c04f8380556e922cf1****
   */
  clusterId?: string;
  /**
   * @example
   * 131231
   */
  id?: number;
  /**
   * @example
   * BE120DAB-F4E7-4C53-ADC3-A97578ABF384
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  webhookOpen?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      id: 'Id',
      requestId: 'RequestId',
      webhookOpen: 'WebhookOpen',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      id: 'number',
      requestId: 'string',
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

