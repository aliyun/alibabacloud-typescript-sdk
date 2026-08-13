// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSourceRequest extends $dara.Model {
  /**
   * @remarks
   * 是否返回大体积明细字段（settings / notes / structuredTables / unstructuredDocs）。默认 False，仅返回元信息。
   * 
   * @example
   * false
   */
  includeDetails?: boolean;
  /**
   * @remarks
   * 数据源 ID（租户内唯一）
   * 
   * This parameter is required.
   * 
   * @example
   * exampleSourceId
   */
  sourceId?: string;
  /**
   * @remarks
   * 租户ID，公共参数，缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      includeDetails: 'includeDetails',
      sourceId: 'sourceId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeDetails: 'boolean',
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

