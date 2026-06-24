// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAckClustersRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. (Deprecated).
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of records per page. (Deprecated).
   * 
   * @example
   * 15
   */
  size?: number;
  /**
   * @remarks
   * The ID of the VPC where the ACK cluster resides.
   * 
   * @example
   * vpc-bp12nu14urf0upaf4****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      size: 'size',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

