// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateYikeProductionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * title
   */
  title?: string;
  /**
   * @example
   * 581236
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

