// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTreeDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned information about the playbook. The value is a JSON string.
   * 
   * @example
   * [
   *     {
   *         "playbook": {
   *             "active": false,
   *             "displayName": "test_playbook",
   *             "playbookUuid": "09a20455-3d3a-424c-a1df-xxxxxx"
   *         }
   *     }
   * ]
   */
  playbooks?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EF2ECA2D-D8E6-5021-BF5C-19DD6D52C5B2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      playbooks: 'Playbooks',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playbooks: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

