// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAvatarProjectRequest extends $dara.Model {
  /**
   * @example
   * 11111
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

