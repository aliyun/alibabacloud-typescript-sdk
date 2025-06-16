// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSslVpnClientCertsResponseBodySslVpnClientCertKeysSslVpnClientCertKey extends $dara.Model {
  /**
   * @remarks
   * The timestamp generated when the SSL client certificate was created. Unit: milliseconds.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1492747187000
   */
  createTime?: number;
  /**
   * @remarks
   * The timestamp generated when the SSL client certificate expires. Unit: milliseconds.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1494966335000
   */
  endTime?: number;
  /**
   * @remarks
   * The name of the SSL client certificate.
   * 
   * @example
   * cert1
   */
  name?: string;
  /**
   * @remarks
   * The region ID of the SSL client certificate.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the SSL client certificate belongs.
   * 
   * You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to query resource groups.
   * 
   * @example
   * rg-acfmzs372yg****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the SSL client certificate.
   * 
   * @example
   * vsc-bp1n8wcf134yl0osr****
   */
  sslVpnClientCertId?: string;
  /**
   * @remarks
   * The ID of the SSL server.
   * 
   * @example
   * vss-bp18q7hzj6largv4v****
   */
  sslVpnServerId?: string;
  /**
   * @remarks
   * The status of the SSL client certificate. Valid values:
   * 
   * *   **expiring-soon**: The certificate expires in one week.
   * *   **normal**
   * *   **expired**
   * 
   * @example
   * normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endTime: 'EndTime',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sslVpnClientCertId: 'SslVpnClientCertId',
      sslVpnServerId: 'SslVpnServerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      endTime: 'number',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      sslVpnClientCertId: 'string',
      sslVpnServerId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

