// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPermissionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The access type. Valid values:
   * 
   * - PUBLIC: All members in the current workspace can access the instance.
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
   * The Alibaba Cloud account UID of the workspace permission creator.
   * 
   * @example
   * 17915******4216
   */
  creator?: string;
  labelsShrink?: string;
  /**
   * @remarks
   * The optional configurations. Separate multiple configurations with commas (,). Valid values:
   * - ResourceEmpty: The resource is empty. The resource is empty if Resource is not specified.
   * - DisableRam: RAM authentication is not performed.
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
      labelsShrink: 'Labels',
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
      labelsShrink: 'string',
      option: 'string',
      resource: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

