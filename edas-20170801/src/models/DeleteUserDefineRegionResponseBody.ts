// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserDefineRegionResponseBodyRegionDefine extends $dara.Model {
  /**
   * @remarks
   * The ID of the region to which the custom namespace belongs.
   * 
   * @example
   * cn-beijing
   */
  belongRegion?: string;
  /**
   * @remarks
   * The description of the custom namespace.
   * 
   * @example
   * logic region
   */
  description?: string;
  /**
   * @remarks
   * The unique identifier of the custom namespace.
   * 
   * @example
   * 8848
   */
  id?: number;
  /**
   * @remarks
   * The ID of the custom namespace. The ID cannot be changed after the custom namespace is created. The format is `region ID:custom namespace ID`.
   * 
   * @example
   * cn-beijing:test
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the custom namespace.
   * 
   * @example
   * test_region
   */
  regionName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the custom namespace belongs.
   * 
   * @example
   * 11727****22398
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      belongRegion: 'BelongRegion',
      description: 'Description',
      id: 'Id',
      regionId: 'RegionId',
      regionName: 'RegionName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      belongRegion: 'string',
      description: 'string',
      id: 'number',
      regionId: 'string',
      regionName: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserDefineRegionResponseBody extends $dara.Model {
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
   * The additional information that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The custom namespace.
   */
  regionDefine?: DeleteUserDefineRegionResponseBodyRegionDefine;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1234-1sda-321d-****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      regionDefine: 'RegionDefine',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      regionDefine: DeleteUserDefineRegionResponseBodyRegionDefine,
      requestId: 'string',
    };
  }

  validate() {
    if(this.regionDefine && typeof (this.regionDefine as any).validate === 'function') {
      (this.regionDefine as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

