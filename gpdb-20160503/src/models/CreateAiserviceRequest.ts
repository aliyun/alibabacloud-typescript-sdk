// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAIServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > Call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to list all AnalyticDB for PostgreSQL instances in the destination region, including their instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * A description of the service.
   * 
   * @example
   * dramatest
   */
  description?: string;
  /**
   * @remarks
   * A comma-separated list of IP addresses or CIDR blocks in the IP address whitelist. You can specify up to 1000 entries. To block all external IP access, use 127.0.0.1. Valid formats include the following:
   * 
   * - 10.23.12.24 (an IPv4 address)
   * 
   * - 10.23.12.24/24 (a CIDR block, where /24 indicates the prefix length, from 1 to 32)
   * 
   * > After you create the service, call the ModifyAIServiceSecurityIps operation to update the IP address whitelist.
   * 
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  /**
   * @remarks
   * The service account. It must meet these requirements:
   * 
   * - Contain only lowercase letters, digits, and underscores.
   * 
   * - Start with a lowercase letter and end with a lowercase letter or digit.
   * 
   * - Not start with gp.
   * 
   * - Be 2 to 16 characters long.
   * 
   * This parameter is required.
   * 
   * @example
   * dramauser
   */
  serviceAccount?: string;
  /**
   * @remarks
   * The password for the service account. It must meet these requirements:
   * 
   * - Contain at least three of the following: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * - Support these special characters: !@#$%^&\\*()_+-=.
   * 
   * - Be 8 to 32 characters long.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456Aa!
   */
  serviceAccountPassword?: string;
  /**
   * @remarks
   * The service type. Only drama is supported.
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
      description: 'Description',
      securityIPList: 'SecurityIPList',
      serviceAccount: 'ServiceAccount',
      serviceAccountPassword: 'ServiceAccountPassword',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      description: 'string',
      securityIPList: 'string',
      serviceAccount: 'string',
      serviceAccountPassword: 'string',
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

