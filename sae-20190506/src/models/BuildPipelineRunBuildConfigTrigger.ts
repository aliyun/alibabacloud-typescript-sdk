// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BuildPipelineRunBuildConfigTrigger extends $dara.Model {
  /**
   * @example
   * master
   */
  branchName?: string;
  /**
   * @example
   * v1
   */
  tagName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PUSH
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      branchName: 'BranchName',
      tagName: 'TagName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchName: 'string',
      tagName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

