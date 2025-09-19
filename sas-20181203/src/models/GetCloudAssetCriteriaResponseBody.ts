// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCloudAssetCriteriaResponseBodyCriteriaList extends $dara.Model {
  /**
   * @remarks
   * The structured attribute values of the assets that match the keyword. The value of this parameter is in the JSON format and contains the following fields:
   * 
   * *   **vendor**: providers
   * *   **regionIds**: IDs of supported regions
   * 
   * @example
   * [{"vendor":0,"regionIds":{"default":["ap-southeast-1","ap-northeast-2","ap-southeast-3","ap-southeast-5","ap-southeast-7","me-central-1"]}},{"vendor":1,"regionIds":{"default":["outside-of-aliyun"]}}]
   */
  multiValues?: string;
  /**
   * @remarks
   * The name of the filter condition. Valid values:
   * 
   * *   **instanceId**: the ID of the instance
   * *   **instanceName**: the name of an instance
   * *   **internetIp**: the public IP address
   * *   **riskStatus**: the risk status
   * *   **vendorRegionId**: the region ID by service provider
   * 
   * @example
   * instanceId
   */
  name?: string;
  /**
   * @remarks
   * The type of the filter condition. Valid values:
   * 
   * *   **input**: The filter condition needs to be specified.
   * *   **select**: The filter condition is an option that can be selected from the drop-down list.
   * 
   * @example
   * select
   */
  type?: string;
  /**
   * @remarks
   * The values of the search condition. This parameter is returned only if the value of **Type** is **select**.
   * 
   * >  If the value of **Type** is **input**, the value of this parameter is an empty string.
   * 
   * @example
   * fvt*
   */
  values?: string;
  static names(): { [key: string]: string } {
    return {
      multiValues: 'MultiValues',
      name: 'Name',
      type: 'Type',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multiValues: 'string',
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

export class GetCloudAssetCriteriaResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array consisting of the information about the filter conditions that are used to search for cloud assets.
   */
  criteriaList?: GetCloudAssetCriteriaResponseBodyCriteriaList[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
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
      criteriaList: { 'type': 'array', 'itemType': GetCloudAssetCriteriaResponseBodyCriteriaList },
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

