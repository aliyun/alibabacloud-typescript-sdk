// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserInfoRequest extends $dara.Model {
  /**
   * @remarks
   * 用户头像 URL
   * 
   * @example
   * https://example.com/avatar.png
   */
  avatar?: string;
  /**
   * @remarks
   * 语言偏好: zh-CN, en-US
   * 
   * @example
   * string_value
   */
  languagePreference?: string;
  /**
   * @remarks
   * 文件名
   * 
   * @example
   * 示例名称.pdf
   */
  name?: string;
  /**
   * @remarks
   * 用户服务描述，最多1000字符
   * 
   * @example
   * string_value
   */
  offering?: string;
  /**
   * @remarks
   * 用户角色描述（当profileRole为Others时使用），最多100字符
   * 
   * @example
   * string_value
   */
  profileRoleInfo?: string;
  /**
   * @remarks
   * 用户自我介绍，最多1000字符
   * 
   * @example
   * string_value
   */
  selfIntroduction?: string;
  /**
   * @remarks
   * 租户ID，公共参数；winnexo-cli 通过 --tenant-id 显式传入
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'avatar',
      languagePreference: 'languagePreference',
      name: 'name',
      offering: 'offering',
      profileRoleInfo: 'profileRoleInfo',
      selfIntroduction: 'selfIntroduction',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      languagePreference: 'string',
      name: 'string',
      offering: 'string',
      profileRoleInfo: 'string',
      selfIntroduction: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

