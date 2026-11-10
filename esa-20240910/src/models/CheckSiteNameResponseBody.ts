// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckSiteNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the validation result. Valid values:
   * 
   * - **success**: Success.
   * - **Site.AlreadyExist**: The user has already added this site.
   * - **Site.InvalidName**: The site name is invalid.
   * - **Site.SubSiteUnavailable**: The subsite is unavailable.
   * - **Site.InternalError**: Other errors.
   * 
   * @example
   * success
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the site is a subsite. Valid values:
   * 
   * - **true**: The site is a subsite.
   * - **false**: The site is not a subsite.
   * 
   * @example
   * false
   */
  isSubSite?: boolean;
  /**
   * @remarks
   * The validation message.
   * 
   * @example
   * Site name is available.
   */
  messeage?: string;
  /**
   * @remarks
   * Indicates whether the validation is passed. Valid values:
   * 
   * - **true**: Passed.
   * - **false**: Not passed.
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

