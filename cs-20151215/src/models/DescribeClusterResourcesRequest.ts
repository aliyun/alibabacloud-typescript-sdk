// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query the resources created by cluster components.
   * 
   * @example
   * false
   */
  withAddonResources?: boolean;
  static names(): { [key: string]: string } {
    return {
      withAddonResources: 'with_addon_resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      withAddonResources: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

