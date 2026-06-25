// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteResourceInstanceLabelShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the operation takes effect on all instances in the resource group. If this parameter is set to true, the InstanceIds parameter does not take effect.
   */
  allInstances?: boolean;
  /**
   * @remarks
   * The machine instance IDs.
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The tags to delete. (Deprecated. Use LabelKeys instead.).
   * 
   * @deprecated
   */
  keysShrink?: string;
  /**
   * @remarks
   * The tags to delete.
   */
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

