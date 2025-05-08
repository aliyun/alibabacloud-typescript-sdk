// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateImageRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The ID of the destination cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * mse-8e8e9060
   */
  clusterId?: string;
  /**
   * @remarks
   * The destination version number.
   * 
   * > You must call the GetImage operation to obtain the maximum destination version number that corresponds to MaxVersionCode.
   * 
   * This parameter is required.
   * 
   * @example
   * ZooKeeper_3_5_5
   */
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      versionCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

