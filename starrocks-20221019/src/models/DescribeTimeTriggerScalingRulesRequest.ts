// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTimeTriggerScalingRulesRequest extends $dara.Model {
  /**
   * @example
   * ng-d332aa8bca48****
   */
  nodeGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeGroupId: 'NodeGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

