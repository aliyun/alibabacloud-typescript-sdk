// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIndividuationProjectRequest extends $dara.Model {
  /**
   * @example
   * 840015278620459008
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'projectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

