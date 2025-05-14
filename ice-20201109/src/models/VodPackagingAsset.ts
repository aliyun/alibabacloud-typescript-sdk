// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VodPackagingAssetInput } from "./VodPackagingAssetInput";


export class VodPackagingAsset extends $dara.Model {
  assetName?: string;
  contentId?: string;
  createTime?: string;
  groupName?: string;
  input?: VodPackagingAssetInput;
  static names(): { [key: string]: string } {
    return {
      assetName: 'AssetName',
      contentId: 'ContentId',
      createTime: 'CreateTime',
      groupName: 'GroupName',
      input: 'Input',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetName: 'string',
      contentId: 'string',
      createTime: 'string',
      groupName: 'string',
      input: VodPackagingAssetInput,
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

