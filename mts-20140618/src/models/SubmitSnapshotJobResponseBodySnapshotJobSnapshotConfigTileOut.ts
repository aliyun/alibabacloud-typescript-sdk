// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSnapshotJobResponseBodySnapshotJobSnapshotConfigTileOut extends $dara.Model {
  /**
   * @remarks
   * The height of a single image. The default value is the height of the output snapshot.
   * 
   * @example
   * 100
   */
  cellHeight?: string;
  /**
   * @remarks
   * The step for selecting a single image.
   * 
   * @example
   * 3
   */
  cellSelStep?: string;
  /**
   * @remarks
   * The width of a single image. The default value is the width of the output snapshot.
   * 
   * @example
   * 100
   */
  cellWidth?: string;
  /**
   * @remarks
   * The background color.
   * 
   * *   Default value: **black**.
   * *   You can set the Color parameter to a **color keyword** or **random** in the request.
   * 
   * > If you want to set the background color to black, you can specify the color keyword in one of the following three formats: Black, black, and #000000.
   * 
   * @example
   * black
   */
  color?: string;
  /**
   * @remarks
   * The number of columns that the tiled image contains. Default value: **10**.
   * 
   * @example
   * 10
   */
  columns?: string;
  /**
   * @remarks
   * Indicates whether the single images are retained. Valid values:
   * 
   * *   **true**: The single images are retained.
   * *   **false**: The single images are not retained.
   * *   Default value: **true**.
   * 
   * @example
   * false
   */
  isKeepCellPic?: string;
  /**
   * @remarks
   * The number of rows that the tiled image contains. Default value: **10**.
   * 
   * @example
   * 10
   */
  lines?: string;
  /**
   * @remarks
   * The margin width of the tiled image.
   * 
   * *   Default value: **0**.
   * *   Unit: pixel.
   * 
   * @example
   * 5
   */
  margin?: string;
  /**
   * @remarks
   * The distance between two consecutive single images in the tiled image.
   * 
   * *   Default value: **0**.
   * *   Unit: pixel.
   * 
   * @example
   * 0
   */
  padding?: string;
  static names(): { [key: string]: string } {
    return {
      cellHeight: 'CellHeight',
      cellSelStep: 'CellSelStep',
      cellWidth: 'CellWidth',
      color: 'Color',
      columns: 'Columns',
      isKeepCellPic: 'IsKeepCellPic',
      lines: 'Lines',
      margin: 'Margin',
      padding: 'Padding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cellHeight: 'string',
      cellSelStep: 'string',
      cellWidth: 'string',
      color: 'string',
      columns: 'string',
      isKeepCellPic: 'string',
      lines: 'string',
      margin: 'string',
      padding: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

