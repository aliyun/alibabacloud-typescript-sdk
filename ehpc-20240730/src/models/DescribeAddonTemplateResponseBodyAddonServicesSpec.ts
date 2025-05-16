// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAddonTemplateResponseBodyAddonServicesSpecInputParams } from "./DescribeAddonTemplateResponseBodyAddonServicesSpecInputParams";
import { DescribeAddonTemplateResponseBodyAddonServicesSpecNetworkACL } from "./DescribeAddonTemplateResponseBodyAddonServicesSpecNetworkAcl";


export class DescribeAddonTemplateResponseBodyAddonServicesSpec extends $dara.Model {
  /**
   * @remarks
   * The parameter configurations of the service.
   */
  inputParams?: DescribeAddonTemplateResponseBodyAddonServicesSpecInputParams[];
  /**
   * @remarks
   * The security group configurations of the service.
   */
  networkACL?: DescribeAddonTemplateResponseBodyAddonServicesSpecNetworkACL[];
  /**
   * @remarks
   * The service access type.
   * 
   * @example
   * URL
   */
  serviceAccessType?: string;
  /**
   * @remarks
   * The service access URL.
   * 
   * @example
   * https://47.96.xx.xx:12008
   */
  serviceAccessUrl?: string;
  /**
   * @remarks
   * The service name.
   * 
   * This parameter is required.
   * 
   * @example
   * Web Portal
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      inputParams: 'InputParams',
      networkACL: 'NetworkACL',
      serviceAccessType: 'ServiceAccessType',
      serviceAccessUrl: 'ServiceAccessUrl',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputParams: { 'type': 'array', 'itemType': DescribeAddonTemplateResponseBodyAddonServicesSpecInputParams },
      networkACL: { 'type': 'array', 'itemType': DescribeAddonTemplateResponseBodyAddonServicesSpecNetworkACL },
      serviceAccessType: 'string',
      serviceAccessUrl: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inputParams)) {
      $dara.Model.validateArray(this.inputParams);
    }
    if(Array.isArray(this.networkACL)) {
      $dara.Model.validateArray(this.networkACL);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

