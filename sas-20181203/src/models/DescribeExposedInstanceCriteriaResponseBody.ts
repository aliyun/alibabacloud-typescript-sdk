// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExposedInstanceCriteriaResponseBodyCriteriaList extends $dara.Model {
  /**
   * @remarks
   * The name of the search condition.
   * 
   * @example
   * instanceId
   */
  name?: string;
  /**
   * @remarks
   * The type of the search condition. Valid values:
   * 
   * *   **input**: You must configure the search condition.
   * *   **select**: You must select a search condition from the **Values** list.
   * 
   * @example
   * select
   */
  type?: string;
  /**
   * @remarks
   * The value of the search condition. This parameter is returned only when the value of the **Type** parameter is **select**.
   * 
   * >  If the value of the **Type** parameter is **input**, this parameter is empty.
   * 
   * @example
   * i-bp19r0fdd39idxhf****
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

export class DescribeExposedInstanceCriteriaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The search conditions that are used to search for exposed assets.
   */
  criteriaList?: DescribeExposedInstanceCriteriaResponseBodyCriteriaList[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 6D9CDB47-6191-4415-BE63-7E8B12CD4FBE
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
      criteriaList: { 'type': 'array', 'itemType': DescribeExposedInstanceCriteriaResponseBodyCriteriaList },
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

