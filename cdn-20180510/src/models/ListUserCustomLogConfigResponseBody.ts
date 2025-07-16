// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserCustomLogConfigResponseBodyConfigIds extends $dara.Model {
  configId?: string[];
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.configId)) {
      $dara.Model.validateArray(this.configId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserCustomLogConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of log configuration IDs.
   */
  configIds?: ListUserCustomLogConfigResponseBodyConfigIds;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 95D5B69F-8AEC-419B-8F3A-612B35032B0D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configIds: 'ConfigIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configIds: ListUserCustomLogConfigResponseBodyConfigIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.configIds && typeof (this.configIds as any).validate === 'function') {
      (this.configIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

