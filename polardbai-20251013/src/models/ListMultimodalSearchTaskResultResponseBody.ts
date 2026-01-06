// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMultimodalSearchTaskResultResponseBody extends $dara.Model {
  /**
   * @example
   * {"Data": {
   *   # 分页信息,
   *   "Total": 5,
   *   "PageNumber": 1,
   *   "PageSize": 50,
   *   # 数据列表
   *   "Items": [
   *     # 每个JSONObject为一个视频/图片的元信息
   *     {
   *       # 用户oss图片地址
   *       "OssUri": "",
   *       # 缩略图
   *       "ThumbnailUrl": "",
   *       # 原图，点击查看
   *       "DownloadUrl": "",
   *       # 文件类型（视频/图片）
   *       "FileType": "",
   *       # 文件名
   *       "FileName": "",
   *     }, {}, ..
   *   ]
   * },
   * "Success": true,
   * "RequestId": "***"
   * }
   */
  data?: any;
  /**
   * @example
   * 错误码
   */
  errCode?: string;
  /**
   * @example
   * 错误信息
   */
  errMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 983863E2-****-1D15-A4AE-3468CD75383D
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
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

