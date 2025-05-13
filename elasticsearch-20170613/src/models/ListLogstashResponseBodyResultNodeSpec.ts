// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogstashResponseBodyResultNodeSpec extends $dara.Model {
  /**
   * @remarks
   * The network configurations.
   * 
   * @example
   * 50
   */
  disk?: number;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * false
   */
  diskEncryption?: boolean;
  /**
   * @remarks
   * The zone where the cluster resides.
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The type of the disk.
   * 
   * @example
   * logstash.n4.small
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      disk: 'disk',
      diskEncryption: 'diskEncryption',
      diskType: 'diskType',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disk: 'number',
      diskEncryption: 'boolean',
      diskType: 'string',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

