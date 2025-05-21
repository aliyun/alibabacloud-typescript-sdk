// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiPublishRevisionInfoCloudProductConfigContainerServiceConfigs } from "./HttpApiPublishRevisionInfoCloudProductConfigContainerServiceConfigs";
import { HttpApiPublishRevisionInfoCloudProductConfigFunctionConfigs } from "./HttpApiPublishRevisionInfoCloudProductConfigFunctionConfigs";
import { HttpApiPublishRevisionInfoCloudProductConfigMseNacosConfigs } from "./HttpApiPublishRevisionInfoCloudProductConfigMseNacosConfigs";


export class HttpApiPublishRevisionInfoCloudProductConfig extends $dara.Model {
  /**
   * @example
   * FC
   */
  cloudProductType?: string;
  containerServiceConfigs?: HttpApiPublishRevisionInfoCloudProductConfigContainerServiceConfigs[];
  functionConfigs?: HttpApiPublishRevisionInfoCloudProductConfigFunctionConfigs[];
  mseNacosConfigs?: HttpApiPublishRevisionInfoCloudProductConfigMseNacosConfigs[];
  static names(): { [key: string]: string } {
    return {
      cloudProductType: 'cloudProductType',
      containerServiceConfigs: 'containerServiceConfigs',
      functionConfigs: 'functionConfigs',
      mseNacosConfigs: 'mseNacosConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudProductType: 'string',
      containerServiceConfigs: { 'type': 'array', 'itemType': HttpApiPublishRevisionInfoCloudProductConfigContainerServiceConfigs },
      functionConfigs: { 'type': 'array', 'itemType': HttpApiPublishRevisionInfoCloudProductConfigFunctionConfigs },
      mseNacosConfigs: { 'type': 'array', 'itemType': HttpApiPublishRevisionInfoCloudProductConfigMseNacosConfigs },
    };
  }

  validate() {
    if(Array.isArray(this.containerServiceConfigs)) {
      $dara.Model.validateArray(this.containerServiceConfigs);
    }
    if(Array.isArray(this.functionConfigs)) {
      $dara.Model.validateArray(this.functionConfigs);
    }
    if(Array.isArray(this.mseNacosConfigs)) {
      $dara.Model.validateArray(this.mseNacosConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

