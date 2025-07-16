// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNodesRequestOption extends $dara.Model {
  /**
   * @example
   * false
   */
  withPermissionRole?: boolean;
  /**
   * @example
   * false
   */
  withStatisticalInfo?: boolean;
  static names(): { [key: string]: string } {
    return {
      withPermissionRole: 'WithPermissionRole',
      withStatisticalInfo: 'WithStatisticalInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetNodesRequestTenantContext extends $dara.Model {
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

export class GetNodesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  nodeIds?: string[];
  option?: GetNodesRequestOption;
  tenantContext?: GetNodesRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      nodeIds: 'NodeIds',
      option: 'Option',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeIds: { 'type': 'array', 'itemType': 'string' },
      option: GetNodesRequestOption,
      tenantContext: GetNodesRequestTenantContext,
    };
  }

  validate() {
    if(Array.isArray(this.nodeIds)) {
      $dara.Model.validateArray(this.nodeIds);
    }
    if(this.option && typeof (this.option as any).validate === 'function') {
      (this.option as any).validate();
    }
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

