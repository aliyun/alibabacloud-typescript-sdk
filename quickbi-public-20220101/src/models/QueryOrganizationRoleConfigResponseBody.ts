// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryOrganizationRoleConfigResponseBodyResult } from "./QueryOrganizationRoleConfigResponseBodyResult";


export class QueryOrganizationRoleConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * BCE45E6D-9304-4F94-86BB-5A772B1615FF
   */
  requestId?: string;
  /**
   * @remarks
   * Details of the organization role configuration.
   */
  result?: QueryOrganizationRoleConfigResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * - true: The request was successful 
   * - false: The request failed
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
      result: QueryOrganizationRoleConfigResponseBodyResult,
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

