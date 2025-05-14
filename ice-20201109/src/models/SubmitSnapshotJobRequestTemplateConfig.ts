// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitSnapshotJobRequestTemplateConfigOverwriteParams } from "./SubmitSnapshotJobRequestTemplateConfigOverwriteParams";


export class SubmitSnapshotJobRequestTemplateConfig extends $dara.Model {
  /**
   * @remarks
   * The parameters that are used to overwrite the corresponding parameters.
   */
  overwriteParams?: SubmitSnapshotJobRequestTemplateConfigOverwriteParams;
  /**
   * @remarks
   * The template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ****96e8864746a0b6f3****
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
      overwriteParams: SubmitSnapshotJobRequestTemplateConfigOverwriteParams,
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

