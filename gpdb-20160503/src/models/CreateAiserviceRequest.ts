// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAIServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in the specified region, including instance IDs.
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
   * The IP addresses in the IP address whitelist. You can add up to 1,000 IP addresses, separated by commas (,). 127.0.0.1 indicates that no external IP addresses are allowed to access the service. The IP addresses must be in one of the following formats:
   * - 10.23.12.24 (IP address)
   * - 10.23.12.24/24 (CIDR block. /24 indicates the prefix length of the IP address, which ranges from 1 to 32.)
   * 
   * > You can call the ModifyAIServiceSecurityIps operation to modify the IP address whitelist after the service is created.
   * 
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  /**
   * @remarks
   * The service account. The account must meet the following requirements:
   * - Contains only lowercase letters, digits, and underscores (_).
   * - Starts with a lowercase letter and ends with a lowercase letter or a digit.
   * - Does not start with gp.
   * - Is 2 to 16 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * dramauser
   */
  serviceAccount?: string;
  /**
   * @remarks
   * The password of the service account. The password must meet the following requirements:
   * - Contains at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * - Supported special characters: !@#$%^&*()_+-=
   * - Is 8 to 32 characters in length.
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

