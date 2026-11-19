// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The job template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * jt-xxxx
   */
  jobTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      jobTemplateId: 'JobTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobTemplateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

