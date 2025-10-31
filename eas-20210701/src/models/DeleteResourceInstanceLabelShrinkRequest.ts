// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteResourceInstanceLabelShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the delete operation takes effect on all instances in the resource group. If you set this parameter to true, the InstanceIds parameter does not take effect.
   */
  allInstances?: boolean;
  /**
   * @remarks
   * The instance IDs.
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The keys of the tags that you want to delete.
   * 
   * @deprecated
   */
  keysShrink?: string;
  labelKeysShrink?: string;
  static names(): { [key: string]: string } {
    return {
      allInstances: 'AllInstances',
      instanceIdsShrink: 'InstanceIds',
      keysShrink: 'Keys',
      labelKeysShrink: 'LabelKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allInstances: 'boolean',
      instanceIdsShrink: 'string',
      keysShrink: 'string',
      labelKeysShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

