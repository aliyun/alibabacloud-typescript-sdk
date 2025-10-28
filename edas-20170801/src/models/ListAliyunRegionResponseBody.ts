// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAliyunRegionResponseBodyRegionEntityListRegionEntity extends $dara.Model {
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  id?: string;
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * China East 1 (Hangzhou)
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliyunRegionResponseBodyRegionEntityList extends $dara.Model {
  regionEntity?: ListAliyunRegionResponseBodyRegionEntityListRegionEntity[];
  static names(): { [key: string]: string } {
    return {
      regionEntity: 'RegionEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionEntity: { 'type': 'array', 'itemType': ListAliyunRegionResponseBodyRegionEntityListRegionEntity },
    };
  }

  validate() {
    if(Array.isArray(this.regionEntity)) {
      $dara.Model.validateArray(this.regionEntity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliyunRegionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The details of the regions.
   */
  regionEntityList?: ListAliyunRegionResponseBodyRegionEntityList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * b197-40ab-9155-7ca7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      regionEntityList: 'RegionEntityList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      regionEntityList: ListAliyunRegionResponseBodyRegionEntityList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.regionEntityList && typeof (this.regionEntityList as any).validate === 'function') {
      (this.regionEntityList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

