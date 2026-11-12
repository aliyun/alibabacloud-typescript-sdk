// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAIServiceSecurityIpsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/196830.html) operation to query the details of all instances in a specific region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The IP addresses in the IP address whitelist. You can add up to 1,000 IP addresses and separate them with commas (,). 127.0.0.1 indicates that no external IP addresses are allowed to access the instance. The formats are as follows:
   * - 10.23.12.24 (IP address)
   * - 10.23.12.24/24 (CIDR pattern. Classless Inter-Domain Routing. /24 indicates the length of the prefix in the address. Valid values: 1 to 32.)
   * 
   * This parameter is required.
   * 
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * drama-123456
   */
  serviceId?: string;
  /**
   * @remarks
   * The service type. Currently, only drama is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * drama
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      securityIPList: 'SecurityIPList',
      serviceId: 'ServiceId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      securityIPList: 'string',
      serviceId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

