// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SourceCodeRepoBranch extends $dara.Model {
  commitId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      commitId: 'CommitId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

