// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeploymentPackageResponseBodyDataDeployedItems extends $dara.Model {
  /**
   * @example
   * 5076****
   */
  fileId?: number;
  /**
   * @example
   * 7
   */
  fileVersion?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      fileVersion: 'FileVersion',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      fileVersion: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

