// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigTileOut extends $dara.Model {
  /**
   * @remarks
   * The interval for taking snapshots.
   * 
   * *   If this Interval parameter is specified in the request, snapshots are taken at intervals. The value must be greater than 0.
   * *   Unit: seconds.
   * *   Default value: **10**.
   * 
   * @example
   * 8
   */
  cellHeight?: string;
  /**
   * @remarks
   * The number of rows that the tiled image can contain. Default value: **10**.
   * 
   * @example
   * 3
   */
  cellSelStep?: string;
  /**
   * @remarks
   * The type of the snapshot. Valid values:
   * 
   * *   **normal**: normal frames.
   * *   **intra**: I-frames.
   * *   Default value: **intra**.
   * 
   * @example
   * 8
   */
  cellWidth?: string;
  /**
   * @remarks
   * Indicates whether the single images are retained. Default value: **true**.
   * 
   * @example
   * black
   */
  color?: string;
  /**
   * @remarks
   * The height of the output snapshot.
   * 
   * @example
   * 10
   */
  columns?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) output file of the snapshot job.
   * 
   * @example
   * false
   */
  isKeepCellPic?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the specified RAM role. Format: acs:ram::$accountID:role/$roleName.
   * 
   * @example
   * 10
   */
  lines?: string;
  /**
   * @remarks
   * The width of the output snapshot.
   * 
   * @example
   * 0
   */
  margin?: string;
  /**
   * @remarks
   * The number of columns that the tiled image can contain. Default value: **10**.
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

