// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCheckRuleInstanceRequestInstanceList extends $dara.Model {
  /**
   * @remarks
   * Asset instance ID.
   * > Call the [ListCheckInstanceResult](~~ListCheckInstanceResult~~) interface to get this parameter.
   * 
   * @example
   * i-wz9fdluqx20mp2x7****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the asset is located.
   * > Call the [ListCheckInstanceResult](~~ListCheckInstanceResult~~) interface to get this parameter.
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
   * The page number of the current page when performing a paginated query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Instance list.
   */
  instanceList?: ListCheckRuleInstanceRequestInstanceList[];
  /**
   * @remarks
   * The maximum number of items per page in a paginated query. The default value is **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Rule ID.
   * > You can call the [LisCheckRule](https://help.aliyun.com/document_detail/2590599.html) interface to get this parameter.
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

