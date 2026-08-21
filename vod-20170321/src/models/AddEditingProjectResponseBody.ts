// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddEditingProjectResponseBodyProject extends $dara.Model {
  /**
   * @remarks
   * The time when the online editing project was created. The time follows the format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the online editing project.
   * 
   * @example
   * testtimeline001desciption
   */
  description?: string;
  /**
   * @remarks
   * The last time when the online editing project was modified. The time follows the format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2017-01-11T13:00:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The ID of the online editing project.
   * 
   * @example
   * fb2101bf24bf4df34c4cb3187****
   */
  projectId?: string;
  /**
   * @remarks
   * The status of the online editing project. Valid values:
   * 
   * - **Normal**: draft.
   * - **Producing**: being produced.
   * - **Produced**: produced.
   * - **ProduceFailed**: failed to be produced.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The title of the online editing project.
   * 
   * @example
   * testtimeline
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
      projectId: 'ProjectId',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      modifiedTime: 'string',
      projectId: 'string',
      status: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEditingProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The online editing project. For the specific structure definition, see [EditingProject](https://help.aliyun.com/document_detail/52839.html).
   */
  project?: AddEditingProjectResponseBodyProject;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E4EBD2BF-5EB0-4476-8829-9D94E1B1****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: AddEditingProjectResponseBodyProject,
      requestId: 'string',
    };
  }

  validate() {
    if(this.project && typeof (this.project as any).validate === 'function') {
      (this.project as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

