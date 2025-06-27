// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PreviewGtmRecoveryPlanResponseBodyPreviewsPreview } from "./PreviewGtmRecoveryPlanResponseBodyPreviewsPreview";


export class PreviewGtmRecoveryPlanResponseBodyPreviews extends $dara.Model {
  preview?: PreviewGtmRecoveryPlanResponseBodyPreviewsPreview[];
  static names(): { [key: string]: string } {
    return {
      preview: 'Preview',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preview: { 'type': 'array', 'itemType': PreviewGtmRecoveryPlanResponseBodyPreviewsPreview },
    };
  }

  validate() {
    if(Array.isArray(this.preview)) {
      $dara.Model.validateArray(this.preview);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

