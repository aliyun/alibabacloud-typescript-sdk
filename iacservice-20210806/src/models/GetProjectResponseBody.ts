// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectResponseBodyProject extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-09-06T06:11:27Z
   */
  createTime?: string;
  /**
   * @remarks
   * The project description. Length: 0 to 1024 characters.
   * 
   * @example
   * abc
   */
  description?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * abc
   */
  name?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * p-433aead7560572f8d95b25775c
   */
  projectId?: string;
  /**
   * @remarks
   * The number of tasks.
   * 
   * @example
   * 2
   */
  taskCnt?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      name: 'name',
      projectId: 'projectId',
      taskCnt: 'taskCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      name: 'string',
      projectId: 'string',
      taskCnt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The project details.
   */
  project?: GetProjectResponseBodyProject;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7FA0FF4A-ABD4-54F6-BEAC-B4273EBA10A2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'project',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: GetProjectResponseBodyProject,
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

