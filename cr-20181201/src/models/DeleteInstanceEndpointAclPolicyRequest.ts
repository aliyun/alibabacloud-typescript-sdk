// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AccessControlEntry } from "./AccessControlEntry";


export class DeleteInstanceEndpointAclPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The endpoint type. Only Internet is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * internet
   */
  endpointType?: string;
  entries?: AccessControlEntry[];
  /**
   * @remarks
   * The IP CIDR block.
   * 
   * @example
   * 127.0.0.1/32
   * 
   * @deprecated
   */
  entry?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The module for which the access policy is set. Valid values:
   * 
   * - `Registry`: access to the image repository
   * 
   * - `Chart`: access to Helm Chart
   * 
   * @example
   * Chart
   */
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      endpointType: 'EndpointType',
      entries: 'Entries',
      entry: 'Entry',
      instanceId: 'InstanceId',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointType: 'string',
      entries: { 'type': 'array', 'itemType': AccessControlEntry },
      entry: 'string',
      instanceId: 'string',
      moduleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entries)) {
      $dara.Model.validateArray(this.entries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

