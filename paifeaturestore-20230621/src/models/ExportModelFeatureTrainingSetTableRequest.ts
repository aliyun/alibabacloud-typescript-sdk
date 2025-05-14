// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FeatureViewConfigValue } from "./FeatureViewConfigValue";
import { ExportModelFeatureTrainingSetTableRequestLabelInputConfig } from "./ExportModelFeatureTrainingSetTableRequestLabelInputConfig";
import { ExportModelFeatureTrainingSetTableRequestTrainingSetConfig } from "./ExportModelFeatureTrainingSetTableRequestTrainingSetConfig";


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

