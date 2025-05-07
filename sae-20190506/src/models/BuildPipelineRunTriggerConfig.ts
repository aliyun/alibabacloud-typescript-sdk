// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BuildPipelineRunTriggerConfig extends $dara.Model {
  branchName?: string;
  tagName?: string;
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

