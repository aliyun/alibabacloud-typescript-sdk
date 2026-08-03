// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIndividuationProjectRequest extends $dara.Model {
  projectInfo?: string;
  projectName?: string;
  purpose?: string;
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      projectInfo: 'projectInfo',
      projectName: 'projectName',
      purpose: 'purpose',
      sceneId: 'sceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectInfo: 'string',
      projectName: 'string',
      purpose: 'string',
      sceneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

