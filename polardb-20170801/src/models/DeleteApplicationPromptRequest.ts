// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteApplicationPromptRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. The ID must point to an application with mem0 capabilities enabled. You can determine this by checking whether the MemApplicationAttribute returned by DescribeApplicationAttribute is not empty. Applications such as polarclaw, supabase, and polarclawsaas that do not have mem0 enabled do not support prompt operations.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The prompt ID.
   * 
   * This parameter is required.
   * 
   * @example
   * papt-f9lajgw765f4fnrzn1
   */
  promptId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      promptId: 'PromptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      promptId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

