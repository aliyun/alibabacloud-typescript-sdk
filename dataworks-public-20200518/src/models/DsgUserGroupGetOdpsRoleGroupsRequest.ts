// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgUserGroupGetOdpsRoleGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the MaxCompute project. You can call the [DsgPlatformQueryProjectsAndSchemaFromMeta](https://help.aliyun.com/document_detail/2786303.html) operation to query a list of MaxCompute projects.
   * 
   * This parameter is required.
   * 
   * @example
   * test_project
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

