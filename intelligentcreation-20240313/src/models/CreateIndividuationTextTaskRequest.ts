// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIndividuationTextTaskRequest extends $dara.Model {
  crowdPack?: string[][];
  /**
   * @example
   * 840015278620459008
   */
  projectId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      crowdPack: 'crowdPack',
      projectId: 'projectId',
      taskName: 'taskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crowdPack: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
      projectId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.crowdPack)) {
      $dara.Model.validateArray(this.crowdPack);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

