// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSasContainerWebDefenseRuleApplicationResponseBodyContainerWebDefenseAppList extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 5944922169365****
   */
  aliUid?: number;
  /**
   * @remarks
   * The ID of the container cluster.
   * 
   * >  The IDs of clusters can be obtained by using the [DescribeGroupedContainerInstances](https://help.aliyun.com/document_detail/182997.html) operation.
   * 
   * @example
   * cfb41a869c71e4678a97021582dd8****
   */
  clusterId?: string;
  /**
   * @remarks
   * The time when the application was created. Unit: milliseconds.
   * 
   * @example
   * 1677839038000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The last modification time. Unit: milliseconds.
   * 
   * @example
   * 1667891185000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * 143761
   */
  id?: number;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 403327
   */
  ruleId?: number;
  /**
   * @remarks
   * The value of the application label.
   * 
   * @example
   * app:test
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      clusterId: 'ClusterId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      ruleId: 'RuleId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      clusterId: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      ruleId: 'number',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSasContainerWebDefenseRuleApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The applications.
   */
  containerWebDefenseAppList?: GetSasContainerWebDefenseRuleApplicationResponseBodyContainerWebDefenseAppList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 09969D2C-4FAD-429E-BFBF-9A60DEF8****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      containerWebDefenseAppList: 'ContainerWebDefenseAppList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerWebDefenseAppList: { 'type': 'array', 'itemType': GetSasContainerWebDefenseRuleApplicationResponseBodyContainerWebDefenseAppList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.containerWebDefenseAppList)) {
      $dara.Model.validateArray(this.containerWebDefenseAppList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

