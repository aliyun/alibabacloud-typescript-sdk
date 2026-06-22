// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSasContainerWebDefenseRuleCriteriaResponseBodyCriteriaList extends $dara.Model {
  /**
   * @remarks
   * The name of the query criterion.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The type of the query criterion. Valid values:
   * - **input**: Input type. You must manually enter the query content when using this query criterion.
   * - **select**: Selection type. You must select a value from the options list (the **Values** field) when using this query criterion.
   * 
   * @example
   * select
   */
  type?: string;
  /**
   * @remarks
   * The available options when **Type** (the type of the query criterion) is set to **select** (selection type).
   * > When **Type** (the type of the query criterion) is set to **input** (input type), this parameter returns an empty value.
   * 
   * @example
   * athor_bid
   */
  values?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      values: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSasContainerWebDefenseRuleCriteriaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of query criteria.
   */
  criteriaList?: GetSasContainerWebDefenseRuleCriteriaResponseBodyCriteriaList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8B6F758-BCD4-597A-8A2C-DA5A552C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      criteriaList: 'CriteriaList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteriaList: { 'type': 'array', 'itemType': GetSasContainerWebDefenseRuleCriteriaResponseBodyCriteriaList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.criteriaList)) {
      $dara.Model.validateArray(this.criteriaList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

