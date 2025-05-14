// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnInstallClusterAddonsRequestAddons extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to clear cloud resources.
   * 
   * *   true: clears the data and cloud resources.
   * *   false: retains the data and cloud resources.
   * 
   * @example
   * true
   */
  cleanupCloudResources?: boolean;
  /**
   * @remarks
   * The name of the component.
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

