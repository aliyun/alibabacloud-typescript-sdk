// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetInstanceVpcEndpointResponseBodyLinkedVpcs } from "./GetInstanceVpcEndpointResponseBodyLinkedVpcs";


export class GetInstanceVpcEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Domain names.
   */
  domains?: string[];
  /**
   * @remarks
   * Indicates whether the VPC endpoint is enabled. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The VPCs that are added to the access control list.
   */
  linkedVpcs?: GetInstanceVpcEndpointResponseBodyLinkedVpcs[];
  /**
   * @remarks
   * The name of the modules that can be accessed. Valid values:
   * 
   * *   `Registry`: image repositories.
   * *   `Chart`: Helm charts.
   * 
   * @example
   * Registry
   */
  moduleName?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BAE9349D-A587-4F9A-B574-9DA0EF2638D1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      domains: 'Domains',
      enable: 'Enable',
      isSuccess: 'IsSuccess',
      linkedVpcs: 'LinkedVpcs',
      moduleName: 'ModuleName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      domains: { 'type': 'array', 'itemType': 'string' },
      enable: 'boolean',
      isSuccess: 'boolean',
      linkedVpcs: { 'type': 'array', 'itemType': GetInstanceVpcEndpointResponseBodyLinkedVpcs },
      moduleName: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    if(Array.isArray(this.linkedVpcs)) {
      $dara.Model.validateArray(this.linkedVpcs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

