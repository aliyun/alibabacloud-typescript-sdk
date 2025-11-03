// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCheckStandardRequest extends $dara.Model {
  /**
   * @remarks
   * The instance IDs of the cloud services to which the check items belong.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The subtypes of cloud services.
   */
  instanceSubTypes?: string[];
  /**
   * @remarks
   * The asset types of cloud services.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * List of task sources.
   */
  taskSources?: string[];
  /**
   * @remarks
   * The cloud service providers. Valid values:
   * 
   * *   **ALIYUN**: Alibaba Cloud.
   * *   **TENCENT**: Tencent Cloud.
   * *   **HUAWEICLOUD**: Huawei Cloud.
   * *   **MICROSOFT**: Microsoft Azure.
   * *   **AWS**: Amazon Web Services (AWS).
   */
  vendors?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      instanceSubTypes: 'InstanceSubTypes',
      instanceTypes: 'InstanceTypes',
      lang: 'Lang',
      taskSources: 'TaskSources',
      vendors: 'Vendors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      instanceSubTypes: { 'type': 'array', 'itemType': 'string' },
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      taskSources: { 'type': 'array', 'itemType': 'string' },
      vendors: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.instanceSubTypes)) {
      $dara.Model.validateArray(this.instanceSubTypes);
    }
    if(Array.isArray(this.instanceTypes)) {
      $dara.Model.validateArray(this.instanceTypes);
    }
    if(Array.isArray(this.taskSources)) {
      $dara.Model.validateArray(this.taskSources);
    }
    if(Array.isArray(this.vendors)) {
      $dara.Model.validateArray(this.vendors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

