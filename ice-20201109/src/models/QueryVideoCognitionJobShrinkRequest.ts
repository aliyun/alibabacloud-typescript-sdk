// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVideoCognitionJobShrinkRequest extends $dara.Model {
  includeResultsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  jobId?: string;
  /**
   * @example
   * {}
   */
  params?: string;
  static names(): { [key: string]: string } {
    return {
      includeResultsShrink: 'IncludeResults',
      jobId: 'JobId',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeResultsShrink: 'string',
      jobId: 'string',
      params: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

