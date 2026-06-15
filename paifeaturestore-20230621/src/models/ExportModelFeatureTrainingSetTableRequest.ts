// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FeatureViewConfigValue } from "./FeatureViewConfigValue";


export class ExportModelFeatureTrainingSetTableRequestLabelInputConfig extends $dara.Model {
  /**
   * @remarks
   * The event time.
   * 
   * @example
   * 2022-07-02 00:00:00
   */
  eventTime?: string;
  /**
   * @remarks
   * The list of partitions.
   */
  partitions?: { [key: string]: {[key: string]: any} };
  static names(): { [key: string]: string } {
    return {
      eventTime: 'EventTime',
      partitions: 'Partitions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventTime: 'string',
      partitions: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
    };
  }

  validate() {
    if(this.partitions) {
      $dara.Model.validateMap(this.partitions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportModelFeatureTrainingSetTableRequestTrainingSetConfig extends $dara.Model {
  /**
   * @remarks
   * The list of partitions.
   */
  partitions?: { [key: string]: {[key: string]: any} };
  static names(): { [key: string]: string } {
    return {
      partitions: 'Partitions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partitions: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
    };
  }

  validate() {
    if(this.partitions) {
      $dara.Model.validateMap(this.partitions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportModelFeatureTrainingSetTableRequest extends $dara.Model {
  /**
   * @remarks
   * A map of feature view configurations.
   */
  featureViewConfig?: { [key: string]: FeatureViewConfigValue };
  /**
   * @remarks
   * The input configuration for the label table.
   */
  labelInputConfig?: ExportModelFeatureTrainingSetTableRequestLabelInputConfig;
  /**
   * @remarks
   * The polling interval for retrieving real-time features.
   * 
   * @example
   * 1
   */
  realTimeIterateInterval?: number;
  /**
   * @remarks
   * The number of days for partition statistics of the real-time feature view.
   * 
   * @example
   * 5
   */
  realTimePartitionCountValue?: number;
  /**
   * @remarks
   * The configuration for the training set.
   */
  trainingSetConfig?: ExportModelFeatureTrainingSetTableRequestTrainingSetConfig;
  static names(): { [key: string]: string } {
    return {
      featureViewConfig: 'FeatureViewConfig',
      labelInputConfig: 'LabelInputConfig',
      realTimeIterateInterval: 'RealTimeIterateInterval',
      realTimePartitionCountValue: 'RealTimePartitionCountValue',
      trainingSetConfig: 'TrainingSetConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureViewConfig: { 'type': 'map', 'keyType': 'string', 'valueType': FeatureViewConfigValue },
      labelInputConfig: ExportModelFeatureTrainingSetTableRequestLabelInputConfig,
      realTimeIterateInterval: 'number',
      realTimePartitionCountValue: 'number',
      trainingSetConfig: ExportModelFeatureTrainingSetTableRequestTrainingSetConfig,
    };
  }

  validate() {
    if(this.featureViewConfig) {
      $dara.Model.validateMap(this.featureViewConfig);
    }
    if(this.labelInputConfig && typeof (this.labelInputConfig as any).validate === 'function') {
      (this.labelInputConfig as any).validate();
    }
    if(this.trainingSetConfig && typeof (this.trainingSetConfig as any).validate === 'function') {
      (this.trainingSetConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

