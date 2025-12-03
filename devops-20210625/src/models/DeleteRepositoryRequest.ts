// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRepositoryRequest extends $dara.Model {
  /**
   * @example
   * f0b1e61db5961df5975a93f9129d2513
   */
  accessToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  reason?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6082a9b0c7972588ac363793
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      reason: 'reason',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      reason: 'string',
      organizationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

