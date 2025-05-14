// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSnapshotJobRequestTemplateConfigOverwriteParamsSpriteSnapshotConfig extends $dara.Model {
  /**
   * @remarks
   * The height of a single snapshot before tiling. The default value is the height of the output snapshot.
   * 
   * @example
   * 480
   */
  cellHeight?: number;
  /**
   * @remarks
   * The width of a single snapshot before tiling. The default value is the width of the output snapshot.
   * 
   * @example
   * 720
   */
  cellWidth?: number;
  /**
   * @remarks
   * The background color.
   * 
   * @example
   * #000000
   */
  color?: string;
  /**
   * @remarks
   * The number of columns that the image sprite contains.
   * 
   * @example
   * 20
   */
  columns?: number;
  /**
   * @remarks
   * The number of rows that the image sprite contains.
   * 
   * @example
   * 20
   */
  lines?: number;
  /**
   * @remarks
   * The width of the frame. Default value: 0. Unit: pixels.
   * 
   * @example
   * 20
   */
  margin?: number;
  /**
   * @remarks
   * The spacing between two adjacent snapshots. Default value: 0. Unit: pixels.
   * 
   * @example
   * 20
   */
  padding?: number;
  static names(): { [key: string]: string } {
    return {
      cellHeight: 'CellHeight',
      cellWidth: 'CellWidth',
      color: 'Color',
      columns: 'Columns',
      lines: 'Lines',
      margin: 'Margin',
      padding: 'Padding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cellHeight: 'number',
      cellWidth: 'number',
      color: 'string',
      columns: 'number',
      lines: 'number',
      margin: 'number',
      padding: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

