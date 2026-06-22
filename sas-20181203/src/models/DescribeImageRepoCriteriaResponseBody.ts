// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageRepoCriteriaResponseBodyCriteriaList extends $dara.Model {
  /**
   * @remarks
   * The name of the search criterion. Valid values:
   * 
   * - **instanceId**: image instance ID.
   * - **repoName**: repository name.
   * - **repoId**: repository ID.
   * - **repoNamespace**: repository namespace.
   * - **regionId**: image region.
   * - **vulStatus**: whether vulnerabilities exist.
   * - **alarmStatus**: whether security alerts exist.
   * - **hcStatus**: whether baseline risks exist.
   * - **riskStatus**: whether risks exist.
   * - **registryType**: repository type.
   * - **imageId**: image ID.
   * - **tag**: image tag.
   * 
   * @example
   * vulStatus
   */
  name?: string;
  /**
   * @remarks
   * The type of the search criterion. Valid values:
   * 
   * - **input**: requires manual input of the search field.
   * - **select**: requires selecting a subtype from a drop-down list.
   * 
   * @example
   * select
   */
  type?: string;
  /**
   * @remarks
   * The available options when **Type** (the type of the search criterion) is **select** (selection type).
   * > When **Type** (the type of the search criterion) is **input** (input type), this parameter returns an empty value.
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
   * The list of supported search criteria for image repositories.
   */
  criteriaList?: DescribeImageRepoCriteriaResponseBodyCriteriaList[];
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each API request. You can use this ID to troubleshoot issues.
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

