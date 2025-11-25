// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvadeEventDetailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-bp135d2rmbwpt****
   */
  assetsInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 92498578-7c42-4845-8c73-7e824782****
   */
  eventUuid?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 182.92.103.XXX
   */
  publicIP?: string;
  /**
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

