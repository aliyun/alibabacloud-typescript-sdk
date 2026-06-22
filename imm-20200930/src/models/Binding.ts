// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Binding extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the binding between the dataset and the OSS bucket was created. The format is RFC3339Nano.
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
   * The scan type. Valid values:
   * 
   * - FullScanning: A full scan is in progress.
   * 
   * - IncrementalScanning: An incremental scan is in progress.
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
   * 
   * @example
   * pause usage
   */
  reason?: string;
  /**
   * @remarks
   * The state of the binding between the dataset and the OSS bucket. Valid values:
   * 
   * - Ready: The binding is being prepared after it is created.
   * 
   * - Stopped: The binding is paused.
   * 
   * - Running: The binding is running.
   * 
   * - Retrying: The binding is being retried after it is created.
   * 
   * - Failed: The binding failed to be created.
   * 
   * - Deleted: The binding is deleted.
   * 
   * @example
   * Running
   */
  state?: string;
  /**
   * @remarks
   * The URI of the Object Storage Service (OSS) bucket attached to the dataset.
   * 
   * The format of an OSS bucket URI is `oss://${bucketname}`. The `bucketname` is the name of an OSS bucket that is in the same region as the current project.
   * 
   * @example
   * oss://examplebucket
   */
  URI?: string;
  /**
   * @remarks
   * The timestamp when the binding between the dataset and the OSS bucket was last modified. The format is RFC3339Nano.
   * 
   * > After a binding is created, if the binding has not been paused or restarted, this timestamp is the same as the creation timestamp.
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

