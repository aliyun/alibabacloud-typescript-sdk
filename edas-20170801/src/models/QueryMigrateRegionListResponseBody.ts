// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMigrateRegionListResponseBodyRegionEntityListRegionEntity extends $dara.Model {
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * Beta
   */
  regionName?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * cn-beijing:beta
   */
  regionNo?: string;
  static names(): { [key: string]: string } {
    return {
      regionName: 'RegionName',
      regionNo: 'RegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionName: 'string',
      regionNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMigrateRegionListResponseBodyRegionEntityList extends $dara.Model {
  regionEntity?: QueryMigrateRegionListResponseBodyRegionEntityListRegionEntity[];
  static names(): { [key: string]: string } {
    return {
      regionEntity: 'RegionEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionEntity: { 'type': 'array', 'itemType': QueryMigrateRegionListResponseBodyRegionEntityListRegionEntity },
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

export class QueryMigrateRegionListResponseBody extends $dara.Model {
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
   * The namespaces.
   */
  regionEntityList?: QueryMigrateRegionListResponseBodyRegionEntityList;
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
      regionEntityList: QueryMigrateRegionListResponseBodyRegionEntityList,
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

