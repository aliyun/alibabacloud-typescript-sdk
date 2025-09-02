// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can call the [ListProjects](https://help.aliyun.com/document_detail/2780068.html) operation to query the ID.
   * 
   * @example
   * 27
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the DataWorks workspace. You can call the [ListProjects](https://help.aliyun.com/document_detail/2780068.html) operation to query the name.
   * 
   * @example
   * test_project
   */
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

