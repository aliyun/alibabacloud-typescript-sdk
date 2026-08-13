// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSourceRequest extends $dara.Model {
  /**
   * @remarks
   * 待删除的数据源 ID（租户内唯一）
   * 
   * This parameter is required.
   * 
   * @example
   * 781
   */
  sourceId?: string;
  /**
   * @remarks
   * 租户ID，公共参数，缺省时使用调用方默认租户
   * 
   * @example
   * 21577
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceId: 'sourceId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceId: 'string',
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

