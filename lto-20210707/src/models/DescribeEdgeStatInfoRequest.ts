// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEdgeStatInfoRequest extends $dara.Model {
  edgeDn?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  edgePk?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      edgeDn: 'EdgeDn',
      edgePk: 'EdgePk',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edgeDn: 'string',
      edgePk: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

