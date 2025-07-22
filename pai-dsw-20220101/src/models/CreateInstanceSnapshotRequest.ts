// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceSnapshotRequestLabels extends $dara.Model {
  /**
   * @example
   * stsTokenOwner
   */
  key?: string;
  /**
   * @example
   * 123xxxxxxxx
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceSnapshotRequest extends $dara.Model {
  excludePaths?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * registry.cn-shanghai.aliyuncs.com/pai_product/tensorflow:py36_cpu_tf1.12_ubuntu
   */
  imageUrl?: string;
  /**
   * @example
   * {\\"foo\\": \\"bar\\"}
   */
  labels?: CreateInstanceSnapshotRequestLabels[];
  overwrite?: boolean;
  /**
   * @example
   * training_data_env
   */
  snapshotDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * training_data_env
   */
  snapshotName?: string;
  static names(): { [key: string]: string } {
    return {
      excludePaths: 'ExcludePaths',
      imageUrl: 'ImageUrl',
      labels: 'Labels',
      overwrite: 'Overwrite',
      snapshotDescription: 'SnapshotDescription',
      snapshotName: 'SnapshotName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludePaths: { 'type': 'array', 'itemType': 'string' },
      imageUrl: 'string',
      labels: { 'type': 'array', 'itemType': CreateInstanceSnapshotRequestLabels },
      overwrite: 'boolean',
      snapshotDescription: 'string',
      snapshotName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.excludePaths)) {
      $dara.Model.validateArray(this.excludePaths);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

