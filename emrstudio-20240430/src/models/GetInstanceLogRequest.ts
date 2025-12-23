// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceLogRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  limit?: number;
  /**
   * @example
   * 1
   */
  skipLineNum?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * w-111
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      skipLineNum: 'skipLineNum',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      skipLineNum: 'number',
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

