// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSecurityGroupConfigurationResponseBodyItems } from "./DescribeSecurityGroupConfigurationResponseBodyItems";


export class DescribeSecurityGroupConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5xxxxxx
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The information about the ECS security group.
   */
  items?: DescribeSecurityGroupConfigurationResponseBodyItems;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 87BDAE8C-ACB0-4A26-BBCC-7D1DD31D630D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      items: DescribeSecurityGroupConfigurationResponseBodyItems,
      requestId: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

