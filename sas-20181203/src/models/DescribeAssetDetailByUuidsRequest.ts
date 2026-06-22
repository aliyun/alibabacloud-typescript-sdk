// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAssetDetailByUuidsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content in the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member accounts in the resource folder.
   * >Invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 127608589417****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The UUIDs of the asset instances. Separate multiple UUIDs with commas (,).
   * > Call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 0687b17f-2a36-4e5****,0687b17f-2a36-4e****
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      resourceDirectoryAccountId: 'number',
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

