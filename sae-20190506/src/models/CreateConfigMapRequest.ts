// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConfigMapRequest extends $dara.Model {
  /**
   * @remarks
   * The key-value pair data of the ConfigMap in JSON format. The format is as follows:
   * 
   * {"Data":"{\\"k1\\":\\"v1\\", \\"k2\\":\\"v2\\"}"}
   * 
   * k represents the key, and v represents the value. For more information about ConfigMaps, see [Manage and use ConfigMaps](https://help.aliyun.com/document_detail/171326.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {"env.shell": "/bin/sh"}
   */
  data?: string;
  /**
   * @remarks
   * The description. The description cannot contain spaces and can be up to 255 characters in length.
   * 
   * @example
   * test-desc
   */
  description?: string;
  /**
   * @remarks
   * The name of the ConfigMap instance. The name can contain digits, letters, and underscores (_), and must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the namespace where the ConfigMap instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      description: 'Description',
      name: 'Name',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      description: 'string',
      name: 'string',
      namespaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

