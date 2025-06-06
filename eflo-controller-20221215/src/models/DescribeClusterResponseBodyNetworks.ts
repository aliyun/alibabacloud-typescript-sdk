// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterResponseBodyNetworks extends $dara.Model {
  /**
   * @remarks
   * 集群网段id
   * 
   * @example
   * vpd-iqd7xunc
   */
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpdId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

