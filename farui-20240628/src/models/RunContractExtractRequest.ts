// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunContractExtractRequestFieldsToExtract extends $dara.Model {
  desc?: string;
  extractItem?: string;
  option?: string[];
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      extractItem: 'extractItem',
      option: 'option',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      extractItem: 'string',
      option: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.option)) {
      $dara.Model.validateArray(this.option);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractExtractRequest extends $dara.Model {
  /**
   * @example
   * farui
   */
  appId?: string;
  fieldsToExtract?: RunContractExtractRequestFieldsToExtract[];
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
      fieldsToExtract: 'fieldsToExtract',
      fileOssUrl: 'fileOssUrl',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      fieldsToExtract: { 'type': 'array', 'itemType': RunContractExtractRequestFieldsToExtract },
      fileOssUrl: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldsToExtract)) {
      $dara.Model.validateArray(this.fieldsToExtract);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

