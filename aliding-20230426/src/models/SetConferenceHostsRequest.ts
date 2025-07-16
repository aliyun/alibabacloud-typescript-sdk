// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetConferenceHostsRequestTenantContext extends $dara.Model {
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

export class SetConferenceHostsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * add
   */
  operationType?: string;
  tenantContext?: SetConferenceHostsRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [ "012345"]
   */
  userIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 607452e01401526ee39609e1
   */
  conferenceId?: string;
  static names(): { [key: string]: string } {
    return {
      operationType: 'OperationType',
      tenantContext: 'TenantContext',
      userIds: 'UserIds',
      conferenceId: 'conferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationType: 'string',
      tenantContext: SetConferenceHostsRequestTenantContext,
      userIds: { 'type': 'array', 'itemType': 'string' },
      conferenceId: 'string',
    };
  }

  validate() {
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

