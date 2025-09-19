// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExposedInstanceCriteriaRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the member in the resource directory.
   * 
   * >  You can call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to query the account ID.
   * 
   * @example
   * 1232428423234****
   */
  resourceDirectoryAccountId?: string;
  /**
   * @remarks
   * The value of the search condition. Fuzzy match is supported.
   * 
   * >  You can specify the name, ID, public IP address, private IP address, component, port, or IP address of an exposed asset.
   * 
   * @example
   * id
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceDirectoryAccountId: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

