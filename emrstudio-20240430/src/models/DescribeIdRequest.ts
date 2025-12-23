// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIdRequest extends $dara.Model {
  /**
   * @remarks
   * id
   * 
   * This parameter is required.
   * 
   * @example
   * p-123****
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 111234
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

