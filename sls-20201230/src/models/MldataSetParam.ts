// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MLDataSetParam extends $dara.Model {
  /**
   * @example
   * sls-console
   */
  createBy?: string;
  /**
   * @example
   * 1695090077
   */
  createTime?: number;
  /**
   * @example
   * Metric
   */
  dataType?: string;
  /**
   * @example
   * d9bd488f6dd42d294495fb780858e83d
   */
  datasetId?: string;
  /**
   * @example
   * 数据集A
   */
  description?: string;
  /**
   * @example
   * a191ae4ca615b0ccb93c211fc8a998af
   */
  labelId?: string;
  /**
   * @example
   * 1695090077
   */
  lastModifyTime?: number;
  /**
   * @example
   * sls_builtin_dataset_metric.shapeclassification.anomalydetection
   */
  name?: string;
  /**
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

