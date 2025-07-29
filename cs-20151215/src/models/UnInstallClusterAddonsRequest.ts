// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnInstallClusterAddonsRequestAddons extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to clean up related cloud resources during uninstallation.
   * 
   * *   true: clean up
   * *   false: retain
   * 
   * @example
   * true
   */
  cleanupCloudResources?: boolean;
  /**
   * @remarks
   * The name of the add-on to uninstall. You can call the [ListClusterAddonInstances](https://help.aliyun.com/document_detail/2667940.html) operation to query the installed add-ons.
   * 
   * @example
   * ack-node-problem-detector
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      cleanupCloudResources: 'cleanup_cloud_resources',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cleanupCloudResources: 'boolean',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnInstallClusterAddonsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of add-ons to uninstall.
   */
  addons?: UnInstallClusterAddonsRequestAddons[];
  static names(): { [key: string]: string } {
    return {
      addons: 'addons',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addons: { 'type': 'array', 'itemType': UnInstallClusterAddonsRequestAddons },
    };
  }

  validate() {
    if(Array.isArray(this.addons)) {
      $dara.Model.validateArray(this.addons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

