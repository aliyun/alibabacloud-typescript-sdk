// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCheckRuleInstanceRequestInstanceList extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the asset.
   * > Call the [ListCheckInstanceResult](~~ListCheckInstanceResult~~) operation to obtain this parameter.
   * 
   * @example
   * i-wz9fdluqx20mp2x7****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the asset resides.
   * > Call the [ListCheckInstanceResult](~~ListCheckInstanceResult~~) operation to obtain this parameter.
   * 
   * @example
   * cn-hongkong
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCheckRuleInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The page number to return when paging is used.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of instances.
   */
  instanceList?: ListCheckRuleInstanceRequestInstanceList[];
  /**
   * @remarks
   * The maximum number of entries to return per page when paging is used. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The rule ID.
   * > Call the [LisCheckRule](https://help.aliyun.com/document_detail/2590599.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      instanceList: 'InstanceList',
      pageSize: 'PageSize',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      instanceList: { 'type': 'array', 'itemType': ListCheckRuleInstanceRequestInstanceList },
      pageSize: 'number',
      ruleId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceList)) {
      $dara.Model.validateArray(this.instanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

