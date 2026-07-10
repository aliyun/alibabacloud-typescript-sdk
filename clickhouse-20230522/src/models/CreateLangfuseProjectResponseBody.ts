// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLangfuseProjectResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the Langfuse project was created.
   * 
   * @example
   * 2026-06-24T10:14:33Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The Langfuse project name.
   * 
   * @example
   * project_name
   */
  name?: string;
  /**
   * @remarks
   * The Langfuse organization ID.
   * 
   * @example
   * cmrbhzx930005jw2q****
   */
  organizationId?: string;
  /**
   * @remarks
   * The Langfuse project ID.
   * 
   * @example
   * cmrbhzx930005jw2q****
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      name: 'Name',
      organizationId: 'OrganizationId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      name: 'string',
      organizationId: 'string',
      projectId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLangfuseProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: CreateLangfuseProjectResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2C7393F1-5FD1-5CEE-A2EA-270A2CF99693
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
      data: CreateLangfuseProjectResponseBodyData,
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

