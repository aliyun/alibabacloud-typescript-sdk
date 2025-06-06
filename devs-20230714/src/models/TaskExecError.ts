// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TaskExecError extends $dara.Model {
  /**
   * @example
   * AccessDenied
   */
  code?: string;
  /**
   * @example
   * 部署辅助函数权限不足，需要添加额外的权限以解决问题。https://help.aliyun.com
   */
  extraInfo?: string;
  /**
   * @example
   * 部署服务[_appcenter-xxx]失败，权限不足
   */
  message?: string;
  /**
   * @example
   * 1-26d1287xxxxx
   */
  requestId?: string;
  /**
   * @example
   * 权限不足错误
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      extraInfo: 'extraInfo',
      message: 'message',
      requestId: 'requestId',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraInfo: 'string',
      message: 'string',
      requestId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

