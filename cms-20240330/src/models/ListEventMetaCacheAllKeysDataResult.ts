// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventMetaCacheAllKeysDataResult extends $dara.Model {
  /**
   * @remarks
   * annotation类型的Key列表
   * 
   * @example
   * ["message","current_value"]
   */
  annotation?: string[];
  /**
   * @remarks
   * label类型的Key列表
   * 
   * @example
   * ["_cms_rule_id","_cms_rule_name"]
   */
  label?: string[];
  /**
   * @remarks
   * resource.tag类型的Key列表
   * 
   * @example
   * ["arn","callType"]
   */
  resourceTag?: string[];
  static names(): { [key: string]: string } {
    return {
      annotation: 'annotation',
      label: 'label',
      resourceTag: 'resourceTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotation: { 'type': 'array', 'itemType': 'string' },
      label: { 'type': 'array', 'itemType': 'string' },
      resourceTag: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.annotation)) {
      $dara.Model.validateArray(this.annotation);
    }
    if(Array.isArray(this.label)) {
      $dara.Model.validateArray(this.label);
    }
    if(Array.isArray(this.resourceTag)) {
      $dara.Model.validateArray(this.resourceTag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

