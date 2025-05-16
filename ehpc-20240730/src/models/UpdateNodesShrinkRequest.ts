// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNodesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The information about the compute nodes that you want to update.
   */
  instancesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instancesShrink: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instancesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

