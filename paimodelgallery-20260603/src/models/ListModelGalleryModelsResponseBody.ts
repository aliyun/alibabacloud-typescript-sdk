// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelGalleryModel } from "./ModelGalleryModel";


export class ListModelGalleryModelsResponseBody extends $dara.Model {
  /**
   * @example
   * []
   */
  models?: ModelGalleryModel;
  /**
   * @example
   * B6B54325-C98C-5937-87A3-2F96C07652EC
   */
  requestId?: string;
  /**
   * @example
   * 15
   */
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

