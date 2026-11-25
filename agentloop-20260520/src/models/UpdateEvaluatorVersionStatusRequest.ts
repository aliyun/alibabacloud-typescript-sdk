// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEvaluatorVersionStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The expected current status. Valid values: DRAFT, PUBLISHED, and OFFLINE. If the specified value does not match the actual status, the API operation returns a 409 error.
   * 
   * @example
   * DRAFT
   */
  expectedStatus?: string;
  /**
   * @remarks
   * The target status. PUBLISHED indicates publishing a draft for the first time or bringing an offline version back online. OFFLINE indicates taking a published version offline.
   * 
   * This parameter is required.
   * 
   * @example
   * PUBLISHED
   */
  status?: string;
  /**
   * @remarks
   * The version number to update. The maximum length is 64 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * v3
   */
  version?: string;
  /**
   * @remarks
   * The version description that you can provide when publishing a draft for the first time. The maximum length is 256 characters.
   * 
   * @example
   * Added scoring rules for answer accuracy
   */
  versionDescription?: string;
  static names(): { [key: string]: string } {
    return {
      expectedStatus: 'expectedStatus',
      status: 'status',
      version: 'version',
      versionDescription: 'versionDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expectedStatus: 'string',
      status: 'string',
      version: 'string',
      versionDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

