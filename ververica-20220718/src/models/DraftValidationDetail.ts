// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DraftMetaInfoErrorDetail } from "./DraftMetaInfoErrorDetail";
import { ValidationErrorDetails } from "./ValidationErrorDetails";


export class DraftValidationDetail extends $dara.Model {
  draftMetaInfoErrorDetails?: DraftMetaInfoErrorDetail[];
  sqlErrorDetail?: ValidationErrorDetails;
  sqlValidationResult?: string;
  static names(): { [key: string]: string } {
    return {
      draftMetaInfoErrorDetails: 'draftMetaInfoErrorDetails',
      sqlErrorDetail: 'sqlErrorDetail',
      sqlValidationResult: 'sqlValidationResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      draftMetaInfoErrorDetails: { 'type': 'array', 'itemType': DraftMetaInfoErrorDetail },
      sqlErrorDetail: ValidationErrorDetails,
      sqlValidationResult: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.draftMetaInfoErrorDetails)) {
      $dara.Model.validateArray(this.draftMetaInfoErrorDetails);
    }
    if(this.sqlErrorDetail && typeof (this.sqlErrorDetail as any).validate === 'function') {
      (this.sqlErrorDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

