// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageCriteriaResponseBodyCriteriaList extends $dara.Model {
  /**
   * @remarks
   * The name of the query criterion.
   * 
   * - **tag**: image tag.
   * - **digest**: image digest.
   * - **vulStatus**: vulnerability status.
   * - **alarmStatus**: security alert status.
   * - **riskStatus**: risk status.
   * - **registryType**: image repository type.
   * 
   * @example
   * vulStatus
   */
  name?: string;
  /**
   * @remarks
   * The type of the query criterion. Valid values:
   * 
   * - **input**: requires manual input of the query field.
   * - **select**: requires selecting a subtype from a drop-down list.
   * 
   * @example
   * input
   */
  type?: string;
  /**
   * @remarks
   * The available option values when **Type** (the type of the query criterion) is **select**.
   * > When **Type** (the type of the query criterion) is **input**, this parameter returns an empty value.
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
   * The list of image query criteria.
   */
  criteriaList?: DescribeImageCriteriaResponseBodyCriteriaList[];
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each API request. You can use this ID to troubleshoot issues.
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

