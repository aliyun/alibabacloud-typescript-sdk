// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLangfuseOrgResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the Langfuse organization was created.
   * 
   * @example
   * 2026-06-25T09:28:30.949Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The name of the Langfuse organization.
   * 
   * @example
   * org_name
   */
  name?: string;
  /**
   * @remarks
   * The Langfuse organization ID.
   * 
   * @example
   * cmrbhzx930005jw****
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      name: 'Name',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      name: 'string',
      organizationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLangfuseOrgResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: CreateLangfuseOrgResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F5178C10-1407-4987-9133-DE4DC9119F75
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateLangfuseOrgResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

