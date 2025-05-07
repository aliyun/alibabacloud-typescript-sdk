// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConfigMapRequest extends $dara.Model {
  /**
   * @remarks
   * The ConfigMap data.
   * 
   * This parameter is required.
   * 
   * @example
   * {"env.shell": "/bin/sh"}
   */
  data?: string;
  /**
   * @remarks
   * The key-value pairs of the ConfigMap in the JSON format. Format:
   * 
   * {"Data":"{"k1":"v1", "k2":"v2"}"}
   * 
   * k specifies a key and v specifies a value. For more information, see [Manage a Kubernetes ConfigMap](https://help.aliyun.com/document_detail/171326.html).
   * 
   * @example
   * test-desc
   */
  description?: string;
  /**
   * @remarks
   * The name of the ConfigMap. The name can contain digits, letters, and underscores (_). The name must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the namespace to which the ConfigMap instance belongs.
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

