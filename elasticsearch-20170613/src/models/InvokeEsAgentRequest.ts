// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeEsAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The request body in JSON-RPC 2.0 format.
   * 
   * Common request parameters (all at the top level of the request body, not inside params):
   * - jsonrpc: String. Required. The JSON-RPC version. Fixed value: 2.0. Example: 2.0.
   * - method: String. Required. The method to call. For valid values, see the method list below. Example: session/prompt.
   * - id: String. Optional. The request ID specified by the caller. This value is passed through in the response. Example: 1774339902987004.
   * - params: Object. Optional. The parameters for the specified method. For examples, refer to the supplementary description.
   * - sessionCode: String. Optional. The session ID for exact match queries in session/list. Example: 49b82154-ac20-4f27-a6ec-eb5f4cfc5304.
   * - pageNum: Integer. Optional. The page number for session/list. Default value is handled by the server. Example: 1.
   * - pageSize: Integer. Optional. The number of entries per page for session/list. Default value is handled by the server. Example: 10.
   * 
   * Valid values of method:
   * - session/new: Creates a session. Returns JSON.
   * - session/list: Queries the session list or a specified session. Returns JSON.
   * - session/prompt: Sends a message. Returns SSE.
   * - session/load: Resumes from a breakpoint. Used only when _meta.isReload=true. Returns SSE.
   * - session/cancel: Cancels in-progress tasks in a session. Returns JSON.
   * - session/delete: Deletes a session. Returns JSON.
   * - session/hitlRespond: Submits a HITL user response. Returns JSON.
   * 
   * Response modes: session/prompt and session/load return an SSE event stream with Content-Type text/event-stream. Each event is in the format data: {JSON}. Other methods return a standard JSON response with Content-Type application/json.
   * 
   * @example
   * {
   *   "jsonrpc": "2.0",
   *   "id": 5,
   *   "method": "session/list",
   *   "params": {},
   *   "pageNum": 1,
   *   "pageSize": 10
   * }
   */
  body?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.body) {
      $dara.Model.validateMap(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

