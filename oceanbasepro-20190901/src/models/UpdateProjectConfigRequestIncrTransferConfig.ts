// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectConfigRequestIncrTransferConfig extends $dara.Model {
  /**
   * @example
   * 64
   */
  incrSyncThreadCount?: number;
  recordTypeWhiteList?: string[];
  supportDDLTypes?: string[];
  /**
   * @example
   * null
   */
  throttleIOPS?: number;
  /**
   * @example
   * null
   */
  throttleRps?: number;
  static names(): { [key: string]: string } {
    return {
      incrSyncThreadCount: 'IncrSyncThreadCount',
      recordTypeWhiteList: 'RecordTypeWhiteList',
      supportDDLTypes: 'SupportDDLTypes',
      throttleIOPS: 'ThrottleIOPS',
      throttleRps: 'ThrottleRps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incrSyncThreadCount: 'number',
      recordTypeWhiteList: { 'type': 'array', 'itemType': 'string' },
      supportDDLTypes: { 'type': 'array', 'itemType': 'string' },
      throttleIOPS: 'number',
      throttleRps: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.recordTypeWhiteList)) {
      $dara.Model.validateArray(this.recordTypeWhiteList);
    }
    if(Array.isArray(this.supportDDLTypes)) {
      $dara.Model.validateArray(this.supportDDLTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

