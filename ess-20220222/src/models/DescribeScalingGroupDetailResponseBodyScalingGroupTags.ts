// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingGroupDetailResponseBodyScalingGroupTags extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the tags of the scaling group can be propagated to instances. Valid values:
   * 
   * *   true: The tags of the scaling group can be propagated to only instances that are newly created.
   * *   false: The tags of the scaling group cannot be propagated to any instances.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  propagate?: boolean;
  /**
   * @remarks
   * The tag key of the scaling group.
   * 
   * @example
   * Department
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the scaling group.
   * 
   * @example
   * Finance
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      propagate: 'Propagate',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propagate: 'boolean',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

