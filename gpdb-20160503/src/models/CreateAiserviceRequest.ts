// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAIServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in a region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * dramatest
   */
  description?: string;
  /**
   * @remarks
   * The list of IP addresses in IP address whitelist group. You can specify up to 1,000 IP addresses, separated by commas (,). The value 127.0.0.1 indicates that no external IP addresses are allowed to access the instance. The following formats are supported:
   * - 10.23.12.24 (IP address)
   * - 10.23.12.24/24 (CIDR block. The value /24 indicates the length of the prefix in the address, which ranges from 1 to 32.)
   * 
   * > After the service is created, you can call the ModifyAIServiceSecurityIps operation to modify IP address whitelist.
   * 
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  /**
   * @remarks
   * The service account. The following limits apply:
   * - The account name can contain lowercase letters, digits, and underscores (_).
   * - The account name must start with a lowercase letter and end with a lowercase letter or digit.
   * - The account name cannot start with gp.
   * - The account name must be 2 to 16 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * dramauser
   */
  serviceAccount?: string;
  /**
   * @remarks
   * The password of the service account. The following limits apply:
   * - The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * - Supported special characters: !@#$%^&*()_+-=
   * - The password must be 8 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456Aa!
   */
  serviceAccountPassword?: string;
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

