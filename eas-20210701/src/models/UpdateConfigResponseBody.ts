// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 2024-01-15T10:30:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * 配置键名
   * 
   * @example
   * llm_gateway.route_policy
   */
  key?: string;
  /**
   * @remarks
   * 更新时间
   * 
   * @example
   * 2024-01-15T11:00:00Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * 配置值
   * 
   * @example
   * {"model": "gpt-4-turbo"}
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      key: 'Key',
      updatedAt: 'UpdatedAt',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      key: 'string',
      updatedAt: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

