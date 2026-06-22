// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgentInstallStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response messages. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 59.46.XXX.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The UUIDs of the servers to query. Separate multiple UUIDs with commas (,).
   * > You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to obtain the UUIDs of servers.
   * 
   * This parameter is required.
   * 
   * @example
   * inet-eae014a7-16c4-4d4e-9f03-5208f4dc****,inet-eae047da-1e5a-41ce-828d-47606e9b****
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
      uuids: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

