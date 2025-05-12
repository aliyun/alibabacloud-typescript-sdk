// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpdResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Lingjun subnet ID list
   */
  subnetIds?: string[];
  /**
   * @remarks
   * Lingjun CIDR block instance ID
   * 
   * @example
   * vpd-eoiy88ju
   */
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      subnetIds: 'SubnetIds',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subnetIds: { 'type': 'array', 'itemType': 'string' },
      vpdId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.subnetIds)) {
      $dara.Model.validateArray(this.subnetIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

