// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSlsLogStoreRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can call the ListApplication operation to query the application ID. For more information, see [ListApplication](https://help.aliyun.com/document_detail/149390.html).
   * 
   * This parameter is required.
   * 
   * @example
   * af58edcf-f7eb-****-****-db4e425f****
   */
  appId?: string;
  /**
   * @remarks
   * The configurations of the Logstore.
   * 
   * *   The following parameters are included in the configurations:****
   * 
   *     *   **type**: the collection type. Set this parameter to file to specify the file type. Set this parameter to stdout to specify the standard output type.
   * 
   *     *   **logstore**: the name of the Logstore. Make sure that the name of the Logstore is unique in the cluster. The name must comply with the following rules:
   * 
   *         *   The name can contain only lowercase letters, digits, hyphens (-), and underscores (_).
   *         *   The name must start and end with a lowercase letter or a digit.
   *         *   The name must be 3 to 63 characters in length.
   * 
   *         **
   * 
   *         **Note**If you leave this parameter empty, the system automatically generates a name.
   * 
   *     *   **LogDir**: If the standard output type is used, the collection path is stdout.log. If the file type is used, the collection path is the path of the collected file. Wildcards (\\*) are supported. The collection path must match the following regular expression: `^/(.+)/(.*)^/$`.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"logstore":"thisisanotherfilelog","type":"file","logDir":"/var/log/*"},{"logstore":"","type":"stdout","logDir":"stdout.log"},{"logstore":"thisisafilelog","type":"file","logDir":"/tmp/log/*"}]
   */
  configs?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      configs: 'Configs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      configs: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

