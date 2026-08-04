// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodeDrainParameters extends $dara.Model {
  force?: boolean;
  /**
   * @remarks
   * Delete pods of the specified job types
   */
  podFromSubProducts?: string[];
  /**
   * @remarks
   * Delete specified pods
   */
  podNames?: string[];
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      podFromSubProducts: 'PodFromSubProducts',
      podNames: 'PodNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      podFromSubProducts: { 'type': 'array', 'itemType': 'string' },
      podNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.podFromSubProducts)) {
      $dara.Model.validateArray(this.podFromSubProducts);
    }
    if(Array.isArray(this.podNames)) {
      $dara.Model.validateArray(this.podNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

