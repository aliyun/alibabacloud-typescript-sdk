// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FigureClusterConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow IMM to perform classification tasks on files in the dataset. Default value: False.
   */
  autoClustering?: boolean;
  /**
   * @remarks
   * Indicates whether IMM is allowed to perform automatic creation of new groups. Default value: False.
   */
  autoGenerate?: boolean;
  /**
   * @remarks
   * The features supported by figure clustering.
   */
  enabledFeatures?: string[];
  /**
   * @remarks
   * The minimum threshold for the number of entities when automatic generation of new groups is allowed. Default value: 3.
   * 
   * @example
   * 3
   */
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

