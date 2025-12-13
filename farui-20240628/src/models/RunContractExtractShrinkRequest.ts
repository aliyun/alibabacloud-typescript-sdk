// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunContractExtractShrinkRequest extends $dara.Model {
  /**
   * @example
   * farui
   */
  appId?: string;
  fieldsToExtractShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ttps://xxxxx.oss-cn-hangzhou.aliyuncs.com/legalmind/userdownload/4a83e0fe-baee-41d5-89f6-e33c8d462839/contract/report/9ce843d2-a05e-4351-9d69-15ae96bd910a_1713348901026.pdf
   */
  fileOssUrl?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      fieldsToExtractShrink: 'fieldsToExtract',
      fileOssUrl: 'fileOssUrl',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      fieldsToExtractShrink: 'string',
      fileOssUrl: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

