// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckSiteNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the verification result. Valid values:
   * 
   * *   **success**: The verification is successful.
   * *   **Site.AlreadyExist**: The website domain name has already been added.
   * *   **Site.InvalidName**: Invalid website domain name.
   * *   **Site.SubSiteUnavailable**: Subdomains are not allowed.
   * *   **Site.InternalError**: An internal error occurs.
   * 
   * @example
   * success
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether a subdomain is specified. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  isSubSite?: boolean;
  /**
   * @remarks
   * The verification message.
   */
  messeage?: string;
  /**
   * @remarks
   * Indicates whether the verification passed.
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  passed?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CB1A380B-09F0-41BB-280B-72F8FD6DA2FE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      isSubSite: 'IsSubSite',
      messeage: 'Messeage',
      passed: 'Passed',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      isSubSite: 'boolean',
      messeage: 'string',
      passed: 'boolean',
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

