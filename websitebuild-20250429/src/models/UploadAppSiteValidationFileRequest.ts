// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadAppSiteValidationFileRequest extends $dara.Model {
  /**
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @example
   * yjdw.bpu.edu.cn-waf
   */
  domain?: string;
  /**
   * @example
   * {\\"URI\\": \\"oss://imm-test-co-cn-chengdu/zqh/input/Image/indexImage/nn1.jpg\\", \\"LatLong\\":\\"+39.998800,+116.480900\\"}
   */
  file?: string;
  /**
   * @example
   * abc
   */
  fileContent?: string;
  /**
   * @example
   * APP_MAPPING
   */
  fileType?: string;
  /**
   * @example
   * www.aliyun.com
   */
  siteHost?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      domain: 'Domain',
      file: 'File',
      fileContent: 'FileContent',
      fileType: 'FileType',
      siteHost: 'SiteHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      domain: 'string',
      file: 'string',
      fileContent: 'string',
      fileType: 'string',
      siteHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

