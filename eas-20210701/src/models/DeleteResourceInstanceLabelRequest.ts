// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteResourceInstanceLabelRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the delete operation takes effect on all instances in the resource group. If you set this parameter to true, the InstanceIds parameter does not take effect.
   */
  allInstances?: boolean;
  /**
   * @remarks
   * The instance IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The keys of the tags that you want to delete.
   * 
   * @deprecated
   */
  keys?: string[];
  labelKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      allInstances: 'AllInstances',
      instanceIds: 'InstanceIds',
      keys: 'Keys',
      labelKeys: 'LabelKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allInstances: 'boolean',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      keys: { 'type': 'array', 'itemType': 'string' },
      labelKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    if(Array.isArray(this.labelKeys)) {
      $dara.Model.validateArray(this.labelKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

