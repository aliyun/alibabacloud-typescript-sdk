// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHighReliablePhysicalConnectionResponseBodyErrorInfoListErrorInfoList extends $dara.Model {
  errorCode?: string;
  errorMessage?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHighReliablePhysicalConnectionResponseBodyErrorInfoList extends $dara.Model {
  errorInfoList?: CreateHighReliablePhysicalConnectionResponseBodyErrorInfoListErrorInfoList[];
  static names(): { [key: string]: string } {
    return {
      errorInfoList: 'errorInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorInfoList: { 'type': 'array', 'itemType': CreateHighReliablePhysicalConnectionResponseBodyErrorInfoListErrorInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.errorInfoList)) {
      $dara.Model.validateArray(this.errorInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHighReliablePhysicalConnectionResponseBodyPhysicalConnectionListPhysicalConnectionList extends $dara.Model {
  instanceId?: string;
  regionNo?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionNo: 'RegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHighReliablePhysicalConnectionResponseBodyPhysicalConnectionList extends $dara.Model {
  physicalConnectionList?: CreateHighReliablePhysicalConnectionResponseBodyPhysicalConnectionListPhysicalConnectionList[];
  static names(): { [key: string]: string } {
    return {
      physicalConnectionList: 'physicalConnectionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      physicalConnectionList: { 'type': 'array', 'itemType': CreateHighReliablePhysicalConnectionResponseBodyPhysicalConnectionListPhysicalConnectionList },
    };
  }

  validate() {
    if(Array.isArray(this.physicalConnectionList)) {
      $dara.Model.validateArray(this.physicalConnectionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHighReliablePhysicalConnectionResponseBody extends $dara.Model {
  errorInfoList?: CreateHighReliablePhysicalConnectionResponseBodyErrorInfoList;
  physicalConnectionList?: CreateHighReliablePhysicalConnectionResponseBodyPhysicalConnectionList;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      errorInfoList: 'ErrorInfoList',
      physicalConnectionList: 'PhysicalConnectionList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorInfoList: CreateHighReliablePhysicalConnectionResponseBodyErrorInfoList,
      physicalConnectionList: CreateHighReliablePhysicalConnectionResponseBodyPhysicalConnectionList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.errorInfoList && typeof (this.errorInfoList as any).validate === 'function') {
      (this.errorInfoList as any).validate();
    }
    if(this.physicalConnectionList && typeof (this.physicalConnectionList as any).validate === 'function') {
      (this.physicalConnectionList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

