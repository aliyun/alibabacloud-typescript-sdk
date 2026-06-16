// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class EngineSearchRequestQuery extends $dara.Model {
  /**
   * @remarks
   * The list of primary key IDs to exclude.<br>• Purpose: filters out previously viewed history records.
   * 
   * @example
   * ["24234111","12423525"]
   */
  excludeIds?: string[];
  /**
   * @remarks
   * The image query list.<br>• Only one image URL is supported. The maximum size of a single image is 10 MB. Supported formats: JPG, PNG, WEBP, and JPEG.
   * 
   * @example
   * ["https://paperreview.oss-cn-hangzhou.aliyuncs.com/59dd424f-97ed-4855-942e-c961f1f5b67e.jpeg"]
   */
  imageUrls?: string[];
  /**
   * @remarks
   * The page number, starting from 1.<br>• Default value: `1`.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of results returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The text query list.<br>• Only one text string is supported. The maximum length is 256 characters.
   * 
   * @example
   * ["梅花图片"]
   */
  texts?: string[];
  static names(): { [key: string]: string } {
    return {
      excludeIds: 'excludeIds',
      imageUrls: 'imageUrls',
      pageNo: 'pageNo',
      pageSize: 'pageSize',
      texts: 'texts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeIds: { 'type': 'array', 'itemType': 'string' },
      imageUrls: { 'type': 'array', 'itemType': 'string' },
      pageNo: 'number',
      pageSize: 'number',
      texts: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.excludeIds)) {
      $dara.Model.validateArray(this.excludeIds);
    }
    if(Array.isArray(this.imageUrls)) {
      $dara.Model.validateArray(this.imageUrls);
    }
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EngineSearchRequestUser extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the user.
   * 
   * @example
   * asdfgnoevnor
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class EngineSearchRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 2048962366415007746
   */
  appId?: string;
  /**
   * @remarks
   * Specifies whether to access the draft version.
   * 
   * @example
   * false
   */
  grey?: boolean;
  /**
   * @remarks
   * The query condition object.
   * 
   * This parameter is required.
   */
  query?: EngineSearchRequestQuery;
  /**
   * @remarks
   * This parameter does not need to be specified.
   * 
   * @example
   * 2e95ef4fbc28437db5008a910bd392a4
   */
  sessionId?: string;
  /**
   * @remarks
   * The user information object, used for subsequent user-perspective analysis.
   */
  user?: EngineSearchRequestUser;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      grey: 'grey',
      query: 'query',
      sessionId: 'sessionId',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      grey: 'boolean',
      query: EngineSearchRequestQuery,
      sessionId: 'string',
      user: EngineSearchRequestUser,
    };
  }

  validate() {
    if(this.query && typeof (this.query as any).validate === 'function') {
      (this.query as any).validate();
    }
    if(this.user && typeof (this.user as any).validate === 'function') {
      (this.user as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

