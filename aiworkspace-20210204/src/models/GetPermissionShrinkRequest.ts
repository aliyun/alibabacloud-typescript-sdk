// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPermissionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The accessibility. Valid values:
   * 
   * *   PUBLIC: All members in the workspace can access the workspace.
   * *   PRIVATE: Only the creator can access the workspace.
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account that is used to create the workspace.
   * 
   * @example
   * 17915******4216
   */
  creator?: string;
  labelsShrink?: string;
  /**
   * @remarks
   * The configuration. Separate multiple configurations with commas (,). Valid values:
   * 
   * *   ResourceEmpty: The Resource parameter is not configured.
   * *   DisableRam: The RAM check is not performed.
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
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      creator: 'Creator',
      labelsShrink: 'Labels',
      option: 'Option',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      creator: 'string',
      labelsShrink: 'string',
      option: 'string',
      resource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

