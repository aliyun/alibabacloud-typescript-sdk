// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifySecurityGroupConfigurationResponseBodyItems } from "./ModifySecurityGroupConfigurationResponseBodyItems";


export class ModifySecurityGroupConfigurationResponseBody extends $dara.Model {
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
   * An array that consists of information about the ECS security group.
   */
  items?: ModifySecurityGroupConfigurationResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8585861B-8F0D-4D17-9460-C42255EB10C0
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
      items: ModifySecurityGroupConfigurationResponseBodyItems,
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

