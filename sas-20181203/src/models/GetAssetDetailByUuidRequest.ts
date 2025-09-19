// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAssetDetailByUuidRequest extends $dara.Model {
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
   * The source IP address of the request. The system specifies this parameter.
   * 
   * @example
   * 120.245.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The UUID of the server to query.
   * 
   * > You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUIDs of servers.
   * 
   * This parameter is required.
   * 
   * @example
   * 9e6cad93-a379-46fd-a701-9bbf02f4****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

