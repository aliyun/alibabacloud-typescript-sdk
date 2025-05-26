// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the project. For more information, see [Create a project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * immtest
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

