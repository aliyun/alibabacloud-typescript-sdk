// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDedicatedBlockStorageClusterDisksResponseBodyDisks } from "./DescribeDedicatedBlockStorageClusterDisksResponseBodyDisks";


export class DescribeDedicatedBlockStorageClusterDisksResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the cloud disks.
   */
  disks?: DescribeDedicatedBlockStorageClusterDisksResponseBodyDisks;
  /**
   * @remarks
   * The query token returned in this call.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 11B55F58-D3A4-4A9B-9596-342420D0****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      disks: 'Disks',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disks: DescribeDedicatedBlockStorageClusterDisksResponseBodyDisks,
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.disks && typeof (this.disks as any).validate === 'function') {
      (this.disks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

