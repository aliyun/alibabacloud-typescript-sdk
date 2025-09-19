// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRuleTargetAllResponseBodyRuleTargetList extends $dara.Model {
  /**
   * @remarks
   * The ID of the network object.
   * 
   * @example
   * 301944
   */
  targetId?: number;
  /**
   * @remarks
   * The name of the network object.
   * 
   * @example
   * source-test-obj-xFKcx
   */
  targetName?: string;
  /**
   * @remarks
   * The type of the object. Valid values:
   * 
   * *   IMAGE
   * 
   * @example
   * IMAGE
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetId: 'number',
      targetName: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleTargetAllResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 30CBF632-109F-596F-97F2-451C8B2A****
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of the network objects.
   */
  ruleTargetList?: ListRuleTargetAllResponseBodyRuleTargetList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleTargetList: 'RuleTargetList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleTargetList: { 'type': 'array', 'itemType': ListRuleTargetAllResponseBodyRuleTargetList },
    };
  }

  validate() {
    if(Array.isArray(this.ruleTargetList)) {
      $dara.Model.validateArray(this.ruleTargetList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

