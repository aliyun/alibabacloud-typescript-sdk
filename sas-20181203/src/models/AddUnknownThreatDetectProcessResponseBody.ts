// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUnknownThreatDetectProcessResponseBodyIdList extends $dara.Model {
  /**
   * @example
   * 92666883
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUnknownThreatDetectProcessResponseBody extends $dara.Model {
  idList?: AddUnknownThreatDetectProcessResponseBodyIdList[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ADE57832-9666-511C-9A80-B87DE2E8****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      idList: 'IdList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idList: { 'type': 'array', 'itemType': AddUnknownThreatDetectProcessResponseBodyIdList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.idList)) {
      $dara.Model.validateArray(this.idList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

