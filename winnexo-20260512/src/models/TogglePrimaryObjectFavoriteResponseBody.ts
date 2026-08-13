// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TogglePrimaryObjectFavoriteResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * 操作后是否已关注
   * 
   * @example
   * true
   */
  isFavorited?: boolean;
  /**
   * @remarks
   * 失败原因（成功时为 null）
   * 
   * @example
   * string_value
   */
  message?: string;
  /**
   * @remarks
   * 主对象业务ID
   * 
   * @example
   * exampleObjectId
   */
  objectId?: string;
  /**
   * @remarks
   * 操作是否成功
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      isFavorited: 'isFavorited',
      message: 'message',
      objectId: 'objectId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isFavorited: 'boolean',
      message: 'string',
      objectId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TogglePrimaryObjectFavoriteResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码：成功为 200，失败为后端错误码（ERR.* / InvalidParameter.*）
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 该用户的关注总数（针对该对象类型）
   * 
   * @example
   * 1
   */
  favoriteCount?: number;
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
  /**
   * @remarks
   * 请求追踪 ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  results?: TogglePrimaryObjectFavoriteResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      favoriteCount: 'favoriteCount',
      message: 'message',
      requestId: 'requestId',
      results: 'results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      favoriteCount: 'number',
      message: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': TogglePrimaryObjectFavoriteResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

