// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAIMediaAuditJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the intelligent review job.
   * 
   * This parameter is required.
   * 
   * @example
   * bdbc266af6894*****943a70176d92e9
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

