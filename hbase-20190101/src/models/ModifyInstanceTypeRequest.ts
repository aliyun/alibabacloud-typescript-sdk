// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceTypeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-bp1x940uh********
   */
  clusterId?: string;
  /**
   * @example
   * hbase.sn1.8xlarge
   */
  coreInstanceType?: string;
  /**
   * @example
   * hbase.sn1.large
   */
  masterInstanceType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      coreInstanceType: 'CoreInstanceType',
      masterInstanceType: 'MasterInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      coreInstanceType: 'string',
      masterInstanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

