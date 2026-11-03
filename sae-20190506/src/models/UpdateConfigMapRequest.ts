// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConfigMapRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the ConfigMap instance to be updated. To obtain instance ID, call the [ListNamespacedConfigMaps](https://help.aliyun.com/document_detail/176917.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  configMapId?: number;
  /**
   * @remarks
   * The key-value pair data of the ConfigMap in JSON format. The format is as follows:
   * 
   * {"Data":"{\\"k1\\":\\"v1\\", \\"k2\\":\\"v2\\"}"}
   * 
   * k represents the key and v represents the value. For more information about ConfigMaps, see [Manage and use ConfigMaps](https://help.aliyun.com/document_detail/171326.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {"env.shell": "/bin/sh"}
   */
  data?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test-desc
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      configMapId: 'ConfigMapId',
      data: 'Data',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMapId: 'number',
      data: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

