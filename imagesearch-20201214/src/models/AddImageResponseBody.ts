// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddImageResponseBodyPicInfoAllCategories extends $dara.Model {
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * 88888888
   */
  id?: number;
  /**
   * @remarks
   * The category name.
   * 
   * @example
   * Other
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
      id: 'number',
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

export class AddImageResponseBodyPicInfoMultiRegion extends $dara.Model {
  /**
   * @remarks
   * The subject identification result. The subject region of the image, in the format of x1,x2,y1,y2, where x1,y1 is the upper-left point and x2,y2 is the lower-right point. If the user specifies a subject region in the request, the specified region is used.
   * 
   * @example
   * 94,691,206,650
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageResponseBodyPicInfo extends $dara.Model {
  /**
   * @remarks
   * The information about all categories supported by the system.
   */
  allCategories?: AddImageResponseBodyPicInfoAllCategories[];
  /**
   * @remarks
   * The category prediction result. If the user specifies a category in the request, the specified category is used.
   * 
   * @example
   * 88888888
   */
  categoryId?: number;
  /**
   * @remarks
   * The collection of subject identification results.
   * > Upgrade to V3.1.1 or later to use this feature.
   */
  multiRegion?: AddImageResponseBodyPicInfoMultiRegion[];
  /**
   * @remarks
   * The subject identification result. The subject region of the image, in the format of `x1,x2,y1,y2`, where `x1,y1` is the upper-left point and `x2,y2` is the lower-right point. If the user specifies a subject region in the request, the specified region is used.
   * 
   * @example
   * 94,691,206,650
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      allCategories: 'AllCategories',
      categoryId: 'CategoryId',
      multiRegion: 'MultiRegion',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allCategories: { 'type': 'array', 'itemType': AddImageResponseBodyPicInfoAllCategories },
      categoryId: 'number',
      multiRegion: { 'type': 'array', 'itemType': AddImageResponseBodyPicInfoMultiRegion },
      region: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allCategories)) {
      $dara.Model.validateArray(this.allCategories);
    }
    if(Array.isArray(this.multiRegion)) {
      $dara.Model.validateArray(this.multiRegion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * - 0: success.
   * - Non-zero: failure.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The error message.
   * > No data is returned for successful requests. Error messages are returned for failed requests.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The category prediction and subject identification results.
   */
  picInfo?: AddImageResponseBodyPicInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E0845DE6-52AF-4B50-9F15-51ED4044E6AB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      picInfo: 'PicInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      picInfo: AddImageResponseBodyPicInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.picInfo && typeof (this.picInfo as any).validate === 'function') {
      (this.picInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

