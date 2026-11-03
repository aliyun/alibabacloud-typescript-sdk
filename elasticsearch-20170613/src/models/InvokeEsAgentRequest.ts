// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeEsAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The request body in JSON-RPC 2.0 format.
   * 
   * Unified request parameters (all located at the top level of the request body, not inside params):
   * - jsonrpc: String, required. The JSON-RPC version, fixed to 2.0. Example: 2.0.
   * - method: String, required. The method to call. For valid values, see the method list below. Example: session/prompt.
   * - id: String, optional. The request ID of the caller, which is passed through in the response. Example: 1774339902987004.
   * - params: Object, optional. The parameters corresponding to the method. For examples, see the supplementary instructions.
   * - sessionCode: String, optional. The exact query by session ID for session/list. Example: 49b82154-ac20-4f27-a6ec-eb5f4cfc5304.
   * - pageNum: Integer, optional. The page number for session/list. The default value is processed by the server. Example: 1.
   * - pageSize: Integer, optional. The number of entries per page for session/list. The default value is processed by the server. Example: 10.
   * 
   * Valid values for method:
   * - session/new: Creates a session and returns JSON.
   * - session/list: Queries the session list or a specific session and returns JSON.
   * - session/prompt: Sends a message and returns SSE.
   * - session/load: Resumes a connection from a breakpoint. Used only when _meta.isReload=true. Returns SSE.
   * - session/cancel: Cancels a running task under the session and returns JSON.
   * - session/delete: Deletes a session and returns JSON.
   * - session/hitlRespond: Submits a HITL user response and returns JSON.
   * 
   * Response modes: session/prompt and session/load return an SSE event stream with the Content-Type of text/event-stream. The format of each event is data: {JSON}. Other methods return a standard JSON response with the Content-Type of application/json.
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

