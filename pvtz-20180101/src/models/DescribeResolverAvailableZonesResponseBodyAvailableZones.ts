// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResolverAvailableZonesResponseBodyAvailableZones extends $dara.Model {
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-zhangjiakou-a
   */
  azId?: string;
  /**
   * @remarks
   * The state of resources in the zone. Valid values:
   * 
   * *   NORMAL: The resources are in the normal state.
   * *   SOLD_OUT: The resources are sold out.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      azId: 'AzId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

