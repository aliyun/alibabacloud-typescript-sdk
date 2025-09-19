// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWebLockDeleteConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the protected directory that you want to delete.
   * 
   * > You can call the [DescribeWebLockConfigList](~~DescribeWebLockConfigList~~) operation to query the IDs of protected directories.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  id?: number;
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
   * The source IP address of the request.
   * 
   * @example
   * 1.2.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The UUID of the server for which you want to delete the protected directory.
   * 
   * > You can call the [DescribeWebLockConfigList](~~DescribeWebLockConfigList~~) operation to query the UUIDs of servers.
   * 
   * This parameter is required.
   * 
   * @example
   * 7f7fe9a2-55de-4b9d-a37a-0d981d36****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      lang: 'Lang',
      sourceIp: 'SourceIp',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      lang: 'string',
      sourceIp: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

