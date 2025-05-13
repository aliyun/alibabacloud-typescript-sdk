// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetClusterDataInformationResponseBodyResultMetaInfo } from "./GetClusterDataInformationResponseBodyResultMetaInfo";


export class GetClusterDataInformationResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Whether it is connectable.
   * 
   * @example
   * true
   */
  connectable?: boolean;
  /**
   * @remarks
   * The metadata of the cluster.
   */
  metaInfo?: GetClusterDataInformationResponseBodyResultMetaInfo;
  static names(): { [key: string]: string } {
    return {
      connectable: 'connectable',
      metaInfo: 'metaInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectable: 'boolean',
      metaInfo: GetClusterDataInformationResponseBodyResultMetaInfo,
    };
  }

  validate() {
    if(this.metaInfo && typeof (this.metaInfo as any).validate === 'function') {
      (this.metaInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

