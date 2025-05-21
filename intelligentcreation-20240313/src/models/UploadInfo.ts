// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxxx
   */
  accessId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yic-pre.oss-cn-hangzhou.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234/temp-novels/xxxx-xxx-xx.txt
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxxxxx
   */
  policy?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxxxx
   */
  policySignature?: string;
  /**
   * @example
   * xxxxxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'accessId',
      host: 'host',
      key: 'key',
      policy: 'policy',
      policySignature: 'policySignature',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      host: 'string',
      key: 'string',
      policy: 'string',
      policySignature: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

