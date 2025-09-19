// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSystemRuleAggregationTypesResponseBodyAggregationTypeList extends $dara.Model {
  /**
   * @remarks
   * The ID of the aggregation type.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The name of the aggregation type.
   * 
   * @example
   * Remote control\\*\\*\\*\\*
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemRuleAggregationTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the aggregation types.
   */
  aggregationTypeList?: ListSystemRuleAggregationTypesResponseBodyAggregationTypeList[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 1427F3BE-8A7E-57F9-BD4E-590B00D2****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregationTypeList: 'AggregationTypeList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregationTypeList: { 'type': 'array', 'itemType': ListSystemRuleAggregationTypesResponseBodyAggregationTypeList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aggregationTypeList)) {
      $dara.Model.validateArray(this.aggregationTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

