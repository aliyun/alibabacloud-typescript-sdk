// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetUserIdByOpenDingtalkIdRequestTenantContext extends $dara.Model {
  /**
   * @example
   * xxxxxx
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

export class BatchGetUserIdByOpenDingtalkIdRequest extends $dara.Model {
  tenantContext?: BatchGetUserIdByOpenDingtalkIdRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ["DTOJdYJ2IQC4HuexhtjsS8Qxxxx","D8301AKf6lmZbXiilcB4P2MVxxxx"]
   */
  openDingtalkIds?: string[];
  static names(): { [key: string]: string } {
    return {
      tenantContext: 'TenantContext',
      openDingtalkIds: 'openDingtalkIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: BatchGetUserIdByOpenDingtalkIdRequestTenantContext,
      openDingtalkIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    if(Array.isArray(this.openDingtalkIds)) {
      $dara.Model.validateArray(this.openDingtalkIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

