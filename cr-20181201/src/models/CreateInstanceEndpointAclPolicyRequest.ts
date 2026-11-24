// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AccessControlEntry } from "./AccessControlEntry";


export class CreateInstanceEndpointAclPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   * 
   * @deprecated
   */
  comment?: string;
  /**
   * @remarks
   * The endpoint type. Only Internet is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * Internet
   */
  endpointType?: string;
  entries?: AccessControlEntry[];
  /**
   * @remarks
   * The IP address range that is allowed to access the instance.
   * 
   * @example
   * 192.168.1.1/32
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
   * The module for which you want to set the access policy. Valid values:
   * 
   * - `Registry`: access the image repository
   * 
   * - `Chart`: access Helm Chart
   * 
   * @example
   * Registry
   */
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      endpointType: 'EndpointType',
      entries: 'Entries',
      entry: 'Entry',
      instanceId: 'InstanceId',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
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

