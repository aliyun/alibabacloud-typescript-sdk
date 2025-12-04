// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasetVersionShrinkRequest extends $dara.Model {
  /**
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dataworks-dataset:3pXXXb8o0ngr07njhps1
   */
  datasetId?: string;
  importInfoShrink?: string;
  /**
   * @example
   * /mnt/data
   */
  mountPath?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss://test-oss-bucket/test_dir/
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      datasetId: 'DatasetId',
      importInfoShrink: 'ImportInfo',
      mountPath: 'MountPath',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      datasetId: 'string',
      importInfoShrink: 'string',
      mountPath: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

