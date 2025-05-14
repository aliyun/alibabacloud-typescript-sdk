// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNodeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a9E05BDRVQ9K600yf1NplNDxV63zgkYA
   */
  nodeId?: string;
  tenantContextShrink?: string;
  /**
   * @example
   * true
   */
  withPermissionRole?: boolean;
  /**
   * @example
   * true
   */
  withStatisticalInfo?: boolean;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      tenantContextShrink: 'TenantContext',
      withPermissionRole: 'WithPermissionRole',
      withStatisticalInfo: 'WithStatisticalInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      tenantContextShrink: 'string',
      withPermissionRole: 'boolean',
      withStatisticalInfo: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

