// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSdkIntegrationRequest extends $dara.Model {
  businessType?: string;
  integrationType?: string;
  platform?: string;
  product?: string;
  sdkCodeId?: number;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      integrationType: 'IntegrationType',
      platform: 'Platform',
      product: 'Product',
      sdkCodeId: 'SdkCodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      integrationType: 'string',
      platform: 'string',
      product: 'string',
      sdkCodeId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

