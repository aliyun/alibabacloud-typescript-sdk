// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FigureClusterConfig extends $dara.Model {
  /**
   * @remarks
   * Whether to automatically group similar figures into clusters.
   */
  autoClustering?: boolean;
  /**
   * @remarks
   * Whether to automatically generate metadata for each cluster, such as a representative cover image.
   */
  autoGenerate?: boolean;
  /**
   * @remarks
   * An array of strings specifying the clustering strategies to use.
   */
  enabledFeatures?: string[];
  /**
   * @remarks
   * The minimum number of figures required to form a cluster.
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

