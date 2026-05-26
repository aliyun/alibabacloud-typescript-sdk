// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FigureClusterConfig extends $dara.Model {
  autoClustering?: boolean;
  autoGenerate?: boolean;
  enabledFeatures?: string[];
  minEntityCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoClustering: 'AutoClustering',
      autoGenerate: 'AutoGenerate',
      enabledFeatures: 'EnabledFeatures',
      minEntityCount: 'MinEntityCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoClustering: 'boolean',
      autoGenerate: 'boolean',
      enabledFeatures: { 'type': 'array', 'itemType': 'string' },
      minEntityCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.enabledFeatures)) {
      $dara.Model.validateArray(this.enabledFeatures);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

