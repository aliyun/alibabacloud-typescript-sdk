// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvadeEventDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the asset.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp135d2rmbwpt****
   */
  assetsInstanceId?: string;
  /**
   * @remarks
   * The UUID of the threat detection event.
   * 
   * This parameter is required.
   * 
   * @example
   * 92498578-7c42-4845-8c73-7e824782****
   */
  eventUuid?: string;
  /**
   * @remarks
   * The language of the content within the response.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 182.92.103.XXX
   */
  publicIP?: string;
  /**
   * @remarks
   * The source IP address of the visitor.
   * 
   * @example
   * 218.76.30.XXX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      assetsInstanceId: 'AssetsInstanceId',
      eventUuid: 'EventUuid',
      lang: 'Lang',
      publicIP: 'PublicIP',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetsInstanceId: 'string',
      eventUuid: 'string',
      lang: 'string',
      publicIP: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

