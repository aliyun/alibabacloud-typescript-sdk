// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageCriteriaResponseBodyCriteriaList extends $dara.Model {
  /**
   * @remarks
   * The name of the search condition.
   * - **tag**: the tag of the image
   * - **digest**: the digest of the image
   * - **vulStatus**: the status of the vulnerability
   * - **alarmStatus**: the status of the alert
   * - **riskStatus**: the status of the risk
   * - **registryType**: the type of the image repository
   * 
   * @example
   * vulStatus
   */
  name?: string;
  /**
   * @remarks
   * The type of the search condition. Valid values:
   * - **input**: The search condition needs to be specified.
   * - **select**: The search condition is an option that can be selected from the drop-down list.
   * 
   * @example
   * input
   */
  type?: string;
  /**
   * @remarks
   * The values of the search condition. This parameter is returned only if the value of Type is select.
   * > If the value of **Type** is **input**, the value of this parameter is an empty string.
   * 
   * @example
   * NO,YES
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

export class DescribeImageCriteriaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of the search conditions.
   */
  criteriaList?: DescribeImageCriteriaResponseBodyCriteriaList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 24A20733-10A0-4AF6-BE6B-E3322413BB68
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
      criteriaList: { 'type': 'array', 'itemType': DescribeImageCriteriaResponseBodyCriteriaList },
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

