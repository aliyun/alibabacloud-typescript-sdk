// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachSharedStoragesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The information about mounted shared storage resources.
   * 
   * This parameter is required.
   */
  sharedStoragesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      sharedStoragesShrink: 'SharedStorages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      sharedStoragesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

