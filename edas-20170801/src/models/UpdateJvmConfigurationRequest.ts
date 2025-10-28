// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateJvmConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * c627c157-560d-*************
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the instance group where the application is deployed. You can call the ListDeployGroup operation to query the group ID. For more information, see [ListDeployGroup](https://help.aliyun.com/document_detail/62077.html).
   * 
   * > 
   * 
   * *   To configure the JVM parameters for an instance group, set this parameter to a specific ID.
   * 
   * *   To configure the JVM parameters for an application, leave this parameter empty.
   * 
   * @example
   * 0afc726e-077e-4357-98b2-db9f7145****
   */
  groupId?: string;
  /**
   * @remarks
   * The maximum size of the heap memory. Unit: MB.
   * 
   * > 
   * 
   * *   If this parameter is not specified in the group configuration, the value specified in the application configuration is used.
   * 
   * *   If this parameter is not specified in the application configuration, the default value is used.
   * 
   * @example
   * 500
   */
  maxHeapSize?: number;
  /**
   * @remarks
   * The size of the permanent generation heap memory. Unit: MB.
   * 
   * > 
   * 
   * *   If this parameter is not specified in the group configuration, the value specified in the application configuration is used.
   * 
   * *   If this parameter is not specified in the application configuration, the default value is used.
   * 
   * @example
   * 1000
   */
  maxPermSize?: number;
  /**
   * @remarks
   * The initial size of the heap memory. Unit: MB.
   * 
   * > 
   * 
   * *   If this parameter is not specified in the group configuration, the value specified in the application configuration is used.
   * 
   * *   If this parameter is not specified in the application configuration, the default value is used.
   * 
   * @example
   * 500
   */
  minHeapSize?: number;
  /**
   * @remarks
   * The custom JVM parameters.
   * 
   * > 
   * 
   * *   If this parameter is not specified in the group configuration, the value specified in the application configuration is used.
   * 
   * *   If this parameter is not specified in the application configuration, the default value is used.
   * 
   * @example
   * -Dproperty=value
   */
  options?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      groupId: 'GroupId',
      maxHeapSize: 'MaxHeapSize',
      maxPermSize: 'MaxPermSize',
      minHeapSize: 'MinHeapSize',
      options: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      groupId: 'string',
      maxHeapSize: 'number',
      maxPermSize: 'number',
      minHeapSize: 'number',
      options: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

