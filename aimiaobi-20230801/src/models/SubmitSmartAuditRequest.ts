// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSmartAuditRequest extends $dara.Model {
  subCodes?: string[];
  text?: string;
  /**
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      subCodes: 'SubCodes',
      text: 'Text',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subCodes: { 'type': 'array', 'itemType': 'string' },
      text: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.subCodes)) {
      $dara.Model.validateArray(this.subCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

