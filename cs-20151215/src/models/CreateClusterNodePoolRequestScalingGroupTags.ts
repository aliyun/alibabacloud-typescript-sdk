// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterNodePoolRequestScalingGroupTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * node-k-1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * node-v-1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

