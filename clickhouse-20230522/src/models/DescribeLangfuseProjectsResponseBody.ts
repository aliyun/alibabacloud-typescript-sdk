// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLangfuseProjectsResponseBodyDataProjects extends $dara.Model {
  /**
   * @remarks
   * The time when the Langfuse project was created.
   * 
   * @example
   * 2026-05-27T08:23:45Z
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
   * The organization ID to which the Langfuse project belongs.
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
  /**
   * @remarks
   * The time when the Langfuse project was last updated.
   * 
   * @example
   * 2026-06-09T10:27:35
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      name: 'Name',
      organizationId: 'OrganizationId',
      projectId: 'ProjectId',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      name: 'string',
      organizationId: 'string',
      projectId: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLangfuseProjectsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of Langfuse projects.
   */
  projects?: DescribeLangfuseProjectsResponseBodyDataProjects[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projects: 'Projects',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projects: { 'type': 'array', 'itemType': DescribeLangfuseProjectsResponseBodyDataProjects },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.projects)) {
      $dara.Model.validateArray(this.projects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLangfuseProjectsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: DescribeLangfuseProjectsResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D0CEC6AC-7760-409A-A0D5-E6CD8660E9CC
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
      data: DescribeLangfuseProjectsResponseBodyData,
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

