// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MLDataSetParam extends $dara.Model {
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * sls-console
   */
  createBy?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1695090077
   */
  createTime?: number;
  /**
   * @remarks
   * The type of the data.
   * 
   * @example
   * Metric
   */
  dataType?: string;
  /**
   * @remarks
   * The unique identifier of the dataset.
   * 
   * @example
   * d9bd488f6dd42d294495fb780858e83d
   */
  datasetId?: string;
  /**
   * @remarks
   * The description of the dataset.
   * 
   * @example
   * 数据集A
   */
  description?: string;
  /**
   * @remarks
   * The ID of the tag system that corresponds to the dataset.
   * 
   * @example
   * a191ae4ca615b0ccb93c211fc8a998af
   */
  labelId?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 1695090077
   */
  lastModifyTime?: number;
  /**
   * @remarks
   * The name of the dataset.
   * 
   * @example
   * sls_builtin_dataset_metric.shapeclassification.anomalydetection
   */
  name?: string;
  /**
   * @remarks
   * The configuration type of the tag table.
   * 
   * @example
   * Metric.ShapeClassification.AnomalyDetection
   */
  settingType?: string;
  static names(): { [key: string]: string } {
    return {
      createBy: 'createBy',
      createTime: 'createTime',
      dataType: 'dataType',
      datasetId: 'datasetId',
      description: 'description',
      labelId: 'labelId',
      lastModifyTime: 'lastModifyTime',
      name: 'name',
      settingType: 'settingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createBy: 'string',
      createTime: 'number',
      dataType: 'string',
      datasetId: 'string',
      description: 'string',
      labelId: 'string',
      lastModifyTime: 'number',
      name: 'string',
      settingType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

