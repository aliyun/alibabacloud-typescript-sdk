// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JoinPipelineGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11
   */
  groupId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 122,122
   */
  pipelineIds?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      pipelineIds: 'pipelineIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      pipelineIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

