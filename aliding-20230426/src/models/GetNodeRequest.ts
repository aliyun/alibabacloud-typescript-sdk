// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNodeRequestTenantContext extends $dara.Model {
  /**
   * @example
   * 1
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetNodeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a9E05BDRVQ9K600yf1NplNDxV63zgkYA
   */
  nodeId?: string;
  tenantContext?: GetNodeRequestTenantContext;
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
      tenantContext: 'TenantContext',
      withPermissionRole: 'WithPermissionRole',
      withStatisticalInfo: 'WithStatisticalInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      tenantContext: GetNodeRequestTenantContext,
      withPermissionRole: 'boolean',
      withStatisticalInfo: 'boolean',
    };
  }

  validate() {
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

