// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FeatureViewConfigValuePartitionsValue } from "./FeatureViewConfigValuePartitionsValue";


export class FeatureViewConfigValue extends $dara.Model {
  partitions?: { [key: string]: FeatureViewConfigValuePartitionsValue };
  eventTime?: string;
  equal?: boolean;
  useMock?: boolean;
  static names(): { [key: string]: string } {
    return {
      partitions: 'Partitions',
      eventTime: 'EventTime',
      equal: 'Equal',
      useMock: 'UseMock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partitions: { 'type': 'map', 'keyType': 'string', 'valueType': FeatureViewConfigValuePartitionsValue },
      eventTime: 'string',
      equal: 'boolean',
      useMock: 'boolean',
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

