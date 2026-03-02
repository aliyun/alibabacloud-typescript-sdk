// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetadataInfo } from "./MetadataInfo";


export class MetadataInfoListResult extends $dara.Model {
  metadataInfos?: MetadataInfo[];
  requestId?: string;
  /**
   * @example
   * 24
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      metadataInfos: 'metadataInfos',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadataInfos: { 'type': 'array', 'itemType': MetadataInfo },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.metadataInfos)) {
      $dara.Model.validateArray(this.metadataInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

