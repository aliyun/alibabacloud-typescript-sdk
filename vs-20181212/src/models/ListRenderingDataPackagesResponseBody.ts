// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRenderingDataPackagesResponseBodyDataPackages } from "./ListRenderingDataPackagesResponseBodyDataPackages";


export class ListRenderingDataPackagesResponseBody extends $dara.Model {
  dataPackages?: ListRenderingDataPackagesResponseBodyDataPackages[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataPackages: 'DataPackages',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPackages: { 'type': 'array', 'itemType': ListRenderingDataPackagesResponseBodyDataPackages },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataPackages)) {
      $dara.Model.validateArray(this.dataPackages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

