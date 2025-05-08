// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDiskIopsListResponseBodyDiskIopsList } from "./DescribeDiskIopsListResponseBodyDiskIopsList";


export class DescribeDiskIopsListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IOPS monitoring data of the cloud disk.
   */
  diskIopsList?: DescribeDiskIopsListResponseBodyDiskIopsList[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A7814CAB-DB4E-140A-9D6F-7C8210C1DAC3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      diskIopsList: 'DiskIopsList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskIopsList: { 'type': 'array', 'itemType': DescribeDiskIopsListResponseBodyDiskIopsList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diskIopsList)) {
      $dara.Model.validateArray(this.diskIopsList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

