// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDisksResponseBodyDisksDiskPlacement extends $dara.Model {
  /**
   * @remarks
   * The IDs of the zones in which data is stored.
   * 
   * @example
   * cn-hangzhou-b
   * cn-hangzhou-j
   */
  zoneIds?: string;
  static names(): { [key: string]: string } {
    return {
      zoneIds: 'ZoneIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

