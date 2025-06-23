// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCnameReusesResponseBodyCnameReuses extends $dara.Model {
  /**
   * @example
   * 4o6ep6q217k9****.aliyunddos0004.com
   */
  cname?: string;
  /**
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @example
   * 1
   */
  enable?: number;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      domain: 'Domain',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      domain: 'string',
      enable: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

