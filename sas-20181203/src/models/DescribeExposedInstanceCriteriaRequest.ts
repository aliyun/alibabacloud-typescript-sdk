// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExposedInstanceCriteriaRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the member account in the resource directory.
   * >Call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 127608589417****
   */
  resourceDirectoryAccountId?: string;
  /**
   * @remarks
   * The value of the query condition. Fuzzy match is supported.
   * 
   * > This parameter supports queries by asset name, asset ID, public IP address of the asset, private IP address of the asset, exposed component, exposed port, or exposed IP address.
   * 
   * @example
   * testInstanceName
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

