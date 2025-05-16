// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectRequest extends $dara.Model {
  /**
   * @example
   * MyProject
   */
  projectName?: string;
  /**
   * @example
   * online_oral_evaluation_post_paid_call_count
   */
  projectType?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'projectName',
      projectType: 'projectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      projectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

