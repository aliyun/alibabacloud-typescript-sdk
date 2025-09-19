// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageRepoCriteriaResponseBodyCriteriaList extends $dara.Model {
  /**
   * @remarks
   * The name of the search condition. Valid values:
   * 
   * *   **instanceId**: the ID of the image instance.
   * *   **repoName**: the name of the image repository.
   * *   **repoId**: the ID of the image repository.
   * *   **repoNamespace**: the namespace of the image repository.
   * *   **regionId**: the region in which the image resides.
   * *   **vulStatus**: indicates whether vulnerabilities exist.
   * *   **alarmStatus**: indicates whether security alerts exist.
   * *   **hcStatus**: indicates whether baseline risks exist.
   * *   **riskStatus**: indicates whether risks exist.
   * *   **registryType**: the type of the image repository.
   * *   **ImageId**: the image ID.
   * *   **tag**: the image tag.
   * 
   * @example
   * vulStatus
   */
  name?: string;
  /**
   * @remarks
   * The type of the search condition. Valid values:
   * 
   * *   **input**: The search condition needs to be specified.
   * *   **select**: The search condition is an option that can be selected from the drop-down list.
   * 
   * @example
   * select
   */
  type?: string;
  /**
   * @remarks
   * The values of the search condition. This parameter is returned only if the value of **Type** is set to **select**.
   * 
   * > If the value of **Type** is set to **input**, the return value of this parameter is empty.
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

export class DescribeImageRepoCriteriaResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array consisting of the filter conditions that are supported by the image repository.
   */
  criteriaList?: DescribeImageRepoCriteriaResponseBodyCriteriaList[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * F35F45B0-5D6B-4238-BE02-A62D0760E840
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
      criteriaList: { 'type': 'array', 'itemType': DescribeImageRepoCriteriaResponseBodyCriteriaList },
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

