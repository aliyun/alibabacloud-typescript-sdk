// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CCMVersionsValue } from "./CcmversionsValue";


export class DescribeCCMVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The versions of the CCM component in all clusters on the data plane.
   */
  CCMVersions?: { [key: string]: CCMVersionsValue };
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BD65C0AD-D3C6-48D3-8D93-38D2015C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      CCMVersions: 'CCMVersions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CCMVersions: { 'type': 'map', 'keyType': 'string', 'valueType': CCMVersionsValue },
      requestId: 'string',
    };
  }

  validate() {
    if(this.CCMVersions) {
      $dara.Model.validateMap(this.CCMVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

