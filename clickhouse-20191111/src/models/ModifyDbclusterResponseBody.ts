// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyDBClusterResponseBodyDBCluster } from "./ModifyDbclusterResponseBodyDbcluster";


export class ModifyDBClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The clusters.
   */
  DBCluster?: ModifyDBClusterResponseBodyDBCluster;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BA30A000-3A4D-5B97-9420-E5D0D49F7016
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBCluster: 'DBCluster',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBCluster: ModifyDBClusterResponseBodyDBCluster,
      requestId: 'string',
    };
  }

  validate() {
    if(this.DBCluster && typeof (this.DBCluster as any).validate === 'function') {
      (this.DBCluster as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

