// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMinutesTextRequestTenantContext extends $dara.Model {
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

export class QueryMinutesTextRequest extends $dara.Model {
  tenantContext?: QueryMinutesTextRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 607452e01401526ee39609e1
   */
  conferenceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  direction?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 0
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContext: 'TenantContext',
      conferenceId: 'conferenceId',
      direction: 'direction',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: QueryMinutesTextRequestTenantContext,
      conferenceId: 'string',
      direction: 'string',
      maxResults: 'number',
      nextToken: 'string',
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

