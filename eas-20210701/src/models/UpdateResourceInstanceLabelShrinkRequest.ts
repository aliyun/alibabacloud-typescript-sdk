// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateResourceInstanceLabelShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the modification takes effect on all instances in the resource group. If you set this parameter to true, the InstanceIds parameter does not take effect.
   * 
   * @example
   * false
   */
  allInstances?: boolean;
  /**
   * @remarks
   * The instance IDs.
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The custom tag.
   */
  labels?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      allInstances: 'AllInstances',
      instanceIdsShrink: 'InstanceIds',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allInstances: 'boolean',
      instanceIdsShrink: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

