// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeResourcesModificationResponseBodyAvailableZones } from "./DescribeResourcesModificationResponseBodyAvailableZones";


export class DescribeResourcesModificationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the queried zones.
   */
  availableZones?: DescribeResourcesModificationResponseBodyAvailableZones;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableZones: 'AvailableZones',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZones: DescribeResourcesModificationResponseBodyAvailableZones,
      requestId: 'string',
    };
  }

  validate() {
    if(this.availableZones && typeof (this.availableZones as any).validate === 'function') {
      (this.availableZones as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

