// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParams } from "./ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParams";


export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscode extends $dara.Model {
  /**
   * @remarks
   * The parameters that are used to overwrite the corresponding parameters of the template.
   */
  overwriteParams?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParams;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * 9547c6ad97cb4f2aaa29683ebd18d410
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      overwriteParams: 'OverwriteParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwriteParams: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscodeOverwriteParams,
      templateId: 'string',
    };
  }

  validate() {
    if(this.overwriteParams && typeof (this.overwriteParams as any).validate === 'function') {
      (this.overwriteParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

