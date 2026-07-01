// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SessionCluster } from "./SessionCluster";


export class UpdateSessionClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The data structure of the session cluster to be updated.
   */
  body?: SessionCluster;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: SessionCluster,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

