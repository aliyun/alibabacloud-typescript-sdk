// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScalingGroupRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key that you want to add to the scaling group.
   * 
   * @example
   * Department
   */
  key?: string;
  /**
   * @remarks
   * Specifies whether to propagate the tag that you want to add to the scaling group. Valid values:
   * 
   * *   true: propagates the tag to only instances that are newly created.
   * *   false: does not propagate the tag to any instances.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  propagate?: boolean;
  /**
   * @remarks
   * The tag value that you want to add to the scaling group.
   * 
   * @example
   * Finance
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      propagate: 'Propagate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      propagate: 'boolean',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

