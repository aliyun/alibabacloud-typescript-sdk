// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GrafanaWorkspaceAccount } from "./GrafanaWorkspaceAccount";


export class ListGrafanaWorkspaceAccountResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GrafanaWorkspaceAccount[];
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 4789C3E9-A85A-524B-B97B-9D2B14BA06BC
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * eac0a8048716731735000007137d000b
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': GrafanaWorkspaceAccount },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

