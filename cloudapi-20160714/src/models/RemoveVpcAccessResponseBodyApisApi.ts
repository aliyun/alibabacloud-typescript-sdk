// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveVpcAccessResponseBodyApisApi extends $dara.Model {
  /**
   * @remarks
   * API Id
   * 
   * @example
   * 551877242a4b4f3a84a56b7c3570e4a7
   */
  apiId?: string;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * @example
   * 78d54ac4424d4b1792e33ca35637e8e4
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the runtime environment.
   * 
   * @example
   * d1e1ee28f9fb4b729db0ee8ca76ff0a5
   */
  stageId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      groupId: 'GroupId',
      stageId: 'StageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      groupId: 'string',
      stageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

