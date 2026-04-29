// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUnknownThreatDetectProcessRequestProcessList extends $dara.Model {
  /**
   * @example
   * e59b63ae983377f131ab20ec0d******
   */
  md5?: string;
  /**
   * @example
   * /bin/rm
   */
  processPath?: string;
  /**
   * @example
   * 1330
   */
  remark?: string;
  /**
   * @example
   * f204693a7d2ce99d6c4434e550d985ee1c7be7cb5dd9a76094369af0d2******
   */
  sha256?: string;
  static names(): { [key: string]: string } {
    return {
      md5: 'Md5',
      processPath: 'ProcessPath',
      remark: 'Remark',
      sha256: 'Sha256',
    };
  }

  static types(): { [key: string]: any } {
    return {
      md5: 'string',
      processPath: 'string',
      remark: 'string',
      sha256: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUnknownThreatDetectProcessRequest extends $dara.Model {
  eventIdList?: number[];
  processList?: AddUnknownThreatDetectProcessRequestProcessList[];
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      eventIdList: 'EventIdList',
      processList: 'ProcessList',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventIdList: { 'type': 'array', 'itemType': 'number' },
      processList: { 'type': 'array', 'itemType': AddUnknownThreatDetectProcessRequestProcessList },
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.eventIdList)) {
      $dara.Model.validateArray(this.eventIdList);
    }
    if(Array.isArray(this.processList)) {
      $dara.Model.validateArray(this.processList);
    }
    if(Array.isArray(this.uuidList)) {
      $dara.Model.validateArray(this.uuidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

