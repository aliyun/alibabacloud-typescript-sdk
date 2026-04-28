// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMemoryRequest extends $dara.Model {
  agentId?: string;
  enhancements?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  runId?: string;
  size?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agent_id',
      enhancements: 'enhancements',
      query: 'query',
      runId: 'run_id',
      size: 'size',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      enhancements: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      query: 'string',
      runId: 'string',
      size: 'number',
      userId: 'string',
    };
  }

  validate() {
    if(this.enhancements) {
      $dara.Model.validateMap(this.enhancements);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

