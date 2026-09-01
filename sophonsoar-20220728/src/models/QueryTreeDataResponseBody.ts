// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTreeDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of playbooks in JSON string format. The string contains the following fields:
   * 
   * - **active**: Indicates whether the playbook is active. A value of **true** means the playbook is active. A value of **false** means the playbook is inactive.
   * 
   * - **displayName**: The name of the playbook.
   * 
   * - **playbookUuid**: The UUID of the playbook.
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
   * The ID of the request. Alibaba Cloud generates this unique ID for each request. Use this ID to troubleshoot issues.
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

