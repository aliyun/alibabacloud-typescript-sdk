// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAssetDetailByUuidRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the request. You do not need to specify this parameter. The system automatically obtains this value.
   * 
   * @example
   * 120.245.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The UUID of the asset that you want to query.
   * > Call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to obtain this parameter.
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

