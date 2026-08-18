// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSnapshotsRequest extends $dara.Model {
  /**
   * @example
   * my-func
   */
  functionName?: string;
  /**
   * @example
   * 20
   */
  limit?: number;
  /**
   * @example
   * caeba0be03****f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @example
   * alias
   */
  qualifier?: string;
  /**
   * @example
   * test-session-id-1
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'functionName',
      limit: 'limit',
      nextToken: 'nextToken',
      qualifier: 'qualifier',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      limit: 'number',
      nextToken: 'string',
      qualifier: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

