// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The access type. Valid values:
   * 
   * - PUBLIC: All members of the current workspace can access the instance.
   * - PRIVATE: Only the creator can access the instance.
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  callerAccessKeyId?: string;
  callerSecurityToken?: string;
  callerType?: string;
  callerUid?: string;
  /**
   * @remarks
   * The Alibaba Cloud account UID of the creator of the workspace permission.
   * 
   * @example
   * 17915******4216
   */
  creator?: string;
  /**
   * @remarks
   * The labels.
   */
  labels?: { [key: string]: any };
  /**
   * @remarks
   * The optional configurations. Separate multiple configurations with commas (,). Valid values:
   * - ResourceEmpty: The resource is empty. If Resource is not specified, this value is empty.
   * - DisableRam: Disables RAM checks.
   * 
   * @example
   * ResourceEmpty,DisableRam
   */
  option?: string;
  /**
   * @remarks
   * The resource.
   * 
   * @example
   * job/dlc-ksd******s12
   */
  resource?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      callerAccessKeyId: 'CallerAccessKeyId',
      callerSecurityToken: 'CallerSecurityToken',
      callerType: 'CallerType',
      callerUid: 'CallerUid',
      creator: 'Creator',
      labels: 'Labels',
      option: 'Option',
      resource: 'Resource',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      callerAccessKeyId: 'string',
      callerSecurityToken: 'string',
      callerType: 'string',
      callerUid: 'string',
      creator: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      option: 'string',
      resource: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

