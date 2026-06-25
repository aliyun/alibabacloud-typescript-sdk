// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The access type. Valid values:
   * 
   * - PUBLIC: All members in the workspace can perform the operation.
   * 
   * - PRIVATE: Only the creator can perform the operation.
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  callerType?: string;
  callerUid?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account that created the workspace permission.
   * 
   * @example
   * 17915******4216
   */
  creator?: string;
  labels?: { [key: string]: any };
  /**
   * @remarks
   * Optional configurations. Separate multiple configurations with commas (,). Valid values:
   * 
   * - ResourceEmpty: The resource is empty. This value is used if you do not set the Resource parameter.
   * 
   * - DisableRam: RAM verification is disabled.
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

