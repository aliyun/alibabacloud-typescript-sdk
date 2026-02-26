// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OctreeOption extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to downsample the point cloud file. Valid values:
   * 
   * *   true: The point cloud file is downsampled, and the coordinates of the points in a voxel are replaced with the coordinates of the center point of the voxel. The average color of all points in the voxel is used as the color of the voxel. In this case, the PointResolution parameter does not take effect.
   * *   false: Specific coordinates and colors in a voxel are encoded by calculating the offsets from each point to the lower-left corner of the voxel. The offsets are divided by the PointResolution value to obtain the integer coordinates. The residual of the color for each point relative to the average color of all points in the voxel is encoded.
   * 
   * @example
   * false
   */
  doVoxelGridDownDownSampling?: boolean;
  /**
   * @remarks
   * The library name. Set the value to pcl. Default value: pcl.
   * 
   * @example
   * pcl
   */
  libraryName?: string;
  /**
   * @remarks
   * The minimum block size when an octree is partitioned. The minimum block size indicates the edge length of a voxel. Default value: 0.01.
   * 
   * @example
   * 0.01
   */
  octreeResolution?: number;
  /**
   * @remarks
   * The point cloud resolution. This parameter determines the precision of the point coordinates during encoding. Default value: 0.01.
   * 
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

