// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConfigMapRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ConfigMap instance that you want to update. To view the ID, call the [ListNamespacedConfigMaps](https://help.aliyun.com/document_detail/176917.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  configMapId?: number;
  /**
   * @remarks
   * The key-value pairs for the ConfigMap. The value must be a JSON-formatted string, as shown in the following example:
   * 
   * {"Data":"{"k1":"v1", "k2":"v2"}"}
   * 
   * In the JSON string, k represents a key and v represents a value. For more information about configuration items, see [Managing and using configuration items](https://help.aliyun.com/document_detail/171326.html).
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

