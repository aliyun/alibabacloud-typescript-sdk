// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelGalleryModel } from "./ModelGalleryModel";


export class ListModelGalleryModelsResponseBody extends $dara.Model {
  models?: ModelGalleryModel;
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      models: 'Models',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      models: ModelGalleryModel,
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(this.models && typeof (this.models as any).validate === 'function') {
      (this.models as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

