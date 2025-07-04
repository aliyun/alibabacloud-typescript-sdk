// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeliveryChannelResponseBodyResourceChangeDeliverySlsProperties extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the destination to which large files are delivered.
   * 
   * @example
   * acs:oss:cn-hangzhou:1911422487776***:resourcecenter-oss
   */
  oversizedDataOssTargetArn?: string;
  static names(): { [key: string]: string } {
    return {
      oversizedDataOssTargetArn: 'OversizedDataOssTargetArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oversizedDataOssTargetArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

