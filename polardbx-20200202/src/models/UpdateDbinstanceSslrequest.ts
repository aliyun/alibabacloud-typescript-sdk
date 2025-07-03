// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDBInstanceSSLRequest extends $dara.Model {
  /**
   * @example
   * pxc-hzrqjarxdocd4t.polarx.rds.aliyuncs.com
   */
  certCommonName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-hzjasd****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableSSL?: boolean;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      certCommonName: 'CertCommonName',
      DBInstanceName: 'DBInstanceName',
      enableSSL: 'EnableSSL',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certCommonName: 'string',
      DBInstanceName: 'string',
      enableSSL: 'boolean',
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

