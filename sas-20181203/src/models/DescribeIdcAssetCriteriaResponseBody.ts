// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIdcAssetCriteriaResponseBodyCriteriaList extends $dara.Model {
  /**
   * @remarks
   * The name of the corresponding search condition.
   * 
   * @example
   * scannedIp
   */
  name?: string;
  /**
   * @remarks
   * The type of the search condition. Valid values:
   * 
   * - **input**: You must manually enter the search field.
   * - **select**: You must select a child class of the search condition from the drop-down list.
   * 
   * @example
   * select
   */
  type?: string;
  /**
   * @remarks
   * The specific asset property values that correspond to the entered fuzzy match value.
   * 
   * @example
   * 1.1.1.*
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

export class DescribeIdcAssetCriteriaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the asset search conditions.
   */
  criteriaList?: DescribeIdcAssetCriteriaResponseBodyCriteriaList[];
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique ID for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 11C96623-E106-59C9-866D-A6C82911****
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
      criteriaList: { 'type': 'array', 'itemType': DescribeIdcAssetCriteriaResponseBodyCriteriaList },
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

