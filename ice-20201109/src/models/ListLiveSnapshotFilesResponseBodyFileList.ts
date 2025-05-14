// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveSnapshotFilesResponseBodyFileList extends $dara.Model {
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2022-02-02T22:22:22Z
   */
  createTime?: string;
  /**
   * @remarks
   * The creation timestamp that is used as an input parameter for a delete API operation.
   * 
   * @example
   * 1619503516000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * Specifies whether to overlay snapshots.
   * 
   * @example
   * true
   */
  isOverlay?: boolean;
  /**
   * @remarks
   * The OSS bucket.
   * 
   * @example
   * testbucket
   */
  ossBucket?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) domain name.
   * 
   * @example
   * oss-cn-shanghai.aliyuncs.com
   */
  ossEndpoint?: string;
  /**
   * @remarks
   * The location in which the OSS object is stored.
   */
  ossObject?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      isOverlay: 'IsOverlay',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      ossObject: 'OssObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      isOverlay: 'boolean',
      ossBucket: 'string',
      ossEndpoint: 'string',
      ossObject: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

