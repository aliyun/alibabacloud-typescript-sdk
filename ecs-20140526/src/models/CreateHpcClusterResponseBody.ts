// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHpcClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of cluster.
   * 
   * @example
   * hpc-pnlg1ds9rky4****
   */
  hpcClusterId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hpcClusterId: 'HpcClusterId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hpcClusterId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

