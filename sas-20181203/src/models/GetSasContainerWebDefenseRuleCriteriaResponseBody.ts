// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSasContainerWebDefenseRuleCriteriaResponseBodyCriteriaList extends $dara.Model {
  /**
   * @remarks
   * The name of the search condition.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The type of the search condition. Valid values:
   * 
   * *   **input**: You must manually enter the search condition.
   * *   **select**: You must select a search condition from the **Values** drop-down list.
   * 
   * @example
   * select
   */
  type?: string;
  /**
   * @remarks
   * The values of the search condition. This parameter is returned only if the value of **Type** is **select**.
   * 
   * >  If the value of **Type** is **input**, the value of this parameter is empty.
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
   * The search conditions.
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

