// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Binding extends $dara.Model {
  /**
   * @remarks
   * The RFC3339Nano timestamp when the OSS bucket was bound to the dataset.
   * 
   * @example
   * 2021-06-29T14:50:13.011643661+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The name of the dataset.
   * 
   * @example
   * dataset001
   */
  datasetName?: string;
  /**
   * @remarks
   * The type of the scan. Valid values:
   * 
   * *   FullScanning
   * *   IncrementalScanning
   * 
   * @example
   * FullScanning
   */
  phase?: string;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * Reason
   */
  reason?: string;
  /**
   * @remarks
   * The status of the binding between the dataset and the OSS bucket. Valid values:
   * 
   * *   Ready: IMM is ready to create the binding.
   * *   Stopped: The binding creation is suspended.
   * *   Running: The binding is running.
   * *   Retrying: IMM is retrying the binding.
   * *   Failed: The binding failed.
   * *   Deleted: The binding is deleted.
   * 
   * @example
   * Running
   */
  state?: string;
  /**
   * @remarks
   * The URI of the OSS bucket to which the dataset is bound.
   * 
   * The URI is in the `oss://${bucketname}` format, where `bucketname` is the name of the OSS bucket.
   * 
   * @example
   * oss://examplebucket
   */
  URI?: string;
  /**
   * @remarks
   * The RFC3339Nano timestamp when the binding was modified.
   * 
   * >  If you never suspend or retry the binding between the dataset and the OSS bucket after you complete the binding, the value of UpdateTime is the same as that of CreateTime.
   * 
   * @example
   * 2021-06-29T14:50:13.011643661+08:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      datasetName: 'DatasetName',
      phase: 'Phase',
      projectName: 'ProjectName',
      reason: 'Reason',
      state: 'State',
      URI: 'URI',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      datasetName: 'string',
      phase: 'string',
      projectName: 'string',
      reason: 'string',
      state: 'string',
      URI: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

