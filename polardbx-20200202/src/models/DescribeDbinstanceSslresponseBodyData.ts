// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceSSLResponseBodyData extends $dara.Model {
  /**
   * @example
   * pxc-sddddddcym7g7w****.polarx.singapore.rds.aliyuncs.com
   */
  certCommonName?: string;
  /**
   * @example
   * false
   */
  SSLEnabled?: boolean;
  /**
   * @example
   * 2022-11-04T09:39:07Z
   */
  SSLExpiredTime?: string;
  static names(): { [key: string]: string } {
    return {
      certCommonName: 'CertCommonName',
      SSLEnabled: 'SSLEnabled',
      SSLExpiredTime: 'SSLExpiredTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certCommonName: 'string',
      SSLEnabled: 'boolean',
      SSLExpiredTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

