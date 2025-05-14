// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteImagesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The IDs of the images that failed to be deleted.
   */
  failDeleteImageIds?: string[];
  /**
   * @remarks
   * The IDs of the images that are successfully deleted.
   */
  successDeleteImageIds?: string[];
  static names(): { [key: string]: string } {
    return {
      failDeleteImageIds: 'FailDeleteImageIds',
      successDeleteImageIds: 'SuccessDeleteImageIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failDeleteImageIds: { 'type': 'array', 'itemType': 'string' },
      successDeleteImageIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.failDeleteImageIds)) {
      $dara.Model.validateArray(this.failDeleteImageIds);
    }
    if(Array.isArray(this.successDeleteImageIds)) {
      $dara.Model.validateArray(this.successDeleteImageIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

