// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectDefaultQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The default computing quota that is used to allocate computing resources, the jobs that are initiated by this project consume the computing resources in the default quota.
   * 
   * @example
   * os_PayAsYouGoQuota
   */
  quota?: string;
  static names(): { [key: string]: string } {
    return {
      quota: 'quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quota: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

