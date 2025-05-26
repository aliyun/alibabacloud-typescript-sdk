// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OctreeOption extends $dara.Model {
  /**
   * @example
   * false
   */
  doVoxelGridDownDownSampling?: boolean;
  /**
   * @example
   * pcl
   */
  libraryName?: string;
  /**
   * @example
   * 0.01
   */
  octreeResolution?: number;
  /**
   * @example
   * 0.01
   */
  pointResolution?: number;
  static names(): { [key: string]: string } {
    return {
      doVoxelGridDownDownSampling: 'DoVoxelGridDownDownSampling',
      libraryName: 'LibraryName',
      octreeResolution: 'OctreeResolution',
      pointResolution: 'PointResolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      doVoxelGridDownDownSampling: 'boolean',
      libraryName: 'string',
      octreeResolution: 'number',
      pointResolution: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

