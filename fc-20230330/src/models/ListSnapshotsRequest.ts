// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSnapshotsRequest extends $dara.Model {
  /**
   * @remarks
   * The function name.
   * 
   * @example
   * my-func
   */
  functionName?: string;
  /**
   * @remarks
   * The maximum number of snapshots to return. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token used to retrieve more results.
   * 
   * @example
   * caeba0be03****f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The function alias.
   * 
   * @example
   * alias
   */
  qualifier?: string;
  /**
   * @remarks
   * The source session ID from which the snapshot was created. When specified, functionName must also be specified.
   * 
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

