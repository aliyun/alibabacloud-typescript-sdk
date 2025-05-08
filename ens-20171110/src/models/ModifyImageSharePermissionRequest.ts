// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyImageSharePermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account with which you want to share the image. You can specify multiple Alibaba Cloud IDs. Separate multiple IDs with commas (,).
   * 
   * @example
   * 1122334455**
   */
  addAccounts?: string;
  /**
   * @remarks
   * The ID of the image. You can specify only one image ID. Custom images and public images are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * m-5s7qotzavwbrnzaqh4unm****
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account from which you want to unshare the image. You can specify only one Alibaba Cloud account ID.
   * 
   * @example
   * 113355**
   */
  removeAccounts?: string;
  static names(): { [key: string]: string } {
    return {
      addAccounts: 'AddAccounts',
      imageId: 'ImageId',
      removeAccounts: 'RemoveAccounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addAccounts: 'string',
      imageId: 'string',
      removeAccounts: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

