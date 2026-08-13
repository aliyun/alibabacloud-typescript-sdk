// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGraphSchemaRequest extends $dara.Model {
  /**
   * @remarks
   * 图谱名称，可先调用 listGraphs 获取
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  graphName?: string;
  /**
   * @remarks
   * 租户ID，公共参数；winnexo-cli 通过 --tenant-id 显式传入
   * 
   * This parameter is required.
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      graphName: 'graphName',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      graphName: 'string',
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

