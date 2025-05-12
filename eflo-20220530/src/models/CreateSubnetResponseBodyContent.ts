// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSubnetResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Lingjun subnet instance ID
   * 
   * @example
   * subnet-yuvn29bn
   */
  subnetId?: string;
  static names(): { [key: string]: string } {
    return {
      subnetId: 'SubnetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subnetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

