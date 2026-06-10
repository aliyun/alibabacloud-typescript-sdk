// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UsageQueryRequest extends $dara.Model {
  endTime?: number;
  startTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-kqtrcpdee4xm29xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
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

