// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PassReleaseStagePipelineValidateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 226241***
   */
  jobId?: string;
  /**
   * @example
   * 66c0c9fffeb86b450c199***
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'jobId',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
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

