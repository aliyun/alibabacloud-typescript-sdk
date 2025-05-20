// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEndpointAttributeResponseBodyDataCidrList extends $dara.Model {
  /**
   * @remarks
   * The ACL policy. Valid values:
   * 
   * *   **allow**: indicates that the current endpoint allows access from the corresponding CIDR block. (Only allow is supported.)
   * 
   * @example
   * allow
   */
  aclStrategy?: string;
  /**
   * @remarks
   * The CIDR block.
   * 
   * @example
   * 172.18.0.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1701951224000
   */
  createTime?: number;
  static names(): { [key: string]: string } {
    return {
      aclStrategy: 'AclStrategy',
      cidr: 'Cidr',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclStrategy: 'string',
      cidr: 'string',
      createTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

