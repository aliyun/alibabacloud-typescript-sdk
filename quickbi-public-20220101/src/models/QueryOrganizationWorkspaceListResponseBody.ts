// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryOrganizationWorkspaceListResponseBodyResult } from "./QueryOrganizationWorkspaceListResponseBodyResult";


export class QueryOrganizationWorkspaceListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * Returns the paginated result of the workspace list, with detailed information about the workspaces stored in the Data parameter.
   */
  result?: QueryOrganizationWorkspaceListResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * 
   * - true: Request succeeded
   * - false: Request failed
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryOrganizationWorkspaceListResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

