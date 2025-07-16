// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FeatureViewConfigValue } from "./FeatureViewConfigValue";


export class ExportModelFeatureTrainingSetTableRequestLabelInputConfig extends $dara.Model {
  /**
   * @example
   * 2022-07-02 00:00:00
   */
  eventTime?: string;
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
  featureViewConfig?: { [key: string]: FeatureViewConfigValue };
  labelInputConfig?: ExportModelFeatureTrainingSetTableRequestLabelInputConfig;
  realTimeIterateInterval?: number;
  realTimePartitionCountValue?: number;
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

