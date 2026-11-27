// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetApplicationAccountPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The account name.
   * 
   * This parameter is required.
   * 
   * @example
   * mcp_user
   */
  accountName?: string;
  /**
   * @remarks
   * The application ID. Only applications associated with PolarDB for MySQL clusters are supported. Before calling this operation, you can call DescribeApplicationAttribute to obtain the DBClusterId associated with the application, and then call DescribeDBClusterAttribute to query the DBType of the cluster and confirm that the value is MySQL. This operation is not applicable to associated applications of other database engine types.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-bp1abcdef1234567
   */
  applicationId?: string;
  /**
   * @remarks
   * The new password.
   * 
   * This parameter is required.
   * 
   * @example
   * Pw123456
   */
  newAccountPassword?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      applicationId: 'ApplicationId',
      newAccountPassword: 'NewAccountPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      applicationId: 'string',
      newAccountPassword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

