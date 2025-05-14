// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

